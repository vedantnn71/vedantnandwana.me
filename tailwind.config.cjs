/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        monospace: ["Jetbrains Mono"],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
