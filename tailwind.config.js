/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1065px",
        lg: "1280px", // Large screens like a 27-inch monitor
        xl: "1920px",
      },
    },
  },
  plugins: [],
};

