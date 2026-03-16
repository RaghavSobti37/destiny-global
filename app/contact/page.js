import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
          <div className="container-custom">
            <h2 className="heading-xl mb-8">MARKETS WE SERVE</h2>
            <p className="body-text text-gray-600 mb-12 max-w-3xl">
              Our compliance infrastructure is built around the regulatory requirement of the world's most demanding import 
              markets. From ensuring best-in-class auditing standards that let us stay ahead of anticipated regulatory standards, 
              we maintain an ecosystem of controls to ensure compliance.
            </p>

            {/* Markets Grid */}
            <div className="space-y-6">
              {[
                {
                  name: 'EUROPE',
                  description: 'EUMEL compliance for pesticides/residues. Strict labelling standards met, no requests.',
                  image: 'https://images.unsplash.com/photo-1552989570-40cb8d4201b5?w=800&h=300&fit=crop'
                },
                {
                  name: 'EAST ASIA',
                  description: 'Strong demand for Indian spices, rice, and processed agricultural products.',
                  image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=300&fit=crop'
                },
                {
                  name: 'AFRICA',
                  description: 'Markets, rice, and spices-commodities with consistent demand and established trade corridors.',
                  image: 'https://images.unsplash.com/photo-1516426122078-a23e76319b38?w=800&h=300&fit=crop'
                }
              ].map((market, idx) => (
                <div key={idx} className="relative h-56 rounded-lg overflow-hidden">
                  <img 
                    src={market.image} 
                    alt={market.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center px-8">
                    <div>
                      <h3 className="heading-lg text-white font-bold mb-2">{market.name}</h3>
                      <p className="body-text text-white opacity-95">{market.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-2xl">
            <h2 className="heading-lg font-bold mb-2">LET'S TALK SPECIFICS!</h2>
            <p className="body-text text-gray-600 mb-8">
              We don't know what you need until you tell us. Fill in what you need for pricing, availability, 
              and documentation details — which we'll respond with actual offers and requirements.
            </p>

            {/* Contact Details */}
            <h3 className="heading-sm text-primary mb-6 font-bold">WE REPLY FASTEST VIA BELOW</h3>
            <div className="space-y-3 text-body-small text-gray-700 mb-8">
              <p>📧 <a href="mailto:destinygllobal@gmail.com" className="text-primary hover:underline">destinygllobal@gmail.com</a></p>
              <p>📱 Local: <a href="tel:+919372731656" className="text-primary hover:underline">+91 (9372) 731656</a></p>
              <p>📱 Diaspora: <a href="tel:+919306306012" className="text-primary hover:underline">+91 (9306) 306012</a></p>
            </div>

            {/* Form Section */}
            <h3 className="heading-sm text-primary mb-6 font-bold">HOW CAN WE SUPPORT YOU?</h3>
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Your Name*" 
                className="input-field" 
                required 
              />
              <input 
                type="text" 
                placeholder="Company Name*" 
                className="input-field" 
                required 
              />
              <input 
                type="text" 
                placeholder="Country*" 
                className="input-field" 
                required 
              />
              <input 
                type="text" 
                placeholder="Mention Product Requirement*" 
                className="input-field" 
                required 
              />
              <input 
                type="text" 
                placeholder="Quantity Needed*" 
                className="input-field" 
                required 
              />
              <input 
                type="text" 
                placeholder="Preferred Packaging*" 
                className="input-field" 
                required 
              />
              <textarea 
                placeholder="Anything Else We Should Know*" 
                className="input-field" 
                rows="4" 
                required
              ></textarea>
              
              <p className="text-xs text-gray-600 mt-4 py-4 border-t border-gray-200">
                We respond to every genuine enquiry within 48 business hours. If your requirement is urgent, mention it in the message and we'll mark it as urgent priority.
              </p>

              <button type="submit" className="w-full btn-primary mt-8">
                SEND INQUIRY
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
