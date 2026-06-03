// FILE: src/app/blog/moving-broker-surety-bond-requirements/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import LeadCapture from "@/components/LeadCapture";
import MagickPlatBridge from "@/components/MagickPlatBridge";

export const metadata: Metadata = {
  title: "Moving Broker Surety Bond Requirements: What You Need to Know | BrokerFilings",
  description: "The FMCSA requires a $75,000 surety bond for every moving broker. Here's what the bond covers, what it costs, and how to get it filed correctly.",
  openGraph: {
    title: "Moving Broker Surety Bond Requirements: What You Need to Know",
    description: "The FMCSA requires a $75,000 surety bond for every moving broker. Here's what the bond covers, what it costs, and how to get it filed correctly.",
    url: "https://brokerfilings.com/blog/moving-broker-surety-bond-requirements",
    type: "article",
    images: [{ url: "https://brokerfilings.com/og-image.jpg", width: 1200, height: 630, alt: "Moving Broker Surety Bond Requirements: What You Need to Know" }],
  },
  alternates: { canonical: "https://brokerfilings.com/blog/moving-broker-surety-bond-requirements" },
};

const STRIPE_LINK = "https://buy.stripe.com/28E3cv66Y26qaCK40zgA800";

export default function MovingBrokerSuretyBondRequirements() {
  return (
    <>
      {/* ── Article Hero ── */}
      <div className="article-hero">
        <div className="article-hero-inner">
          <a href="/blog" className="back-link">← Back to Blog</a>
          <div className="article-tag">Filing Guide</div>
          <h1>Moving Broker Surety Bond Requirements: What You Need to Know</h1>
          <div className="article-meta">7 min read · Updated May 2025</div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="article-body">
        <div className="article-body-inner">

          <p>Before the FMCSA grants your household goods broker authority, you must have a $75,000 surety bond on file. It's one of the most misunderstood moving broker surety bond requirements in the entire licensing process — applicants often confuse it with insurance, underestimate the cost, or file it at the wrong stage of their application. Getting this wrong doesn't just delay your authority; it can derail the entire process. Here's exactly what the bond is, what it covers, what it costs, and how it fits into your broader licensing timeline.</p>

          <h2>What Is a Moving Broker Surety Bond?</h2>

          <p>A surety bond is a three-party financial guarantee. In the context of moving brokerage, the three parties are: you (the broker, called the principal), the surety company that issues the bond, and the FMCSA and public (the obligee — the party protected by the bond).</p>

          <p>When you purchase a surety bond, the surety company is agreeing to pay claims against your brokerage — up to the bond amount — if you fail to fulfill your legal obligations. This is not insurance that protects you. It protects the people you do business with: shippers whose goods you arrange to transport and carriers you dispatch jobs to. If you fail to pay a carrier or defraud a customer, a valid claim can be made against your bond.</p>

          <div className="article-callout">
            A surety bond is not insurance for your business. It's a financial guarantee to the public that your brokerage will operate legally and pay its obligations. If a claim is paid out, the surety company will pursue repayment from you.
          </div>

          <p>The specific form the FMCSA requires is the BMC-84, titled "Broker's Surety Bond." It must be filed directly by an FMCSA-approved surety company — you cannot file it yourself. The bond must remain active continuously for as long as you hold broker authority. If it lapses for any reason, the FMCSA will revoke your operating authority.</p>

          <h2>The $75,000 Requirement: Where It Comes From</h2>

          <p>The Moving Ahead for Progress in the 21st Century Act (MAP-21), signed into law in 2012, raised the minimum bond requirement for household goods brokers from $10,000 to $75,000. The increase was driven by widespread consumer fraud in the moving industry — brokers were collecting deposits, routing customers to unlicensed carriers, and then disappearing without recourse.</p>

          <p>The $75,000 figure is the minimum bond amount. Some applicants confuse this with what they actually pay — they are not the same number. The bond amount is the maximum liability the surety will cover. Your actual cost is a small percentage of that amount, called the premium.</p>

          <div style={{ overflowX: "auto", margin: "20px 0 28px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Term</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Definition</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #228B4A", color: "#228B4A", fontWeight: "700" }}>Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bond Amount", "Maximum the surety will pay on a claim", "$75,000"],
                  ["Premium", "Annual cost you pay to maintain the bond", "$900–$2,000/yr"],
                  ["Premium Rate", "Percentage of bond amount charged annually", "1.2%–2.7%"],
                  ["Collateral", "Cash deposit alternative to BMC-84 (BMC-85)", "$75,000 cash"],
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

          <h2>What Does a Moving Broker Surety Bond Actually Cost?</h2>

          <p>For most new applicants with decent personal credit, the annual premium on a $75,000 HHG broker surety bond runs between $900 and $2,000 per year. The premium rate — the percentage of the bond amount you pay annually — typically falls between 1.2% and 2.7% depending on your credit score, business history, and the surety company's underwriting criteria.</p>

          <p>Here's how the math works at different credit tiers:</p>

          <div style={{ background: "#E8F5EE", border: "1px solid rgba(34,139,74,0.2)", borderRadius: "12px", padding: "24px 28px", margin: "24px 0" }}>
            {[
              ["Good credit (700+) — ~1.2% rate", "$900/yr"],
              ["Average credit (650–699) — ~1.8% rate", "$1,350/yr"],
              ["Fair credit (600–649) — ~2.7% rate", "$2,025/yr"],
              ["Poor credit — cash collateral (BMC-85)", "$75,000 deposit"],
            ].map(([label, value], i, arr) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(34,139,74,0.15)" : "none" }}>
                <span style={{ fontSize: "14px", color: "#6B7A8D" }}>{label}</span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "#228B4A" }}>{value}</span>
              </div>
            ))}
          </div>

          <p>The BMC-85 trust fund arrangement is the alternative for applicants who can't qualify for a surety bond. Instead of paying an annual premium, you deposit $75,000 in cash with a federally insured institution and file the BMC-85 form with the FMCSA. For obvious reasons, most applicants pursue the BMC-84 surety bond route. The BMC-85 is a fallback, not a default.</p>

          <p>Bond premiums are typically paid annually and must be renewed before the expiration date each year. Some surety companies offer monthly payment plans, though the total annual cost is usually slightly higher on installment arrangements. If your bond lapses — even by a day — the surety company is required to notify the FMCSA, and your authority can be revoked.</p>

          <h2>BMC-84 vs. BMC-85: Which One Do You Need?</h2>

          <p>The FMCSA accepts two forms of financial security for household goods brokers:</p>

          <ul>
            <li><strong>BMC-84 (Surety Bond):</strong> The standard route. A surety company files a $75,000 bond on your behalf. You pay an annual premium based on creditworthiness. The surety company absorbs initial claim risk but will pursue repayment from you if a claim is paid. This is what the vast majority of HHG broker applicants use.</li>
            <li><strong>BMC-85 (Trust Fund Agreement):</strong> You deposit $75,000 cash into a qualifying trust account. No annual premium, but $75,000 in capital is tied up indefinitely. Used by applicants who cannot qualify for a surety bond due to credit history or who prefer not to deal with surety companies.</li>
          </ul>

          <p>For most new brokers, the BMC-84 is the right choice. The annual premium — even at the high end of $2,025 — is a fraction of the capital required for the BMC-85. The only scenario where BMC-85 makes sense is if your credit history prevents surety qualification entirely, or if you have significant liquid capital and prefer a no-premium structure.</p>

          <h2>When the Bond Must Be Filed — And What Happens If It Lapses</h2>

          <p>The surety bond must be on file with the FMCSA before your broker authority is granted. It is not something you obtain after receiving your MC number — it's a prerequisite for final approval, alongside the BOC-3 process agent filing. The sequence matters:</p>

          <ul>
            <li>Submit the OP-1 application and receive your MC number</li>
            <li>Have your surety company file the BMC-84 electronically with the FMCSA</li>
            <li>Have your process agent company file the BOC-3 electronically with the FMCSA</li>
            <li>Wait the mandatory 10-day protest period after all filings are confirmed</li>
            <li>Receive your Certificate of Registration and active broker authority</li>
          </ul>

          <p>Once active, the bond must be maintained continuously. Surety companies are legally required to notify the FMCSA 30 days before a bond cancellation — this is the only warning you get. If the bond is cancelled and not replaced within that 30-day window, your authority is revoked. Reinstatement requires a new bond filing and potentially a new application.</p>

          <div className="article-callout">
            Set a calendar reminder 45 days before your bond's annual renewal date. A lapsed bond is one of the most common — and most avoidable — reasons brokers lose their operating authority.
          </div>

          <h2>How to Get a Surety Bond as Part of Your Broker Authority Application</h2>

          <p>You cannot purchase a moving broker surety bond from a general insurance agent. The bond must be issued by a surety company that is specifically approved by the FMCSA to file BMC-84 forms. The list of approved sureties is maintained by the FMCSA, and only bonds filed by these companies will be accepted.</p>

          <p>The process typically works like this: you apply with a surety company (or through a surety broker who shops multiple carriers), the company runs a credit check, underwrites the risk, and issues a quote. Once you accept and pay the premium, the surety company files the BMC-84 electronically with the FMCSA. The filing usually appears in FMCSA records within 24 to 48 hours.</p>

          <p>When you file for broker authority through BrokerFilings, surety bond referral is included in the $1,799 flat-fee package. We connect you with a vetted surety provider, coordinate the filing timing with your OP-1 and BOC-3 submissions, and confirm the bond appears correctly in FMCSA records. You don't have to locate an approved surety company on your own or figure out the filing sequence — that's handled as part of the process.</p>

          <p>For a full breakdown of every filing required to get your broker authority — including the OP-1, BOC-3, and surety bond — see the <Link href="/blog" style={{ color: "#228B4A", textDecoration: "none" }}>BrokerFilings resource library</Link>.</p>

          <p>The $75,000 bond sounds large on paper. In practice, the annual cost is manageable, the filing process is straightforward when coordinated correctly, and it's a one-time setup that keeps your authority in good standing indefinitely — as long as you renew it on time, every year.</p>

          {/* ── Lead Capture ── */}
          <MagickPlatBridge />
          <LeadCapture source="moving-broker-surety-bond-requirements" />

          {/* ── CTA ── */}
          <div className="article-cta">
            <h3>Ready to get started?</h3>
            <p>We handle every filing for $1,799 — surety bond referral, BOC-3, OP-1, and all government fees included. Authority in 4 to 6 weeks.</p>
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
  );
}