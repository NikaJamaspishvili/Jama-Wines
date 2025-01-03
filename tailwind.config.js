/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5EBDA',
        customBrown: '#482817'
      },
      fontFamily: {
        Almendra: ['Almendra'],
        Baskerville: ['Libre Baskerville'],
      },
    },
  },
  plugins: [],
}