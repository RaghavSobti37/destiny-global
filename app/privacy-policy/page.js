import Link from 'next/link'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Privacy Policy | Destiny Global',
  description: 'How Destiny Global collects, uses and protects the information you share with us through this website.',
  alternates: {
    canonical: 'https://www.destinnyglobal.com/privacy-policy',
  },
}

const sections = [
  {
    title: '1. Who We Are',
    body: [
      'Destiny Global is an Indian export business with its office at Shop No 407, Third Floor, Maruti Plaza, Vidya Vikas Circle, Gangapur Road, Nashik - 422005, Maharashtra, India. This policy explains how we handle information collected through www.destinnyglobal.com (the "website").',
    ],
  },
  {
    title: '2. Information We Collect',
    body: [
      'Information you give us: when you submit an inquiry, we collect the details you enter, such as your name, company, country, product of interest, required quantity, packaging preference and your message, along with any contact details (email address or phone/WhatsApp number) you choose to include.',
      'Information you share directly: if you contact us by email, phone or WhatsApp, we receive the details you send through those channels.',
      'Technical information: like most websites, our hosting provider may automatically record basic technical data such as IP address, browser type, device information and pages visited, for security and performance purposes.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    body: [
      'We use your information to respond to your inquiry, prepare quotations, share product, pricing, availability and documentation details, follow up on orders and trade discussions, maintain business records, and keep the website secure and working properly.',
      'We do not sell, rent or trade your personal information.',
    ],
  },
  {
    title: '4. Sharing of Information',
    body: [
      'We share information only where needed to run our business and this website, for example with our email and website hosting service providers, logistics partners, inspection agencies or other parties involved in fulfilling an order you have requested, and with authorities where required by law.',
    ],
  },
  {
    title: '5. Cookies and Language Translation',
    body: [
      'The website offers a language selector powered by Google Translate. When you choose a language, a cookie (googtrans) is stored in your browser to remember your choice, and page content is processed by Google to provide the translation. Google’s use of that information is governed by Google’s own privacy policy. We do not use cookies for advertising.',
      'You can clear or block cookies through your browser settings; the website will still work, but your language choice will not be remembered.',
    ],
  },
  {
    title: '6. Data Retention',
    body: [
      'We keep inquiry and business correspondence for as long as needed to respond to you, carry on a trading relationship, and meet legal, tax and accounting obligations. After that, it is deleted or securely archived.',
    ],
  },
  {
    title: '7. Security',
    body: [
      'We take reasonable steps to protect the information you share with us. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '8. Your Choices',
    body: [
      'You may ask us to access, correct or delete the personal information we hold about you, or to stop contacting you, by writing to us using the details below. We will respond within a reasonable time, subject to any legal obligation to retain certain records.',
    ],
  },
  {
    title: '9. Third-Party Links',
    body: [
      'The website may contain links to third-party services, such as WhatsApp. We are not responsible for the privacy practices of those services, and we encourage you to review their policies.',
    ],
  },
  {
    title: '10. Changes to This Policy',
    body: [
      'We may update this policy from time to time. The latest version will always be available on this page, with the date it was last updated.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-light-gray py-8">
          <div className="container-custom">
            <h1 className="heading-xl mb-4">PRIVACY POLICY</h1>
            <p className="body-text text-gray-600">Last updated: October 28, 2026</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="heading-sm font-bold mb-3 text-xl md:text-2xl">{section.title}</h2>
                <div className="space-y-3">
                  {section.body.map((para, idx) => (
                    <p key={idx} className="body-text text-gray-700 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="heading-sm font-bold mb-3 text-xl md:text-2xl">11. Contact Us</h2>
              <p className="body-text text-gray-700 leading-relaxed">
                For any questions about this policy or your information, contact us at{' '}
                <a href="mailto:destinnyglobal@gmail.com" className="text-primary font-semibold underline">destinnyglobal@gmail.com</a>{' '}
                or call / WhatsApp +91 9373719966 / +91 8208676512. You can also reach us through our{' '}
                <Link href="/contact" className="text-primary font-semibold underline">contact page</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
