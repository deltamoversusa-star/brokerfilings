import type { Metadata } from 'next'
import LeadCapture from '@/components/LeadCapture'

export const metadata: Metadata = {
  title: 'Already Licensed? Run Your Moving Brokerage — HHG Broker Operations Course',
  description:
    "You have your FMCSA broker authority. Now learn to actually run the business: build a carrier network, quote and dispatch jobs, collect payments, and land your first 10 jobs. The $497 operations course (Weeks 2-7) for already-licensed HHG moving brokers.",
  openGraph: {
    title: 'Already Licensed? Learn to Run Your Moving Brokerage — $497 Operations Course',
    description:
      'The operations-only training for brokers who already hold FMCSA authority. Platform, carriers, quoting, payments, marketing, and realtor referrals — taught by a 10-year broker.',
    url: 'https://brokerfilings.com/licensed-broker-training',
  },
  alternates: { canonical: 'https://brokerfilings.com/licensed-broker-training' },
}

const STRIPE_LINK = 'https://buy.stripe.com/00w28r3YQeTc8uC1SrgA801'

export default function LicensedBrokerTrainingPage() {
  return (
    <>
      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item"><span className="trust-icon">✓</span> For Brokers Who Already Hold FMCSA Authority</div>
          <div className="trust-item"><span className="trust-icon">✓</span> Skip Licensing — Start at Operations</div>
          <div className="trust-item"><span className="trust-icon">✓</span> 35 Lessons · Weeks 2–7</div>
          <div className="trust-item"><span className="trust-icon">✓</span> Taught by a 10-Year HHG Broker</div>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">Operations Course — Already-Licensed Brokers</div>
            <h1>
              You Got Your Authority.{' '}
              <span>Now Learn to Run the Business.</span>
            </h1>
            <p>
              Getting licensed was the hard part — and you already did it. What nobody
              hands you is the part that actually makes money: building a carrier
              network, quoting moves correctly, dispatching jobs, collecting payments
              safely, and getting customers. This course picks up exactly where your
              license leaves off and walks you through running a real brokerage, step
              by step.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">6</div>
                <div className="hero-stat-label">Weeks of operations training</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">35</div>
                <div className="hero-stat-label">Lessons, start to scale</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">$497</div>
                <div className="hero-stat-label">One-time — no license content</div>
              </div>
            </div>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
              Already enrolled?{' '}
              <a href="/course" style={{ color: '#228B4A', fontWeight: 600, textDecoration: 'none' }}>
                Access your course →
              </a>
            </p>
          </div>

          {/* PRICING CARD */}
          <div className="pricing-card" id="get-started">
            <div className="pricing-label">Operations Course · Weeks 2–7</div>
            <div className="pricing-amount">$497</div>
            <div className="pricing-sub">One-time — for brokers who are already licensed</div>
            <div className="pricing-divider" />

            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>Platform Setup — your broker OS, end to end</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>Carrier Network — find, call, vet, and rate carriers</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>Customer Operations — leads, quoting, dispatch</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>Payments &amp; Compliance — escrow, payouts, disputes</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>Leads &amp; Marketing — how brokers get customers</span>
            </div>
            <div className="pricing-item">
              <div className="pricing-check">✓</div>
              <span>Realtor Network &amp; Scaling — your 90-day plan</span>
            </div>

            <div className="pricing-note">
              This is the operations track only. It does not cover FMCSA licensing —
              it is built for brokers who already hold their authority.
            </div>

            <a
              href={STRIPE_LINK}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the Operations Course →
            </a>
            <div className="btn-trust">Secure payment via Stripe</div>
          </div>
        </div>
      </div>

      {/* WHO THIS IS FOR */}
      <section className="process-bg">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ color: 'var(--gold)' }}>Is This You?</div>
            <div className="section-title" style={{ color: 'var(--white)' }}>Built for the Broker Who Is Licensed but Stuck</div>
            <div className="section-sub" style={{ color: 'rgba(255,255,255,0.45)', margin: '0 auto' }}>
              If you have your authority but no system for actually operating, this is the missing half.
            </div>
          </div>
          <div className="process-grid">
            {[
              { num: '✓', title: 'You Have Your Authority', desc: 'OP-1 approved, bond active, BOC-3 filed — and now an empty pipeline staring back at you' },
              { num: '?', title: 'No Carriers Yet', desc: 'You know you need a carrier network but not how to find, call, or vet them' },
              { num: '?', title: 'Unsure How to Quote', desc: 'Local hourly vs. long-distance cubic-foot pricing — and how not to lose money on either' },
              { num: '?', title: 'Worried About Payments', desc: 'Collecting deposits, holding funds, avoiding chargebacks, paying carriers on time' },
              { num: '?', title: 'No Lead Flow', desc: 'An authority does not bring customers — you need a repeatable way to get jobs' },
              { num: '→', title: 'Ready to Operate', desc: 'You want a step-by-step system to go from licensed to dispatching your first jobs' },
            ].map((step) => (
              <div key={step.title} className="process-step">
                <div className="process-num">{step.num}</div>
                <div className="process-title">{step.title}</div>
                <div className="process-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="faq-bg">
        <div className="section-inner">
          <div className="section-label">What You Learn</div>
          <div className="section-title">Six Weeks From Setup to Scale</div>
          <div className="section-sub">
            The complete operations curriculum — every system you need to run a moving brokerage, with nothing on licensing you already handled.
          </div>

          <div className="includes-grid">
            <div className="include-item">
              <div className="include-icon">🧭</div>
              <div className="include-title">Week 2 — Platform Setup</div>
              <div className="include-desc">
                Set up your broker OS the right way: account and brokerage profile,
                connecting Stripe to collect and hold payments, dashboard orientation,
                and your service area and pricing defaults.
              </div>
              <div className="include-tag">5 lessons</div>
            </div>
            <div className="include-item">
              <div className="include-icon">🚚</div>
              <div className="include-title">Week 3 — Carrier Network</div>
              <div className="include-desc">
                The passive-income carrier model, using a pre-loaded carrier database,
                the carrier call script with objection handling, a live call demo,
                vetting through SAFER and safety scores, and setting carrier rates.
              </div>
              <div className="include-tag">7 lessons</div>
            </div>
            <div className="include-item">
              <div className="include-icon">📋</div>
              <div className="include-title">Week 4 — Customer Operations</div>
              <div className="include-desc">
                The full customer journey: creating leads in the CRM, quoting local
                hourly moves, quoting long-distance by cubic foot, required FMCSA
                disclosures, and dispatching the job to a carrier.
              </div>
              <div className="include-tag">6 lessons</div>
            </div>
            <div className="include-item">
              <div className="include-icon">💳</div>
              <div className="include-title">Week 5 — Payments &amp; Compliance</div>
              <div className="include-desc">
                How escrow works, generating payment links for every job, chargeback
                prevention before and after a move, automatic weekly carrier payouts,
                handling disputes, and operational compliance.
              </div>
              <div className="include-tag">6 lessons</div>
            </div>
            <div className="include-item">
              <div className="include-icon">📣</div>
              <div className="include-title">Week 6 — Leads &amp; Marketing</div>
              <div className="include-desc">
                Your lead engine: how moving brokers actually get customers, building
                a credibility signal online, AI-powered lead generation, and an
                introduction to the realtor referral partnership model.
              </div>
              <div className="include-tag">5 lessons</div>
            </div>
            <div className="include-item">
              <div className="include-icon">📈</div>
              <div className="include-title">Week 7 — Realtor Network &amp; Scaling</div>
              <div className="include-desc">
                Why realtors are the best lead source, using the realtor database,
                automatic commission payments, setting up realtor accounts, reporting
                and tracking growth, and your 90-day plan to your first 10 jobs.
              </div>
              <div className="include-tag">6 lessons</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section style={{ background: '#0B1F3A', padding: '80px 40px', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ color: '#C9A84C' }}>
                Who Teaches This
              </div>
              <h2 className="section-title" style={{ color: '#fff', marginBottom: '20px' }}>
                Taught by a Broker Who Actually Did It
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '20px' }}>
                This course is taught by Erica Dorsey — a tax accountant and 10-year
                HHG moving broker who filed her own FMCSA authority from scratch, then
                built the brokerage operations from the ground up.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '32px' }}>
                She made $200,000 in her first moving season starting with a single
                carrier. The operations she used to do it — the carrier calls, the
                quoting, the payments, the realtor referrals — are exactly what this
                course teaches, in the order she learned to run them.
              </p>
              <a href="/our-story" style={{ display: 'inline-block', fontSize: '14px', fontWeight: 700, color: '#C9A84C', textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: '2px' }}>
                Read the full founder story →
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              {[
                { number: '$200K', label: 'First Moving Season' },
                { number: '10',   label: 'Years in HHG Industry' },
                { number: '1',    label: 'Carrier to Start' },
                { number: '35',   label: 'Operations Lessons' },
              ].map(({ number, label }) => (
                <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', fontWeight: 900, color: '#C9A84C', fontFamily: 'var(--font-playfair)', lineHeight: 1, marginBottom: '8px' }}>{number}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOT LICENSED YET? */}
      <div style={{
        background: '#0B1F3A',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        padding: '40px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Not licensed yet?
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
          Start with the full program
        </h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto 24px', lineHeight: 1.7 }}>
          If you do not have your FMCSA broker authority yet, you want the complete
          7-week program — it covers licensing from scratch and then everything in
          this operations course.
        </p>
        <a href="/"
          style={{ display: 'inline-block', padding: '12px 32px', background: '#228B4A', color: '#fff', fontWeight: 700, borderRadius: '8px', textDecoration: 'none', fontSize: '15px' }}>
          View the full program →
        </a>
      </div>

      {/* FAQ */}
      <section style={{ background: 'var(--white)', padding: '80px 40px' }}>
        <div className="section-inner">
          <div className="section-label">Common Questions</div>
          <div className="section-title">Frequently Asked Questions</div>
          <div className="section-sub">
            What this course covers, who it is for, and how it works.
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-q">Does this course cover getting my FMCSA license?</div>
              <div className="faq-a">
                No — and that is the point. This is the operations track (Weeks 2–7)
                for brokers who already hold their authority. If you still need to get
                licensed, choose the full 7-week program instead, which includes
                licensing from scratch.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What exactly do I get for $497?</div>
              <div className="faq-a">
                All six operations weeks — platform setup, carrier network, customer
                operations, payments and compliance, leads and marketing, and realtor
                network and scaling — for a total of 35 video lessons you can work
                through at your own pace.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Do I need to use a specific platform?</div>
              <div className="faq-a">
                The operations are taught using MagickPlat — the broker OS built for
                HHG moving brokers — so you can follow along exactly. The underlying
                skills (quoting, carrier vetting, dispatch, payments) apply no matter
                what tools you run.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">How do I access the course after I pay?</div>
              <div className="faq-a">
                Right after checkout you will receive an email with an access code.
                Go to the course portal, enter the email you purchased with plus that
                code, and you are in — on any device. Your progress is saved as you go.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Is this a subscription?</div>
              <div className="faq-a">
                No. It is a one-time payment of $497 for lifetime access to the
                operations course. There is no recurring charge.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">I already paid for the full program — do I need this?</div>
              <div className="faq-a">
                No. The full 7-week program already includes everything in this
                operations course plus the licensing weeks. This page is only for
                brokers who are already licensed and want the operations training on
                its own.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-inner">
          <h2>
            Ready to Actually <span>Run Your Brokerage?</span>
          </h2>
          <p>
            You did the hard part and got licensed. Now get the system for finding
            carriers, quoting moves, collecting payments, and landing your first jobs
            — taught by a broker who built it herself.
          </p>
          <a
            href={STRIPE_LINK}
            className="btn-cta-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the Operations Course — $497
          </a>
          <div className="cta-guarantee">
            One-time payment · Lifetime access · 35 lessons across 6 weeks
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
        <p style={{ fontSize: "13px", color: "#6B7A8D", margin: "8px 0 0" }}>
          Already enrolled?{" "}
          <a href="/course" style={{ color: "#228B4A", fontWeight: 600, textDecoration: "none" }}>
            Access your course →
          </a>
        </p>
      </div>

      {/* LEAD CAPTURE */}
      <LeadCapture />
    </>
  )
}