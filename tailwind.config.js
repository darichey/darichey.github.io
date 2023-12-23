/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        lg: {
          css: {
            // Make code blocks take up less space
            "pre": {
              "margin-top": "unset",
              "margin-bottom": "unset",
              "padding": "unset",
            },
            // Don't include backticks in inline code
            "code::before": {
              content: "unset",
            },
            "code::after": {
              content: "unset",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
