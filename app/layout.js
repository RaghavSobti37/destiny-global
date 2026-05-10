import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Destiny Global | Premium Indian Dehydrated Powders Export',
  description: 'Destiny Global is a leading exporter of premium Indian dehydrated powders, including Onion, Beetroot, and Moringa. We provide high-quality, pure ingredients to global markets with guaranteed consistency and excellence.',
  keywords: 'dehydrated powders, onion powder exporter, beetroot powder, moringa powder, indian spices export, destiny global',
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://destinyglobal.com',
  },
  openGraph: {
    title: 'Destiny Global | Premium Indian Dehydrated Powders Export',
    description: 'Leading exporter of premium Indian dehydrated powders globally. Pure Onion, Beetroot, Moringa, and more.',
    url: 'https://destinyglobal.com',
    siteName: 'Destiny Global',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: {
      url: "/logo-icon.png",
      sizes: "any",
      type: "image/png",
    },
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://destinyglobal.com/#organization',
    name: 'Destiny Global',
    url: 'https://destinyglobal.com',
    logo: 'https://destinyglobal.com/logo-text.png',
    description: 'Leading exporter of premium Indian dehydrated powders globally.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'info@destinyglobal.com',
    },
    sameAs: [
      // Add social links here if available
    ],
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2E5090" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
