'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Product Catalogue' },
    { href: '/contact', label: 'Get Quote' },
    { href: '/about', label: 'About Us' },
  ]

  const isActive = (href) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav className="bg-white border-b-2 border-gray-300 sticky top-0 z-50 flex justify-center">
      <div className="container-custom w-full flex items-center justify-between" style={{ paddingTop: '28.8px', paddingBottom: '28.8px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/logo-text.png" 
            alt="Destiny Global" 
            className="h-12 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`nav-link text-base font-bold transition-colors duration-300 ${
                isActive(link.href) 
                  ? 'nav-link-active' 
                  : 'nav-link-inactive'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-gray-300 w-full animate-in">
          <div className="container-custom py-6 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`nav-link block text-base font-bold py-3 px-4 rounded transition-colors duration-300 ${
                  isActive(link.href) 
                    ? 'nav-link-active' 
                    : 'nav-link-inactive'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
