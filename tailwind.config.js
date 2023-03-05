/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': "#121212",
        'primary': "#9CF454"
      },
      fontFamily: {
        'heading': ["clashDisplay"],
        'body': ["Noto Sans"],
        'body-bold': ["Noto Sans 700"],
        'body-medium': ["Noto Sans 500"],
        'body-light': ["Noto Sans 250"],
      }
    },
  },
  plugins: [],
}