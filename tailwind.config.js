/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "btn-bg-d-green": "#376B44",
        "btn-bg-d-green-inactive": "#D4E8D9"
      }
    },
  },
  plugins: [],
}

