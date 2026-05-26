import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Moving Broker Authority Blog — FMCSA Guides & Resources',
  description:
    'Learn how to get your FMCSA Household Goods Broker Authority, understand licensing requirements, costs, and timelines. Expert guides for aspiring moving brokers.',
  openGraph: {
    title: 'Moving Broker Authority Blog — FMCSA Guides & Resources',
    description:
      'Expert guides on starting a licensed HHG moving brokerage — FMCSA authority, costs, requirements, and more.',
    url: 'https://brokerfilings.com/blog',
  },
  alternates: { canonical: 'https://brokerfilings.com/blog' },
}

const STRIPE_LINK = 'https://buy.stripe.com/28E3cv66Y26qaCK40zgA800'

const articles = [
  {
    slug: 'what-is-a-boc-3-filing-for-moving-brokers',
    title: 'What Is a BOC-3 Filing for Moving Brokers?',
    excerpt:
      'Before the FMCSA approves your broker authority, you need a BOC-3 on file. Here is exactly what it is, why it is required, and how to get it done correctly.',
    tag: 'Filing Guide',
  },
  {
    slug: 'ideas-for-small-business',
    title: 'Ideas for Small Business: Why Moving Brokerage Beats Most Side Hustles',
    excerpt:
      'Most small business idea lists give you the same recycled options. Here is one that rarely makes the list — federally licensed, under $2,500 to start, with two income streams from day one.',
    tag: 'Entrepreneur Guide',
  },
  {
    slug: 'how-to-get-fmcsa-broker-authority',
    title: 'How to Get FMCSA Broker Authority for a Moving Company',
    excerpt:
      'A step-by-step guide to applying for your FMCSA Household Goods Broker Authority — from entity formation to the OP-1 filing and beyond.',
    tag: 'FMCSA Authority',
  },
  {
    slug: 'how-much-does-it-cost-to-start-a-moving-brokerage',
    title: 'How Much Does It Cost to Start a Moving Brokerage?',
    excerpt:
      'Complete breakdown of every cost involved in launching a licensed HHG moving brokerage — government fees, bonds, insurance, and filing services.',
    tag: 'Startup Costs',
  },
  {
    slug: 'moving-broker-license-requirements',
    title: 'Moving Broker License Requirements: What You Actually Need',
    excerpt:
      'The federal and state requirements for operating a household goods moving brokerage legally — including the FMCSA authority, surety bond, and BOC-3.',
    tag: 'Licensing',
  },
  {
    slug: 'hhg-broker-vs-freight-broker',
    title: 'HHG Broker vs. Freight Broker: Key Differences Explained',
    excerpt:
      'Household goods brokers and freight brokers both need FMCSA authority, but the rules, bonds, and regulations are very different. Here is what sets them apart.',
    tag: 'Industry Guide',
  },
  {
    slug: 'how-long-does-fmcsa-approval-take',
    title: 'How Long Does FMCSA Broker Authority Approval Take?',
    excerpt:
      'The FMCSA does not process applications overnight. Here is the realistic timeline for broker authority approval — and what can speed it up or slow it down.',
    tag: 'FMCSA Process',
  },
]

export default function BlogIndexPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="hero" style={{ padding: '80px 40px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">Moving Broker Resources</div>
          <h1 style={{
            fontFamily: 'var(--font-playfair), Playfair Display, serif',
            fontSize: '44px',
            fontWeight: 900,
            color: 'var(--white)',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            FMCSA Authority Guides<br />
            <span style={{ color: 'var(--gold)' }}>for Moving Brokers</span>
          </h1>
          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: '560px',
          }}>
            Everything you need to know about starting a licensed household goods moving brokerage
            — from the first filing to your first booking.
          </p>
        </div>
      </div>

      {/* ARTICLES */}
      <section style={{ background: 'var(--off-white)', padding: '72px 40px' }}>
        <div className="section-inner">
          <div className="blog-grid">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="blog-card">
                <div className="blog-card-tag">{article.tag}</div>
                <div className="blog-card-title">{article.title}</div>
                <div className="blog-card-excerpt">{article.excerpt}</div>
                <div className="blog-card-read">Read article →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Get Your <span>Broker Authority?</span></h2>
          <p>
            Skip the research and get it done right the first time. We handle every FMCSA filing
            for a flat $1,799 — all government fees included.
          </p>
          <a
            href={STRIPE_LINK}
            className="btn-cta-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start My Application — $1,799
          </a>
          <div className="cta-guarantee">All government fees included · No hidden costs · Support until approved</div>
        </div>
      </div>
    </>
  )
}
