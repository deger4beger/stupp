const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="light"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   "some": colors.slate[100]
    // }
  },
  plugins: [

  ],
}
