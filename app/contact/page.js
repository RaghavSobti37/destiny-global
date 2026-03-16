import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact - Destiny Global',
  description: 'Get in touch with Destiny Global for product inquiries and quotes.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Markets Section */}
        <section className="section-padding bg-white">
          <div className="container-custom px-4 md:px-8">
            <h2 className="heading-xl mb-8 text-2xl md:text-4xl">MARKETS WE SERVE</h2>
            <p className="body-text text-gray-600 mb-12 max-w-3xl text-sm md:text-base">
              Our compliance infrastructure is built around the regulatory requirement of the world&apos;s most demanding import 
              markets. From ensuring best-in-class auditing standards that let us stay ahead of anticipated regulatory standards, 
              we maintain an ecosystem of controls to ensure compliance.
            </p>

            {/* Markets Grid */}
            <div className="space-y-6">
              {[
                {
                  name: 'EUROPE',
                  description: 'EUMEL compliance for pesticides/residues. Strict labelling standards met, no requests.',
                  image: '/colosseum-europe.jpg'
                },
                {
                  name: 'EAST ASIA',
                  description: 'Strong demand for Indian spices, rice, and processed agricultural products.',
                  image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=300&fit=crop'
                },
                {
                  name: 'AFRICA',
                  description: 'Markets, rice, and spices-commodities with consistent demand and established trade corridors.',
                  image: '/africa.jpeg'
                }
              ].map((market, idx) => (
                <div key={idx} className="relative h-48 md:h-56 rounded-lg overflow-hidden">
                  <img 
                    src={market.image} 
                    alt={market.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center px-6 md:px-8">
                    <div>
                      <h3 className="heading-lg text-white font-bold mb-2 text-xl md:text-2xl">{market.name}</h3>
                      <p className="body-text text-white opacity-95 text-sm md:text-base">{market.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Component */}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
