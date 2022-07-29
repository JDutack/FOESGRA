/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'cuadro-chubut': "url('../src/assets/chubutimg.jpg')",
        'portada-patagonia': "url('../src/assets/pano-bari.jpg')",
        'escudo-SOESGYPE': "url('../src/assets/SOESGYPE.png')",
        'escudo-OSPES': "url('../src/assets/OSPES.png')",
        'escudo-FOESGRA': "url('../src/assets/FOESGRA.png')",
        'cuadro-tdf': "url('../src/assets/TDFimg.jpg')",
        'cuadro-sc': "url('../src/assets/SCimg.jpg')",
        'portada-torre': "url('../src/assets/pano-torre.jpg')",
        'portada-fitz': "url('../src/assets/pano-fitz.jpg')",

      }
    },
  },
  plugins: [],
}
