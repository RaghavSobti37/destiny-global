export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="gradient-footer text-white py-16">
      <div className="container-custom mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Copyright */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">DG</span>
              </div>
              <div>
                <span className="font-bold text-xs block">DESTINY</span>
                <span className="font-bold text-xs block">GLOBAL</span>
              </div>
            </div>
            <p className="body-small opacity-90">Exporting premium Indian dehydrated powders globally.</p>
            <p className="caption opacity-75 mt-6">&copy; {currentYear} Destiny Global</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="heading-sm text-white mb-6 font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="body-small hover:text-yellow-300 transition">Home</a></li>
              <li><a href="/products" className="body-small hover:text-yellow-300 transition">Products</a></li>
              <li><a href="/contact" className="body-small hover:text-yellow-300 transition">Contact</a></li>
              <li><a href="/about" className="body-small hover:text-yellow-300 transition">About Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="heading-sm text-white mb-6 font-bold">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="caption opacity-75 mb-1">Email</p>
                <a href="mailto:destinygllobal@gmail.com" className="body-small hover:text-yellow-300 transition">
                  destinygllobal@gmail.com
                </a>
              </div>
              <div>
                <p className="caption opacity-75 mb-1">Local</p>
                <a href="tel:+919372731656" className="body-small hover:text-yellow-300 transition">
                  +91 (9372) 731656
                </a>
              </div>
              <div>
                <p className="caption opacity-75 mb-1">Diaspora</p>
                <a href="tel:+919306306012" className="body-small hover:text-yellow-300 transition">
                  +91 (9306) 306012
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Office Address */}
          <div>
            <h3 className="heading-sm text-white mb-6 font-bold">Office Address</h3>
            <p className="body-small opacity-90 mb-6">
              Shop No. 451, Third Floor,<br />
              Mandai Plaza, Sector-20,<br />
              Nerul, Navi Mumbai - 400706
            </p>
            <p className="caption opacity-75">Developed by D Nandi Global</p>
          </div>
        </div>
      </div>

      {/* Bottom Border & Copyright */}
      <div className="container-custom border-t border-white/20 pt-8">
        <div className="text-center">
          <p className="body-small opacity-75">
            All rights reserved. Destiny Global &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
