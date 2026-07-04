import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us — BrokerFilings',
  description: 'Get in touch with the BrokerFilings team. We reply within 2 hours on business days.',
  openGraph: {
    title: 'Contact Us — BrokerFilings',
    description: 'Get in touch with the BrokerFilings team. We reply within 2 hours on business days.',
    url: 'https://brokerfilings.com/contact',
  },
  alternates: { canonical: 'https://brokerfilings.com/contact' },
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '11px',
  fontWeight: 600,
  color: 'var(--gray)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: '8px',
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <div style={{ background: 'var(--navy)', padding: '90px 40px 70px', textAlign: 'center' }}>
        <div className="section-inner">
          <div className="section-label" style={{ color: 'var(--gold)' }}>Get in Touch</div>
          <h1 className="section-title" style={{ color: 'var(--white)', fontSize: '44px', marginBottom: '16px' }}>
            We&apos;re Here to Help
          </h1>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.55)', margin: '0 auto' }}>
            Whether you&apos;re starting a new brokerage or need help with your FMCSA filing —
            reach out and we&apos;ll get back to you within 2 hours on business days.
          </p>
        </div>
      </div>

      {/* CONTACT INFO + FORM */}
      <section style={{ background: 'var(--white)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '64px', alignItems: 'start' }}>

            {/* LEFT: contact info list */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ paddingBottom: '24px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="pricing-label">Email Us</div>
                <a href="mailto:info@brokerfilings.com" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', textDecoration: 'none' }}>
                  info@brokerfilings.com
                </a>
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '6px', lineHeight: 1.6 }}>
                  We reply within 2 hours on business days.
                </p>
              </div>

              <div style={{ padding: '24px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="pricing-label">Call Us</div>
                <a href="tel:+14076031835" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', textDecoration: 'none' }}>
                  (407) 603-1835
                </a>
                <p style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '6px', lineHeight: 1.6 }}>
                  Mon – Fri, 9 AM – 6 PM EST.
                </p>
              </div>

              <div style={{ paddingTop: '24px' }}>
                <div className="pricing-label" style={{ marginBottom: '16px' }}>Who We Support</div>
                {[
                  { role: 'New Broker Applicants', note: 'FMCSA authority, MC number, filing questions' },
                  { role: 'Existing Brokers', note: 'Renewals, updates, compliance questions' },
                  { role: 'General Inquiries', note: 'Pricing, timelines, process questions' },
                ].map(({ role, note }) => (
                  <div key={role} style={{ marginBottom: '14px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', marginBottom: '2px' }}>{role}</p>
                    <p style={{ fontSize: '13px', color: 'var(--gray)' }}>{note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: form */}
            <div>
              <h2 className="section-title" style={{ fontSize: '24px', marginBottom: '6px' }}>Send Us a Message</h2>
              <p style={{ fontSize: '14px', color: 'var(--gray)', marginBottom: '28px' }}>
                Fill out the form and we&apos;ll get back to you shortly.
              </p>

              <form
                action="https://formsubmit.co/info@brokerfilings.com"
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://brokerfilings.com/contact/thank-you" />
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Full Name <span style={{ color: 'var(--green2)' }}>*</span></label>
                    <input type="text" name="name" required placeholder="Marcus T." className="contact-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email <span style={{ color: 'var(--green2)' }}>*</span></label>
                    <input type="email" name="email" required placeholder="you@example.com" className="contact-input" />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className="contact-input" />
                </div>

                <div>
                  <label style={labelStyle}>Inquiry Type <span style={{ color: 'var(--green2)' }}>*</span></label>
                  <select name="role" required defaultValue="" className="contact-input" style={{ color: 'var(--gray)' }}>
                    <option value="" disabled>Select your inquiry type</option>
                    <option value="new-filing">New FMCSA Broker Filing</option>
                    <option value="renewal">Renewal or Update</option>
                    <option value="status">Filing Status Check</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Subject <span style={{ color: 'var(--green2)' }}>*</span></label>
                  <input type="text" name="subject" required placeholder="e.g. Question about my FMCSA filing" className="contact-input" />
                </div>

                <div>
                  <label style={labelStyle}>Message <span style={{ color: 'var(--green2)' }}>*</span></label>
                  <textarea name="message" required rows={5} placeholder="Tell us what you need help with…" className="contact-input" style={{ resize: 'vertical', lineHeight: 1.6 }} />
                </div>

                <button type="submit" className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                  Send Message →
                </button>

                <p style={{ fontSize: '12px', color: 'var(--gray)', textAlign: 'center', marginTop: '-4px' }}>
                  We typically reply within 2 hours · Mon – Fri, 9 AM – 6 PM EST
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-inner">
          <h2>
            Ready to Get Your <span>Broker Authority?</span>
          </h2>
          <p>
            Skip the back-and-forth — start your application now and we&apos;ll handle every
            filing from here.
          </p>
          <Link href="/#get-started" className="btn-cta-large">
            Start My Application — $1,799
          </Link>
          <div className="cta-guarantee">
            All government fees included · No hidden costs · Support until approved
          </div>
        </div>
      </div>
    </>
  )
}
