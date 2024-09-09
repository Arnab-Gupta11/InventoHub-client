/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "360px",
      xs: "476px",
      // xs: "425px",
      sm: "640px",
      md: "768px",
      bs: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1550px",

      "2xl-mx": { max: "1535px" },
      "xl-mx": { max: "1279px" },
      "lg-mx": { max: "1023px" },
      "bs-mx": { max: "899px" },
      "md-mx": { max: "767px" },
      "sm-mx": { max: "639px" },
      "xs-mx": { max: "475px" },
      "xsm-mx": { max: "349px" },
    },
    extend: {
      colors: {
        "light-bg": {
          100: "#F8F8F8",
          200: "#FFFFFF",
          300: "#171B2A",
          400: "#d3dce6",
        },
        "dark-bg": {
          100: "#181C51",
          200: "#0E1332",
          300: "#04071B",
        },
        "light-text": {
          100: "#221058",
          200: "#616161",
          300: "#5356FB", //#0B6FFC
          400: "#FF5A3C",
        },
        "dark-text": {
          100: "#E9E9E9",
          200: "#cac7c7",
        },
      },
      backgroundImage: {
        "button-gradinent": "linear-gradient(to right,#FF443A,#FF792E)",
        "button-gradinent-hover": "linear-gradient(to left,#FF5A3C,#FF792E)",
        "banner-bg-light": "linear-gradient(to bottom right,#E9E9E9,#d3dce6,#5356FB 140%)",
        "banner-bg-dark": "linear-gradient(to bottom right,#04071B,#0E1332,#6D49B2 140%)",
        "main-bg": "linear-gradient(to right, #FCD0CC,#FFF5F3)",
      },
      boxShadow: {
        "navlink-shadow": " 0px 2px 1px #FF5A3C",
        "feature-card-shadow": "0 0px 3px 1.5px rgba(0, 0, 0, 0.07)",
        "theme-btn": "inset 0px 0px 5px #d3dce6",
      },
    },
    // colors: {
    //   primary: "#1B2850",
    //   // orange: "#FF792E",
    //   // green: "#13ce66",
    //   // "light-sky": "#FAFBFE",
    //   // gray: "#7B7B8A",
    //   // "gray-light": "#d3dce6",
    // },
    fontFamily: {
      "Cormorant-Garamond": ["Cormorant Garamond", "serif"],
      "Work-Sans": ["Work Sans", "serif"],
    },
  },
  plugins: [require("daisyui")],
};
