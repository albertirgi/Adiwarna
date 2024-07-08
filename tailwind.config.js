/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgba(51, 51, 51, 0.8)",
        "custom-white": "rgba(246, 245, 241)",
        "custom-yellow": "rgba(255, 212, 59)",
        "custom-purple": "rgba(92, 5, 215)",
      },
      fontFamily: {
        "caslon-condensed": ["Libre Caslon Condensed", "serif"],
        "caslon-display": ["Libre Caslon Display", "serif"],
        "caslon-text": ["Libre Caslon Text", "serif"],
        "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        "10xl": "17px",
        "11xl": "25px",
        "12xl": "80px",
        "13xl": "115px",
        "14xl": "155px",
        "15xl": "104px",
      },
      backgroundImage: {
        1: "url('../src/assets/images/bg-1.svg')",
        "2-1": "../assets/images/bg-2-1.svg",
        "2-2": "../assets/images/bg-2-2.svg",
        3: "../assets/images/bg-3.svg",
        5: "../assets/images/bg-5.svg",
      },
      height: {
        "2screen": "200vh",
        footer: "39vh",
      },
      width: {
        "custom-earth": "50vw",
        "custom-earth-2": "54vw",
        footer: "39vh",
      },
      animation: {
        spin: "spin 20s linear infinite",
        moveBackground: "moveBackground 2s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveBackground: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
    },
  },
  plugins: [],
};
