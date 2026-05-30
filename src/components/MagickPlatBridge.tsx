export default function MagickPlatBridge() {
  return (
    <div style={{
      margin: '48px 0',
      padding: '32px 36px',
      background: 'linear-gradient(135deg, rgba(34,139,74,0.06) 0%, rgba(11,31,58,0.4) 100%)',
      border: '1px solid rgba(34,139,74,0.2)',
      borderRadius: '16px',
    }}>
      <p style={{ fontSize: '11px', fontWeight: 700, color: '#228B4A', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>
        After Your Broker Authority Is Approved
      </p>
      <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
        Getting licensed is step one. Now you need a system to operate.
      </h3>
      <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7, margin: '0 0 20px' }}>
        MagickPlat is the operating system built specifically for HHG moving brokers.
        Manage leads, dispatch carriers, collect payments, and build your realtor
        referral network — all in one platform.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
        {[
          'Carrier and realtor database pre-loaded by state',
          'Carrier subscription model — $89.10/carrier/month passive income',
          'Stripe escrow payments — zero chargeback fraud',
          'Built-in call scripts for every outreach contact',
        ].map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <span style={{ color: '#228B4A', fontWeight: 700, flexShrink: 0 }}>→</span>
            <span style={{ fontSize: '14px', color: '#CBD5E1' }}>{item}</span>
          </div>
        ))}
      </div>
      <a
        href="https://magickplat.com/get-started"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '12px 28px',
          background: 'linear-gradient(135deg, #228B4A, #1A6B37)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '14px',
          borderRadius: '9px',
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}
      >
        Explore MagickPlat — Free Trial →
      </a>
      <p style={{ fontSize: '12px', color: '#475569', margin: '12px 0 0' }}>
        $499/month · Carrier database included · 30-day free trial
      </p>
    </div>
  )
}
