# Destiny Global - Measurement & Spacing Guide

This document explains the measurement system, spacing conventions, and terminology used throughout the Destiny Global website.

---

## Table of Contents
1. [Tailwind Spacing System](#tailwind-spacing-system)
2. [Responsive Prefixes](#responsive-prefixes)
3. [Padding & Margin Classes](#padding--margin-classes)
4. [Container & Layout](#container--layout)
5. [Typography Sizing](#typography-sizing)
6. [Gap Classes](#gap-classes)
7. [Height & Width](#height--width)
8. [Real-World Examples](#real-world-examples)

---

## Tailwind Spacing System

Tailwind CSS uses a uniform spacing scale where each unit = **4px**.

| Class | Value | Pixels |
|-------|-------|--------|
| `p-1` | 0.25rem | 4px |
| `p-2` | 0.5rem | 8px |
| `p-3` | 0.75rem | 12px |
| `p-4` | 1rem | 16px |
| `p-6` | 1.5rem | 24px |
| `p-8` | 2rem | 32px |
| `p-10` | 2.5rem | 40px |
| `p-12` | 3rem | 48px |

**Rule:** Each number represents `number × 4px`

---

## Responsive Prefixes

Tailwind allows different styling at different screen sizes using prefixes:

| Prefix | Screen Size | Use Case |
|--------|-------------|----------|
| (none) | All screens | Default, applies to mobile and up |
| `sm:` | 640px+ | Small devices and tablets |
| `md:` | 768px+ | Medium devices, tablets and desktop |
| `lg:` | 1024px+ | Large devices, desktops |
| `xl:` | 1280px+ | Extra large screens |

**Example:**
```html
<!-- Mobile: text-sm, Tablet+: text-base, Desktop+: text-lg -->
<p className="text-sm md:text-base lg:text-lg">Text</p>
```

---

## Padding & Margin Classes

### Padding (p)
Adds space **inside** an element.

- `p-4` = 16px padding on all sides
- `px-4` = 16px padding on left and right (x-axis)
- `py-6` = 24px padding on top and bottom (y-axis)
- `pl-5` = 20px padding on left only
- `pr-8` = 32px padding on right only

### Margin (m)
Adds space **outside** an element (between elements).

- `m-4` = 16px margin on all sides
- `mx-auto` = Centers element horizontally
- `mb-6` = 24px margin below element
- `mt-4` = 16px margin above element

**Visual:**
```
┌─────────────────┐  ← margin
│ ┌──────────────┐│  ← padding
│ │   Content    ││
│ └──────────────┘│
└─────────────────┘
```

---

## Container & Layout

### container-custom
Custom container class defined in `globals.css` that centers content and restricts max-width.

```css
.container-custom {
  max-width: 1280px;      /* Maximum width */
  margin: 0 auto;         /* Center horizontally */
  padding: 0 40px;        /* Default padding */
}

@media (max-width: 1024px) {
  .container-custom {
    padding: 0 32px;      /* Tablet padding */
  }
}

@media (max-width: 768px) {
  .container-custom {
    padding: 0 20px;      /* Mobile padding */
  }
}
```

**Usage in Hero Section:**
```html
<div className="container-custom px-4 md:px-8">
  <!-- Content here is centered and has max-width of 1280px -->
</div>
```

---

## Typography Sizing

Tailwind text sizes follow a ratio system:

| Class | Font Size | Line Height | Use Case |
|-------|-----------|-------------|----------|
| `text-xs` | 0.75rem (12px) | 1rem (16px) | Captions, small text |
| `text-sm` | 0.875rem (14px) | 1.25rem (20px) | Small body text |
| `text-base` | 1rem (16px) | 1.5rem (24px) | Default body text |
| `text-lg` | 1.125rem (18px) | 1.75rem (28px) | Larger body text |
| `text-xl` | 1.25rem (20px) | 1.75rem (28px) | Subheadings |
| `text-2xl` | 1.5rem (24px) | 2rem (32px) | Medium headings |
| `text-3xl` | 1.875rem (30px) | 2.25rem (36px) | Large headings |
| `text-4xl` | 2.25rem (36px) | 2.5rem (40px) | Very large headings |
| `text-5xl` | 3rem (48px) | 1 | Extra large headings |
| `text-6xl` | 3.75rem (60px) | 1 | Hero section text |

**Example:**
```html
<!-- Mobile: smaller text, Desktop: larger text -->
<h1 className="text-3xl md:text-5xl lg:text-6xl">Hero Heading</h1>
```

---

## Gap Classes

Controls spacing **between** flex/grid items.

| Class | Value | Pixels |
|-------|-------|--------|
| `gap-4` | 1rem | 16px |
| `gap-6` | 1.5rem | 24px |
| `gap-8` | 2rem | 32px |
| `gap-12` | 3rem | 48px |

**Example:**
```html
<!-- Grid with 24px gap between items -->
<div className="grid grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## Height & Width

### Width Classes
- `w-full` = 100% of parent width
- `max-w-2xl` = Maximum width of 42rem (672px)
- `max-w-4xl` = Maximum width of 56rem (896px)

### Height Classes
- `h-12` = 48px (logo height)
- `h-screen` = 100vh (full viewport height)
- `min-h-[550px]` = Minimum height of 550px

**Example:**
```html
<!-- Full width, minimum height 550px -->
<section className="w-full min-h-[550px]">
  Content
</section>
```

---

## Real-World Examples

### Navbar Structure
```html
<nav className="bg-white py-6 md:py-10">
  <!-- py-6 on mobile (24px top/bottom), py-10 on desktop (40px top/bottom) -->
</nav>
```

### Product Card with Spacing
```html
<div className="p-4">
  {/* 16px padding on all sides */}
  <h3 className="text-lg mb-2">Product Name</h3>
  {/* 8px margin below heading */}
  <p className="text-sm text-gray-600 mb-4">Description</p>
  {/* 16px margin below paragraph */}
</div>
```

### Responsive Text Layout
```html
<div className="flex flex-col md:flex-row md:items-center md:gap-6">
  {/* Mobile: column layout (stacked), Desktop: row layout (side by side) */}
  {/* Desktop: 24px gap between elements */}
  <p className="text-base md:text-lg">Text</p>
  <button className="mt-4 md:mt-0">Button</button>
  {/* Mobile: 16px top margin on button, Desktop: no top margin */}
</div>
```

### Section Padding
```html
<section className="section-padding">
  <!-- section-padding = 100px top/bottom padding on desktop -->
  <!-- 60px top/bottom padding on mobile -->
</section>
```

---

## Key Terminology

| Term | Meaning | Example |
|------|---------|---------|
| **px** (pixel) | Fixed unit of measurement | `px-4` = 16px |
| **rem** | Relative to root font size | `p-4` = 1rem = 16px (if root is 16px) |
| **Responsive** | Different values at different screen sizes | `text-sm md:text-lg` |
| **Container** | Max-width wrapper that centers content | `.container-custom` |
| **Gap** | Space between flex/grid items | `gap-6` = 24px |
| **Leading** | Line height (space between lines) | `leading-tight` = 1.25 |
| **Opacity** | Transparency level | `opacity-75` = 75% opaque |
| **Z-index** | Layering order (higher = on top) | `z-50` = layer 50 |

---

## Destiny Global Custom Classes

### Section Padding
```css
.section-padding {
  padding: 100px 0;      /* 100px top/bottom */
}

.section-padding-lg {
  padding: 120px 0;      /* 120px top/bottom */
}

.section-padding-sm {
  padding: 60px 0;       /* 60px top/bottom */
}
```

### Button Styles
```css
.btn-primary {
  padding: 12px 32px;    /* 12px top/bottom, 32px left/right */
  font-size: 14px;
  font-weight: 600;
}
```

### Typography Classes
```css
.heading-hero {
  font-size: 56px;
  line-height: 1.1;
}

.body-text {
  font-size: 16px;
  line-height: 1.6;
}
```

---

## Tips & Best Practices

1. **Mobile-First**: Always set the mobile class first, then add responsive variants
   ```html
   <div className="text-sm md:text-base lg:text-lg">
     ✓ Good: starts at mobile
   ```

2. **Use Consistent Spacing**: Stick to the 4px scale
   ```html
   <div className="p-4 gap-6 mb-8">
     ✓ Uses 16px, 24px, 32px (multiples of 4)
   ```

3. **Responsive Padding**: Different padding at different sizes
   ```html
   <div className="px-4 md:px-8">
     <!-- 16px horizontal padding on mobile, 32px on desktop -->
   ```

4. **Max-Width for Width**: Use max-width instead of fixed widths for better responsiveness
   ```html
   <div className="max-w-4xl">
     <!-- Max 896px wide, but shrinks on small screens -->
   ```

---

## Project Structure Reference

- **Navbar Height**: 28.8px padding (top/bottom) = ~64px total with logo
- **Section Padding**: 100px (top/bottom) on desktop, 60px on mobile
- **Container Max-Width**: 1280px (1024px + 256px padding)
- **Product Gap**: 24px (md:) to 32px (lg:)
- **Button Padding**: 12px vertical × 32px horizontal

