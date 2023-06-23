/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'btn': '#DBB468',
        'color': '#252B42',
        'sec-col': '#737373',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily:{
        "header": ["Martel", 'sans-serif'],
        "para": ["Open Sans", 'sans-serif'],
      },
    extend: {},
  },
  plugins: [require("daisyui")],
}

