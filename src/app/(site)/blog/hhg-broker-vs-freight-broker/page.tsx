import type { Metadata } from 'next'
import Link from 'next/link'
import LeadCapture from '@/components/LeadCapture'
import MagickPlatBridge from '@/components/MagickPlatBridge'

export const metadata: Metadata = {
  title: 'HHG Broker vs Freight Broker — Key Differences in 2026 | BrokerFilings',
  description:
    'Household goods brokers and freight brokers both need FMCSA authority, but the bond requirements, regulations, and operations are very different. Learn what sets them apart.',
  openGraph: {
    title: 'HHG Broker vs. Freight Broker: Key Differences Explained',
    description:
      'Household goods brokers and freight brokers both need FMCSA authority, but the bond requirements, regulations, and operations are very different. Learn what sets them apart.',
    url: 'https://brokerfilings.com/blog/hhg-broker-vs-freight-broker',
    type: 'article',
    images: [{ url: 'https://brokerfilings.com/og-image.jpg', width: 1200, height: 630, alt: 'HHG Broker vs. Freight Broker: Key Differences Explained' }],
  },
  alternates: { canonical: 'https://brokerfilings.com/blog/hhg-broker-vs-freight-broker' },
}

const STRIPE_LINK = 'https://buy.stripe.com/28E3cv66Y26qaCK40zgA800'

export default function ArticlePage() {
  return (
    <>
      <div className="article-hero">
        <div className="article-hero-inner">
          <Link href="/blog" className="back-link">← Back to Blog</Link>
          <div className="article-tag">Industry Guide</div>
          <h1>HHG Broker vs. Freight Broker: Key Differences Explained</h1>
          <div className="article-meta">8 min read · Updated May 2026</div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-body-inner">
          <p>
            If you are researching how to start a brokerage in the transportation industry, you
            have likely encountered two distinct categories: household goods (HHG) brokers and
            freight brokers. Both require federal operating authority from the FMCSA. Both involve
            connecting shippers with carriers. But beyond those surface-level similarities, they
            operate under very different regulations, bond requirements, and market dynamics.
          </p>

          <h2>What Is a Household Goods Broker?</h2>
          <p>
            A household goods broker arranges the transportation of personal property — furniture,
            appliances, clothing, and other residential belongings — between locations. These are
            the "moving companies" that consumers hire when relocating their homes.
          </p>
          <p>
            The HHG industry is governed by specific consumer protection regulations because the
            customers are typically everyday people (not sophisticated commercial entities) who are
            often vulnerable to moving fraud. The FMCSA has enacted strict rules specifically for
            the HHG sector to protect these consumers.
          </p>

          <h2>What Is a Freight Broker?</h2>
          <p>
            A freight broker arranges the transportation of commercial cargo — manufactured goods,
            raw materials, palletized products, and other business-to-business shipments. Their
            customers are typically businesses (shippers) sending goods to other businesses
            (consignees), using freight carriers (trucking companies).
          </p>
          <p>
            Freight brokerage is one of the largest segments of the US transportation industry,
            handling hundreds of billions of dollars in freight annually.
          </p>

          <div className="article-callout">
            You cannot use a general freight broker authority to broker household goods. The FMCSA
            requires a specific Household Goods Broker Authority for anyone arranging residential
            moves in interstate commerce.
          </div>

          <h2>Different FMCSA Authority Types</h2>
          <p>
            This is the most important legal distinction. When applying for FMCSA authority, you
            must select the correct type:
          </p>
          <ul>
            <li><strong>Property Broker Authority (OP-1):</strong> For brokering non-HHG freight (general cargo, commercial goods)</li>
            <li><strong>Household Goods Broker Authority (OP-1 HHG):</strong> For brokering residential moves</li>
          </ul>
          <p>
            A property broker authority does not authorize you to broker household goods. If you
            want to broker both residential moves and commercial freight, you need both authorities
            — each with its own application and fee.
          </p>

          <h2>Bond Requirements: $75K vs. $75K, But Different Rules</h2>
          <p>
            Both HHG brokers and freight brokers are required to maintain a $75,000 surety bond.
            The bond amount is the same, but the form and protections differ:
          </p>
          <ul>
            <li><strong>HHG Broker Bond (BMC-84):</strong> Protects shippers (consumers) against non-performance and failure to pay carriers. Consumer protection is a primary purpose.</li>
            <li><strong>Freight Broker Bond (BMC-84, same form):</strong> Primarily protects carriers who have not been paid by the broker. Shipper protection is secondary.</li>
          </ul>
          <p>
            In practice, the BMC-84 form is used for both, but the regulatory context and
            enforcement emphasis differ. HHG regulations have more explicit consumer protection
            provisions.
          </p>

          <h2>Consumer Protection Regulations (HHG Only)</h2>
          <p>
            The HHG sector has extensive consumer protection rules that do not apply to freight
            brokers:
          </p>
          <ul>
            <li>Written estimates must be provided and cannot be exceeded by more than 10% without written authorization</li>
            <li>Brokers must disclose they are not a carrier before any transaction</li>
            <li>Carriers must provide a "Your Rights and Responsibilities When You Move" booklet to all shippers</li>
            <li>Binding and non-binding estimates have specific legal definitions and limitations</li>
            <li>Carriers cannot hold household goods hostage for payment above the binding estimate</li>
          </ul>
          <p>
            Freight brokers have far fewer mandatory customer disclosure requirements because their
            customers are businesses that are expected to understand commercial transactions.
          </p>

          <h2>Market Differences</h2>
          <p>
            HHG brokerage is a consumer-facing business. You are marketing to homeowners, renters,
            and apartment dwellers who are searching online for "moving companies near me." The
            typical transaction is $1,500–$10,000 for a single move. Volume comes from high
            transaction counts (dozens to hundreds of moves per month).
          </p>
          <p>
            Freight brokerage is a B2B business. You are building relationships with shippers
            (manufacturers, distributors, e-commerce companies) and carriers. Individual loads can
            range from $500 to $20,000+. Volume can be lower but contract values are higher.
          </p>

          <h2>Carrier Relationships</h2>
          <p>
            HHG brokers work primarily with moving companies — carriers who own box trucks, moving
            vans, and specialized equipment for residential moves. The carrier market is more
            fragmented, with many small owner-operators.
          </p>
          <p>
            Freight brokers work with trucking companies operating semi-trucks and flatbeds,
            accessing capacity through load boards like DAT and Truckstop.com. The freight carrier
            market is larger and more organized.
          </p>

          <h2>Which Should You Choose?</h2>
          <p>
            Your choice depends on your network, background, and target market:
          </p>
          <ul>
            <li>If you have contacts in the residential moving space or experience in relocation services, HHG brokerage is the natural choice.</li>
            <li>If you have relationships with trucking companies or shipping departments at businesses, freight brokerage may be more accessible.</li>
            <li>HHG brokerage typically requires less B2B sales experience — you can market directly to consumers online.</li>
            <li>Freight brokerage requires developing business relationships and often a deeper understanding of freight pricing and load boards.</li>
          </ul>
          <p>
            Many successful brokers eventually pursue both authorities to diversify their revenue.
            But starting with one — the one that aligns with your existing knowledge and network —
            is the practical approach for most new entrants.
          </p>

          <MagickPlatBridge />
          <LeadCapture source="hhg-broker-vs-freight-broker" />

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
