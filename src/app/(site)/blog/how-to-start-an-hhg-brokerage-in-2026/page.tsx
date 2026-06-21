// FILE: src/app/blog/how-to-start-an-hhg-brokerage-in-2026/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import LeadCapture from "@/components/LeadCapture";

export const metadata: Metadata = {
  title: "How to Start an HHG Brokerage in 2026: Full FMCSA Guide | BrokerFilings",
  description: "Learn how to start an HHG brokerage in 2026 — LLC, EIN, OP-1, surety bond, BOC-3. Real costs, real timeline, built by someone who did it first.",
  alternates: {
    canonical: "https://brokerfilings.com/blog/how-to-start-an-hhg-brokerage-in-2026",
  },
  openGraph: {
    title: "How to Start an HHG Brokerage in 2026: Full FMCSA Guide | BrokerFilings",
    description: "Learn how to start an HHG brokerage in 2026 — LLC, EIN, OP-1, surety bond, BOC-3. Real costs, real timeline, built by someone who did it first.",
    url: "https://brokerfilings.com/blog/how-to-start-an-hhg-brokerage-in-2026",
    type: "article",
    images: [
      {
        url: "https://brokerfilings.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How to Start an HHG Brokerage in 2026: Full FMCSA Guide | BrokerFilings",
      },
    ],
  },
};

const STRIPE_LINK = "https://buy.stripe.com/28E3cv66Y26qaCK40zgA800";

