import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'About Us | Destiny Global - Premium Dehydrated Onion Exporter & Supplier',
  description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
  keywords: 'Destiny Global history, founders Vishal Patil, founder Harshali Patil, dehydrated onion quality standards, agri-export house India, export compliance, food grade onion factory, trusted B2B spice supplier, ISO certified onion processing, premium Indian spices export',
  alternates: {
    canonical: 'https://www.destinnyglobal.com/about',
  },
  openGraph: {
    title: 'About Us | Destiny Global - Premium Dehydrated Onion Exporter & Supplier',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    url: 'https://www.destinnyglobal.com/about',
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
    title: 'About Us | Destiny Global - Premium Dehydrated Onion Exporter & Supplier',
    description: 'Destiny Global is a trusted exporter and supplier of premium dehydrated onion products, including dried onion flakes, onion powder, and onion granules, delivering reliable quality and export solutions to global markets. Call us today!',
    images: ['https://www.destinnyglobal.com/logo-text.png'],
  },
}

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Destiny Global',
      'founder': [
        {
          '@type': 'Person',
          'name': 'Vishal Patil',
          'jobTitle': 'Founder',
          'image': 'https://www.destinnyglobal.com/team/vishal-patil.jpg',
          'knowsAbout': ['International Trade', 'Agriculture Export', 'Dehydrated Powders']
        },
        {
          '@type': 'Person',
          'name': 'Harshali Patil',
          'jobTitle': 'Co-founder',
          'image': 'https://www.destinnyglobal.com/team/harshali-patil.jpg',
          'knowsAbout': ['Global Supply Chain', 'Export Compliance', 'Quality Control']
        }
      ]
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
        {/* Meet the Decisionmakers Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-xl text-center mb-8">MEET THE DECISION MAKERS!</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* Team Member 1 - Vishal Patil */}
              <div className="flex flex-col items-center bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
                {/* Colorful Circular Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-5 md:mb-6 border-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg relative shrink-0">
                  <Image
                    src="/team/vishal-patil.jpg"
                    alt="Vishal Patil"
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h3 className="heading-sm font-bold text-center mb-1">VISHAL PATIL</h3>
                <p className="body-small text-primary font-medium text-center mb-4 md:mb-6">Founder & International Trade Professional</p>
                <div className="text-gray-700 text-sm leading-relaxed space-y-4 text-justify">
                  <p>My professional journey has spanned 14 years in real estate, where I learned the importance of understanding people, building relationships and following through on commitments.</p>
                  <p>With Destiny Global, I am bringing that experience into international trade. I believe that a good business relationship is built on more than a product or a price. It comes from knowing that the other person will stand by their word, communicate honestly and take responsibility for their work.</p>
                  <p>My aim is to build a business that importers can rely on, not just for one order, but as their needs grow and our relationship develops over time.</p>
                </div>
              </div>

              {/* Team Member 2 - Harshali Patil */}
              <div className="flex flex-col items-center bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
                {/* Colorful Circular Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-5 md:mb-6 border-4 border-gradient-to-r from-blue-400 via-green-500 to-teal-500 shadow-lg relative shrink-0">
                  <Image
                    src="/team/harshali-patil.jpeg"
                    alt="Harshali Patil"
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h3 className="heading-sm font-bold text-center mb-1">HARSHALI PATIL</h3>
                <p className="body-small text-primary font-medium text-center mb-4 md:mb-6">Co-founder, Destiny Global</p>
                <div className="text-gray-700 text-sm leading-relaxed space-y-4 text-justify">
                  <p>With a Master&apos;s degree in Computer Science and over 13 years of experience in the corporate sector, I have come to appreciate the value of doing things thoughtfully, paying attention to details and building systems that people can depend on.</p>
                  <p>At Destiny Global, I bring that approach to the way we work behind the scenes, from managing processes to making sure the details that matter are not overlooked. I believe that a business earns trust through the small things it does consistently, often long before the customer sees the work that goes into them.</p>
                  <p>For me, being part of Destiny Global means helping build something dependable, where care and accountability are reflected in the way we do business every day.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built on GRIT Section */}
        <section className="relative section-padding bg-gray-900 text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=600&fit=crop"
              alt="Background"
              fill
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="container-custom relative z-10">
            <h2 className="heading-xl mb-6 font-bold leading-tight" style={{ fontFamily: 'inter' }}>
              BUILT ON GRIT<br />
              <span className="font-bold" style={{ fontFamily: 'inter' }}>BACKED BY <span className="slight-italic" style={{ color: '#fcb040' }}>CREDENTIALS!</span></span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl leading-relaxed">
              Destiny Global is a fully registered Indian export house operating at the intersection of international
              trade compliance and unchallenged quality standards.
            </p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="section-padding bg-light-gray">
          <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="heading-lg font-bold mb-4 text-primary">OUR VISION</h2>
              <p className="body-text text-gray-700 leading-relaxed">
                To make Indian agricultural products a trusted choice for businesses around the world.
              </p>
            </div>
            <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="heading-lg font-bold mb-4 text-primary">OUR MISSION</h2>
              <p className="body-text text-gray-700 leading-relaxed">
                To connect global buyers with quality Indian products through honest communication, dependable sourcing and a commitment to doing things right.
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg font-bold mb-8">OUR PHILOSOPHY -</h2>

            <div className="space-y-8">
              {/* Philosophy Para 1 */}
              <p className="body-text text-primary font-semibold leading-relaxed">
                Destiny Global was founded with a clarity of purpose that most businesses spend years searching for.
              </p>

              {/* Philosophy Para 2 */}
              <p className="body-text text-gray-700 leading-relaxed">
                We are an Indian agri export company — licensed, registered, and compliance-ready — built to serve importers who need a supplier they can trust not just on the first shipment, but across a sustained trading relationship.
              </p>

              {/* Philosophy Para 3 */}
              <p className="body-text text-gray-700 leading-relaxed">
                We specialize in premium agri-food commodities: spices, pulses, grains, seeds, and dehydrated products. Every category we operate in is one where India holds a natural sourcing advantage — and one where we have invested in the infrastructure to deliver that advantage to you cleanly, legally, and consistently.
              </p>

              {/* Philosophy Para 4 */}
              <p className="body-text text-gray-700 leading-relaxed">
                Our approach to exporting is simple: no shortcuts, no substitutions, no surprises. The documentation is correct. The grade is what was agreed. The shipment departs when it was promised. This is what we consider the baseline — not a point of differentiation.
              </p>

              {/* Philosophy Para 5 */}
              <p className="body-text text-gray-700 leading-relaxed">
                Where we differentiate is in how we treat the importer relationship. We study your market&apos;s regulations before we quote. We send pre-shipment samples without being asked. We are reachable, accountable, and direct — because we understand that trust in international trade is built slowly and broken fast.
              </p>
            </div>
          </div>
        </section>

        {/* Ready to Source Section */}
        <section className="py-16 bg-black text-white">
          <div className="container-custom flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 text-center md:text-left">
            <h2 className="heading-lg font-bold">READY TO SOURCE FROM US?</h2>
            <Link href="/contact">
              <button className="btn-accent text-xl md:text-2xl" style={{ fontFamily: 'inter', fontWeight: '700', padding: '12px 32px' }}>
                SEND US AN INQUIRY!
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
