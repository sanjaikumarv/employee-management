module.exports = {
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        hiti: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        bgGray: "#1a1a1a",
        // glassGray: "#1a1a1a",
        bgForm: "#28272f",
        brand: {
          800: "#702022",
          700: "#702022",
          500: "#60A00C",
          300: "#AEC90E",
        },
        sandle: {
          100: "#f9f9f9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
