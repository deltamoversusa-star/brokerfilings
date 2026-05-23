import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="logo">
          <div className="logo-seal">BF</div>
          <div className="logo-text">
            <div className="logo-name">BrokerFilings.com</div>
            <div className="logo-tagline">FMCSA Authority Filing Service</div>
          </div>
        </Link>
        <a
          href="https://buy.stripe.com/28E3cv66Y26qaCK40zgA800"
          className="header-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started — $1,799
        </a>
      </div>
    </header>
  )
}
