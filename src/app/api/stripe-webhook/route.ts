import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
const resend = new Resend(process.env.RESEND_API_KEY!)

// Avoids visually-confusing characters like 0/O, 1/I/L
const CODE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'

function generateAccessCode(length = 8): string {
  let code = ''
  for (let i = 0; i < length; i++) {
    code += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
  }
  return code
}

export async function POST(req: NextRequest) {
  const signature = req.headers.get('stripe-signature')
  const rawBody = await req.text()

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const email = session.customer_details?.email ?? session.customer_email

  if (!email) {
    console.error('Checkout session had no email attached:', session.id)
    return NextResponse.json({ received: true })
  }

  // Figure out which product was purchased
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    limit: 5,
  })
  const purchasedPriceIds = lineItems.data.map((li) => li.price?.id).filter(Boolean)

  const coursePriceId = process.env.STRIPE_PRICE_COURSE
  const bundlePriceId = process.env.STRIPE_PRICE_BUNDLE

  const grantsCourseAccess =
    purchasedPriceIds.includes(coursePriceId) || purchasedPriceIds.includes(bundlePriceId)

  if (!grantsCourseAccess) {
    // This was a Stripe payment for something else entirely — ignore it.
    return NextResponse.json({ received: true })
  }

  const product = purchasedPriceIds.includes(bundlePriceId) ? 'bundle' : 'course'
  const accessCode = generateAccessCode()
  const normalizedEmail = email.toLowerCase().trim()

  const { error: dbError } = await supabase.from('course_purchases').insert({
    email: normalizedEmail,
    access_code: accessCode,
    stripe_session_id: session.id,
    product,
    active: true,
  })

  if (dbError) {
    console.error('Failed to write course purchase to Supabase:', dbError)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }

  try {
    await resend.emails.send({
      from: process.env.COURSE_FROM_EMAIL!, // e.g. "BrokerFilings <course@brokerfilings.com>"
      to: normalizedEmail,
      subject: 'Your Moving Broker Launch Program Access Code',
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
          <h2 style="color:#0B1F3A;">You're in!</h2>
          <p>Here is your access code for the Moving Broker Launch Program:</p>
          <p style="font-size:28px; font-weight:bold; letter-spacing:4px; color:#228B4A; background:#F0F7F2; padding:16px; text-align:center; border-radius:8px;">
            ${accessCode}
          </p>
          <p>
            Go to <a href="https://brokerfilings.com/course">brokerfilings.com/course</a>
            and enter your email plus this code to log in.
          </p>
          <p style="color:#6B7A8D; font-size:13px;">
            Keep this email — you'll use the same code to log back in on any device.
          </p>
        </div>
      `,
    })
  } catch (emailError) {
    // The purchase + access record already succeeded — don't fail the whole
    // webhook just because the email had an issue. Log it so you can resend manually.
    console.error('Failed to send access code email:', emailError)
  }

  return NextResponse.json({ received: true })
}
