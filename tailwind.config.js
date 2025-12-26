/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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



