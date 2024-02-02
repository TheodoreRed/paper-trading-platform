/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Jura"', "sans-serif"],
      },
      colors: {
        customRed: "#FF0000",
      },
    },
  },
  plugins: [],
};
