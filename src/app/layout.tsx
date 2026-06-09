import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['700', '900'],
})

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'BrokerFilings.com — FMCSA Broker Authority Filing Service',
    template: '%s | BrokerFilings.com',
  },
  description:
    'Get your FMCSA Household Goods Broker Authority filed and approved. All-inclusive $1,799 package — OP-1, BOC-3, surety bond guidance, and full support until approved.',
  metadataBase: new URL('https://brokerfilings.com'),
  openGraph: {
    siteName: 'BrokerFilings.com',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://brokerfilings.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BrokerFilings.com — FMCSA Broker Authority Filing Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://brokerfilings.com/og-image.jpg'],
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BrokerFilings.com",
  "url": "https://brokerfilings.com",
  "description": "Done-for-you FMCSA Household Goods Broker Authority filing service. $1,799 flat fee, all government fees included.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Erica Dorsey",
    "jobTitle": "Founder & CEO",
    "description": "Tax accountant and 10-year HHG moving broker who filed her own FMCSA authority from scratch before building BrokerFilings so others would not have to.",
    "url": "https://brokerfilings.com/our-story"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-407-603-1835",
    "email": "info@brokerfilings.com",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://brokerfilings.com",
    "https://magickplat.com"
  ]
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://brokerfilings.com/our-story",
  "name": "Our Story | Erica Dorsey | BrokerFilings",
  "description": "Erica Dorsey filed her own FMCSA broker authority from scratch as a tax accountant. She made $200K in her first moving season. She built BrokerFilings so the next person would not have to figure it out alone.",
  "mainEntity": {
    "@type": "Person",
    "name": "Erica Dorsey",
    "jobTitle": "Founder, BrokerFilings & MagickPlat",
    "description": "Tax accountant, 10-year HHG moving broker, and car dealership owner. Filed her own FMCSA authority from scratch. Made $200,000 in her first moving season starting with one carrier. Built BrokerFilings because she remembered doing every filing alone and wanted to eliminate that friction for others.",
    "knowsAbout": [
      "FMCSA broker authority",
      "HHG moving brokerage",
      "OP-1 filing",
      "BOC-3 process agent",
      "Surety bond requirements",
      "LLC formation",
      "Tax accounting",
      "Small business formation"
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
