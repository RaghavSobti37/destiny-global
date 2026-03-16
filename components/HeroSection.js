export default function HeroSection() {
  return (
    <section className="relative h-96 md:h-[550px] bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/hero.jpeg" 
          alt="Hero background" 
          className="w-full h-full object-cover" 
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>
      
      {/* Fade Gradient Overlay (left to right, 100% to 0% opacity) */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
      }}></div>
      
      {/* Content */}
      <div className="container-custom h-full flex items-center relative z-10 py-12">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="heading-hero mb-4 font-bold leading-tight">
            FROM INDIAN FARMS<br />
            <span className="text-yellow-400">TO GLOBAL TABLES</span>
          </h1>
          
          {/* Subtext */}
          <p className="subheading mb-8 opacity-95">
            Exporting Premium Indian Dehydrated Powders
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              VIEW FULL CATALOG
            </button>
            <button className="btn-secondary">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
