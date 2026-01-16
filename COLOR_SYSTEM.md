# Design System Reference

This document outlines the OpenBioCure design system based on the platform-ui implementation.

## Typography

### Font Families
- **Primary:** `'IBM Plex Sans', sans-serif`
- **Brand:** `'Inter', 'IBM Plex Sans', sans-serif` (fallback)

### Font Sizes

| Scale | Size | Line Height | Usage |
|-------|------|-------------|-------|
| H1 (Title) | 30px | 40px | Marketing panel title |
| H2 (Subtitle) | 18px | 20px | Form section titles |
| Brand Name | 32px | 1 | Logo header brand name |
| Body Large | 18px | 24px | Marketing panel subtitle |
| Body | 14px | 18px | Labels, inputs, body text |
| Button | 16px | 20px | Primary buttons |
| Button Small | 14px | 20px | Secondary buttons, links |
| Footer | 12px | - | Footer text |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Bold | 700 | Titles, brand name, section headings |
| Medium | 500 | Labels, buttons, links |
| Regular | 400 | Body text, inputs, placeholders, footer |

## Colors

### Background Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#000000` | Marketing panel background |
| White | `#FFFFFF` | Form panel, inputs, buttons |
| Gray 100 | `#F5F5F5` | Input suffix background, disabled inputs |
| Gray 50 | `#FAFAFA` | Button hover state |

### Text Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Text | `#212121` | Headings, labels, input text |
| Secondary Text | `#616161` | Body text, secondary buttons |
| Tertiary Text | `#757575` | Labels, dividers, icons |
| Placeholder | `#9E9E9E` | Input placeholders |
| White Text | `#FFFFFF` | Text on dark backgrounds |
| Light Gray | `#EEEEEE` | Marketing panel subtitle |

### Border Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Default Border | `#E0E0E0` | Input borders, dividers |
| Hover Border | `#BDBDBD` | Button hover state |
| Focus Border | `#2FA4A9` | Input focus, button focus outline |

### Accent Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Accent | `#2FA4A9` | Focus states, links |
| Primary Accent End | `#41D0D6` | Gradient end |
| Link Blue | `#0972D7` | Links, forgot password |
| Error Red | `#F44336` | Error borders |
| Error Background | `#FFEBEE` | Error message background |
| Error Text | `#C62828` | Error message text |

### Gradients

```css
/* Primary Button Gradient */
.primary-gradient {
  background: linear-gradient(90deg, #2FA4A9 0%, #41D0D6 100%);
}

/* Marketing Panel Overlay Gradient */
.overlay-gradient {
  background: linear-gradient(
    0deg, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(0, 0, 0, 0.2) 70.77%, 
    rgba(0, 0, 0, 0) 100%
  );
}
```

## Spacing

### Spacing Scale

| Size | Value | Usage |
|------|-------|-------|
| XS | 4px | Icon padding, small gaps |
| SM | 8px | Field gaps, label spacing |
| MD | 12px | Input padding, small gaps |
| LG | 16px | Form gaps, section spacing |
| XL | 24px | Container gaps, large spacing |
| XXL | 32px | Container padding |
| XXXL | 48px | Marketing panel padding, container padding |
| XXXXL | 64px | Logo header height |
| XXXXL | 96px | Large screen padding |
| XXXXL | 148px | Extra large screen padding |

## Component Dimensions

| Component | Height | Notes |
|-----------|--------|-------|
| Input | 43px | Standard input height |
| Button | 40px | Primary button height |
| Button Secondary | 42px | Secondary button height |
| Logo Header | 64px | Fixed height |

## Border Radius

| Size | Value | Usage |
|------|-------|-------|
| Small | 4px | Icon buttons, small elements |
| Medium | 6px | Inputs, error messages |
| Large | 8px | Buttons, containers |

## Usage in Tailwind

### Typography Classes
```tsx
<h1 className="ds-h1">Title</h1>
<h2 className="ds-h2">Subtitle</h2>
<p className="ds-body">Body text</p>
<p className="ds-body-large">Large body text</p>
<a className="ds-link">Link text</a>
```

### Color Classes
```tsx
<div className="bg-bg-black text-text-white">Dark Background</div>
<div className="bg-bg-white text-text-primary">Light Background</div>
<div className="text-text-secondary">Secondary text</div>
<div className="border border-border-default">Border</div>
<div className="bg-accent-primary text-text-white">Accent</div>
```

### Spacing Classes
```tsx
<div className="gap-spacing-sm">Small gap</div>
<div className="gap-spacing-md">Medium gap</div>
<div className="gap-spacing-lg">Large gap</div>
<div className="p-spacing-xl">Extra large padding</div>
```

### Component Classes
```tsx
<button className="primary-button">Primary Button</button>
<button className="secondary-button">Secondary Button</button>
```

## CSS Custom Properties

All design tokens are available as CSS custom properties in `:root`:

```css
/* Typography */
--font-family-primary
--font-size-h1, --font-size-h2, --font-size-body, etc.
--font-weight-bold, --font-weight-medium, --font-weight-regular
--line-height-h1, --line-height-h2, etc.

/* Colors */
--color-bg-black, --color-bg-white, --color-bg-gray-100, etc.
--color-text-primary, --color-text-secondary, etc.
--color-border-default, --color-border-hover, --color-border-focus
--color-accent-primary, --color-accent-link, etc.

/* Spacing */
--spacing-xs, --spacing-sm, --spacing-md, etc.

/* Component Dimensions */
--height-input, --height-button, etc.

/* Border Radius */
--radius-small, --radius-medium, --radius-large

/* Transitions */
--transition-fast, --transition-base

/* Opacity */
--opacity-disabled, --opacity-hover

/* Gradients */
--gradient-primary, --gradient-overlay
```

## Legacy Color Mappings

For backward compatibility:
- `obc-blue` → `#00239C` (kept for legacy)
- `obc-dark-blue` → `#001E62` (kept for legacy)
- `obc-orange` → `#E76900` (kept for legacy)
- `obc-cyan` → `#00A3E0` (kept for legacy)
