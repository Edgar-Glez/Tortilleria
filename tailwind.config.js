/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    breakpoints: {
      'sd': '1200px',
      'md': '1200px'
      // ...
    },
    extend: {},
  },
  plugins: [],
}
