/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.9rem",
        },
        screens: {
          md: "768px",
          lg: "992px",
          "2xl": "1170px",
        },
      },

      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        mint: "hsl(201, 100%, 95%)",
        pink: "hsl(294, 100%, 96%)",
        yellow: "hsl(51, 100%, 72%)",
        green: "hsl(155, 100%, 45%)",
        blue: "hsl(200, 100%, 65%)",
        gray: "hsl(60, 4%, 11%)",
      },
      borderColor: {
        gray: "hsl(0, 0%, 20%)",
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        10: "0.625rem",
      },
    },
    plugins: [],
  },
};
