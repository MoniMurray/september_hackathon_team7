/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}", "./home/templates/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/static/images/hero.jpg')",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
