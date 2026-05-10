import Image from 'next/image'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ContactForm from '@/components/forms/ContactForm'

export const metadata = {
  title: 'Contact Us | Destiny Global - Get a Quote for Dehydrated Powders',
  description: 'Connect with Destiny Global for premium Indian dehydrated powders. Request a customized quote, inquiry about packaging, or discuss export requirements with our team.',
  alternates: {
    canonical: 'https://destinyglobal.com/contact',
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
