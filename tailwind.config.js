/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/views/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(51, 51, 51, 0.8)',
      },
    },
  },
  plugins: [],
}

