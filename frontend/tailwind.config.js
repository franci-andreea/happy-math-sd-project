const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#6c0e23',
        lava: '#c42021',
        persiangreen: '#1b998b',
        lemonyellow: '#f3ffb9',
        magnolia: '#f8f1ff'
      }
    },
    fontFamily: {
      'poppins': ['Poppins']
    }
  },
  plugins: []
}
