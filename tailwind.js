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
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        extend: {
          spacing: {
            '7xl': '28rem',
            '7xl': '64rem',
            '8xl': '96rem',
            '9xl': '128rem',
          },
          borderRadius: {
            '2xl': '4px',
            '4xl': '2rem',
          }
        }    
    },
  },
  plugins: [],
};
