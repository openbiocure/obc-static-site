/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design System - Background Colors
        bg: {
          black: '#000000',
          white: '#ffffff',
          'gray-100': '#f5f5f5',
          'gray-50': '#fafafa',
        },
        // Design System - Text Colors
        text: {
          primary: '#212121',
          secondary: '#616161',
          tertiary: '#757575',
          placeholder: '#9e9e9e',
          white: '#ffffff',
          'light-gray': '#eeeeee',
        },
        // Design System - Border Colors
        border: {
          default: '#e0e0e0',
          hover: '#bdbdbd',
          focus: '#2fa4a9',
        },
        // Design System - Accent Colors
        accent: {
          primary: '#2fa4a9',
          'primary-end': '#41d0d6',
          link: '#0972d7',
          error: '#f44336',
          'error-bg': '#ffebee',
          'error-text': '#c62828',
        },
        // Legacy OBC Colors (backward compatibility)
        'obc-blue': '#00239C',
        'obc-dark-blue': '#001E62',
        'obc-orange': '#E76900',
        'obc-cyan': '#00A3E0',
        'obc-bg': 'rgb(249, 250, 251)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        brand: ['Inter', 'IBM Plex Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['30px', { lineHeight: '40px' }],
        'h2': ['18px', { lineHeight: '20px' }],
        'brand': ['32px', { lineHeight: '1' }],
        'body-large': ['18px', { lineHeight: '24px' }],
        'body': ['14px', { lineHeight: '18px' }],
        'button': ['16px', { lineHeight: '20px' }],
        'button-small': ['14px', { lineHeight: '20px' }],
        'footer': ['12px', { lineHeight: '1' }],
      },
      fontWeight: {
        bold: 700,
        medium: 500,
        regular: 400,
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'xxl': '32px',
        'xxxl': '48px',
        'xxxxl': '64px',
        'xxxxxl': '96px',
        'xxxxxxl': '148px',
      },
      borderRadius: {
        'small': '4px',
        'medium': '6px',
        'large': '8px',
      },
      height: {
        'input': '43px',
        'button': '40px',
        'button-secondary': '42px',
        'logo-header': '64px',
        'logo': '60px',
      },
      width: {
        'logo': '54px',
        'form-container': '530px',
      },
      letterSpacing: {
        'link': '-0.5px',
      },
      opacity: {
        'disabled': '0.6',
        'hover': '0.9',
      },
      transitionDuration: {
        'fast': '0.1s',
        'base': '0.2s',
      },
    },
  },
  plugins: [],
}
