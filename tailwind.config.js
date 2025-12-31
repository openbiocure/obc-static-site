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
        'obc-blue': '#00239C',
        'obc-dark-blue': '#001E62',
        'obc-orange': '#E76900',
        'obc-cyan': '#00A3E0',
        'obc-bg': 'rgb(249, 250, 251)',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



