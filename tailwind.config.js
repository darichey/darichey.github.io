/** @type {import('tailwindcss').Config} */

const customCss = {
  "code::before": false,
  "code::after": false,
  "blockquote": {
    quotes: "none",
  },
};

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: customCss,
        },
        xl: {
          css: customCss,
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
