/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      // for Job details page
      // 70/30 ==> left column will be 70 and right column will be 30
      // 28% (instead of 30) since we are leaving some room (space)
      gridTemplateColumns: {
        '70/30' : '70% 28%'
      }
    },
  },
  plugins: [],
}