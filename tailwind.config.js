/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',  // <-- slide from right
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

      },
      animation: {
        slideInLeft: 'slideInLeft 2s ease-out forwards',
        slideInRight: 'slideInRight 2s ease-out forwards',
      },
    },
    plugins: [],
  }
}