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
        // Original OBC Colors (keeping for backward compatibility)
        'obc-blue': '#00239C',
        'obc-dark-blue': '#001E62',
        'obc-orange': '#E76900',
        'obc-cyan': '#00A3E0',
        'obc-bg': 'rgb(249, 250, 251)',
        
        // New Design System - Primary Colors
        primary: {
          100: '#0F2A44',
          80: '#13416D',
          60: '#246AAD',
          40: '#0972D7',
          20: '#B4D8FA',
          10: '#EFF6FF',
        },
        // New Design System - Secondary Colors
        secondary: {
          100: '#2FA4A9',
          80: '#41D0D6',
          60: '#5BECF3',
          40: '#7DF9FF',
          20: '#A3FBFF',
          10: '#E9FEFF',
        },
        // Alert & Status Colors
        alert: {
          success: '#12D18E',
          warning: '#FFC832',
          error: '#F54141',
        },
        // Greyscale
        gray: {
          900: '#212121',
          800: '#424242',
          700: '#616161',
          600: '#757575',
          500: '#9E9E9E',
          400: '#BDBDBD',
          300: '#E0E0E0',
          200: '#EEEEEE',
          100: '#F5F5F5',
          0: '#FFFFFF',
        },
        // Border Colors
        border: {
          default: '#E1E4EA',
          light: '#E1EBF4',
        },
        // Background Colors
        background: {
          light: '#F2F5F8',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'xs': ['10px', { lineHeight: '13px' }],
        'sm': ['12px', { lineHeight: '16px' }],
        'base': ['14px', { lineHeight: '22px' }],
        'lg': ['16px', { lineHeight: '26px' }],
        'xl': ['18px', { lineHeight: '20px' }],
        '2xl': ['20px', { lineHeight: '26px' }],
        '3xl': ['24px', { lineHeight: '31px' }],
        '4xl': ['30px', { lineHeight: '40px' }],
        '5xl': ['34px', { lineHeight: '40px' }],
        '6xl': ['48px', { lineHeight: '77px' }],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0.06em',
        'wide': '0.2px',
      },
      borderRadius: {
        'default': '8px',
      },
    },
  },
  plugins: [],
}
