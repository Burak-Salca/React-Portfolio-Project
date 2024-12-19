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
    extend: {
      filter: {
        'logo-filter-light': 'invert(0%) brightness(100%)',
        'logo-filter-dark': 'invert(100%) brightness(0%)',
      }
    },
  },
  plugins: [],
}
