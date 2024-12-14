/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'btn-bg-d-green': '#376B44',
        'btn-bg-d-green-inactive': '#D4E8D9',
        footer_bg_color: '#E1EDE6',
      },
      screens: {
        tablet: '690px',
        'tablet-sm': '510px',
      },
      backgroundImage: {
        'info-pattern': "url('@/assets/InfoBg.jpeg')",
      },
    },
  },
  plugins: [],
}
