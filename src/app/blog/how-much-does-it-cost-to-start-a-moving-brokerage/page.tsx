import type { Metadata } from 'next'
import Link from 'next/link'
import LeadCapture from '@/components/LeadCapture'
import MagickPlatBridge from '@/components/MagickPlatBridge'

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Start a Moving Brokerage? Under $2,500 | BrokerFilings',
  description:
    'Complete cost breakdown for starting a licensed HHG moving brokerage — FMCSA fees, surety bond, LLC formation, insurance, and filing service costs.',
  openGraph: {
    title: 'How Much Does It Cost to Start a Moving Brokerage?',
    description:
      'Complete cost breakdown for starting a licensed HHG moving brokerage — FMCSA fees, surety bond, LLC formation, insurance, and filing service costs.',
    url: 'https://brokerfilings.com/blog/how-much-does-it-cost-to-start-a-moving-brokerage',
    type: 'article',
    images: [{ url: 'https://brokerfilings.com/og-image.jpg', width: 1200, height: 630, alt: 'How Much Does It Cost to Start a Moving Brokerage?' }],
  },
  alternates: {
    canonical:
      'https://brokerfilings.com/blog/how-much-does-it-cost-to-start-a-moving-brokerage',
  },
}

const STRIPE_LINK = 'https://buy.stripe.com/28E3cv66Y26qaCK40zgA800'

export default function ArticlePage() {
  return (
    <>
      <div className="article-hero">
        <div className="article-hero-inner">
          <Link href="/blog" className="back-link">← Back to Blog</Link>
          <div className="article-tag">Startup Costs</div>
          <h1>How Much Does It Cost to Start a Moving Brokerage?</h1>
          <div className="article-meta">9 min read · Updated May 2026</div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-body-inner">
          <p>
            One of the first questions aspiring moving brokers ask is: how much does it actually
            cost to get started? The answer is more nuanced than a single number — the startup
            costs for a moving brokerage span federal filings, bonding, entity formation, and
            operating expenses. This guide breaks down every cost you should expect.
          </p>

          <h2>The Federal Filing Costs</h2>
          <p>
            The FMCSA charges a non-refundable $300 application fee to file for broker operating
            authority. This fee covers the processing of your OP-1 (HHG) application and the
            publication of your authority notice in the Federal Register. There is no way to avoid
            this fee — it applies whether you file yourself or use a filing service.
          </p>
          <p>
            If your application is rejected for any reason — incomplete information, wrong form,
            missing documents — the $300 is not refunded. You will need to refile and pay again.
            This is one reason many new brokers use a professional filing service.
          </p>

          <h2>The Surety Bond: Your Biggest Recurring Cost</h2>
          <p>
            The FMCSA requires household goods brokers to maintain a $75,000 surety bond (BMC-84)
            at all times. This is not a one-time cost — it is an annual insurance premium paid to
            a bonding company.
          </p>
          <p>
            Your annual bond premium is primarily driven by your personal credit score:
          </p>
          <ul>
            <li><strong>Excellent credit (720+):</strong> $900–$1,200/year</li>
            <li><strong>Good credit (660–719):</strong> $1,200–$1,600/year</li>
            <li><strong>Fair credit (580–659):</strong> $1,600–$2,500/year</li>
            <li><strong>Poor credit (below 580):</strong> May require full cash collateral or trust fund</li>
          </ul>
          <p>
            The bond premium is paid annually. If your bond lapses, the FMCSA will immediately
            revoke your broker authority. Most bonding companies offer monthly payment options,
            but the annualized rate is always higher.
          </p>

          <h2>BOC-3 Process Agent Filing</h2>
          <p>
            Every FMCSA registrant must designate a process agent in all 50 states via a BOC-3
            filing. This is handled by third-party process agent companies and typically costs
            $30–$75 as a one-time fee. Some companies bundle this with annual renewal fees.
          </p>

          <h2>LLC Formation and EIN</h2>
          <p>
            Before you can apply for FMCSA broker authority, you need a legal business entity. LLC
            formation costs vary significantly by state:
          </p>
          <ul>
            <li><strong>Wyoming, New Mexico:</strong> $50–$100</li>
            <li><strong>Florida, Texas, Ohio:</strong> $100–$200</li>
            <li><strong>California, Massachusetts:</strong> $70 filing + $800/year franchise tax (CA)</li>
          </ul>
          <p>
            Obtaining your EIN from the IRS is free and can be done online in minutes. If you use
            a registered agent service (required in most states if your LLC address differs from
            your personal address), budget an additional $50–$150/year.
          </p>

          <div className="article-callout">
            Total government and compliance costs for a new HHG moving broker typically fall
            between $1,500 and $3,000 in the first year — excluding your own operating expenses.
          </div>

          <h2>Filing Service Costs</h2>
          <p>
            Many new brokers choose to use a professional filing service rather than navigate the
            FMCSA portal themselves. The FMCSA's online system is not particularly user-friendly,
            and errors can result in rejections, delays, and re-filing fees.
          </p>
          <p>
            Filing services typically charge between $500 and $2,000 for a complete broker
            authority package. BrokerFilings.com charges a flat $1,799 which includes the $300
            FMCSA fee, BOC-3 filing, surety bond referral, LLC guidance, and full support until
            your authority is active — no hidden costs.
          </p>

          <h2>Optional but Important Operating Costs</h2>
          <p>
            Beyond the federal compliance costs, there are operational expenses to plan for:
          </p>
          <ul>
            <li><strong>Business phone line:</strong> $20–$50/month</li>
            <li><strong>CRM or broker software:</strong> $100–$500/month depending on features</li>
            <li><strong>General liability insurance:</strong> $500–$1,500/year (recommended, not federally required)</li>
            <li><strong>Website and marketing:</strong> $500–$3,000 upfront</li>
            <li><strong>Errors &amp; omissions (E&amp;O) insurance:</strong> $1,000–$2,500/year (recommended for protection)</li>
          </ul>

          <h2>Total First-Year Cost Estimate</h2>
          <p>
            Here is a realistic range for what it costs to launch a compliant moving brokerage in
            your first year of operation:
          </p>
          <ul>
            <li>FMCSA broker authority filing: $300 (government fee, included in most services)</li>
            <li>Professional filing service: $1,000–$2,000</li>
            <li>Surety bond (annual premium): $900–$2,500</li>
            <li>LLC formation: $50–$500</li>
            <li>BOC-3: $30–$75</li>
            <li>Operating expenses (software, phone, insurance): $2,000–$6,000</li>
          </ul>
          <p>
            <strong>Total range: approximately $4,000–$12,000 for year one</strong>, with recurring
            annual costs of $2,000–$5,000 thereafter (primarily bond premiums and software).
          </p>

          <h2>Why the Filing Service Cost Is Worth It</h2>
          <p>
            The FMCSA's online application system requires precise information in the correct
            format. A single error — wrong entity type, missing USDOT number, incorrect
            application form — results in a rejection and a forfeited $300 filing fee. Most
            professional filing services guarantee correct submission or refile at no cost.
          </p>
          <p>
            When you consider that a rejection wastes weeks of waiting time and an additional
            $300, paying $1,799 for a complete, managed service often works out to be the
            economical choice — especially for first-time brokers unfamiliar with the process.
          </p>

          <MagickPlatBridge />
          <LeadCapture source="how-much-does-it-cost-to-start-a-moving-brokerage" />

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
