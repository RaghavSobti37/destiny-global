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
      <div className="px-8 md:px-12 py-8 flex items-center justify-between" style={{ width: '67%' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 flex-shrink-0">
            <img 
              src="/logo-icon.png" 
              alt="Destiny Global Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <img 
            src="/Asset 1@20x-8.png" 
            alt="Destiny Global" 
            className="h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`nav-link text-base font-600 transition-colors duration-300 ${
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
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-gray-300 flex justify-center w-full">
          <div className="px-8 py-4 space-y-3" style={{ width: '67%' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`nav-link block text-base font-600 py-2 transition-colors duration-300 ${
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
