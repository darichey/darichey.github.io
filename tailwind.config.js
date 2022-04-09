module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        lg: {
          css: {
            // Make code blocks take up less space
            pre: {
              "margin-top": "unset",
              "margin-bottom": "unset",
              padding: "unset",
            },
            // Don't include backticks in inline code
            "code::before": {
              content: "unset",
            },
            "code::after": {
              content: "unset",
            },
            // Make headers take up less space
            "h2": {
              "margin-top": "1.1em",
              "margin-bottom": "1em",
            },
            "h3": {
              "margin-top": "1em",
            }
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
