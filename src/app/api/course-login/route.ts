import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { createSessionToken } from '@/lib/courseSession'

export const runtime = 'nodejs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const MAX_ATTEMPTS = 5
const WINDOW_MINUTES = 15

export async function POST(req: NextRequest) {
  const { email, accessCode } = await req.json()

  if (!email || !accessCode) {
    return NextResponse.json(
      { error: 'Email and access code are required.' },
      { status: 400 }
    )
  }

  const normalizedEmail = String(email).toLowerCase().trim()
  const normalizedCode = String(accessCode).toUpperCase().trim()

  // ── Rate limit check: how many failed attempts in the last WINDOW_MINUTES? ──
  const windowStart = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString()
  const { count: recentAttempts } = await supabase
    .from('login_attempts')
    .select('id', { count: 'exact', head: true })
    .eq('email', normalizedEmail)
    .gte('attempted_at', windowStart)

  if ((recentAttempts ?? 0) >= MAX_ATTEMPTS) {
    return NextResponse.json(
      { error: `Too many attempts. Please try again in ${WINDOW_MINUTES} minutes.` },
      { status: 429 }
    )
  }

  const { data, error } = await supabase
    .from('course_purchases')
    .select('id')
    .eq('email', normalizedEmail)
    .eq('access_code', normalizedCode)
    .eq('active', true)
    .limit(1)
    .maybeSingle()

  if (error || !data) {
    // Log the failed attempt so it counts toward the rate limit above
    await supabase.from('login_attempts').insert({ email: normalizedEmail })
    return NextResponse.json(
      { error: 'Incorrect email or access code.' },
      { status: 401 }
    )
  }

  const token = createSessionToken(normalizedEmail)
  const res = NextResponse.json({ success: true })
  res.cookies.set('bf_course_session', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: '/',
  })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ success: true })
  res.cookies.delete('bf_course_session')
  return res
}
