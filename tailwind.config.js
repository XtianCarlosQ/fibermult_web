/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sci-fi-blue': '#21e6c1',
        'sci-fi-bg': '#1a2035',
      },
      boxShadow: {
        'sci-fi-glow': '0 0 10px #21e6c1, 0 0 40px #21e6c1',
      },
    },
  },
  plugins: [],
}

