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
        "1xl": "1.06em",
        "2xl": "1.55em",
        "3xl": "5.5em",
        "4xl": "7.2em",
        "5xl": "9.5em",
        "6xl": "104px",
        "1lg": "0.75em",
        "2lg": "1.15em",
        "3lg": "3.5em",
        "4lg": "5.1em",
        "5lg": "6.8em",
        "6lg": "104px",
      },
      backgroundImage: {
        1: "url('../src/assets/images/bg-1.svg')",
        "2-1": "url('../src/assets/images/bg-2-1.svg')",
        "2-2": "url('../src/assets/images/bg-2-2.svg')",
        4: "url('../src/assets/images/bg-4.svg')",
        3: "url('../src/assets/images/bg-3.svg')",
        5: "url('../src/assets/images/bg-5.svg')",
        6: "url('../src/assets/images/bg-6.svg')",
        7: "url('../src/assets/images/bg-7.svg')",
        "category": "url('../src/assets/images/category.svg')",
        "merch" : "url('../src/assets/images/bg-merch.svg')",
      },
      width: {
        "custom-earth": "57vw",
      },
      animation: {
        spin: "spin 20s linear infinite",
        moveBackground: "moveBackground 2s linear infinite",
        marquee: "marquee 10s linear infinite",
        marquee2: "marquee2 10s linear infinite",
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
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
