# Destiny Global — Corporate Portal & B2B Catalog

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Version](https://img.shields.io/badge/version-0.1.9-emerald?style=for-the-badge)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A high-performance corporate platform and B2B catalog for **Destiny Global**, showcasing premium Indian agricultural exports (dehydrated onion, garlic, ginger, and customized food ingredients) to the global market. Designed for speed, strict SEO validation, and high-fidelity visuals.

---

## 🏛️ System Architecture

The application is structured using **Next.js 14** (App Router) to support high-speed static generation (SSG) for public catalog pages, server-side rendering (SSR) where dynamic content context is needed, and serverless API handlers for lead generation.

```text
destiny-global/
├── app/                  # App Router: layout-driven rendering and routing
│   ├── api/              # Serverless API routes (Nodemailer integrations)
│   ├── about/            # Corporate background & executive bios
│   ├── contact/          # Interactive B2B inquiry form
│   ├── products/         # B2B Product catalog
│   ├── globals.css       # Core design tokens, global layout variables
│   ├── layout.js         # Root shell (Navbar, Footer, Global Context)
│   ├── page.js           # Home / Hero Showcase
│   ├── sitemap.js        # Dynamic Search Console sitemap generator
│   └── robots.js         # Crawling configurations
├── components/           # Component library
│   ├── sections/         # Domain-specific UI blocks (Hero, ProductsShowcase)
│   └── ui/               # Core design system components (Navbar, Footer)
├── lib/                  # Application state, static product DB registries
├── public/               # Asset management (Optimized WebP/PNG formats)
└── DOCS/                 # Architectural specifications
```

---

## 🚀 Technical Highlights

### ⚡ Performance & Asset Delivery
- **`next/image` Integration**: Custom-engineered layout aspect ratios utilizing lazy loading and priority pre-fetching for above-the-fold assets.
- **Normalized Media Store**: Standardized high-resolution product photography pipeline running on WebP/PNG containers in `public/items/` to minimize client-side payload sizes.

### 🔍 B2B SEO & Metadata Density (GEO 2026)
- **JSON-LD Schema**: Structured data models embedded dynamically for `Organization` and `ProductCatalog` to drive search engine rich-snippet extraction.
- **Metadata Orchestration**: Strict metadataBase definitions, canonical links, and social card mappings (OpenGraph, Twitter Cards) configured inside Next.js layout structures.
- **Routing Optimization**: Programmatic XML sitemaps generated at build time via `sitemap.js`.

### ✉️ Serverless Inquiry Engine
- **Endpoint**: `/api/contact` handles secure B2B request payloads.
- **Transport**: Standardized SMTP configurations utilizing NodeMailer, delivering styled HTML templates directly to stakeholders.

---

## 🛠️ Development & Deployment

### Environment Configuration
Create a `.env.local` file in the project root:
```env
EMAIL_USER=admin@destinnyglobal.com
EMAIL_PASSWORD=your-secure-app-password
```

### Installation
```bash
# Clone the repository
git clone https://github.com/RaghavSobti37/destiny-global.git

# Install dependencies (strictly lockfile aligned)
npm ci
```

### Script Directory
```bash
# Start Next.js development server
npm run dev

# Run static analysis and linting checks
npm run lint

# Compile optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🎨 UI/UX Design System Tokens

The frontend architecture strictly enforces UI guidelines specified in [DOCS/UI_SYSTEM.md](DOCS/UI_SYSTEM.md):
- **4px Spatial Grid**: All margins, paddings, and layouts must leverage standard multiples of `4px` (`space-y-4`, `p-8`, etc.).
- **Visual Design System**: Tailored premium palette utilizing curated slate-greys, warm accent colors, and custom shadows to reflect B2B corporate compliance.
- **Responsive Breakpoints**: Design adapts seamlessly from mobile viewports up to large desktop monitors.

---

## 📂 Developer Guides
- [API Reference Specification](DOCS/API_REFERENCE.md)
- [Design Tokens & UI System](DOCS/UI_SYSTEM.md)
- [Agentic Memory & Versions](DOCS/AGENTIC_MEMORY.md)

---

## 🤝 Contribution Workflow
1. Branch from `main` using standard prefix naming: `feat/` or `fix/`.
2. Ensure Next.js compilation succeeds before pushing (`npm run build`).
3. Maintain documentation updates inside `DOCS/AGENTIC_MEMORY.md` during state transitions.

© 2026 Destiny Global. All rights reserved.
