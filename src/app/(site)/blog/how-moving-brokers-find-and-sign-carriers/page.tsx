// FILE: src/app/blog/how-moving-brokers-find-and-sign-carriers/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import LeadCapture from "@/components/LeadCapture";

export const metadata: Metadata = {
  title: "How Moving Brokers Find and Sign Carriers — The Real Process | BrokerFilings",
  description: "How moving brokers find and sign carriers — the actual outreach process, what carriers want, how to vet them, and what a signed carrier agreement covers.",
  alternates: {
    canonical: "https://brokerfilings.com/blog/how-moving-brokers-find-and-sign-carriers",
  },
  openGraph: {
    title: "How Moving Brokers Find and Sign Carriers — The Real Process | BrokerFilings",
    description: "How moving brokers find and sign carriers — the actual outreach process, what carriers want, how to vet them, and what a signed carrier agreement covers.",
    url: "https://brokerfilings.com/blog/how-moving-brokers-find-and-sign-carriers",
    type: "article",
    images: [
      {
        url: "https://brokerfilings.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How Moving Brokers Find and Sign Carriers — The Real Process | BrokerFilings",
      },
    ],
  },
};

const STRIPE_LINK = "https://buy.stripe.com/28E3cv66Y26qaCK40zgA800";
const COURSE_LINK = "https://brokerfilings.com/course";

