import type { Metadata } from 'next'
import LeadCapture from '@/components/LeadCapture'

export const metadata: Metadata = {
  title: 'BrokerFilings.com — FMCSA Broker Authority Filing Service',
  description:
    'Get your FMCSA Household Goods Broker Authority filed and approved. All-inclusive $1,799 package — OP-1, BOC-3, surety bond guidance, and full support until approved.',
  openGraph: {
    title: 'BrokerFilings.com — FMCSA Broker Authority Filing Service',
    description:
      'Get your FMCSA HHG Broker Authority. We handle every filing for $1,799 — all government fees included.',
    url: 'https://brokerfilings.com',
  },
  alternates: { canonical: 'https://brokerfilings.com' },
}

const STRIPE_LINK = 'https://buy.stripe.com/28E3cv66Y26qaCK40zgA800'

export default function HomePage() {
  return (
    <>
      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item"><span className="trust-icon">✓</span> FMCSA Authorized Filing Specialists</div>
          <div className="trust-item"><span className="trust-icon">✓</span> All Fees Included — No Surprises</div>
          <div className="trust-item"><span className="trust-icon">✓</span> 4–6 Week Average Approval</div>
          <div className="trust-item"><span className="trust-icon">✓</span> Full Support Until Approved</div>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">FMCSA Broker Authority Specialists</div>
            <h1>
              Get Your Moving Broker Authority.{' '}
              <span>We Handle Everything.</span>
            </h1>
            <p>
              Starting a moving brokerage requires a federal broker authority from the FMCSA. The
              process is complex, slow, and easy to get wrong. We handle every step — from filing
              to approval — so you can focus on building your business.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">$300</div>
                <div className="hero-stat-label">FMCSA fee included</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">4–6 wks</div>
                <div className="hero-stat-label">Average approval</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">100%</div>
                <div className="hero-stat-label">Managed for you</div>
              </div>
            </div>
          </div>

          {/* PRICING CARD */}
          <div className="pricing-card" id="get-started">
            <div className="pricing-label">Complete Filing Package</div>
            <div className="pricing-amount">$1,799</div>
            <div className="pricing-sub">One-time fee — all government fees included</div>
            <div className="pricing-divider" />

            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>FMCSA OP-1 Broker Authority Filing</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>BOC-3 Process Agent Filing</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>Surety Bond Guidance &amp; Referral</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>EIN &amp; LLC Setup Guidance</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>Full Compliance Checklist</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>FMCSA Follow-Up Until Approved</span>
            </div>

            <div className="pricing-note">
              All government filing fees are included in the $1,799 price. No hidden costs.
            </div>

            <a
              href={STRIPE_LINK}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start My Application →
            </a>
            <div className="btn-trust">Secure payment via Stripe</div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section className="process-bg">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ color: 'var(--gold)' }}>How It Works</div>
            <div className="section-title" style={{ color: 'var(--white)' }}>Six Steps to Your Broker Authority</div>
            <div className="section-sub" style={{ color: 'rgba(255,255,255,0.45)', margin: '0 auto' }}>
              We manage every step. You just answer our questions and wait for your approval.
            </div>
          </div>
          <div className="process-grid">
            {[
              { num: '1', title: 'Purchase & Intake', desc: 'Complete payment and fill out our intake form with your business details' },
              { num: '2', title: 'Entity Setup', desc: 'We guide you through LLC formation and EIN registration if needed' },
              { num: '3', title: 'OP-1 Filing', desc: 'We prepare and submit your FMCSA Broker Authority application' },
              { num: '4', title: 'BOC-3 Filing', desc: 'Process agent registered in every state your brokerage operates' },
              { num: '5', title: 'Surety Bond', desc: 'We connect you with a bonding provider for your $75K required bond' },
              { num: '6', title: 'Authority Granted', desc: 'Your FMCSA broker authority is active — you are ready to operate' },
            ].map((step) => (
              <div key={step.num} className="process-step">
                <div className="process-num">{step.num}</div>
                <div className="process-title">{step.title}</div>
                <div className="process-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      <section className="faq-bg">
        <div className="section-inner">
          <div className="section-label">What Is Included</div>
          <div className="section-title">Everything You Need to Launch Legally</div>
          <div className="section-sub">
            The $1,799 package covers every filing, every fee, and every step from application to approval.
          </div>

          <div className="includes-grid">
            <div className="include-item">
              <div className="include-icon">📋</div>
              <div className="include-title">FMCSA OP-1 Filing</div>
              <div className="include-desc">
                The federal application for your broker operating authority. We prepare, review,
                and submit the complete OP-1 form on your behalf. The $300 FMCSA filing fee is included.
              </div>
              <div className="include-tag">$300 fee included</div>
            </div>
            <div className="include-item">
              <div className="include-icon">⚖️</div>
              <div className="include-title">BOC-3 Process Agent</div>
              <div className="include-desc">
                Federal law requires a registered process agent in every state. We handle the BOC-3
                filing and arrange your process agent coverage nationwide. Fee included.
              </div>
              <div className="include-tag">Fee included</div>
            </div>
            <div className="include-item">
              <div className="include-icon">🔐</div>
              <div className="include-title">Surety Bond Guidance</div>
              <div className="include-desc">
                The FMCSA requires a $75,000 surety bond for broker authority. We connect you with
                our bonding partners to secure competitive rates, typically $900–$2,000/year.
              </div>
              <div className="include-tag">Referral included</div>
            </div>
            <div className="include-item">
              <div className="include-icon">🏢</div>
              <div className="include-title">EIN &amp; LLC Guidance</div>
              <div className="include-desc">
                We walk you through forming your LLC and obtaining your Employer Identification
                Number — the two legal requirements before you can apply for broker authority.
              </div>
              <div className="include-tag">Step-by-step guidance</div>
            </div>
            <div className="include-item">
              <div className="include-icon">📊</div>
              <div className="include-title">Compliance Checklist</div>
              <div className="include-desc">
                A complete checklist of everything required to operate as a licensed moving broker —
                from record-keeping requirements to customer disclosure obligations.
              </div>
              <div className="include-tag">Full documentation</div>
            </div>
            <div className="include-item">
              <div className="include-icon">📞</div>
              <div className="include-title">FMCSA Follow-Up</div>
              <div className="include-desc">
                We monitor your application status and follow up with the FMCSA on your behalf
                until your authority is granted. Average approval time is 4–6 weeks.
              </div>
              <div className="include-tag">Until approved</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: '80px 40px' }}>
        <div className="section-inner">
          <div className="section-label">Common Questions</div>
          <div className="section-title">Frequently Asked Questions</div>
          <div className="section-sub">
            Everything you need to know about getting your FMCSA broker authority.
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-q">Do I need a broker authority to operate a moving brokerage?</div>
              <div className="faq-a">
                Yes. Federal law requires all moving brokers to hold a valid FMCSA Household Goods
                Broker Authority before accepting any customer payments or dispatching carriers.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">How long does the FMCSA approval process take?</div>
              <div className="faq-a">
                Typically 4–6 weeks from the date of filing. We submit your application promptly
                and follow up with the FMCSA regularly to ensure there are no delays.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What is a surety bond and how much does it cost?</div>
              <div className="faq-a">
                The FMCSA requires moving brokers to maintain a $75,000 surety bond. Annual
                premiums are typically $900–$2,000 depending on your credit. We connect you with
                bonding partners who specialize in transportation.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Do I need an LLC before applying?</div>
              <div className="faq-a">
                Yes. You need a legal business entity and an EIN before filing with the FMCSA. We
                guide you through both steps as part of the package.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Can I operate in multiple states with one authority?</div>
              <div className="faq-a">
                Yes. A federal FMCSA broker authority allows you to operate in all 50 states. The
                BOC-3 filing we include ensures you have process agent coverage nationwide.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What happens after my authority is granted?</div>
              <div className="faq-a">
                You are ready to legally operate as a moving broker. We recommend pairing your
                authority with MagickPlat — the moving broker OS that handles quotes, dispatch,
                carrier payments, and realtor referrals all in one platform.
              </div>
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
            Join hundreds of moving brokers who started their business the right way. We handle
            the federal filings — you focus on building your carrier network and dispatching jobs.
          </p>
          <a
            href={STRIPE_LINK}
            className="btn-cta-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start My Application — $1,799
          </a>
          <div className="cta-guarantee">
            All government fees included · No hidden costs · Support until approved
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ textAlign: "center", padding: "24px 40px", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <p style={{ fontSize: "14px", color: "#6B7A8D", margin: 0 }}>
          Questions? Call or text:{" "}
          <a href="tel:+14076031835" style={{ color: "#228B4A", fontWeight: 600, textDecoration: "none" }}>
            (407) 603-1835
          </a>
          {" "}· Mon–Fri 9am–6pm EST
        </p>
      </div>

      {/* LEAD CAPTURE */}
      <LeadCapture />
    </>
  )
}
