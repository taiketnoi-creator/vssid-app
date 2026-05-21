/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vssid: {
          blue: '#0069ad',
          blueDark: '#0072c8',
          blueLight: '#01aef2',
          red: '#d91811',
          bgGray: '#f5f5f5',
          textGray: '#948c8c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
