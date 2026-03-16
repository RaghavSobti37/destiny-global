# Destiny Global - Premium Dehydrated Powders Exporter

A modern, responsive Next.js website for Destiny Global, showcasing premium Indian dehydrated powders and agricultural products.

## Features

- 🏠 **Home Page**: Hero section, featured products, certifications, team showcase
- 📦 **Product Catalog**: Browse all available dehydrated powders
- 📧 **Contact Form**: Easy inquiry system with multiple contact options
- 🌍 **Market Information**: Information about served markets (Europe, East Asia, Africa)
- 📱 **Fully Responsive**: Mobile, tablet, and desktop optimized
- 🎨 **Tailwind CSS**: Modern styling with utility-first approach
- ⚡ **Next.js 14**: Latest React framework with App Router

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── layout.js          # Root layout
├── page.js            # Home page
├── globals.css        # Global styles
├── products/
│   └── page.js        # Products page
└── contact/
    └── page.js        # Contact page

components/
├── Navbar.js          # Navigation component
├── Footer.js          # Footer component
├── HeroSection.js     # Hero banner
├── ProductsShowcase.js # Product showcase
├── ProductCard.js     # Product card component
└── CertificationsSection.js # Certifications display
```

## Logo Files

The following logo files are used in the navbar and throughout the site:
- **logo-text.png** - Full logo with icon and text (used in navbar)
- **logo-icon.png** - Logo icon only (for icon-only implementations)
- **text.png** - Text only version (for text-only implementations)

## Building for Production

```bash
npm run build
npm run start
```

## Customization

- Update brand colors in [tailwind.config.js](tailwind.config.js)
- Replace placeholder images with actual product images
- Update company contact information in components
- Modify product data in component files

## License

© 2026 Destiny Global. All rights reserved.
# destiny-global
