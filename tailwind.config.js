/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#004eff",
        secondary: "#a7d5ff",
        text: "#353e61",
        subtext: "#898989",
        textVeryLight: "#fff",
      },
    },
  },
  plugins: [],
};
