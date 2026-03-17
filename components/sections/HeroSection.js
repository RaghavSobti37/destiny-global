import Image from 'next/image'
import Link from 'next/link'
import { SiWhatsapp } from 'react-icons/si'

export default function HeroSection() {
  return (
    <section className="relative h-screen md:h-auto md:min-h-[550px] bg-black text-white overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/hero.jpeg" 
          alt="Hero background" 
          fill
          className="w-full h-full object-cover" 
          priority
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>
      
      {/* Fade Gradient Overlay (left to right, 100% to 0% opacity) */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
      }}></div>
      
      {/* Content */}
      <div className="w-full relative z-10 py-12 md:py-16">
        <div className="container-custom flex items-stretch">
          {/* Left content - matches product card left margin */}
          <div className="flex-1 min-w-0">
            <div className="max-w-4xl">
              {/* Main Heading */}
              <h1 className="heading-hero text-3xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight text-white">
                FROM INDIAN FARMS<br />
                TO <span className="italic" style={{ color: '#fcb040' }}>GLOBAL TABLES</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-base md:text-lg lg:text-xl mb-8 opacity-95">
                Exporting Premium Indian Dehydrated Powders
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
                <Link href="/products" className="btn-primary inline-block text-center px-8 py-3 md:px-10 md:py-4">
                  VIEW FULL CATALOG
                </Link>
                <Link href="/contact" className="btn-secondary inline-block text-center px-8 py-3 md:px-10 md:py-4">
                  REQUEST A QUOTE
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="text-white text-sm md:text-base space-y-2">
                <p className="font-semibold flex items-center gap-2">
                  <SiWhatsapp size={16} />
                  VISHAL PATIL - +91 9373719966
                </p>
                <p className="font-semibold flex items-center gap-2">
                  <SiWhatsapp size={16} />
                  HARSHALI PATIL - +91 8208676512
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Brand values */}
          <div className="hidden lg:flex items-end justify-end pb-12">
            <p className="text-white text-right text-base md:text-lg leading-relaxed">
              Quality. Compliance. Reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
