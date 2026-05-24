import { NextResponse } from "next/server";

const posts = [
  {
    title: "How to Get Your FMCSA Broker Authority in 2026 — Step by Step",
    link: "https://brokerfilings.com/blog/how-to-get-fmcsa-broker-authority",
    description: "The exact steps to get your HHG moving broker authority from the FMCSA — Form OP-1, BOC-3, surety bond, and EIN. Everything you need to launch legally.",
    date: "Mon, 23 May 2026 00:00:00 GMT",
  },
  {
    title: "How Much Does It Cost to Start a Moving Brokerage in 2026",
    link: "https://brokerfilings.com/blog/how-much-does-it-cost-to-start-a-moving-brokerage",
    description: "The complete cost breakdown to start a federally licensed HHG moving brokerage — LLC, EIN, FMCSA filing, BOC-3, and surety bond. Under $2,500 to launch legally.",
    date: "Mon, 23 May 2026 00:00:00 GMT",
  },
  {
    title: "Moving Broker License Requirements — What You Actually Need",
    link: "https://brokerfilings.com/blog/moving-broker-license-requirements",
    description: "Federal law requires moving brokers to hold an active FMCSA broker authority. Here is exactly what is required and how long it takes to get approved.",
    date: "Mon, 23 May 2026 00:00:00 GMT",
  },
  {
    title: "HHG Broker vs Freight Broker — What Is the Difference",
    link: "https://brokerfilings.com/blog/hhg-broker-vs-freight-broker",
    description: "Household goods brokers and freight brokers both arrange transportation — but the licensing requirements income model and customer base are completely different.",
    date: "Mon, 23 May 2026 00:00:00 GMT",
  },
  {
    title: "How Long Does FMCSA Broker Authority Take to Get Approved",
    link: "https://brokerfilings.com/blog/how-long-does-fmcsa-approval-take",
    description: "The FMCSA typically approves HHG broker authority applications in 4 to 6 weeks. Here is what affects the timeline and how to avoid delays.",
    date: "Mon, 23 May 2026 00:00:00 GMT",
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
    </item>`).join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: { "Content-Type": "application/xml" },
  });
}
