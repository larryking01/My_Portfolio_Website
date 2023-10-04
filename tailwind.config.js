/** @type {import('tailwindcss').Config} */


module.exports = {
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
         playfair: ['Playfair Display']
       }
     }
  },
  plugins: [],
}

