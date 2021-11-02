/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
// const colors = require('tailwindcss/colors')
module.exports = {
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
      notonaskharabic: ['Noto Naskh Arabic'],
    },
    extend:{
      colors: {
        'ijo1': '#9BC53D',
        'biru1': '#86A59C',
        'ungu1': '#7D5BA6',
        'ungu2': '#643173',
        'hitam1': '#333333',
      },
      fontSize: {
        // 'mediumbig' : '55px',
      },
      height: {
        // 'heading-post': '16rem',
      },
      widt: {
        // 'heading-post': '16rem',
      },
      // overflow: ['hover', 'focus'],
    },
  },
  variants: {
    margin: ['responsive', 'first']
  },
  plugins: [],
}
