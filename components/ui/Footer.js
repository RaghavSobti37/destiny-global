'use client'

import { SiWhatsapp } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="gradient-footer text-black md:text-white py-12 md:py-16"
      style={{
        background: 'linear-gradient(to right, transparent 0%, #0f75bc 100%)'
      }}
    >
      <div className="container-custom mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Logo & Copyright */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src="/logo-text.png" 
                alt="Destiny Global" 
                style={{ height: '120px', objectFit: 'contain', width: 'auto', marginBottom: '6px' }}
              />
              <p className="text-xs opacity-75" style={{ fontSize: '12px', lineHeight: '1.2' }}>EXPORTING INDIAN DEHYDRATED POWERS</p>
            </div>
          
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="heading-sm text-black md:text-white mb-6 font-extrabold text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="footer-link body-small transition text-sm">Home</a></li>
              <li><a href="/about" className="footer-link body-small transition text-sm">About Us</a></li>
              <li><a href="/products" className="footer-link body-small transition text-sm">Product Catalogue</a></li>
              <li><a href="/contact" className="footer-link body-small transition text-sm">Get Quote</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="grid grid-cols-1 gap-8">
            {/* Contact Details */}
            <div>
              <h3 className="heading-sm text-black md:text-white mb-6 font-extrabold text-sm md:text-base">Contact Us</h3>
              <div className="space-y-3">
                <a href="https://wa.me/919373719966" className="footer-link body-small transition text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp size={16} />
                  VISHAL PATIL +919373719966
                </a>
                <a href="https://wa.me/918208676512" className="footer-link body-small transition text-sm flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp size={16} />
                  HARSHALI PATIL +918208676512
                </a>
              </div>
            </div>

            {/* Office Address */}
            <div>
              <h3 className="heading-sm text-black md:text-white mb-6 font-extrabold text-sm md:text-base">Office Address</h3>
              <p className="body-small opacity-90 text-sm">
                Shop No 407, Third Floor,<br />
                Maruti Plaza, Vidya Vikas Circle,<br />
                Gangapur Road, Nashik - 422005
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom border-t border-white border-opacity-20 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm opacity-90">
          <p className="text-black md:text-white">&copy; {currentYear} Destinnny Global All Rights Reserved</p>
          <p className="text-black md:text-white mt-4 md:mt-0">Developed by D Mosh Global</p>
        </div>
      </div>
    </footer>
  )
}
