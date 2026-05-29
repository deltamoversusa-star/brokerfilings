// FILE: src/app/blog/what-is-a-boc-3-filing-for-moving-brokers/page.tsx

import type { Metadata } from "next";
import LeadCapture from "@/components/LeadCapture";

export const metadata: Metadata = {
  title: "What Is a BOC-3 Filing for Moving Brokers? | BrokerFilings",
  description: "Learn what a BOC-3 filing is, why every moving broker needs one, and how the process agent requirement works before FMCSA grants broker authority.",
};

const STRIPE_LINK = "https://buy.stripe.com/28E3cv66Y26qaCK40zgA800";

export default function Boc3FilingMovingBrokers() {
  return (
    <>
      {/* ── Article Hero ── */}
      <div className="article-hero">
        <div className="article-hero-inner">
          <a href="/blog" className="back-link">← Back to Blog</a>
          <div className="article-tag">Filing Guide</div>
          <h1>What Is a BOC-3 Filing for Moving Brokers?</h1>
          <div className="article-meta">6 min read · Updated May 2025</div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="article-body">
        <div className="article-body-inner">

          <p>If you're applying for FMCSA household goods broker authority, you will hit a requirement that stops many applicants cold: the BOC-3 filing. It sounds obscure, but it's a mandatory federal compliance step — and skipping it or filing it incorrectly means your broker authority application won't be approved. Understanding what a BOC-3 filing is for moving brokers can save you weeks of delay and keep your application on track from day one.</p>

          <h2>What Is a BOC-3 Filing?</h2>

          <p>A BOC-3 is a federal filing that designates a process agent — or a network of process agents — to accept legal documents on your behalf in every U.S. state where you operate. The name comes from the FMCSA form itself: Form BOC-3, titled "Designation of Agents for Service of Process."</p>

          <p>In practical terms, this means that if a shipper or third party files a lawsuit against your brokerage, there is always a legally recognized point of contact in each state who can receive those court papers. It's a consumer protection mechanism built into federal transportation law, and it applies to every entity that holds FMCSA operating authority — including household goods (HHG) brokers.</p>

          <div className="article-callout">
            The FMCSA does not accept BOC-3 filings directly from applicants. You must hire a registered process agent company that submits the form electronically on your behalf — paper submissions are no longer accepted.
          </div>

          <h2>Why Moving Brokers Are Required to File a BOC-3</h2>

          <p>Under 49 CFR Part 366, every motor carrier, freight forwarder, and broker that holds FMCSA authority must have a valid BOC-3 on file. This requirement is not optional and is not waived for small brokerages or new entrants. The FMCSA will not grant broker authority — and will revoke existing authority — if the BOC-3 lapses or is filed incorrectly.</p>

          <p>For moving brokers specifically, this matters because HHG brokerage involves consumers entrusting their personal property to the process. Federal regulators require a verifiable legal presence in each state as a baseline condition of doing business. The BOC-3 is a minimum accountability standard: before you can arrange a single shipment, the government needs to know you can be served legal notice anywhere in the country.</p>

          <p>The BOC-3 requirement also connects to broader FMCSA enforcement. If your process agent designation lapses — because the process agent company closes or removes you from their network — the FMCSA can revoke your operating authority without notice. Maintaining a valid BOC-3 is an ongoing responsibility, not a one-time checkbox.</p>

          <h2>How the BOC-3 Process Works Step by Step</h2>

          <p>The process is straightforward once you know what's involved. There are four steps every moving broker applicant goes through:</p>

          <ul>
            <li><strong>Choose a registered process agent company.</strong> You need a firm authorized to file BOC-3 forms electronically with the FMCSA. Costs typically range from $25 to $75 for a one-time or annual filing. Verify they file electronically — paper submissions are rejected.</li>
            <li><strong>Provide your FMCSA MC number.</strong> The process agent company links the BOC-3 to your docket number. Your MC number must exist before the BOC-3 is submitted, so timing matters — submit your OP-1 application first.</li>
            <li><strong>The company files electronically.</strong> Once you pay and provide your details, the process agent submits Form BOC-3 to the FMCSA. The filing typically appears in the FMCSA database within 24 to 72 hours.</li>
            <li><strong>Verify in FMCSA records.</strong> Confirm the BOC-3 is on file by searching your MC number in the FMCSA's SAFER system or L&amp;I portal. Look for "Process Agent" under your entity's insurance and filing status.</li>
          </ul>

          <p>The BOC-3 must be in place before the FMCSA issues final broker authority. If it's missing when your application is processed, approval will stall.</p>

          <h2>BOC-3 vs. Other FMCSA Filing Requirements</h2>

          <p>New broker applicants often confuse the BOC-3 with other required filings. All three of the following must be complete before the FMCSA issues a Certificate of Registration:</p>

          <div style={{ overflowX: "auto", margin: "20px 0 28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Filing</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Purpose</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Filed By</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["OP-1 Form", "Requests FMCSA broker operating authority", "You (or your filing agent)"],
                  ["Surety Bond (BMC-84)", "Protects shippers & carriers — $75,000 required", "FMCSA-approved surety company"],
                  ["BOC-3", "Designates process agents in all 50 states", "Registered process agent company"],
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

          <p>Miss any one of these, and your application stalls. The FMCSA reviews all three before issuing authority — they are independent filings with no overlap.</p>

          <h2>Common BOC-3 Mistakes That Delay Broker Authority</h2>

          <ul>
            <li><strong>Filing before you have an MC number.</strong> The BOC-3 must reference an existing FMCSA docket number. Submit the OP-1 first, get the MC number assigned, then complete the BOC-3.</li>
            <li><strong>Using a provider that files on paper.</strong> The FMCSA requires electronic BOC-3 filings. Paper submissions are rejected outright.</li>
            <li><strong>Letting the filing lapse.</strong> Some process agent companies operate on annual subscriptions. If you stop paying and they remove your designation, your operating authority is at risk. Confirm your filing status in the FMCSA system at least once a year.</li>
            <li><strong>Assuming the OP-1 covers it.</strong> The OP-1 form does not include BOC-3 designation. These are separate filings handled by separate parties. Many first-time applicants discover this gap only after their application stalls.</li>
          </ul>

          <h2>How BrokerFilings Handles the BOC-3 for You</h2>

          <p>When you work with BrokerFilings, the BOC-3 process is handled as part of your complete broker authority package. We refer you to a vetted process agent provider, coordinate the timing with your OP-1 filing, and confirm that your BOC-3 appears correctly in FMCSA records before your authority is finalized.</p>

          <div style={{ background: "#E8F5EE", border: "1px solid rgba(34,139,74,0.2)", borderRadius: "12px", padding: "24px 28px", margin: "24px 0" }}>
            {[
              ["FMCSA OP-1 Application Fee", "$300"],
              ["BOC-3 Process Agent Filing", "$25–$75"],
              ["Surety Bond Annual Premium", "$900–$2,000/yr"],
              ["BrokerFilings Flat Fee (all-in)", "$1,799"],
            ].map(([label, value], i, arr) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(34,139,74,0.15)" : "none" }}>
                <span style={{ fontSize: "14px", color: "#6B7A8D" }}>{label}</span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "#228B4A" }}>{value}</span>
              </div>
            ))}
          </div>

          <p>Our $1,799 flat-fee package includes guidance on every required filing — OP-1 submission, BOC-3 referral, surety bond referral, EIN registration guidance, and LLC formation guidance — with full support until your authority is granted. The average approval timeline runs 4 to 6 weeks when all filings are submitted correctly and on schedule.</p>

          <p>The BOC-3 is a small piece of a larger puzzle, but it's a mandatory one. Getting it right — and getting it in at the right time — keeps your application moving without unnecessary delays.</p>

          {/* ── Lead Capture ── */}
          <LeadCapture source="what-is-a-boc-3-filing-for-moving-brokers" />

          {/* ── CTA ── */}
          <div className="article-cta">
            <h3>Ready to get started?</h3>
            <p>We handle every filing for $1,799 — all government fees included. Authority in 4 to 6 weeks.</p>
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