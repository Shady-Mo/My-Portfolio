/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sora: ['"sora"', 'sans-serif'],
        russo: ['"russo one"', 'sans-serif'],
        openSans: ['"open sans"', 'sans-serif'],
        poppins: ['"poppins"', 'sans-serif'],
      },
      fontSize: {
        '9xl': '8rem', /* 128px */
      }
    },
  },
  plugins: [],
}

