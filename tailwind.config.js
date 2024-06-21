/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Gilroy_Bold: ["Gilroy-Bold"],
        Gilroy_Medium:["Gilroy-Medium"],
        Gilroy_Light:["Gilroy-Light"],
        DM_Serif_Text:["DM Serif Text"]
      },
      backgroundColor:{
        featureBg:["#eccc7b"],
        landingPrimary:["#f8f7f2"],
        buttonInitital:["#fbf5e5"],
        buttonClicked:["#141414"],
      },
    },
  },
  plugins: [],
}