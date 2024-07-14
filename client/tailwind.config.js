/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter"],
    },
    letterSpacing: {
      "dot-00469": "0.00469em",
      "dot-0125": "0.0125em",
      "dot-01056": "0.01056em",
    },
    extend: {
      fontSize: {
        // small to big
        0.875: "0.875rem",
        1: "1rem",
        1.125: "1.125rem",
        1.25: "1.25rem",
        1.5: "1.5rem",
        2.5: "2.5rem",
        3.375: "3.375rem",
      },
      lineHeight: {
        4.5: "4.5rem",
        1.625: "1.625rem",
        3.25: "3.25rem",
        1.5625: "1.5625rem",
      },
      padding: {
        "10px": "10px",
        "27.5px": "27.5px",
      },
      backgroundColor: {
        color1: "#1D212F",
        color2: "#F58634",
        "color2-darker": "#b36227",
        color4: "#FEF6F7",
        color5: "#F6F7FA",
        color7: "#B3BAC5",
        color8: "#1A253B",
        color9: "#EAEEF3",
      },
      backgroundImage: {
        arrowDown: "url('/src/images/arrow-down.svg')",
        rectangleOrange: "url('/src/images/rectangleorange.png')",
        aMan: "url('/src/images/img1.png')",
      },
      colors: {
        color1: "#969696",
        color2: "#1B1D21",
        color3: "#F58634",
        color4: "#8D8E90",
        airbnb: "#FF385C",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
