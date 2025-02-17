/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    colors: {
      specialBlue: "#4731D3",
      specialWhite: "#AEBCCF",
      specialGray: "#6B7280",
    },
    fontFamily: {
      'Inter': 'Inter'
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.filter-logo-filter-light': {
          filter: 'invert(23%) sepia(31%) saturate(4070%) hue-rotate(232deg) brightness(99%) contrast(94%)'
        },
        '.filter-logo-filter-dark': {
          filter: 'invert(76%) sepia(11%) saturate(343%) hue-rotate(181deg) brightness(94%) contrast(87%)'
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
