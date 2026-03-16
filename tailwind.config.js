/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0f75bc',
        'accent-yellow': '#fcb040',
        'black': '#000000',
        'dark-text': '#2C2C2C',
        'light-gray': '#F5F5F5',
        'border-gray': '#D0D0D0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': '56px',
        'section-lg': '42px',
        'heading': '32px',
        'subheading': '20px',
        'body': '16px',
        'small': '14px',
        'tiny': '12px',
      },
      spacing: {
        'section-py': '64px',
        'section-px': '40px',
      },
      boxShadow: {
        'product': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'product-hover': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
