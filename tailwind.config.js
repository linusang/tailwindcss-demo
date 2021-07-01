module.exports = {
  mode: "jit",
  purge: ["./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "curious-blue": {
          DEFAULT: "#268ED4",
          50: "#E5F2FA",
          100: "#D0E7F6",
          200: "#A4D1EF",
          300: "#79BBE7",
          400: "#4EA5DF",
          500: "#268ED4",
          600: "#1E71A9",
          700: "#16547E",
          800: "#0F3752",
          900: "#071A27",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
