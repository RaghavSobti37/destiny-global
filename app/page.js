import dynamic from 'next/dynamic'
import Image from 'next/image'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import HeroSection from '@/components/sections/HeroSection'

// Lazy load below-fold sections
const ProductsShowcase = dynamic(() => import('@/components/sections/ProductsShowcase'), {
  loading: () => <div className="section-padding bg-gray-100 h-96" />,
})

const CertificationsSection = dynamic(() => import('@/components/sections/CertificationsSection'), {
  loading: () => <div className="section-padding bg-light-gray h-64" />,
})

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsShowcase />
      <CertificationsSection />
      
      {/* Markets We Serve Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-xl text-center mb-4 text-2xl md:text-4xl">MARKETS WE SERVE</h2>
          <p className="body-text text-center text-gray-700 mb-16 max-w-3xl mx-auto text-sm md:text-base">
            Our compliance infrastructure is built around the regulatory requirement of the world&apos;s most demanding import 
            markets. From ensuring best-in-class auditing standards that let us stay ahead of anticipated regulatory standards, 
            we maintain an ecosystem of controls to ensure compliance.
          </p>

          {/* Markets Grid */}
          <div className="space-y-6 md:space-y-8">
            {[
              {
                name: 'EUROPE',
                description: 'EUMEL compliance for pesticides/residues. Strict labelling standards met, no requests.',
                image: '/europe.jpeg'
              },
              {
                name: 'EAST ASIA',
                description: 'Strong demand for Indian spices, rice, and processed agricultural products.',
                image: '/africa.jpeg'
              },
              {
                name: 'AFRICA',
                description: 'Markets, rice, and spices-commodities with consistent demand and established trade corridors.',
                image: '/africa1.jpeg'
              }
            ].map((market, idx) => (
              <div key={idx} className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image 
                  src={market.image} 
                  alt={market.name} 
                  fill
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-8 md:px-12">
                  <div>
                    <h3 className="heading-lg text-white font-bold mb-3 text-lg md:text-2xl">{market.name}</h3>
                    <p className="body-text text-white opacity-95 max-w-md text-sm md:text-base">{market.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
