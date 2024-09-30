/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(149, 1, 255)",
      },
      backgroundImage: {
        rad: "radial-gradient(circle at center,rgba(0, 0, 0, 0.429) 0,rgba(0, 0, 0, 0.525),rgb(0, 0, 0),rgb(0, 0, 0) 100%)",
        "rad-2":
          "radial-gradient(circle at center,rgba(0, 0, 0,0),rgba(0, 0, 0,0.4),rgb(0, 0, 0) 100%)",
      },
      fontFamily: {
        name: ["Protest Guerrilla", "sans-serif"],
        title: ["Ginger", "serif"],
        signature: ["Southam Demo", "serif"],
        "name-2": ["Archivo Black", "sans-serif"],
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },
  safelist: [
    {
      pattern: /bg-+/,
    },
  ],
  plugins: [],
};
