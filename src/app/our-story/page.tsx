import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story | Erica Dorsey | BrokerFilings',
  description:
    'Erica Dorsey filed her own FMCSA broker authority from scratch, made $200K her first moving season, and built BrokerFilings so the next person would not have to figure it out alone.',
  openGraph: {
    title: 'Our Story | Erica Dorsey | BrokerFilings',
    description:
      'Erica Dorsey filed her own FMCSA broker authority from scratch, made $200K her first moving season, and built BrokerFilings so the next person would not have to figure it out alone.',
    url: 'https://brokerfilings.com/our-story',
    type: 'article',
    images: [{ url: 'https://brokerfilings.com/og-image.jpg', width: 1200, height: 630, alt: 'Our Story | Erica Dorsey | BrokerFilings' }],
  },
  alternates: { canonical: 'https://brokerfilings.com/our-story' },
}

const STRIPE_LINK = 'https://buy.stripe.com/28E3cv66Y26qaCK40zgA800'

export default function OurStory() {
  return (
    <>
      {/* HERO */}
      <div className="article-hero">
        <div className="article-hero-inner">
          <Link href="/" className="back-link">← Back to Home</Link>
          <div className="article-tag">The Founder Story</div>
          <h1>I Filed My Own FMCSA Authority From Scratch. Then I Built BrokerFilings.</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginTop: '20px', maxWidth: '640px' }}>
            How a quiet conversation in Florida led to $200K in a single moving season — and why
            Erica Dorsey built the filing service she needed when she started out.
          </p>
          <div style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
            Erica Dorsey — Founder, BrokerFilings &amp; MagickPlat · Tax Accountant · HHG Broker
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{
        background: '#0B1F3A',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        padding: '48px 40px',
      }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
            {[
              { num: '$200K', label: 'First Moving Season' },
              { num: '10',   label: 'Years in HHG Industry' },
              { num: '1',    label: 'Carrier to Start' },
              { num: '2',    label: 'Platforms Built' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '38px', fontWeight: 900, color: 'var(--gold)', lineHeight: 1.1, fontFamily: 'var(--font-playfair)' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <div className="article-body">
        <div className="article-body-inner">

          {/* Section 1 */}
          <div className="section-label">The Quiet Word on the Street</div>
          <p>
            Household goods brokerage has been a real, federally licensed business for decades. But
            in Florida, for a long time, it was something close to a secret — passed between people
            who knew, almost never talked about publicly. You heard about it the way you hear about
            the best opportunities: from someone who was already doing it.
          </p>
          <p>
            I heard about it from a colleague who understood the opportunity but not the process. He
            wanted to start his own brokerage. He knew the business could work. What he did not know
            was how to get it started legally — the filings, the requirements, the exact sequence of
            steps that takes you from idea to federally licensed operator.
          </p>
          <p>
            That part I knew how to do. I am a tax accountant. Turning someone&apos;s idea into a
            functioning legal business is what I do for clients every day. So I researched the FMCSA
            requirements, learned the filing process from scratch, and got everything right the first
            time. He started his brokerage. I started mine.
          </p>
          <div className="article-callout">
            &ldquo;He knew the opportunity. I knew how to start the business. We both launched
            brokerages. And I never forgot what it took to figure that process out alone.&rdquo;
          </div>

          {/* Section 2 */}
          <div className="section-label">The First Moving Season</div>
          <p>
            I went into my first moving season with one carrier. One crew I trusted completely —
            people who showed up to every job, no questions asked, and handled every client&apos;s
            belongings the way I would want mine handled. I paid them on time. Every time. Without
            exception.
          </p>
          <p>
            While I had one main carrier I depended on, I also researched additional carriers
            directly through the FMCSA database — the same public resource I now tell every new
            broker to use. I built the network methodically, verified every carrier&apos;s authority,
            and grew the operation job by job.
          </p>
          <p>
            By the end of that first season I had made $200,000. Not a projection. Not a best-case
            scenario from a course. A real result from a business I had researched, filed, and
            operated myself — starting with one carrier and a process I had learned from scratch. I
            went on to own a car dealership. I did not need to come back to this business. I chose to.
          </p>

          {/* Section 3 */}
          <div className="section-label">Why I Built BrokerFilings</div>
          <p>
            BrokerFilings exists because I remember exactly what it felt like to figure out the
            FMCSA filing process alone.
          </p>
          <p>
            The filings themselves are not complicated. The OP-1, the BOC-3, the surety bond — each
            one is manageable on its own. The problem is coordination. Every document needs to use
            exactly the same business name, the same EIN, filed in exactly the right sequence with
            exactly the right parties. A single punctuation difference between your LLC registration
            and your bond causes a rejection. The FMCSA does not tell you clearly what went wrong.
            You find out when the rejection arrives and you start the clock over — and lose the $300
            filing fee.
          </p>
          <p>
            I got it right the first time because I am a tax accountant and I knew what to look for.
            Most people do not have that background. BrokerFilings handles every filing for $1,799
            flat — all government fees included. It is the service I would have used in year one if
            it had existed. I built it so the next person does not have to do what I did.
          </p>
          <div className="article-callout">
            &ldquo;The service I would have used in year one did not exist. So I built it.&rdquo;
          </div>

          {/* Section 4 */}
          <div className="section-label">The Connection to MagickPlat</div>
          <p>
            After ten years in HHG brokerage I also saw the operational problems nobody had solved —
            brokers and carriers on the same mismatched software, no passive income stream, no
            realtor referral pipeline built in. That became MagickPlat: the operating platform I
            wished I had when I ran my own brokerage.
          </p>
          <p>
            BrokerFilings gets you the license. MagickPlat runs the business after you are approved.
            Both built by the same person who did every part of this from scratch.
          </p>
          <p style={{ marginTop: '32px', fontStyle: 'italic', color: 'var(--gold)' }}>
            — Erica Dorsey, Founder, BrokerFilings &amp; MagickPlat
          </p>

          {/* CTA */}
          <div className="article-cta">
            <h3>Start Your Application Today</h3>
            <p>The filing service built by someone who did it first.</p>
            <a
              href={STRIPE_LINK}
              className="btn-cta-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start My Application — $1,799
            </a>
            <div style={{ marginTop: '16px' }}>
              <a
                href="https://magickplat.com/our-story"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                Learn about MagickPlat →
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
