/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        spartan : ["Spartan" , defaultTheme.fontFamily.sans],
      },
      colors : {
        primary : {
          black : '#121212',
          gray : '#E6E6E6',
          lightGray : '#F8F8F8',
          pink : '#E91E63',
          yellow : '#F0CC84',
          error : '#D61313',
          succuss : '#0BB17F'
        }
      }
    },
  },
  plugins: [],
};
