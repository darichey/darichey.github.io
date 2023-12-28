/** @type {import('tailwindcss').Config} */

const resetCodeCss = {
  "code::before": false,
  "code::after": false,
};

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: resetCodeCss,
        },
        xl: {
          css: resetCodeCss,
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