export default function HowToStartAnHhgBrokerageIn2026() {
  return (
    <>
      {/* ── Article Hero ── */}
      <div className="article-hero">
        <div className="article-hero-inner">
          <a href="/blog" className="back-link">← Back to Blog</a>
          <div className="article-tag">Getting Started</div>
          <h1>How to Start an HHG Brokerage in 2026: Full FMCSA Guide</h1>
          <div className="article-meta">9 min read · Updated June 2026</div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="article-body">
        <div className="article-body-inner">

          <p>If you want to know how to start an HHG brokerage in 2026, the federal process hasn't changed — but the market has. Americans still move roughly 27 million times per year, interstate moves continue to generate $600 to $1,500 in broker margin per job, and the total cost to get federally licensed remains under $2,500. What has changed is the availability of information, the accessibility of broker software platforms, and the number of people who have figured out this business model works. This guide covers every step required to go from zero to an active FMCSA household goods broker authority — with real numbers, real costs, and the exact sequence that gets it done in 4 to 6 weeks.</p>

          <h2>What an HHG Brokerage Is — and What It Isn't</h2>

          <p>A household goods (HHG) broker is a federally licensed intermediary. You arrange the transportation of personal property — furniture, household items, personal effects — between a shipper (the customer moving) and a licensed motor carrier (the company with trucks and crews). You do not own a truck. You do not employ movers. You do not take physical possession of anyone's belongings.</p>

          <p>Your role is to find the customer, quote the job, book a qualified carrier, and manage the transaction. The difference between what you charge the customer and what you pay the carrier is your gross margin. On a $2,800 customer quote with a $1,900 carrier cost, you keep $900. Close 10 of those in a month and you're at $9,000 in gross dispatch income — from a business with no inventory, no warehouse, and no employees required.</p>

          <div className="article-callout">
            You cannot use a general freight broker authority to broker household goods moves. The FMCSA treats HHG brokerage as a separate, more regulated category. Your OP-1 application must specifically designate you as a household goods broker — not a property broker. This distinction trips up a significant number of first-time applicants.
          </div>

          <p>HHG brokerage is also more regulated than general freight brokerage because it involves consumers rather than commercial entities. You are required to provide written binding or non-binding estimates, deliver consumer rights documents before any move, and maintain specific dispute resolution procedures. Understanding these obligations before you start is part of operating legally — not optional fine print.</p>

          <h2>Step 1: Form Your LLC and Get Your EIN</h2>

          <p>Before you file anything with the FMCSA, you need a registered business entity and a federal Employer Identification Number. For most new HHG brokers, a single-member LLC is the right structure — it separates personal assets from business liability and satisfies the FMCSA's entity requirements at minimal cost.</p>

          <p>LLC formation is a state filing. Costs range from $50 in Kentucky to $200 in states like Massachusetts and California. Processing time varies — most states issue LLC confirmation within 3 to 10 business days, though several offer same-day or next-day expedited processing for an additional fee. You'll need your LLC name, a registered agent (a person or service that can receive legal documents on your behalf), and your principal business address.</p>

          <p>The EIN — your federal Employer Identification Number — is issued by the IRS at no cost through their online application system. It's available immediately upon completion. You need it for the FMCSA application, for opening a business bank account, and for any future tax filings. There's no reason to delay this step — it takes less than 10 minutes.</p>

          <div style={{ overflowX: "auto", margin: "20px 0 28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Task</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Cost</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["LLC formation (state filing fee)", "$50–$200", "3–10 business days"],
                  ["Registered agent (if using a service)", "$50–$150/yr", "Immediate upon signup"],
                  ["EIN registration (IRS)", "Free", "Immediate — online application"],
                  ["Business bank account", "$0–$25 to open", "Same day at most banks"],
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

          <h2>Step 2: File the FMCSA OP-1 Application</h2>

          <p>The OP-1 is the federal application for HHG broker operating authority. Filing it costs $300 — paid directly to the FMCSA — and generates your MC number, the docket number that identifies your brokerage in federal records. Every subsequent filing — the BOC-3, the surety bond, any future compliance communications — references this number.</p>

          <p>The OP-1 is filed through the FMCSA's online portal. It collects your business entity name, principal address, designated officer information, and the type of authority you're requesting. The selection that matters most: choose "Household Goods Broker" explicitly. Choosing "Property Broker" by mistake — a common error — results in the wrong authority type and requires a corrected filing, which restarts the clock and costs another $300.</p>

          <p>Initial FMCSA review of a complete, accurate OP-1 application takes 3 to 7 business days. If the application is rejected for errors or missing information, you refile and restart. This is the stage where accuracy on submission matters most — a correct first filing keeps the 4 to 6 week timeline intact.</p>

          <h2>Step 3: File the BOC-3 and Surety Bond Simultaneously</h2>

          <p>Once your MC number is assigned, two supporting filings must be completed before your authority can be activated. Neither can be filed by you directly — both require authorized third-party companies filing electronically with the FMCSA.</p>

          <p><strong>BOC-3 Process Agent Filing.</strong> The BOC-3 designates a legal representative to accept service of process on your behalf in all 50 states. It's filed by a registered process agent company — not by you. Cost is typically $25 to $75. The filing appears in FMCSA records within 24 to 72 hours. It must be in place before your authority activates and must remain active continuously — a lapsed BOC-3 is grounds for authority revocation.</p>

          <p><strong>Surety Bond (BMC-84).</strong> The FMCSA requires every HHG broker to maintain a $75,000 surety bond. The $75,000 is the bond amount — the maximum a surety company will pay on a claim. Your actual annual cost is a premium based on creditworthiness, typically $900 to $2,000 per year for applicants with standard credit. The bond is filed by an FMCSA-approved surety company. Like the BOC-3, it cannot lapse — a cancelled bond triggers automatic authority revocation.</p>

          <p>The most common timeline mistake new applicants make: waiting until after the MC number arrives to start the surety bond application. Bond underwriting can take 1 to 5 business days for straightforward applications, and longer if the surety requires additional documentation. Start the bond application the same day you file the OP-1 — not after.</p>

          <p>For a deeper breakdown of how the surety bond requirement works, including credit-tier cost estimates and the BMC-84 vs. BMC-85 comparison, see the <Link href="/blog/moving-broker-surety-bond-requirements" style={{ color: "#228B4A", textDecoration: "none" }}>moving broker surety bond requirements guide</Link> in the BrokerFilings resource library.</p>

          <h2>Step 4: Clear the Protest Period and Receive Active Authority</h2>

          <p>After the OP-1 application passes initial review and both the BOC-3 and surety bond are confirmed in FMCSA records, a mandatory 10-day protest period begins. During this window, existing motor carriers can formally object to your authority application. For standard HHG broker applications, protests are extremely rare — this stage almost always passes without incident.</p>

          <p>Once the protest period clears, the FMCSA issues your Certificate of Registration and your broker authority status becomes "Active" in the SAFER database. You can verify active status at any time by searching your MC number at safer.fmcsa.dot.gov. You cannot legally broker any moves, accept customer payments, or sign carrier agreements until that status reads "Active."</p>

          <p>Total timeline from OP-1 submission to active authority: 4 to 6 weeks when all filings are submitted correctly and in sequence. Errors, delays in bond issuance, or missing documentation push that to 8 to 12 weeks. The difference between those two timelines is almost entirely execution — not FMCSA processing speed.</p>

          <h2>Total Startup Costs and What You Get for Them</h2>

          <p>BrokerFilings was built by Erica Dorsey — a tax accountant who went through every step of this process personally before building the service. She filed her own FMCSA authority from scratch: formed the LLC, obtained the EIN, filed the OP-1, coordinated the BOC-3, and secured the surety bond. The done-for-you service exists because she experienced firsthand how many separate moving parts the process involves and how costly a single error at any stage can be.</p>

          <p>That context matters when evaluating what a filing service is actually worth. It's not just form submission — it's coordinated sequencing of multiple federal filings, each with its own timing dependency, filed by different third parties, against a regulatory clock that costs $300 to restart. You can read more about how the service was built on the <Link href="/our-story" style={{ color: "#228B4A", textDecoration: "none" }}>BrokerFilings founder page</Link>.</p>

          <div style={{ background: "#E8F5EE", border: "1px solid rgba(34,139,74,0.2)", borderRadius: "12px", padding: "24px 28px", margin: "24px 0" }}>
            {[
              ["LLC formation (state fee)", "$50–$200"],
              ["EIN registration", "Free"],
              ["FMCSA OP-1 filing fee", "$300"],
              ["BOC-3 process agent", "$25–$75"],
              ["Surety bond first-year premium", "$900–$2,000"],
              ["BrokerFilings flat fee (all-in, all fees included)", "$1,799"],
            ].map(([label, value], i, arr) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(34,139,74,0.15)" : "none" }}>
                <span style={{ fontSize: "14px", color: "#6B7A8D" }}>{label}</span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "#228B4A" }}>{value}</span>
              </div>
            ))}
          </div>

          <p>Filing independently, total startup costs land between $1,275 and $2,575 depending on your state and credit tier. The BrokerFilings flat fee of $1,799 includes all government fees — nothing is billed separately after you pay. Full support continues until your authority is granted, not just until your application is submitted.</p>

          <h2>What to Do While You're Waiting for Authority</h2>

          <p>The 4 to 6 week approval window is not dead time. Brokers who use it well launch faster and earn more in their first 90 days than those who wait until active authority to start preparing.</p>

          <ul>
            <li><strong>Build your carrier list.</strong> Research FMCSA-licensed carriers in your target geography. You cannot sign carrier agreements until your authority is active, but you can identify who you'll approach and what their current capacity looks like.</li>
            <li><strong>Set up your CRM and quoting system.</strong> Having a functional lead pipeline and quote workflow ready before your first customer call saves time and prevents early errors.</li>
            <li><strong>Research your lead sources.</strong> Google Local Service Ads and realtor referral networks are the two highest-converting inbound channels for new HHG brokers. Understanding how each works before you're licensed means you can activate them the day your authority goes live.</li>
            <li><strong>Learn the consumer protection requirements.</strong> The FMCSA requires specific disclosures and estimate formats for HHG brokers. Knowing these before your first job means you're compliant from day one — not learning compliance from a customer complaint.</li>
          </ul>

          <p>For a detailed breakdown of what the first 90 days of active operation look like — including carrier network building and income projections — see the <Link href="/blog/moving-broker-income" style={{ color: "#228B4A", textDecoration: "none" }}>moving broker income guide</Link> in the BrokerFilings blog.</p>

          {/* ── Lead Capture ── */}
          <LeadCapture source="how-to-start-an-hhg-brokerage-in-2026" />

          {/* ── CTA ── */}
          <div className="article-cta">
            <h3>Ready to get your HHG broker authority?</h3>
            <p>We handle every filing for $1,799 — LLC guidance, EIN, OP-1, BOC-3, surety bond referral, and all government fees included. Built by someone who did every step personally. Authority in 4 to 6 weeks.</p>
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