/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },

      // keyframes: {
      //   fadeIn: {
      //     '0%': { opacity: '0', transform: 'translateY(20px)' },
      //     '100%': { opacity: '1', transform: 'translateY(0)' },
      //   },
      //   slideIn: {
      //     '0%': { opacity: '0', transform: 'translateX(-100px)' },
      //     '100%': { opacity: '1', transform: 'translateX(0)' },
      //   },
      // },
      // animation: {
      //   fadeIn: 'fadeIn 0.8s ease-out',
      //   slideIn: 'slideIn 0.8s ease-out',
      // },
    },
  },
  plugins: [],
}