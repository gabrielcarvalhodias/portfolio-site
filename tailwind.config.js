/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0F172C",
        harbor: "#243F49",
        steel: "#384358",
        peach: "#FFA586",
        cinema: "#D51A2B",
        burgundy: "#641A2B",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        pixel: ["Pixelify Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 70px rgba(213, 26, 43, 0.22)",
        redglow: "0 0 90px rgba(213, 26, 43, 0.34)",
      },
    },
  },
  plugins: [],
};
