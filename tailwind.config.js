/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        violet: "#7F5F7B",
        secondary: "#BAD7E9",
        third: "#33658a",
        grey: "#8E8E8E",
        red: "#ff3333",
      },
      fontFamily: {
        sans: ["'Proxima nova',sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
