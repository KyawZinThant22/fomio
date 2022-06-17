/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs : "350px",
      sm: " 500px",
      md: "600px",
      lg: "1000px",
      xl: "1596px",
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
    
        nonWhite : "rgba(183, 183, 183, 1)"
      },
    },
  },
  plugins: [],
};