export default function HowMovingBrokersFindAndSignCarriers() {
  return (
    <>
      {/* ── Article Hero ── */}
      <div className="article-hero">
        <div className="article-hero-inner">
          <a href="/blog" className="back-link">← Back to Blog</a>
          <div className="article-tag">Operations</div>
          <h1>How Moving Brokers Find and Sign Carriers — The Real Process</h1>
          <div className="article-meta">8 min read · Updated July 2026</div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="article-body">
        <div className="article-body-inner">

          <p>The carrier network is the operational foundation of every HHG brokerage — and building one is the first thing new brokers need to figure out after their authority is approved. How moving brokers find and sign carriers isn't covered in any FMCSA document. It's entirely a sales and relationship-building process that happens outside the regulatory framework, and the brokers who get it right in the first 30 days are booking jobs consistently by day 45. Those who don't spend months scrambling to find available carriers mid-booking, which is the worst possible time to be building a network. This guide covers the actual process: where to find carriers, how to approach them, what they need from you, and what a signed carrier agreement should include.</p>

          <h2>Where Carriers Actually Come From</h2>

          <p>Every carrier that operates legally in the household goods space is registered in the FMCSA's database. That database is publicly searchable at safer.fmcsa.dot.gov — you can filter by authority type, operating status, and state. A carrier with an active HHG motor carrier authority and valid insurance on file is a candidate for your network. The database is the starting point, not a resource most new brokers think to use systematically.</p>

          <p>The practical challenge is that searching the FMCSA database manually — filtering by state, pulling contact information, cross-referencing insurance status — takes significant time before you make a single outreach call. This is where broker-specific platforms like MagickPlat solve a real problem: the carrier database is pre-loaded and organized by state, with contact information attached, so the research phase is eliminated and outreach starts immediately.</p>

          <div className="article-callout">
            You can only sign carrier agreements and dispatch jobs after your FMCSA broker authority is active. Carrier outreach can begin before your authority is approved — relationship-building conversations are not regulated — but no formal agreements or job dispatching can happen until your Certificate of Registration is in hand and your status reads "Active" in SAFER.
          </div>

          <p>Beyond the FMCSA database, carriers also find brokers. A broker with an established reputation, consistent job flow, and prompt payment becomes known in local carrier communities relatively quickly. In the early months, you're the one making all the calls. By month six or twelve, if your operation is running well, some of that reverses — carriers reach out to you. That inbound dynamic takes time to develop, which is exactly why systematic outreach in month one matters so much.</p>

          <h2>What Carriers Actually Want From a Broker Relationship</h2>

          <p>Understanding what carriers are looking for makes every outreach call more effective. Carriers aren't evaluating your branding or your website. They're evaluating three things: whether you have consistent job volume to offer, whether you pay promptly and accurately, and whether working with you is operationally simple or complicated.</p>

          <p><strong>Consistent job flow.</strong> A new broker doesn't have a track record, which means you can't promise volume you don't have yet. What you can offer is a clear picture of your target market, your lead sources, and how you intend to grow the pipeline. Carriers who take relationships with new brokers are betting on the broker's execution — show them a credible plan rather than inflated projections.</p>

          <p><strong>Prompt, accurate payment.</strong> Payment disputes and slow processing are the most common reasons carriers end broker relationships. Establish from the first conversation how payment works: what triggers payment (delivery confirmation, signed paperwork, or another milestone), how long after that milestone payment is sent, and what method is used. Carriers who know exactly when and how they'll be paid are far more reliable partners than those left guessing.</p>

          <p><strong>Simple operations.</strong> Every additional step in the booking and dispatch process is friction. Carriers want clear job details upfront — origin, destination, access notes, inventory type, pickup window — not a back-and-forth of clarifying questions the day before the move. Brokers who send complete, organized booking confirmations build reputations for being easy to work with. That reputation matters when a carrier has two jobs to choose from on the same day.</p>

          <h2>The Outreach Call: What to Cover and in What Order</h2>

          <p>A carrier outreach call has a specific structure that works better than a general introduction. The goal of the first call is not to sign an agreement — it's to establish whether there's a fit worth pursuing. Cover these points in order:</p>

          <ul>
            <li><strong>Who you are and your authority status.</strong> State your MC number and that your HHG broker authority is active. Carriers who've been burned by unlicensed operators will ask. Have it ready.</li>
            <li><strong>Your target market and geography.</strong> Be specific — not "we work nationwide" but "we focus on interstate moves originating in [state], primarily to the Southeast and Midwest." Carriers operate in specific lanes and want to know if your jobs overlap with where they already run.</li>
            <li><strong>Your volume expectations.</strong> Be honest about where you are. A new broker saying "I'm building toward 10 jobs per month in your lanes within 60 days" is more credible than one claiming 30 jobs they don't have yet.</li>
            <li><strong>Payment terms.</strong> Lay it out clearly before they ask. Payment terms are the first thing experienced carriers want confirmed.</li>
            <li><strong>The agreement process.</strong> Let them know you'll send a standard carrier-broker agreement for review. Don't ask for a verbal commitment on the first call — let the relationship develop through the paperwork process.</li>
          </ul>

          <p>Most outreach calls run 10 to 15 minutes. You're not closing a sale — you're opening a working relationship. The brokers who treat carrier outreach as a sales pitch tend to oversell and underdeliver. The ones who treat it as a professional introduction build the kind of trust that produces long-term partnerships.</p>

          <h2>Vetting Carriers Before You Sign Anything</h2>

          <p>Not every carrier who agrees to work with you should be in your network. Before sending a carrier agreement, verify four things in the FMCSA SAFER database and the carrier's insurance documentation:</p>

          <ul>
            <li><strong>Active HHG motor carrier authority.</strong> Search their MC or DOT number in SAFER and confirm authority status reads "Active." A carrier with pending, inactive, or revoked authority cannot legally execute moves you broker.</li>
            <li><strong>Current cargo insurance.</strong> HHG carriers are required to maintain cargo insurance covering household goods. Confirm the insurance tab in SAFER shows current coverage — not just that a policy exists, but that it hasn't lapsed.</li>
            <li><strong>No active out-of-service orders.</strong> SAFER shows whether a carrier has active out-of-service designations. Dispatching a carrier under an out-of-service order creates liability that flows back to your brokerage.</li>
            <li><strong>Operating history.</strong> A carrier registered last week with no operating history is a higher risk than one with two years of active authority and no safety violations. The SAFER database shows registration date and safety record. Factor both into your decision.</li>
          </ul>

          <p>This verification takes five minutes per carrier. Document it — a date-stamped record of your vetting process is evidence of due diligence if a claim or dispute arises from a carrier's performance on a job you dispatched.</p>

          <h2>What a Carrier-Broker Agreement Should Cover</h2>

          <p>A carrier-broker agreement is not optional — it's the legal framework for every job you dispatch to that carrier. At minimum, your agreement should specify:</p>

          <ul>
            <li>The roles and responsibilities of each party — broker arranges, carrier executes, neither operates outside that scope</li>
            <li>Payment terms: amount, trigger event, method, and timeline</li>
            <li>Insurance requirements: minimum cargo coverage the carrier must maintain throughout the agreement</li>
            <li>Dispute resolution process for claims, damaged goods, or delivery failures</li>
            <li>Non-solicitation terms: protections preventing the carrier from directly contacting your customers to bypass the broker relationship on future moves</li>
            <li>Termination conditions: how either party ends the agreement and what notice is required</li>
          </ul>

          <p>A carrier-broker agreement doesn't need to be 20 pages to be effective. A clear, concise agreement that both parties understand and have actually read is more useful than a comprehensive legal document neither party references. If you're building your first template, have an attorney familiar with FMCSA regulations review it before you start using it at scale.</p>

          <h2>Building the Network Systematically, Not Reactively</h2>

          <p>The brokers who struggle with carrier relationships almost always built their network reactively — searching for carriers when a customer was already waiting on a quote, signing agreements under pressure, and skipping vetting steps because there wasn't time. The brokers who run consistent operations built their network before they needed it.</p>

          <p>Target 15 to 20 vetted, signed carrier relationships in your primary operating geography within the first 30 days of active authority. That's a realistic number that provides enough coverage for most customer requests without overwhelming your relationship management capacity. As your job volume grows, your carrier network should grow with it — not scramble to catch up.</p>

          <p>BrokerFilings was built by Erica Dorsey, a tax accountant who built her own carrier network from scratch after filing her FMCSA authority personally — and who documented the process because most new brokers are left to figure it out without a clear framework. You can read more about that background on the <Link href="/our-story" style={{ color: "#228B4A", textDecoration: "none" }}>BrokerFilings founder page</Link>.</p>

          <p>For a breakdown of what the first 90 days of building a carrier network and booking jobs actually looks like, see the <Link href="/blog/first-90-days-as-an-hhg-broker" style={{ color: "#228B4A", textDecoration: "none" }}>first 90 days as an HHG broker guide</Link>. For the compliance obligations that apply every time you dispatch a carrier, see the <Link href="/blog/hhg-broker-compliance-checklist" style={{ color: "#228B4A", textDecoration: "none" }}>HHG broker compliance checklist</Link> in the BrokerFilings blog.</p>

          {/* ── Lead Capture ── */}
          <LeadCapture source="how-moving-brokers-find-and-sign-carriers" />

          {/* ── CTA ── */}
          <div className="article-cta">
            <h3>Already licensed? Get the carrier outreach playbook.</h3>
            <p>The Broker Operations Course covers carrier outreach scripts, vetting processes, agreement templates, and dispatch systems across 42 lessons — built for licensed brokers ready to build the operation.</p>
            <a
              href={COURSE_LINK}
              className="btn-cta-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the Broker Operations Course — $497
            </a>
            <p style={{ textAlign: "center", marginTop: "20px", fontSize: "13px", color: "#64748B" }}>
              Not licensed yet?{" "}
              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#228B4A", fontWeight: "600" }}
              >
                Start with the Standard package — $1,799 →
              </a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}