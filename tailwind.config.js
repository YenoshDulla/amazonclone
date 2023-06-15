/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        amazonBlue:{
          DEFAULT:"#131921",
          light:"#232f3e",
          Para:"#fff",
          amazon:"#f08804",
          back:"#e3e6e6"
        },
        fontFamily:{
          titleFont:"Lora",
        },
      }
    },
  },
  plugins: [],
}