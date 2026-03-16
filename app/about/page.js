import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us - Destiny Global',
  description: 'Learn about Destiny Global, our team, philosophy, and commitment to quality.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Meet the Decisionmakers Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-xl text-center mb-16">MEET THE DECISIONMAKERS!</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {/* Team Member 1 - Vishal Patel */}
              <div className="flex flex-col items-center">
                {/* Colorful Circular Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                    alt="Vishal Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="heading-sm font-bold text-center mb-1">VISHAL PATEL</h3>
                <p className="body-small text-gray-600 text-center">Founder, Destiny Global</p>
              </div>

              {/* Team Member 2 - Hardshil Patel */}
              <div className="flex flex-col items-center">
                {/* Colorful Circular Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gradient-to-r from-blue-400 via-green-500 to-teal-500 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                    alt="Hardshil Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="heading-sm font-bold text-center mb-1">HARDSHIL PATEL</h3>
                <p className="body-small text-gray-600 text-center">Co-founder, Destiny Global</p>
              </div>
            </div>
          </div>
        </section>

        {/* Built on GRIT Section */}
        <section className="relative section-padding bg-gray-900 text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=600&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Content */}
          <div className="container-custom relative z-10">
            <h2 className="heading-xl mb-6 font-bold leading-tight">
              BUILT ON GRIT<br />
              <span className="font-bold" style={{ color: '#fcb040' }}>BACKED BY CREDENTIALS!</span>
            </h2>
            <p className="body-text opacity-95 max-w-2xl leading-relaxed">
              Destiny Global is a fully registered Indian export house operating at the intersection of international 
              trade compliance and unchallenged quality standards.
            </p>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg font-bold mb-8">OUR PHILOSOPHY -</h2>
            
            <div className="max-w-3xl space-y-8">
              {/* Philosophy Para 1 */}
              <p className="body-text text-gray-700 leading-relaxed">
                <span className="text-blue-600 font-semibold">Destiny Global was founded with a clarity of purpose that most businesses spend years searching for.</span> We are an efficient. And that is by design. We specialise in bringing goods to trade at the highest market standards across India. Our mission is to be the most responsive partner for those who are serious about doing business in India, whether that is in the agricultural side, food processing, or spice trading.
              </p>

              {/* Philosophy Para 2 */}
              <p className="body-text text-gray-700 leading-relaxed">
                Have a conversation, not a sales pitch. Source products with care, because the reputation of our partners is a reflection on our own. Create confidence around each shipment. We stand behind every bill of lading — with full transparency and records of each batch. Be available beyond just the transactional. The most valuable relationship in trade is built over time and is maintained with regular updates, market intelligence and assurance — and one where we have evolved to become — not just a vendor or partner but also a sounding board for our customer&apos;s long-term strategy. The relationship starts when a purchase order comes in, but that is only the beginning. We conduct regular business reviews, handle expedited queries, and assist — because we are invested in our partner&apos;s long-term success.
              </p>

              {/* Philosophy Para 3 */}
              <p className="body-text text-gray-700 leading-relaxed">
                Everyone benefits when supply chains are clear and stakeholders are transparent. We live by this advice, and it&apos;s called us to practice alongside other organizations who share our values.
              </p>
            </div>
          </div>
        </section>

        {/* Ready to Source Section */}
        <section className="py-16 bg-black text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg font-bold mb-8">READY TO SOURCE FROM US?</h2>
            <button className="btn-yellow">
              SEND US AN INQUIRY!
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
