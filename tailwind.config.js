/** @type { import('tailwindcss').Config } */


module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
         lora: ['Lora'],
         heebo: ['Heebo'],
         roboto: ['Roboto'],
         poppins: ['Poppins'],
         playfair: ['Playfair Display'],
         lato: ['Lato'],
         inter: ['Inter'],
         robotoslab: ['Roboto Slab'],
         merriweather: ['Merriweather']
       }
     }
  },
  plugins: [],
}

