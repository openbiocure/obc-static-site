# Color System Reference

This document outlines the new color system based on the design specifications.

## Primary Colors

- `primary-100`: #0F2A44 (Dark Blue)
- `primary-80`: #13416D
- `primary-60`: #246AAD
- `primary-40`: #0972D7 (Main Primary)
- `primary-20`: #B4D8FA
- `primary-10`: #EFF6FF (Lightest)

## Secondary Colors

- `secondary-100`: #2FA4A9 (Teal)
- `secondary-80`: #41D0D6
- `secondary-60`: #5BECF3
- `secondary-40`: #7DF9FF
- `secondary-20`: #A3FBFF
- `secondary-10`: #E9FEFF (Lightest)

## Alert & Status Colors

- `alert-success`: #12D18E (Green)
- `alert-warning`: #FFC832 (Yellow)
- `alert-error`: #F54141 (Red)

## Greyscale

- `gray-900`: #212121 (Darkest)
- `gray-800`: #424242
- `gray-700`: #616161
- `gray-600`: #757575
- `gray-500`: #9E9E9E
- `gray-400`: #BDBDBD
- `gray-300`: #E0E0E0
- `gray-200`: #EEEEEE
- `gray-100`: #F5F5F5
- `gray-0`: #FFFFFF (White)

## Border Colors

- `border-default`: #E1E4EA
- `border-light`: #E1EBF4

## Background Colors

- `background-light`: #F2F5F8
- `background-white`: #FFFFFF

## Usage in Tailwind

### Primary Colors
```tsx
<div className="bg-primary-100 text-white">Dark Primary</div>
<div className="bg-primary-40 text-white">Main Primary</div>
<div className="bg-primary-10 text-primary-100">Light Primary</div>
```

### Secondary Colors
```tsx
<div className="bg-secondary-100 text-white">Teal</div>
<div className="bg-secondary-40 text-gray-900">Light Teal</div>
```

### Alert Colors
```tsx
<div className="bg-alert-success text-white">Success</div>
<div className="bg-alert-warning text-gray-900">Warning</div>
<div className="bg-alert-error text-white">Error</div>
```

### Greyscale
```tsx
<div className="bg-gray-900 text-white">Dark Background</div>
<div className="text-gray-500">Muted Text</div>
<div className="border border-gray-200">Light Border</div>
```

## Typography

### Font Families
- `font-sans`: DM Sans (default)
- `font-urbanist`: Urbanist
- `font-lato`: Lato
- `font-ibm-plex`: IBM Plex Sans
- `font-work-sans`: Work Sans

### Font Sizes
- `text-xs`: 10px / 13px
- `text-sm`: 12px / 16px
- `text-base`: 14px / 22px
- `text-lg`: 16px / 26px
- `text-xl`: 18px / 20px
- `text-2xl`: 20px / 26px
- `text-3xl`: 24px / 31px
- `text-4xl`: 30px / 40px
- `text-5xl`: 34px / 40px
- `text-6xl`: 48px / 77px

## Legacy Color Mappings

For backward compatibility:
- `obc-bg` → `background-light` (#F2F5F8)
- `obc-blue` → `primary-40` (#0972D7)
- `obc-primary` → `primary-100` (#0F2A44)
- `obc-secondary` → `secondary-100` (#2FA4A9)
