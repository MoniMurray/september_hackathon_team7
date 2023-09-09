/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}", "./home/templates/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/static/images/hero.jpg')",
        "food-image": "url('/static/images/calculator-background.jpg')",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
