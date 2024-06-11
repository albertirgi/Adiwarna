/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/views/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#504c4c',
      },
    },
  },
  plugins: [],
}

