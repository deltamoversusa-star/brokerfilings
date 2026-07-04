import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Message Sent — BrokerFilings',
  description: 'Thanks for reaching out. We will get back to you within 2 hours on business days.',
}

export default function ContactThankYouPage() {
  return (
    <div style={{
      background: 'var(--navy)',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 40px',
    }}>
      <div style={{
        background: 'var(--white)',
        maxWidth: '480px',
        width: '100%',
        padding: '48px 40px',
        textAlign: 'center',
        borderTop: '4px solid var(--gold)',
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--green-lt)',
          border: '1px solid var(--green2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 700,
          color: 'var(--green2)',
          margin: '0 auto 20px',
        }}>
          ✓
        </div>
        <h1 className="section-title" style={{ fontSize: '28px', marginBottom: '12px' }}>
          Message Received
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.7, marginBottom: '28px' }}>
          We&apos;ll get back to you within 2 hours on business days. Check your inbox — we reply
          from <span style={{ color: 'var(--green2)', fontWeight: 600 }}>info@brokerfilings.com</span>.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary" style={{ display: 'inline-block', width: 'auto', padding: '12px 28px' }}>
            Back to Home
          </Link>
          <a
            href="/#get-started"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 28px',
              border: '2px solid var(--gold)',
              color: 'var(--gold)',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              letterSpacing: '0.03em',
            }}
          >
            Start Your Filing →
          </a>
        </div>
      </div>
    </div>
  )
}
