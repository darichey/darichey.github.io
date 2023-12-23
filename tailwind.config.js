module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        lg: {
          css: {
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
