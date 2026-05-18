# UI & Design System - Destiny Global
**Version: 0.1.3** | **Status: Active & Enforced**

This document outlines the measurement system, spacing conventions, and custom UI components used in the Destiny Global website.

---

## 📐 Measurement System

We follow a **4px base unit** for all spacing (padding, margin, gaps). This ensures visual consistency across the entire application.

| Tailwind Unit | Pixel Value | Use Case |
| :--- | :--- | :--- |
| `1` | 4px | Micro-adjustments |
| `2` | 8px | Tight spacing, small gaps |
| `3` | 12px | Compact padding |
| `4` | 16px | Standard padding/margin |
| `6` | 24px | Large gaps between elements |
| `8` | 32px | Section sub-spacing |
| `10` | 40px | Container padding |
| `12` | 48px | Significant separation |

---

## 🍱 Layout Utilities

### Container
We use a custom container class to maintain consistent content width across all screens.
- **Class**: `.container-custom`
- **Max Width**: 1280px
- **Padding**: 40px (Desktop), 32px (Tablet), 20px (Mobile)

### Section Padding
Standardized vertical padding for all major sections.
- `.section-padding`: 100px (Desktop) / 60px (Mobile)
- `.section-padding-lg`: 120px (Desktop) / 80px (Mobile)
- `.section-padding-sm`: 60px (Desktop) / 40px (Mobile)

---

## ✍️ Typography

| Class | Font Size | Line Height | Weight | Style |
| :--- | :--- | :--- | :--- | :--- |
| `.heading-hero` | 56px | 1.1 | 700 | Uppercase |
| `.heading-xl` | 42px | 1.2 | 700 | Uppercase |
| `.heading-lg` | 32px | 1.3 | 700 | Uppercase |
| `.heading-md` | 24px | 1.3 | 700 | Uppercase |
| `.heading-sm` | 20px | 1.4 | 600 | Uppercase |
| `.body-text` | 16px | 1.6 | 400 | - |
| `.body-small` | 14px | 1.6 | 400 | - |

---

## 🎨 Color Palette

We use a premium, trustworthy color scheme:

- **Primary Blue**: `#0f75bc` (Trust, Global reach)
- **Accent Yellow**: `#fcb040` (Quality, Excellence)
- **Dark Text**: `#333333`
- **Light Background**: `#f9f9f9`

---

## 🔘 Components

### Buttons
- `.btn-primary`: Blue background, white text, 12px/32px padding.
- `.btn-accent`: Yellow background, black text, extra bold.
- `.btn-outline-primary`: Transparent background, blue border.

### Cards
- `.product-card`: White background, subtle shadow, transition on hover.
- `.product-image`: 240px height, centered, object-fit: cover.

---

## 📱 Responsive Prefixes

Always build **Mobile-First**.

- `(default)`: Mobile (320px+)
- `sm:`: Small Devices (640px+)
- `md:`: Tablets & Small Laptops (768px+)
- `lg:`: Desktops (1024px+)
- `xl:`: Large Desktops (1280px+)

---

## 💡 Best Practices

1. **Avoid Hardcoded Values**: Always use Tailwind utility classes or custom CSS variables defined in `globals.css`.
2. **Image Optimization**: Use the Next.js `<Image />` component for all assets to ensure fast LCP and optimized bandwidth.
3. **Consistency**: Stick to the 4px scale. If a value is not a multiple of 4, double-check if it can be adjusted.
