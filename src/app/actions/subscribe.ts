'use server'

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const STRIPE_LINK = 'https://buy.stripe.com/28E3cv66Y26qaCK40zgA800'

function buildWelcomeEmail(email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Free Moving Broker Launch Checklist</title>
</head>
<body style="margin:0;padding:0;background:#F7F8F5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#0B1F3A;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F8F5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#0B1F3A;border-bottom:3px solid #C9A84C;padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display:inline-block;width:40px;height:40px;border:2px solid #C9A84C;border-radius:50%;text-align:center;line-height:36px;font-size:15px;font-weight:900;color:#C9A84C;letter-spacing:-1px;">BF</span>
                  </td>
                  <td style="padding-left:14px;">
                    <div style="font-size:18px;font-weight:700;color:#FFFFFF;letter-spacing:0.02em;">BrokerFilings.com</div>
                    <div style="font-size:10px;color:#C9A84C;letter-spacing:0.15em;text-transform:uppercase;">FMCSA Authority Filing Service</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#FFFFFF;padding:40px 40px 32px;">

              <h1 style="font-size:26px;font-weight:700;color:#0B1F3A;line-height:1.3;margin:0 0 16px;">
                Here Is Everything You Need to Start Your HHG Moving Brokerage
              </h1>

              <p style="font-size:15px;color:#6B7A8D;line-height:1.7;margin:0 0 32px;font-weight:300;">
                Starting a moving brokerage requires navigating federal filings that trip up most
                first-time applicants. Here is the exact checklist we use with every client.
              </p>

              <!-- Checklist -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                ${[
                  ['Form your LLC and get your EIN from the IRS', 'Your legal entity and tax ID are required before the FMCSA will accept your application.'],
                  ['Open a dedicated business bank account', 'Separating business and personal finances protects your LLC status and simplifies bookkeeping.'],
                  ['File Form OP-1 with the FMCSA — $300 filing fee', 'This is the federal application for your Household Goods Broker Authority. Errors result in rejection and a forfeited fee.'],
                  ['File your BOC-3 process agent designation', 'Federal law requires a registered process agent in every state. Must be on file before your authority can activate.'],
                  ['Secure your $75,000 surety bond', 'The FMCSA requires an active BMC-84 bond at all times. Annual premiums typically range from $900 to $2,000.'],
                  ['Wait for FMCSA approval — typically 4 to 6 weeks', 'After filing, the FMCSA publishes a protest period, reviews your application, and activates your MC number.'],
                ]
                  .map(
                    ([title, desc], i) => `
                <tr>
                  <td style="padding:0 0 16px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F8F5;border-left:3px solid #228B4A;">
                      <tr>
                        <td style="padding:16px 20px;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="vertical-align:top;padding-right:14px;">
                                <span style="display:inline-block;width:28px;height:28px;background:#0B1F3A;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#C9A84C;">${i + 1}</span>
                              </td>
                              <td>
                                <div style="font-size:14px;font-weight:600;color:#0B1F3A;margin-bottom:4px;">${title}</div>
                                <div style="font-size:13px;color:#6B7A8D;line-height:1.6;font-weight:300;">${desc}</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`,
                  )
                  .join('')}
              </table>

              <!-- Note -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#F5EDD3;border-left:4px solid #C9A84C;padding:16px 20px;">
                    <p style="margin:0;font-size:14px;color:#0B1F3A;line-height:1.7;font-style:italic;">
                      The filing process is straightforward but easy to get wrong. Missing one step
                      can delay your approval by weeks — and a rejected application means paying
                      the $300 FMCSA fee again.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:8px 0 32px;">
                    <a href="${STRIPE_LINK}"
                       style="display:inline-block;background:#228B4A;color:#FFFFFF;font-size:15px;font-weight:600;padding:16px 36px;text-decoration:none;letter-spacing:0.06em;text-transform:uppercase;">
                      Get Your Authority Handled For You — $1,799
                    </a>
                    <div style="margin-top:10px;font-size:12px;color:#6B7A8D;">
                      All government fees included &middot; Support until approved
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#070F1C;padding:28px 40px;text-align:center;">
              <div style="font-size:15px;font-weight:700;color:#C9A84C;margin-bottom:6px;">BrokerFilings.com</div>
              <div style="font-size:12px;color:rgba(255,255,255,0.35);line-height:1.6;">
                FMCSA Broker Authority Filing Service &mdash; info@brokerfilings.com
              </div>
              <div style="margin-top:14px;font-size:11px;color:rgba(255,255,255,0.2);line-height:1.6;max-width:480px;margin-left:auto;margin-right:auto;">
                BrokerFilings.com is a filing and consulting service. We are not a law firm and
                do not provide legal advice.
              </div>
              <div style="margin-top:12px;font-size:11px;color:rgba(255,255,255,0.15);">
                You received this because you requested our free checklist at brokerfilings.com.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
}

export async function subscribeEmail(email: string): Promise<{ success: boolean; error?: string }> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return { success: false, error: 'Server configuration error.' }
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  const { error: dbError } = await supabase
    .from('broker_leads')
    .insert({ email, source: 'homepage_checklist' })

  if (dbError) {
    if (dbError.code === '23505') {
      // Duplicate — still try to send the email
    } else {
      return { success: false, error: 'Something went wrong. Please try again.' }
    }
  }

  // Fire welcome email — never block the success response if this fails
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'BrokerFilings.com <info@magickplat.com>',
        to: email,
        subject: 'Your Free Moving Broker Launch Checklist',
        html: buildWelcomeEmail(email),
      })
    } catch (err) {
      console.error('[BrokerFilings] Resend email failed:', err)
    }
  } else {
    console.warn('[BrokerFilings] RESEND_API_KEY not set — welcome email skipped.')
  }

  return { success: true }
}
