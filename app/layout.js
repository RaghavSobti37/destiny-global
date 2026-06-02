import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://www.destinnyglobal.com'),
  title: 'Destiny Global | Premium Dehydrated Onion Products Export',
  description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
  keywords: 'dehydrated onion manufacturer, bulk dehydrated onion supplier, dried onion wholesale India, food grade dehydrated onion exporter, dehydrated onion powder bulk, onion flakes supplier, dehydrated onion granules wholesale, premium dried onion exporter, dehydrated white onion powder, dried red onion flakes, onion granules, minced dehydrated onion, chopped dried onions, kibbled onion products',
  alternates: {
    canonical: 'https://www.destinnyglobal.com',
  },
  openGraph: {
    title: 'Destiny Global | Premium Dehydrated Onion Products Export',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    url: 'https://www.destinnyglobal.com',
    siteName: 'Destiny Global',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.destinnyglobal.com/logo-text.png',
        width: 1200,
        height: 630,
        alt: 'Destiny Global Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destiny Global | Premium Dehydrated Onion Products Export',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    images: ['https://www.destinnyglobal.com/logo-text.png'],
  },
  icons: {
    icon: {
      url: "/logo-icon.png",
      sizes: "any",
      type: "image/png",
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.destinnyglobal.com/#organization',
    name: 'Destiny Global',
    url: 'https://www.destinnyglobal.com',
    logo: 'https://www.destinnyglobal.com/logo-text.png',
    image: 'https://www.destinnyglobal.com/logo-text.png',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'info@destinnyglobal.com',
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
