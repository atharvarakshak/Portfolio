/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      customFont: ['"Custom Font"', "sans-serif"],
      // Add more custom font families as needed
    },
  },
  plugins: [],
}

