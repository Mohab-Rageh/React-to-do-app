/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "check-background1": "hsl(192, 100%, 67%)",
        "check-background2": "hsl(280, 87%, 65%)",
        "bright-blue": "hsl(220, 98%, 61%)",
        ace: "#c8cbe7",
      },
    },
  },
  plugins: [],
};
