/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        'extraSmall':{'max': '420px'},
        'vsmall':{'max':'750px'},
        'small':{'max':"1200px"}
      }
    },
  },
  plugins: [],
}

