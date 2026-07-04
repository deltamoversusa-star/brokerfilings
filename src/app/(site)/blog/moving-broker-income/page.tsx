// FILE: src/app/blog/moving-broker-income/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import LeadCapture from "@/components/LeadCapture";

export const metadata: Metadata = {
  title: "Moving Broker Income: What You Can Realistically Earn | BrokerFilings",
  description: "How much do moving brokers actually make? Real income breakdowns — dispatch margins, carrier subscriptions, and what drives monthly earnings up or down.",
  alternates: {
    canonical: "https://brokerfilings.com/blog/moving-broker-income",
  },
  openGraph: {
    title: "Moving Broker Income: What You Can Realistically Earn | BrokerFilings",
    description: "How much do moving brokers actually make? Real income breakdowns — dispatch margins, carrier subscriptions, and what drives monthly earnings up or down.",
    url: "https://brokerfilings.com/blog/moving-broker-income",
    type: "article",
    images: [
      {
        url: "https://brokerfilings.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moving Broker Income: What You Can Realistically Earn | BrokerFilings",
      },
    ],
  },
};

const STRIPE_LINK = "https://buy.stripe.com/28E3cv66Y26qaCK40zgA800";

export default function MovingBrokerIncome() {
  return (
    <>
      {/* ── Article Hero ── */}
      <div className="article-hero">
        <div className="article-hero-inner">
          <a href="/blog" className="back-link">← Back to Blog</a>
          <div className="article-tag">Income & Business Model</div>
          <h1>Moving Broker Income: What You Can Realistically Earn</h1>
          <div className="article-meta">7 min read · Updated June 2025</div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="article-body">
        <div className="article-body-inner">

          <p>Moving broker income is one of the least-discussed topics in the transportation industry, mostly because the people earning it have little incentive to talk about it publicly. The business model is straightforward: hold a federal license, connect customers with licensed carriers, collect the margin. What that translates to in monthly dollars depends on volume, margin discipline, and whether you've built a second income stream beyond per-job dispatch. This post breaks down both income streams with real numbers so you can evaluate the opportunity honestly before you commit to the licensing process.</p>

          <h2>How Moving Brokers Actually Get Paid</h2>

          <p>A moving broker earns income by charging the customer more than the carrier charges to execute the move. That spread — the dispatch margin — is the broker's gross profit on each job. There is no revenue sharing with the FMCSA, no franchise royalty, and no inventory cost. The broker's only fixed obligation is maintaining the federal license (annual surety bond premium) and whatever operating costs they incur running the business.</p>

          <p>The second income stream — less commonly discussed but increasingly important for brokers who build carrier networks — is carrier subscription income. Some brokers charge carriers a monthly fee to remain in their active dispatch network. The carrier pays whether or not they receive jobs in a given month. This creates a recurring income base that runs independent of job volume.</p>

          <div className="article-callout">
            Moving broker income comes from two sources: per-job dispatch margin and monthly carrier subscription fees. Most new brokers start with dispatch margin only. The subscription model requires an established carrier network but produces income that doesn't stop when dispatching does.
          </div>

          <h2>Dispatch Margin: The Per-Job Income Breakdown</h2>

          <p>The dispatch margin on any individual job depends on three variables: the size of the move, the distance, and how competitive your market is. A local move might generate $200 to $400 in margin. A long-distance interstate move — which is where the money is in HHG brokerage — typically generates $600 to $1,500 in margin per job, sometimes more on large household moves crossing multiple states.</p>

          <p>Here's what monthly dispatch income looks like at different volume levels:</p>

          <div style={{ overflowX: "auto", margin: "20px 0 28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Monthly Jobs</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Avg. Margin/Job</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Monthly Dispatch Income</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["5 jobs", "$700", "$3,500"],
                  ["10 jobs", "$800", "$8,000"],
                  ["15 jobs", "$850", "$12,750"],
                  ["20 jobs", "$900", "$18,000"],
                  ["25 jobs", "$900", "$22,500"],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "rgba(34,139,74,0.04)" : "transparent" }}>
                    <td style={{ padding: "11px 16px", color: "#0B1F3A", borderBottom: "1px solid #E8ECF0", fontWeight: "600" }}>{row[0]}</td>
                    <td style={{ padding: "11px 16px", color: "#6B7A8D", borderBottom: "1px solid #E8ECF0" }}>{row[1]}</td>
                    <td style={{ padding: "11px 16px", color: "#6B7A8D", borderBottom: "1px solid #E8ECF0" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>These figures are gross margin — what the broker collects after paying the carrier but before operating expenses. A solo operator's meaningful costs are limited: the annual surety bond premium ($900 to $2,000), software and CRM tools, and any advertising spend. A broker running 10 to 15 jobs a month with minimal overhead is looking at net income in the $7,000 to $11,000 range — operating as a one-person business with no employees and no physical assets.</p>

          <h2>Carrier Subscription Income: The Recurring Layer</h2>

          <p>Carrier subscription income works differently from dispatch margin. Instead of earning per job, the broker charges carriers a flat monthly fee to be listed as active in the broker's dispatch network. Carriers value this because it gives them consistent access to inbound job flow without running their own customer acquisition. The broker values it because it produces income regardless of how many jobs close in a given month.</p>

          <p>A standard carrier subscription runs $99 per month. The broker retains $89.10 of that after platform fees. The math at different network sizes:</p>

          <div style={{ background: "#E8F5EE", border: "1px solid rgba(34,139,74,0.2)", borderRadius: "12px", padding: "24px 28px", margin: "24px 0" }}>
            {[
              ["10 active carrier subscriptions", "$891/mo"],
              ["20 active carrier subscriptions", "$1,782/mo"],
              ["30 active carrier subscriptions", "$2,673/mo"],
              ["50 active carrier subscriptions", "$4,455/mo"],
            ].map(([label, value], i, arr) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(34,139,74,0.15)" : "none" }}>
                <span style={{ fontSize: "14px", color: "#6B7A8D" }}>{label}</span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "#228B4A" }}>{value}</span>
              </div>
            ))}
          </div>

          <p>A broker with 20 active carriers and 10 jobs per month is earning $1,782 in subscription income plus $8,000 in dispatch margin — $9,782 per month total from a business with no physical overhead. Scale the carrier network to 50 and close 15 jobs, and you're looking at $4,455 in subscriptions plus $12,750 in dispatch — $17,205 per month. These aren't ceiling figures. They're arithmetic based on specific, controllable inputs.</p>

          <h2>What Separates High-Income Brokers from Average Ones</h2>

          <p>Volume and margin are the obvious levers, but the brokers who consistently earn at the high end of the range share a few specific habits that others don't:</p>

          <ul>
            <li><strong>They focus on interstate moves.</strong> Local moves are easier to book but the margins are thin — often $200 to $300. Long-distance interstate moves generate $700 to $1,500+ per job. The same sales effort applied to larger jobs produces 3 to 5 times the income per transaction.</li>
            <li><strong>They build realtor referral networks.</strong> Realtors are a direct pipeline to people who are about to move. A broker with 10 active realtor referral relationships generating 2 to 3 referrals each per month has a sustainable inbound lead source that costs nothing per lead after the relationship is established.</li>
            <li><strong>They protect their margins.</strong> New brokers often undercut their quotes to win jobs. Experienced brokers know their floor and hold it. A $200 reduction in margin to win a job that would have closed anyway costs $200 in income — multiplied across 10 jobs a month, that's $2,000 in unnecessary margin erosion.</li>
            <li><strong>They treat carrier relationships as assets.</strong> Carriers who trust a broker send referrals, prioritize that broker's jobs, and stay in subscription networks longer. A reliable carrier network is worth more than the subscription fee it generates — it also produces better service outcomes for customers, which drives repeat and referral business.</li>
          </ul>

          <h2>Seasonal Patterns and Income Variability</h2>

          <p>Moving brokerage is a seasonal business. The peak season runs from May through September, driven by school calendars, lease cycles, and weather. During peak months, a broker who closes 10 jobs in February might close 18 to 22 jobs in June and July. Income during peak season can run 60 to 80 percent higher than the annual monthly average.</p>

          <p>The inverse is also true: January and February are the slowest months in the moving industry. Brokers who rely entirely on dispatch margin feel this seasonality acutely. Brokers with established carrier subscription networks have a floor — subscription income doesn't dip in January because carriers are still paying their monthly fee regardless of job volume.</p>

          <p>Planning for seasonality matters from day one. Brokers who launch in Q1 are entering the slow season — which is actually useful for building carrier networks and refining operations before peak season volume hits. Brokers who launch in April or May enter during the ramp-up and can generate meaningful early income, but have less time to establish systems before the busiest months arrive.</p>

          <h2>The Startup Cost to Income Ratio</h2>

          <p>One of the reasons HHG brokerage attracts serious attention as a business model is the relationship between what it costs to start and what it can earn. Total startup costs — LLC formation, FMCSA OP-1 filing, BOC-3 process agent, and first-year surety bond premium — run under $2,500 when using a done-for-you filing service. That's the full cost to be federally licensed and legally operational.</p>

          <p>Compare that to the income potential: a broker closing 10 jobs per month at $800 average margin earns $8,000 in the first month of full operation. The startup cost is recovered in the first 10 days of active operation at that volume. No franchise, no product business, and very few service businesses offer that ratio of initial investment to early income potential.</p>

          <p>For a full breakdown of every filing required to get licensed — and what each one costs — see the <Link href="/blog" style={{ color: "#228B4A", textDecoration: "none" }}>BrokerFilings resource library</Link>.</p>

          {/* ── Lead Capture ── */}
          <LeadCapture source="moving-broker-income" />

          {/* ── CTA ── */}
          <div className="article-cta">
            <h3>Ready to start earning as a licensed moving broker?</h3>
            <p>We handle every filing for $1,799 — LLC guidance, EIN, OP-1, BOC-3, surety bond referral, and all government fees included. Authority in 4 to 6 weeks.</p>
            <a
              href={STRIPE_LINK}
              className="btn-cta-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start My Application
            </a>
          </div>

        </div>
      </div>
    </>
  );
}