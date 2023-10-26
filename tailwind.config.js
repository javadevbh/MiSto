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
        },
        secondary : {
          gray : '#F3F2F2;',
        }
      },
      backgroundImage : {
        'bannerbg1' : "url('/src/assets/images/banner bg/bannerbg1.jpg')",
        'bannerbg1-h' : "url('/src/assets/images/banner bg/bannerbg1v2.png')",
        'bannerbg2' : "url('/src/assets/images/banner bg/bannerbg2.jpg')",
        'bannerbg2-h' : "url('/src/assets/images/banner bg/bannerbg2v2.png')",
        'bannerbg3' : "url('/src/assets/images/banner bg/bannerbg3.jpg')",
        'bannerbg3-h' : "url('/src/assets/images/banner bg/bannerbg3v2.png')",
        'bannerbg4' : "url('/src/assets/images/banner bg/bannerbg4.jpg')",
        'bannerbg4-h' : "url('/src/assets/images/banner bg/bannerbg4v2.png')",
        'sectionImage1' : "url('/src/assets/images/section images/section-image1.jpg')",
        'sectionImage2' : "url('/src/assets/images/section images/section-image2.jpg')",
      }
    },
  },
  plugins: [],
};
