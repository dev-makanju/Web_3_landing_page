/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'p-purple': '#fff',
          's-purple': '#580355',
          't-purple': '#000',
        },
        spacing: {
          '1': '8px',
          '2': '12px',
          '3': '16px',
          '4': '24px',
          '5': '32px',
          '6': '48px',
        },    
        screens: {
          sm: '480px',
          md: '768px',
          lg: '1200px',    
        },
        borderRadius: {
          '2xl': '4px',
          '4xl': '2rem',
        },
    },
    fontFamily: {
      sans: ['Anek Malayalam', 'sans-serif'],
    },
  },
  plugins: [],
};