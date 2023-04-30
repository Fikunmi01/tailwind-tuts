/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    colors: {
      black: "#000000",
      orange: "#F55F1D",
      green: "#20B15A",
      red: "#f56283",
      white: "#FFFFFF",
      lightGreen: "#D7F5DC",
    },
    fontFamily: {
      sans: `'Poppins', san-serif`,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
    },

    extend: {},
  },
  plugins: [],
};
