/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}", "./home/templates/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
