import Image from 'next/image'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ContactForm from '@/components/forms/ContactForm'

export const metadata = {
  title: 'Get a Quote | Destiny Global - Dehydrated Onion Supplier Inquiry',
  description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
  keywords: 'import dehydrated onion from India, custom packaging onion powder, request quote onion flakes, Destiny Global contact, B2B onion supplier inquiry, bulk onion flakes sample, order dehydrated onion granules',
  alternates: {
    canonical: 'https://destinyglobal.com/contact',
  },
  openGraph: {
    title: 'Get a Quote | Destiny Global - Dehydrated Onion Supplier Inquiry',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    url: 'https://destinyglobal.com/contact',
    siteName: 'Destiny Global',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://destinyglobal.com/logo-text.png',
        width: 1200,
        height: 630,
        alt: 'Destiny Global Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Quote | Destiny Global - Dehydrated Onion Supplier Inquiry',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    images: ['https://destinyglobal.com/logo-text.png'],
  },
}

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Destiny Global',
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'email': 'info@destinyglobal.com',
        'availableLanguage': ['English', 'Hindi', 'Marathi']
      }
    }
  }

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
