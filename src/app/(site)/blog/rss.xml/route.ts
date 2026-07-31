import { NextResponse } from "next/server";

const posts = [
  {
    title: "Moving Broker Leads: How to Get Them and What They Actually Cost",
    link: "https://brokerfilings.com/blog/moving-broker-leads",
    description: "Moving broker leads come from paid ads, referrals, SEO, and lead vendors. Here's what each channel costs, what converts, and which ones licensed brokers should prioritize.",
    date: "Mon, 13 Jul 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/moving-broker-leads",
  },
  {
    title: "How Moving Brokers Find and Sign Carriers — The Real Process",
    link: "https://brokerfilings.com/blog/how-moving-brokers-find-and-sign-carriers",
    description: "How moving brokers find and sign carriers — the actual outreach process, what carriers want, how to vet them, and what a signed carrier agreement covers.",
    date: "Mon, 13 Jul 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/how-moving-brokers-find-and-sign-carriers",
  },
  {
    title: "Passive Income From Moving Referrals: The HHG Broker Model",
    link: "https://brokerfilings.com/blog/passive-income-from-moving-referrals",
    description: "Passive income from moving referrals is real — but it requires a federal license first. Here's how carrier subscriptions and realtor networks create recurring income.",
    date: "Sat, 04 Jul 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/passive-income-from-moving-referrals",
  },
  {
    title: "Moving Broker Income: What You Can Realistically Earn",
    link: "https://brokerfilings.com/blog/moving-broker-income",
    description: "How much do moving brokers actually make? Real income breakdowns — dispatch margins, carrier subscriptions, and what drives monthly earnings up or down.",
    date: "Mon, 09 Jun 2025 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/moving-broker-income",
  },
  {
    title: "First 90 Days as an HHG Broker: What to Actually Do",
    link: "https://brokerfilings.com/blog/first-90-days-as-an-hhg-broker",
    description: "Your first 90 days as an HHG broker determine everything that follows. Here's the carrier, lead, and dispatch sequence that actually produces income.",
    date: "Thu, 18 Jun 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/first-90-days-as-an-hhg-broker",
  },
  {
    title: "Start a Moving Business Without Trucks: The Broker Model",
    link: "https://brokerfilings.com/blog/start-a-moving-business-without-trucks",
    description: "You can start a moving business without trucks by becoming a licensed HHG broker. No fleet, no drivers — here's how the model actually works and what it costs.",
    date: "Mon, 22 Jun 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/start-a-moving-business-without-trucks",
  },
  {
    title: "Can an HHG Broker Work From Home? Yes — Here's How",
    link: "https://brokerfilings.com/blog/can-an-hhg-broker-work-from-home",
    description: "Can an HHG broker work from home? Yes. Here's what the FMCSA actually requires, what equipment you need, and how a home-based brokerage really runs.",
    date: "Mon, 15 Jun 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/can-an-hhg-broker-work-from-home",
  },
  {
    title: "How to Start an HHG Brokerage in 2026: Full FMCSA Guide",
    link: "https://brokerfilings.com/blog/how-to-start-an-hhg-brokerage-in-2026",
    description: "Learn how to start an HHG brokerage in 2026 — LLC, EIN, OP-1, surety bond, BOC-3. Real costs, real timeline, built by someone who did it first.",
    date: "Fri, 12 Jun 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/how-to-start-an-hhg-brokerage-in-2026",
  },
  {
    title: "How to Become an HHG Broker: Step-by-Step FMCSA Guide",
    link: "https://brokerfilings.com/blog/how-to-become-an-hhg-broker",
    description: "Learn how to become an HHG broker — from LLC formation to FMCSA authority approval. Full breakdown of every step, cost, and timeline involved.",
    date: "Mon, 02 Jun 2025 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/how-to-become-an-hhg-broker",
  },
  {
    title: "Moving Broker Surety Bond Requirements: What You Need to Know",
    link: "https://brokerfilings.com/blog/moving-broker-surety-bond-requirements",
    description: "The FMCSA requires a $75,000 surety bond for every moving broker. Here's what the bond covers, what it costs, and how to get it filed correctly.",
    date: "Thu, 29 May 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/moving-broker-surety-bond-requirements",
  },
  {
    title: "Ideas for Small Business: Why Moving Brokerage Beats Most Side Hustles",
    link: "https://brokerfilings.com/blog/ideas-for-small-business",
    description: "Looking for ideas for small business with real income potential? Here's one that requires no truck, no employees, and under $2,500 to start legally.",
    date: "Mon, 26 May 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/ideas-for-small-business",
  },
  {
    title: "What Is a BOC-3 Filing for Moving Brokers?",
    link: "https://brokerfilings.com/blog/what-is-a-boc-3-filing-for-moving-brokers",
    description: "Learn what a BOC-3 filing is, why every moving broker needs one, and how the process agent requirement works before FMCSA grants broker authority.",
    date: "Mon, 19 May 2025 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/what-is-a-boc-3-filing-for-moving-brokers",
  },
  {
    title: "How to Get Your FMCSA Broker Authority in 2026 — Step by Step",
    link: "https://brokerfilings.com/blog/how-to-get-fmcsa-broker-authority",
    description: "The exact steps to get your HHG moving broker authority from the FMCSA — Form OP-1, BOC-3, surety bond, and EIN. Everything you need to launch legally.",
    date: "Mon, 23 May 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/how-to-get-fmcsa-broker-authority",
  },
  {
    title: "How Much Does It Cost to Start a Moving Brokerage in 2026",
    link: "https://brokerfilings.com/blog/how-much-does-it-cost-to-start-a-moving-brokerage",
    description: "The complete cost breakdown to start a federally licensed HHG moving brokerage — LLC, EIN, FMCSA filing, BOC-3, and surety bond. Under $2,500 to launch legally.",
    date: "Mon, 23 May 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/how-much-does-it-cost-to-start-a-moving-brokerage",
  },
  {
    title: "Moving Broker License Requirements — What You Actually Need",
    link: "https://brokerfilings.com/blog/moving-broker-license-requirements",
    description: "Federal law requires moving brokers to hold an active FMCSA broker authority. Here is exactly what is required and how long it takes to get approved.",
    date: "Mon, 23 May 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/moving-broker-license-requirements",
  },
  {
    title: "HHG Broker vs Freight Broker — What Is the Difference",
    link: "https://brokerfilings.com/blog/hhg-broker-vs-freight-broker",
    description: "Household goods brokers and freight brokers both arrange transportation — but the licensing requirements income model and customer base are completely different.",
    date: "Mon, 23 May 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/hhg-broker-vs-freight-broker",
  },
  {
    title: "FMCSA Broker Authority Approval: 4–6 Weeks (Full Timeline Breakdown)",
    link: "https://brokerfilings.com/blog/how-long-does-fmcsa-approval-take",
    description: "FMCSA broker authority typically takes 4–6 weeks — but delays can push it to 12. Full stage-by-stage breakdown, common causes of delay, and a realistic planning timeline.",
    date: "Thu, 01 May 2026 00:00:00 GMT",
    guid: "https://brokerfilings.com/blog/how-long-does-fmcsa-approval-take",
  },
];

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>BrokerFilings Blog</title>
    <link>https://brokerfilings.com/blog</link>
    <description>FMCSA broker authority guides and resources for aspiring HHG moving brokers</description>
    ${posts.map(p => `
    <item>
      <title>${p.title}</title>
      <link>${p.link}</link>
      <description>${p.description}</description>
      <pubDate>${p.date}</pubDate>
      <guid isPermaLink="true">${p.guid}</guid>
    </item>`).join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: { "Content-Type": "application/xml" },
  });
}
