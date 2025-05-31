/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sci-fi-blue': '#00AAFF', //'#21e6c1',
        'sci-fi-bg': '#1a2035', //'#1a2035',
      },
      boxShadow: {
        // glow
        'sci-fi-glow': '0 0 8px #00AAFF, 0 0 20px #00AAFF', //'0 0 10px #21e6c1, 0 0 40px #21e6c1',
        // sombra ligera para vidrio
        'glass': '0 4px 30px rgba(0, 0, 0, 0.2)',
      },
       backdropBlur: {
        'md': '10px'
      },
    },
  },
  plugins: [],
}

