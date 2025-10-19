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
        shake: {
          "0%, 100%": { transform: 'translateX(0)' },
          '20%': { transform: "translateX(-5px)" },
          '40%': { transform: "translateX(5px)" },
          '60%': { transform: "translateX(-5px)" },
          '80%': { transform: "translateX(5px)" },
        },
           flash: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 2s ease-out forwards',
        slideInRight: 'slideInRight 2s ease-out forwards',
        shake: "shake 0.5s ease",
        flash: "flash 2s ease-in-out infinite"
      },
    },
    plugins: [],
  }
}