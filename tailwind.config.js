/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'cuadro-chubut': "url('../src/assets/chubutimg.jpg')",
        'portada-patagonia': "url('../src/assets/pano-bari.jpg')"
      }
    },
  },
  plugins: [],
}
