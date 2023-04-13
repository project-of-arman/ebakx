/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      xs: "7.42px",
      sm: "12px",
      base: "16px",
      md: "19.42px",
      lg: "24px",
      xl: "31.42px",
      "2xl": "50.83px",
      "3xl": "82.24px",
    },
    colors: {
      white: "#ffffff",
      light: "#EEEEEE",
      bg: "#F5F5F5",
      lightBlack:"#1B222C",
      stroke: "#DBDBDB",
      grey: "#707070",
      blue: "#5D84B8",
      blueLight: "#1877F2",
      secondary: "#FF8C00",
      lightGreyTP: "rgba(99, 99, 99, 0.35)",
    },
  },
  plugins: [],
};
