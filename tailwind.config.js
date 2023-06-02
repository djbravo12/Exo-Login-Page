/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Inter": ['Inter', "sans-serif"],
        "Poppins": ['Poppins', "sans-serif"]
      },
      boxShadow: {
        "bShadow": "0px 20px 32px rgba(2, 1, 0, 0.42)"
      }
    },
  },
  plugins: [],
}

