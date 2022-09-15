/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navCol': 'hsla(0,0%,100%,0.75)',
        'navBod': 'hsl(240,17%,26%)',
      },
    },
  },
  plugins: [],
}