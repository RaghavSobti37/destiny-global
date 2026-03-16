import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProductsShowcase from '@/components/ProductsShowcase'
import CertificationsSection from '@/components/CertificationsSection'

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
          <h2 className="heading-xl text-center mb-4">MARKETS WE SERVE</h2>
          <p className="body-text text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Our compliance infrastructure is built around the regulatory requirement of the world's most demanding import 
            markets. From ensuring best-in-class auditing standards that let us stay ahead of anticipated regulatory standards, 
            we maintain an ecosystem of controls to ensure compliance.
          </p>

          {/* Markets Grid */}
          <div className="space-y-8">
            {[
              {
                name: 'EUROPE',
                description: 'EUMEL compliance for pesticides/residues. Strict labelling standards met, no requests.',
                image: 'https://images.unsplash.com/photo-1552989570-40cb8d4201b5?w=1200&h=400&fit=crop'
              },
              {
                name: 'EAST ASIA',
                description: 'Strong demand for Indian spices, rice, and processed agricultural products.',
                image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=400&fit=crop'
              },
              {
                name: 'AFRICA',
                description: 'Markets, rice, and spices-commodities with consistent demand and established trade corridors.',
                image: 'https://images.unsplash.com/photo-1516426122078-a23e76319b38?w=1200&h=400&fit=crop'
              }
            ].map((market, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src={market.image} 
                  alt={market.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/50 flex items-center px-8 sm:px-12">
                  <div>
                    <h3 className="heading-lg text-white font-bold mb-3">{market.name}</h3>
                    <p className="body-text text-white opacity-95 max-w-md">{market.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built on GRIT Section */}
      <section className="relative section-padding bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=600&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container-custom relative z-10">
          <h2 className="heading-xl mb-6 font-bold leading-tight">
            BUILT ON GRIT<br />
            <span className="text-yellow-400">BACKED BY CREDENTIALS!</span>
          </h2>
          <p className="body-text opacity-95 max-w-2xl leading-relaxed">
            Destiny Global is a fully registered Indian export house operating at the intersection of international 
            trade compliance and unchallenged quality standards.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="heading-lg font-bold mb-12">OUR PHILOSOPHY</h2>
          <div className="max-w-3xl space-y-8">
            <p className="body-text text-gray-700 leading-relaxed">
              Building up a trade business (and a people) around a singular idea — if we ourselves would buy this product, then we are onto something that others will too.
            </p>
            <p className="body-text text-gray-700 leading-relaxed">
              Have a conversation, not a sales pitch. Source products with care, because the reputation of our partners is a reflection 
              on our own. Create confidence around each shipment. We stand behind every bill of lading — with full transparency and records 
              of each batch. Be available beyond just the transactional. The most valuable relationship in trade is built over time and is maintained with regular updates, market sharing 
              and assurance that comes with working alongside a trusted partner.
            </p>
            <p className="body-text text-gray-700 leading-relaxed">
              Everyone benefits when supply chains are clear and stakeholders are transparent. We live by this advice, and it's called 
              us to practice alongside other organizations who share our values.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-navy text-white" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container-custom text-center">
          <h2 className="heading-lg font-bold mb-8">READY TO SOURCE FROM US?</h2>
          <button className="btn-accent">
            SEND US AN INQUIRY!
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}
