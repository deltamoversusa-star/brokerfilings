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
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-407-603-1835",
    "email": "info@brokerfilings.com",
    "contactType": "Customer Service"
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
