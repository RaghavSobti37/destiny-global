import Image from 'next/image'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

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
            <h2 className="heading-xl text-center mb-8">MEET THE DECISION MAKERS!</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {/* Team Member 1 - Vishal Patel */}
              <div className="flex flex-col items-center">
                {/* Colorful Circular Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                    alt="Vishal Patel" 
                    fill
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="heading-sm font-bold text-center mb-1">VISHAL PATIL</h3>
                <p className="body-small text-gray-600 text-center">Founder, Destiny Global</p>
              </div>

              {/* Team Member 2 - Hardshil Patil */}
              <div className="flex flex-col items-center">
                {/* Colorful Circular Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gradient-to-r from-blue-400 via-green-500 to-teal-500 shadow-lg relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                    alt="Hardshil Patil" 
                    fill
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="heading-sm font-bold text-center mb-1">HARSHALI PATIL</h3>
                <p className="body-small text-gray-600 text-center">Co-founder, Destiny Global</p>
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
              <span className="font-bold" style={{  fontFamily: 'inter' }}>BACKED BY <span style={{color: '#fcb040', fontStyle: 'italic' }}>CREDENTIALS!</span></span>
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
            
            <div className="space-y-8">
              {/* Philosophy Para 1 */}
              <p className="body-text text-blue-600 leading-relaxed">
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
          <div className="container-custom flex items-center justify-center gap-4">
            <h2 className="heading-lg font-bold whitespace-nowrap">READY TO SOURCE FROM US?</h2>
            <button className="btn-primary" style={{ fontFamily: 'inter', fontWeight: '300', fontSize: '27px', padding: '8px 20px' }}>
              SEND US AN INQUIRY!
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
