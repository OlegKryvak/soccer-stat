/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      iPhone5: "640px",
      // => @media (min-width: 640px) { ... }

      iPad1: "768px",
      leptop: "1024px",
      desktop: "1366px",
      desktopLg: "1920px",
    },
    extend: {
      colors: {
        darkblue: "#030218",
        aqua: "#21c7e8",
        pink: "#e8215e",
        beige: "#f5f5dc",
        blueviolet: "#1d0233",
      },
    },
  },
  plugins: [],
};
