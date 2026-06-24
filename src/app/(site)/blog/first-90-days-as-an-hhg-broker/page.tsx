// FILE: src/app/blog/first-90-days-as-an-hhg-broker/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import LeadCapture from "@/components/LeadCapture";

export const metadata: Metadata = {
  title: "First 90 Days as an HHG Broker: What to Actually Do | BrokerFilings",
  description: "Your first 90 days as an HHG broker determine everything that follows. Here's the carrier, lead, and dispatch sequence that actually produces income.",
  alternates: {
    canonical: "https://brokerfilings.com/blog/first-90-days-as-an-hhg-broker",
  },
  openGraph: {
    title: "First 90 Days as an HHG Broker: What to Actually Do | BrokerFilings",
    description: "Your first 90 days as an HHG broker determine everything that follows. Here's the carrier, lead, and dispatch sequence that actually produces income.",
    url: "https://brokerfilings.com/blog/first-90-days-as-an-hhg-broker",
    type: "article",
    images: [
      {
        url: "https://brokerfilings.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "First 90 Days as an HHG Broker: What to Actually Do | BrokerFilings",
      },
    ],
  },
};

const STRIPE_LINK = "https://buy.stripe.com/28E3cv66Y26qaCK40zgA800";
const COURSE_LINK = "https://brokerfilings.com/course";

