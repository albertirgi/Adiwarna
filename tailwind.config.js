/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/views/**/*.blade.php", "./resources/views/**/*.js"],
    theme: {
        extend: {
            colors: {
                "custom-gray": "rgba(51, 51, 51, 0.8)",
                "custom-white": "rgba(246, 245, 241)",
            },
            fontFamily: {
                "caslon-condensed": ['Libre Caslon Condensed', "serif"],
                "caslon-text": ['Libre Caslon Text', "serif"],
                "jakarta-sans": ['Plus Jakarta Sans', "sans-serif"],
            },
            fontSize: {
              '10xl': '17px',
              '11xl': '25px',
              '12xl': '115px',
              '13xl': '155px',
            },
            backgroundImage: {
                1: "url('bg-1.svg')",
                2: "url('bg-2.svg')",
            },
            height: {
              '2screen': '200vh', // Custom utility for 200vh
            }
        },
    },
    plugins: [],
};
