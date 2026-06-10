'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

const languageNames = {
  en: 'English',
  hi: 'हिन्दी (Hindi)',
  mr: 'मराठी (Marathi)',
  fr: 'Français (French)',
  de: 'Deutsch (German)',
  es: 'Español (Spanish)',
  it: 'Italiano (Italian)',
  zh: '中文 (Chinese)',
  ja: '日本語 (Japanese)',
  ko: '한국어 (Korean)',
  ar: 'العربية (Arabic)',
}

const getLanguageFromCookie = () => {
  if (typeof document === 'undefined') return 'en'
  const value = `; ${document.cookie}`
  const parts = value.split(`; googtrans=`)
  if (parts.length === 2) {
    const cookieVal = parts.pop().split(';').shift()
    // Extract lang code from format like /en/hi or /auto/hi
    const match = cookieVal.match(/\/[a-zA-Z]+/g)
    if (match && match.length >= 2) {
      return match[1].replace('/', '')
    }
  }
  return 'en'
}

export default function GoogleTranslate() {
  const [currentLang, setCurrentLang] = useState('en')
  const [isOpen, setIsOpen] = useState(false)
  const [languages, setLanguages] = useState(['en', 'hi', 'mr'])
  const containerRef = useRef(null)
  const pathname = usePathname()
  const lastPathname = useRef(pathname)

  // Load configuration and script
  useEffect(() => {
    // Detect timezone and restrict languages based on country/region
    let langList = ['en']
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      if (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') {
        langList = ['en', 'hi', 'mr']
      } else if (tz.startsWith('Europe/')) {
        langList = ['en', 'fr', 'de', 'es', 'it']
      } else if (tz.startsWith('Asia/')) {
        langList = ['en', 'zh', 'ja', 'ko']
      } else if (tz.startsWith('Africa/')) {
        langList = ['en', 'fr', 'ar']
      } else {
        langList = ['en', 'hi', 'mr'] // Default fallback
      }
    } catch (e) {
      langList = ['en', 'hi', 'mr']
    }
    setLanguages(langList)

    // Sync state with cookie
    const savedLang = getLanguageFromCookie()
    if (savedLang && langList.includes(savedLang)) {
      setCurrentLang(savedLang)
    }

    // Set global init function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: langList.filter(l => l !== 'en').join(','),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    // Dynamically load Google Translate Script
    const scriptId = 'google-translate-script'
    let script = document.getElementById(scriptId)
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit()
    }

    // Click outside handler
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Force page reload on route transition if translation is active
  // This solves Next.js SPA DOM overwrites that wipe out Google Translate
  useEffect(() => {
    if (pathname !== lastPathname.current) {
      lastPathname.current = pathname
      const savedLang = getLanguageFromCookie()
      if (savedLang && savedLang !== 'en') {
        window.location.reload()
      }
    }
  }, [pathname])

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode)
    setIsOpen(false)

    const cookieValue = langCode === 'en' ? '' : `/en/${langCode}`
    const hostname = window.location.hostname
    const domain = hostname === 'localhost' ? '' : `; domain=.${hostname.replace(/^www\./, '')}`

    // Set cookie
    document.cookie = `googtrans=${cookieValue}; path=/`
    if (domain) {
      document.cookie = `googtrans=${cookieValue}; path=/${domain}`
    }

    // Reload page to apply translation cleanly and avoid hydration/DOM errors
    window.location.reload()
  }

  return (
    <>
      {/* Hidden Google Translate Widget Container */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Custom Styled Dropdown */}
      <div className="custom-translate-container" ref={containerRef}>
        <button 
          className="custom-translate-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="translate-globe-icon"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span className="current-lang-text">
            {languageNames[currentLang] || 'English'}
          </span>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            className={`translate-arrow-icon ${isOpen ? 'open' : ''}`}
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {isOpen && (
          <ul className="custom-translate-dropdown" role="listbox">
            {languages.map((langCode) => (
              <li key={langCode} role="option" aria-selected={currentLang === langCode}>
                <button
                  className={`dropdown-item-button ${currentLang === langCode ? 'active' : ''}`}
                  onClick={() => handleLanguageChange(langCode)}
                >
                  {languageNames[langCode]}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
