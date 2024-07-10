// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver':"#F5F7FA",
         'neutralDgrey':"#4D4D4D",
          'brandPrimary':"#4CAF4F",
           'neutralgrey':"#717171",
      }
    },
  },
  plugins: [
      flowbite.plugin(),
  ],
}

