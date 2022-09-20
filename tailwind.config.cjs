/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "Nunito",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        green: {
          light: "#71ccb2",
          dark: "#269b79",
        },
        yellow: {
          light: "#f1cf77",
          dark: "#d0a843",
        },
        red: {
          light: "#ea7571",
          dark: "#c44f4b",
        },
        blue: {
          light: "#86bdf9",
          dark: "#497db6",
        },
        purple: {
          light: "#a19cba",
          dark: "#6d5fb4",
        },
        pink: {
          light: "#f7ced3",
          dark: "#de808b",
        },
        brown: {
          light: "#ceb182",
          dark: "#bc8939",
        },
        grey: {
          light: "#dde4e4",
          dark: "#bcc4c4",
        },
      },
    },
  },
  plugins: [],
};
