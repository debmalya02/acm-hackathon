/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // we name our custom font "tiempos"
        blanka: ["blanka", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
