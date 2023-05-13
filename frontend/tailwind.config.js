/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
    },
    extend: {
      screens: {
        "md": "1050px",
        "lg": "1110px",
        "sm": "800px",
        "xl": "1300px",
        "xs":"400px"
      },
    },
  },
  plugins: ["tailwindcss ,autoprefixer"]
};