/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        dark_nilla: "#002970",
        nilla:"#00baf2",
        nillBlur:"#00afe3",
        lightColor:"#f5f5f5",
        lightDarkNilla:"#0f4a8a",
        bgColor:"#f5f7fa",
        ultralightNilla: "#4ccff6"
      },
      screens:{
        'verySmall': {'max':"399px"},
        'small' : {'max': "550px"},
        'medium' : {'max': "768px"},
        'large' : {'max': '1070px'}
      }
    },
  },
  plugins: [],
}


