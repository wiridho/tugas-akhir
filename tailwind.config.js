/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "ff0000",
        secondary: "#BAD7E9",
        red: "#ff3333",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
