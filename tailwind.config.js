/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "575px",
      md: "768px",
      lg: "990px",
    },
    extend: {
      fontFamily: {
        vazir: ["vazir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
