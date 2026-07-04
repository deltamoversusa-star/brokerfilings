'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Filing Service' },
  { href: '/licensed-broker-training', label: 'Broker Course' },
  { href: '/blog', label: 'Blog' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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

        <button
          type="button"
          className="header-menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header-nav ${menuOpen ? 'header-nav-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="header-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/course" className="header-login-btn" onClick={() => setMenuOpen(false)}>
            Course Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
