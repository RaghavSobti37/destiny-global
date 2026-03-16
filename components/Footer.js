'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="gradient-footer text-white py-12 md:py-16"
      style={{
        background: 'linear-gradient(to right, transparent 0%, #0f75bc 100%)'
      }}
    >
      <div className="container-custom mb-12 px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo & Copyright */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 flex-shrink-0">
                <img 
                  src="/logo-icon.png" 
                  alt="Destiny Global Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <img 
                src="/text.png" 
                alt="Destiny Global" 
                className="h-8"
              />
            </div>
            <p className="body-small opacity-90 text-sm">Exporting Indian dehydrated powders.</p>
            <p className="caption opacity-75 mt-6 text-xs">&copy; {currentYear} Destiny Global</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="heading-sm text-white mb-6 font-bold text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="footer-link body-small transition text-sm">Home</a></li>
              <li><a href="/products" className="footer-link body-small transition text-sm">Products</a></li>
              <li><a href="/contact" className="footer-link body-small transition text-sm">Contact</a></li>
              <li><a href="/about" className="footer-link body-small transition text-sm">About Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="heading-sm text-white mb-6 font-bold text-sm md:text-base">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="caption opacity-75 mb-1 text-xs">Email</p>
                <a href="mailto:destinygllobal@gmail.com" className="footer-link body-small transition text-sm">
                  destinygllobal@gmail.com
                </a>
              </div>
              <div>
                <p className="caption opacity-75 mb-1 text-xs">Local</p>
                <a href="tel:+919372731656" className="footer-link body-small transition text-sm">
                  +91 (9372) 731656
                </a>
              </div>
              <div>
                <p className="caption opacity-75 mb-1 text-xs">Diaspora</p>
                <a href="tel:+919306306012" className="footer-link body-small transition text-sm">
                  +91 (9306) 306012
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Office Address */}
          <div>
            <h3 className="heading-sm text-white mb-6 font-bold text-sm md:text-base">Office Address</h3>
            <p className="body-small opacity-90 mb-6 text-sm">
              Shop No. 451, Third Floor,<br />
              Mandai Plaza, Sector-20,<br />
              Nerul, Navi Mumbai - 400706
            </p>
            <p className="caption opacity-75 text-xs">Developed by D Nandi Global</p>
          </div>
        </div>
      </div>

    </footer>
  )
}
