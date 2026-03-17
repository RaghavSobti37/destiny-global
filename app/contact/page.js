import Image from 'next/image'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ContactForm from '@/components/forms/ContactForm'

export const metadata = {
  title: 'Contact - Destiny Global',
  description: 'Get in touch with Destiny Global for product inquiries and quotes.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
