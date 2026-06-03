import type { Metadata } from 'next'
import Link from 'next/link'
import LeadCapture from '@/components/LeadCapture'
import MagickPlatBridge from '@/components/MagickPlatBridge'

export const metadata: Metadata = {
  title: 'How to Get FMCSA Broker Authority for a Moving Company',
  description:
    'Step-by-step guide to getting your FMCSA Household Goods Broker Authority. Learn what forms to file, fees to pay, and how long the process takes.',
  openGraph: {
    title: 'How to Get FMCSA Broker Authority for a Moving Company',
    description:
      'Step-by-step guide to getting your FMCSA Household Goods Broker Authority. Learn what forms to file, fees to pay, and how long the process takes.',
    url: 'https://brokerfilings.com/blog/how-to-get-fmcsa-broker-authority',
    type: 'article',
    images: [{ url: 'https://brokerfilings.com/og-image.jpg', width: 1200, height: 630, alt: 'How to Get FMCSA Broker Authority for a Moving Company' }],
  },
  alternates: { canonical: 'https://brokerfilings.com/blog/how-to-get-fmcsa-broker-authority' },
}

const STRIPE_LINK = 'https://buy.stripe.com/28E3cv66Y26qaCK40zgA800'

export default function ArticlePage() {
  return (
    <>
      <div className="article-hero">
        <div className="article-hero-inner">
          <Link href="/blog" className="back-link">← Back to Blog</Link>
          <div className="article-tag">FMCSA Authority</div>
          <h1>How to Get FMCSA Broker Authority for a Moving Company</h1>
          <div className="article-meta">8 min read · Updated May 2026</div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-body-inner">
          <p>
            If you want to legally operate as a household goods (HHG) moving broker in the United
            States, you need a federal operating authority issued by the Federal Motor Carrier Safety
            Administration (FMCSA). Without it, you cannot legally accept payment from customers to
            arrange moves — and the penalties for operating without authority can be severe.
          </p>
          <p>
            This guide walks you through every step of the FMCSA broker authority application
            process, from forming your business entity to receiving your active MC number.
          </p>

          <h2>What Is FMCSA Broker Authority?</h2>
          <p>
            FMCSA Broker Authority — officially called a Motor Carrier Operating Authority — is the
            federal license that allows you to act as a middleman between customers who need moving
            services and the carriers who perform those moves. It is issued by the FMCSA under the
            DOT, and it is specifically required for anyone brokering household goods shipments in
            interstate commerce.
          </p>
          <p>
            When you have broker authority, you receive a unique MC number (Motor Carrier number)
            that must appear on all your contracts, estimates, and marketing materials. Operating
            without a valid MC number is a federal violation.
          </p>

          <div className="article-callout">
            A moving broker does not own trucks or move anything directly. You connect customers
            with licensed carriers — but federal law still requires you to hold your own operating
            authority and maintain a $75,000 surety bond.
          </div>

          <h2>Step 1: Form Your Legal Business Entity</h2>
          <p>
            Before you can apply for FMCSA broker authority, you must have a legal business entity
            in place. Most new moving brokers form a Limited Liability Company (LLC) because it
            provides personal liability protection without the complexity of a corporation.
          </p>
          <p>
            You will need to file your LLC formation documents with your state's Secretary of State
            office and obtain an Employer Identification Number (EIN) from the IRS. The EIN is
            required on the FMCSA application — personal Social Security numbers are not accepted
            for business filings.
          </p>
          <ul>
            <li>Choose a business name and check availability in your state</li>
            <li>File Articles of Organization with your state (typical cost: $50–$500)</li>
            <li>Obtain your EIN from the IRS (free, done online at IRS.gov)</li>
            <li>Open a dedicated business bank account</li>
          </ul>

          <h2>Step 2: Register with FMCSA and Get Your USDOT Number</h2>
          <p>
            All entities that operate commercial motor vehicles or broker transportation must
            register with the FMCSA through the Unified Registration System (URS). This registration
            gives you a USDOT number, which is a unique identifier for your business.
          </p>
          <p>
            As a broker (not a carrier), you will not need operating authority as a motor carrier —
            but you do still need to register and obtain a USDOT number as part of the broker
            authority application.
          </p>

          <h2>Step 3: File the OP-1 (HHG) Application</h2>
          <p>
            The OP-1 (HHG) is the specific application form for household goods broker authority.
            It is filed through the FMCSA's online portal and requires:
          </p>
          <ul>
            <li>Your business legal name and operating name (DBA)</li>
            <li>Your USDOT number</li>
            <li>Your EIN</li>
            <li>Principal business address</li>
            <li>Type of authority requested (broker of household goods)</li>
            <li>Payment of the $300 FMCSA filing fee</li>
          </ul>
          <p>
            Once submitted, the FMCSA publishes a notice in the Federal Register giving carriers
            and the public a 10-day protest period. If no protests are filed, the application moves
            to the approval stage.
          </p>

          <h2>Step 4: File Your BOC-3 (Process Agent)</h2>
          <p>
            Federal law requires every FMCSA-registered entity to designate a process agent in
            every state where it operates. A process agent is the person or company authorized to
            receive legal documents on your behalf.
          </p>
          <p>
            The BOC-3 form must be filed by a third-party process agent company — you cannot file
            it yourself. Most process agent services cover all 50 states and cost $30–$75 one-time.
            This filing must be on record with the FMCSA before your authority can be activated.
          </p>

          <h2>Step 5: Obtain Your $75,000 Surety Bond or Trust Fund</h2>
          <p>
            The FMCSA requires household goods brokers to maintain a $75,000 surety bond (BMC-84)
            or a $75,000 trust fund agreement (BMC-85). This bond protects shippers if the broker
            fails to pay carriers or otherwise defaults on their obligations.
          </p>
          <p>
            The bond is not a one-time cost — it is an annual insurance premium. Premium rates
            typically range from $900 to $2,000 per year depending on your personal credit score.
            The surety company files the bond directly with the FMCSA on your behalf.
          </p>

          <h2>Step 6: Wait for FMCSA Approval</h2>
          <p>
            After your OP-1 is processed, your BOC-3 is on file, and your surety bond has been
            submitted by your bonding company, the FMCSA will activate your broker authority. This
            process typically takes 4 to 6 weeks from the date of initial filing.
          </p>
          <p>
            You will receive your MC number and your authority will appear as "Active" in the
            FMCSA's SAFER database. At that point, you are legally authorized to operate as a
            household goods moving broker.
          </p>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li><strong>Filing the wrong form</strong> — The OP-1 has multiple versions. Household goods brokers must use the HHG-specific version.</li>
            <li><strong>Missing the BOC-3</strong> — Authorities will not activate without a valid BOC-3 on file.</li>
            <li><strong>Paying the wrong fee</strong> — The $300 FMCSA fee is non-refundable. Rejected applications require a new fee.</li>
            <li><strong>Incomplete bond filing</strong> — Your surety company must file the BMC-84 directly with FMCSA; you cannot submit it yourself.</li>
            <li><strong>Starting operations before activation</strong> — Do not broker any moves until your MC number shows "Active" in the FMCSA SAFER system.</li>
          </ul>

          <h2>How Long Does the Entire Process Take?</h2>
          <p>
            From LLC formation to active broker authority, the full process typically takes 6 to 10
            weeks depending on your state's LLC processing times and FMCSA workload. Expedited LLC
            services can compress the entity setup to a few days. The FMCSA review itself is
            generally 4 to 6 weeks.
          </p>

          <MagickPlatBridge />
          <LeadCapture source="how-to-get-fmcsa-broker-authority" />

          <div className="article-cta">
            <h3>Ready to get started?</h3>
            <p>
              We handle every filing for $1,799 — all government fees included.
            </p>
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