export default function First90DaysAsAnHhgBroker() {
  return (
    <>
      {/* ── Article Hero ── */}
      <div className="article-hero">
        <div className="article-hero-inner">
          <a href="/blog" className="back-link">← Back to Blog</a>
          <div className="article-tag">Operations</div>
          <h1>First 90 Days as an HHG Broker: What to Actually Do</h1>
          <div className="article-meta">8 min read · Updated June 2026</div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="article-body">
        <div className="article-body-inner">

          <p>The first 90 days as an HHG broker determine almost everything that follows. Brokers who use this window to build a carrier network, establish lead sources, and create disciplined dispatch habits tend to be earning consistent monthly income by month four. Brokers who wait — who get their authority and then figure things out reactively — often spend their first 90 days searching for carriers mid-job and losing customers to slow response times. This guide breaks the first 90 days into three concrete 30-day phases, with specific targets for each one.</p>

          <h2>Days 1–30: Build Your Carrier Network Before You Need It</h2>

          <p>The single biggest mistake new brokers make is waiting until they have a customer to start looking for a carrier. By the time a customer is asking for a quote, you need an answer in hours, not days. The first 30 days should be spent building a working carrier list before that pressure exists.</p>

          <p>Target 15 to 20 vetted carrier relationships in your primary operating states by the end of month one. This means more than collecting names — it means actual phone conversations confirming their service area, typical pricing structure, capacity, and insurance status. A carrier database that's pre-loaded by state — which platforms like MagickPlat provide — removes the research phase entirely and lets you go straight to outreach calls instead of spending week one just finding who to call.</p>

          <div className="article-callout">
            A carrier relationship isn't established until you've had a real conversation and confirmed their licensing, insurance, and service area. A name on a spreadsheet is not a working relationship — it's a lead you haven't called yet.
          </div>

          <p>By day 30, you should also have your quoting process built — a clear method for taking a customer's move details and generating a price within minutes, not hours. Customers requesting moving quotes typically reach out to three to five companies; response speed is one of the strongest predictors of who wins the job.</p>

          <h2>Days 31–60: Turn On Lead Sources and Book Your First Jobs</h2>

          <p>With a working carrier network in place, month two shifts to generating actual customer inquiries. Two channels consistently outperform others for new HHG brokers: service ads and realtor referral relationships.</p>

          <p>Service ads work on a pay-per-lead model rather than pay-per-click, which means you're not paying for browsing — you're paying for someone who explicitly requested a moving quote. Budget expectations vary by market, but new brokers typically see workable lead volume starting around $300 to $600 per month in ad spend, scaling up as conversion data improves.</p>

          <p>Realtor referrals work differently — they're relationship-built, not ad-spend-built, which means slower to start but cheaper per lead once established. A realtor whose clients are buying or selling homes is a direct pipeline to people who are about to move. Ten realtor relationships generating two to three referrals each per month is a sustainable lead source that costs nothing per lead beyond the relationship-building itself.</p>

          <div style={{ overflowX: "auto", margin: "20px 0 28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Lead Source</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Time to Results</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Service ads", "1–2 weeks to first leads", "$300–$600/mo to start"],
                  ["Realtor referral network", "30–60 days to first referral", "Relationship cost only"],
                  ["Direct customer outreach", "Immediate", "Time investment only"],
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

          <p>By day 60, a reasonable target is 3 to 6 booked jobs, even if the volume is modest. The goal in this phase isn't maximum income — it's proving the full loop works: lead comes in, you quote it, you book a carrier, the move happens, the customer pays, the carrier gets paid. Every step of that loop needs to function smoothly before you scale volume.</p>

          <h2>Days 61–90: Refine Pricing, Protect Margins, Add Carrier Subscriptions</h2>

          <p>By month three, you have enough completed jobs to know your actual numbers — not projected numbers, real ones. This is the point to review your average margin per job and identify where you're underpricing. New brokers frequently discount too aggressively to win early jobs; by month three, you should have enough booked volume to hold firmer pricing without losing every price-sensitive lead.</p>

          <p>This is also the right window to introduce carrier subscription income if you're using a platform that supports it. Carriers pay a recurring monthly fee — commonly $99, with the broker retaining the majority after platform fees — to stay active in your dispatch network regardless of job volume in a given month. Twenty carrier subscriptions at that structure adds roughly $1,780 in monthly income that doesn't depend on how many jobs close that month. Introducing this in month three, once you have an established carrier network from days 1–30, is far easier than trying to build subscriptions and a carrier network simultaneously from zero.</p>

          <p>By day 90, the realistic target is 8 to 12 jobs per month with a stable carrier network and at least one functioning lead source generating consistent inbound interest. This isn't the ceiling — it's the foundation that month four and beyond builds on.</p>

          <h2>What Derails the First 90 Days</h2>

          <p>A few patterns consistently slow brokers down in this window, and they're avoidable once you know to watch for them:</p>

          <ul>
            <li><strong>Treating carrier outreach as a one-time task.</strong> Carrier availability changes constantly. A carrier who had capacity in week one may be full in week six. Ongoing outreach, not a single list-building sprint, is what keeps your network usable.</li>
            <li><strong>Underpricing to win early jobs.</strong> The instinct to discount heavily for the first few customers is understandable, but it sets a pricing precedent that's hard to walk back. Price at your real margin from day one, even if it means fewer jobs in week two.</li>
            <li><strong>Spreading lead generation too thin.</strong> Trying Google ads, realtor outreach, social media, and cold outreach simultaneously in month one usually means none of them get the attention needed to work. Pick one or two channels and commit before adding more.</li>
            <li><strong>No documented process for repeat tasks.</strong> Quoting, carrier confirmation, and customer follow-up should have a consistent format by day 30 — not reinvented for every job. This is what allows volume to scale without proportional time increases.</li>
          </ul>

          <h2>Where the Operational Playbook Comes From</h2>

          <p>BrokerFilings was built by Erica Dorsey, a tax accountant who filed her own FMCSA household goods broker authority from scratch before building the licensing service — and who then spent her own first 90 days figuring out carrier outreach, lead generation, and pricing discipline the hard way. You can read more about that background on the <Link href="/our-story" style={{ color: "#228B4A", textDecoration: "none" }}>BrokerFilings founder page</Link>.</p>

          <p>If you're already licensed and want the structured version of everything covered in this post — carrier outreach scripts, realtor relationship templates, dispatch workflows, and the pricing framework that protects margins from day one — the Broker Operations Course covers all of it across 42 lessons, built specifically for brokers who already have their authority and need the operational system. For licensing-stage readers still working through FMCSA requirements, see the <Link href="/blog/how-to-become-an-hhg-broker" style={{ color: "#228B4A", textDecoration: "none" }}>how to become an HHG broker guide</Link> and the <Link href="/blog/moving-broker-income" style={{ color: "#228B4A", textDecoration: "none" }}>moving broker income breakdown</Link> in the BrokerFilings blog.</p>

          {/* ── Lead Capture ── */}
          <LeadCapture source="first-90-days-as-an-hhg-broker" />

          {/* ── CTA ── */}
          <div className="article-cta">
            <h3>Already licensed? Get the operational playbook.</h3>
            <p>The Broker Operations Course covers carrier outreach, realtor relationships, dispatch, and pricing across 42 lessons — built for brokers ready to build the operation, not file paperwork.</p>
            <a
              href={COURSE_LINK}
              className="btn-cta-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the Broker Operations Course — $497
            </a>
            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px', color: '#64748B' }}>
              Not licensed yet? <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#228B4A", fontWeight: "600" }}>Start with the Standard package — $1,799 →</a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}