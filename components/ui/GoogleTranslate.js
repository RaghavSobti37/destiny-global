'use client'

import { useEffect, useState, useRef } from 'react'
import Script from 'next/script'

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

export default function GoogleTranslate() {
  const [mounted, setMounted] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
  const [isOpen, setIsOpen] = useState(false)
  const [languages, setLanguages] = useState(['en', 'hi', 'mr'])
  const containerRef = useRef(null)

  useEffect(() => {
    setMounted(true)

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

    // Add global init function
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

    // Handle clicks outside the dropdown to close it
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Sync translation when selected language changes
  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode)
    setIsOpen(false)

    // Programmatically select language in Google Translate hidden dropdown
    const selectEl = document.querySelector('.goog-te-combo')
    if (selectEl) {
      if (langCode === 'en') {
        // To restore to English, we clear selection or trigger restored state
        selectEl.value = ''
      } else {
        selectEl.value = langCode
      }
      selectEl.dispatchEvent(new Event('change'))
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Hidden Google Translate Widget */}
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

      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  )
}
