/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pale_orange: "#ffd9a6",
        light_orange: "#fbb03b",
        orange: "#f7931e",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-sefit"],
        title: ["Playfair Display SC", "serif"],
      },
      backgroundImage: {
        mobile: "url('/images/bg-mobile.webp)",
        desktop: "url('/images/bg-mobile.webp')",
      },
    },
  },
  plugins: [],
};
