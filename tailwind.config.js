/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '576px',
      'md': '768px',
      'lg': '920px',
      'xl': '1100px',
      '2xl': '1400px',
    },
    extend: {
      screens: {
        'xs': '400px',
        'sxl': '1150px',
      },
      spacing: {
        '144': '36rem',
      },
      colors: {
        'background': '#354649',
        'card': '#4c5e61',
        'secondary': '#A3C6C4',
        'text': '#E0E7E9',
        'heart': '#F05454',
      },
    },
  },
  plugins: [],
}
