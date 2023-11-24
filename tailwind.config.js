/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // colors: {
    //   primary: "#1B2850",
    //   // orange: "#FF792E",
    //   // green: "#13ce66",
    //   // "light-sky": "#FAFBFE",
    //   // gray: "#7B7B8A",
    //   // "gray-light": "#d3dce6",
    // },
    fontFamily: {
      crimson: ["Crimson Pro", "serif"],
    },
  },
  plugins: [require("daisyui")],
};
