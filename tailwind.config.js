/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'salmon': '#E9967A',
        'dark-late-gray': '#42442f',
        'milk': '#f3eee8'
      },
      fontFamily: {
        'logo': 'Playfair Display',
      },
      height: {
        'line': '1px'
      },
      fontSize: {
        'default': '10px'
      },
      lineHeight: {
        'masikip': '.25rem'
      }
    },
  },
  plugins: [],
}
