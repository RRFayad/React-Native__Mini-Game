/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#72063c",
          600: "#640233",
          700: "#4e0329",
          800: "#3b021f",
        },
        accent: {
          500: "#ddb52f",
        },
      },
    },
  },
  plugins: [],
};
