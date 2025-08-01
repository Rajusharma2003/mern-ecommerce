/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // org primary color 
        primary:"#ff5252"
      },
      backgroundColor:{
        primary:"#ff5252"
      }

    },
  },
  plugins: [],
}