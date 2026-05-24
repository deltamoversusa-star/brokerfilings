import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">BrokerFilings.com</div>
      <nav className="footer-nav">
        <Link href="/" className="footer-nav-link">Home</Link>
        <Link href="/blog" className="footer-nav-link">Blog</Link>
      </nav>
      <div className="footer-text">
        FMCSA Broker Authority Filing Service<br />
        info@brokerfilings.com
      </div>
      <div className="footer-disclaimer">
        BrokerFilings.com is a filing and consulting service. We are not a law firm and do not
        provide legal advice. FMCSA approval timelines are estimates and may vary. The $75,000
        surety bond is purchased separately through third-party bonding providers.
      </div>
    </footer>
  )
}
