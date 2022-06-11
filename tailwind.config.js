/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1584px",
    },
    extend: {
      colors: {
        primary: "#08D9D6",

        primaryDark: "#252A34",

        secondaryWhite: "#EAEAEA",

        secondaryBlue: "#6A6D9E",

        dull: "#E2E2E2",

        white: "#FFFFFF",

        black: "#000000",
      },
    },
  },
  plugins: [],
};
