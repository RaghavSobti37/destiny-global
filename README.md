# Destiny Global - Premium Dehydrated Powders Exporter

[![Version: 0.1.2](https://img.shields.io/badge/Version-0.1.2-blue?style=for-the-badge)](package.json)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3+-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/RaghavSobti37/destiny-global)

A high-performance, modern, and responsive Next.js website for **Destiny Global**, showcasing premium Indian dehydrated powders and agricultural products to the global market.

---

## 📢 Recent Updates (v0.1.2)
- **Authentic Founder Showcase**: Added professional high-resolution imagery for founding team in About section.
- **GEO 2026 SEO Architecture**: Deployed advanced structured JSON-LD schema and comprehensive metadata framework across pages.
- **Enhanced Footer & Navigation**: Refined footer layout, inquiry links, and product catalog access.

---

## 🌟 Key Features

- 🚀 **Next.js 14 App Router**: Utilizing the latest React features for optimal performance and SEO.
- 🎨 **Premium UI/UX**: Custom-designed interface with smooth transitions, gradients, and professional aesthetics.
- 📦 **Product Showcase**: Detailed catalog of premium dehydrated powders with high-quality optimized images.
- 📧 **Smart Contact System**: Integrated inquiry system using Nodemailer with professional email templates.
- 📱 **Fully Responsive**: Optimized for everything from small mobile devices to large desktop monitors.
- 🛠️ **Custom Utility System**: Built with a robust Tailwind-based spacing and measurement system.

---

## 💻 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14** | Framework & Routing |
| **React 18** | UI Logic |
| **Tailwind CSS** | Utility-first Styling |
| **Nodemailer** | Email Integration |
| **React Icons** | Iconography |
| **Vercel** | Hosting & CI/CD |

---

## 📁 Project Structure

```text
destiny-global/
├── app/                  # Next.js App Router directory
│   ├── api/              # API routes (Contact, etc.)
│   ├── globals.css       # Global styles & custom utilities
│   └── layout.js         # Root layout
├── components/           # Reusable React components
│   ├── sections/         # Page sections (Hero, Certs, etc.)
│   └── ui/               # UI components (Navbar, Footer, etc.)
├── lib/                  # Helper functions & data
├── public/               # Static assets (Images, Logos)
└── DOCS/                 # Detailed documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RaghavSobti37/destiny-global.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 🛠️ Internal Utilities

This project uses a custom utility system built on top of Tailwind CSS for consistency in spacing and design.

- **Spacing System**: Multiple of 4px (1 unit = 4px).
- **Typography**: Custom classes like `.heading-hero`, `.heading-xl`, and `.body-text`.
- **Layout**: `.container-custom` for centered, max-width content.
- **Section Padding**: `.section-padding` for consistent vertical spacing.

For a detailed guide on measurements and spacing, see [DOCS/UI_SYSTEM.md](DOCS/UI_SYSTEM.md).

---

## 📄 Documentation

- [UI & Design System](DOCS/UI_SYSTEM.md) - Spacing, typography, and component guide.
- [Contact API](DOCS/API_REFERENCE.md) - How the contact system works.
- [Contributing Guide](CONTRIBUTING.md) - Guidelines for developers.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact

**Destiny Global**
- **Vishal Patil**: +91 9373719966
- **Harshali Patil**: +91 8208676512
- **Email**: [destinyglobal@example.com](mailto:destinyglobal@example.com)
- **Website**: [destiny-global.vercel.app](https://destiny-global.vercel.app)

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

© 2026 Destiny Global. All rights reserved.
