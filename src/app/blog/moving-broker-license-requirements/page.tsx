import type { Metadata } from 'next'
import Link from 'next/link'
import LeadCapture from '@/components/LeadCapture'
import MagickPlatBridge from '@/components/MagickPlatBridge'

export const metadata: Metadata = {
  title: 'Moving Broker License Requirements: What You Actually Need',
  description:
    'The federal and state requirements for operating a household goods moving brokerage legally — FMCSA authority, surety bond, BOC-3, and more.',
  openGraph: {
    title: 'Moving Broker License Requirements: What You Actually Need',
    description:
      'Complete guide to federal and state license requirements for HHG moving brokers.',
    url: 'https://brokerfilings.com/blog/moving-broker-license-requirements',
  },
  alternates: { canonical: 'https://brokerfilings.com/blog/moving-broker-license-requirements' },
}

const STRIPE_LINK = 'https://buy.stripe.com/28E3cv66Y26qaCK40zgA800'

export default function ArticlePage() {
  return (
    <>
      <div className="article-hero">
        <div className="article-hero-inner">
          <Link href="/blog" className="back-link">← Back to Blog</Link>
          <div className="article-tag">Licensing</div>
          <h1>Moving Broker License Requirements: What You Actually Need</h1>
          <div className="article-meta">9 min read · Updated May 2026</div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-body-inner">
          <p>
            The moving industry is one of the most heavily regulated sectors of interstate commerce.
            Operating as a household goods (HHG) moving broker without the correct federal
            authorizations is not just a business risk — it is a federal violation that can result
            in significant fines and forced shutdown. This guide explains exactly what you need to
            operate legally.
          </p>

          <h2>Federal vs. State Requirements</h2>
          <p>
            Moving brokers who facilitate interstate moves — moves that cross state lines — are
            regulated primarily at the federal level by the FMCSA. State-level moving regulations
            typically apply to intrastate carriers (trucks), not brokers.
          </p>
          <p>
            This means the primary legal requirements for a moving broker are federal, not
            state-specific. However, you may need a state business license to legally operate a
            company in your home state, and some states have additional consumer protection
            regulations for moving companies that brokers should be aware of.
          </p>

          <h2>Requirement 1: FMCSA Household Goods Broker Authority</h2>
          <p>
            This is the foundational requirement. Before you can legally act as a broker for
            household goods moves, you must hold an active FMCSA Broker Authority for Household
            Goods, issued under 49 CFR Part 371.
          </p>
          <p>
            To obtain this authority, you must:
          </p>
          <ul>
            <li>Have a legal business entity (LLC, corporation, or sole proprietorship)</li>
            <li>Have a valid EIN (Employer Identification Number)</li>
            <li>File the OP-1 (HHG) application with the FMCSA and pay the $300 fee</li>
            <li>Have a BOC-3 filed with the FMCSA designating your process agents</li>
            <li>Have a valid $75,000 surety bond or trust fund on file with the FMCSA</li>
          </ul>
          <p>
            Once all requirements are met and the FMCSA reviews your application (typically 4–6
            weeks), you will receive an active MC number — your federal license to operate.
          </p>

          <div className="article-callout">
            The FMCSA does not issue a physical "license" the way a state motor vehicle department
            does. Your authority is represented by your active MC number in the FMCSA SAFER database,
            which is publicly searchable.
          </div>

          <h2>Requirement 2: $75,000 Surety Bond (BMC-84)</h2>
          <p>
            Federal regulations require all HHG brokers to maintain a $75,000 surety bond at all
            times. This bond provides financial protection for shippers and carriers in the event
            the broker fails to fulfill their contractual obligations.
          </p>
          <p>
            The bond must be filed directly by your bonding company with the FMCSA using the
            BMC-84 form. You cannot file this yourself. The bond must remain active continuously —
            if it lapses for any reason, the FMCSA will automatically revoke your broker authority.
          </p>
          <p>
            As an alternative to a surety bond, some brokers choose to establish a $75,000 trust
            fund (BMC-85). This requires you to deposit $75,000 in a federally insured financial
            institution and have the trust filed with the FMCSA. This option is not practical for
            most new brokers.
          </p>

          <h2>Requirement 3: BOC-3 Process Agent Coverage</h2>
          <p>
            A BOC-3 is a filing that designates a process agent in every state where your
            brokerage operates. A process agent is an individual or company authorized to receive
            legal documents (such as summons or complaints) on your behalf.
          </p>
          <p>
            Most new brokers use a national process agent service that covers all 50 states in a
            single filing. This is a one-time setup — once filed, the BOC-3 remains on record
            unless you change your process agent.
          </p>

          <h2>Requirement 4: Written Disclosure to Shippers</h2>
          <p>
            FMCSA regulations require moving brokers to provide written disclosure to shippers
            before any transaction. Specifically, you must disclose:
          </p>
          <ul>
            <li>That you are a broker, not a carrier</li>
            <li>Your MC number and contact information</li>
            <li>The carrier's identity, MC number, and contact information</li>
            <li>An estimate of charges and the basis for that estimate</li>
            <li>Your cancellation policy and refund procedures</li>
          </ul>
          <p>
            Failure to provide proper shipper disclosures is one of the most common compliance
            violations among new moving brokers and can result in FMCSA fines.
          </p>

          <h2>Requirement 5: Only Use FMCSA-Registered Carriers</h2>
          <p>
            By law, HHG brokers may only dispatch moves to motor carriers who hold valid FMCSA
            authority and have a valid USDOT number. Before dispatching any job to a carrier, you
            are required to verify their operating authority status in the FMCSA SAFER database.
          </p>
          <p>
            Using unregistered carriers — regardless of how low their rates are — exposes you to
            significant liability and is a federal regulatory violation.
          </p>

          <h2>State Business License</h2>
          <p>
            Most states require any business entity operating within their borders to hold a general
            business license. This is separate from FMCSA authority and is issued by your state or
            local government. Requirements and fees vary by location.
          </p>
          <p>
            If you operate from a home office, some municipalities require a home occupation permit
            in addition to a standard business license.
          </p>

          <h2>What You Do NOT Need</h2>
          <p>
            Moving brokers often ask about requirements that do not actually apply to them:
          </p>
          <ul>
            <li><strong>DOT physical or CDL:</strong> Not required for brokers — only for drivers of commercial vehicles.</li>
            <li><strong>Commercial auto insurance:</strong> Not required for brokers — only for motor carriers operating trucks.</li>
            <li><strong>FMCSA carrier authority:</strong> You need broker authority, not motor carrier authority. These are different applications.</li>
            <li><strong>State moving license:</strong> Most states do not separately license moving brokers — federal authority covers interstate operations.</li>
          </ul>

          <h2>Staying Compliant After You Launch</h2>
          <p>
            Getting your authority is just the beginning. Ongoing compliance requires you to:
          </p>
          <ul>
            <li>Maintain your surety bond continuously (do not let it lapse)</li>
            <li>Update your FMCSA registration if your address, entity name, or contact information changes</li>
            <li>Keep records of all transactions, estimates, and carrier assignments for at least one year</li>
            <li>Provide proper shipper disclosures on every transaction</li>
            <li>Never dispatch to unregistered carriers</li>
          </ul>

          <MagickPlatBridge />
          <LeadCapture source="moving-broker-license-requirements" />

          <div className="article-cta">
            <h3>Ready to get started?</h3>
            <p>We handle every filing for $1,799 — all government fees included.</p>
            <a
              href={STRIPE_LINK}
              className="btn-cta-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start My Application
            </a>
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px', color: '#64748B' }}>
            Already licensed? <Link href="/after-licensing">See what to do next →</Link>
          </p>
        </div>
      </div>
    </>
  )
}
