/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Raleway Regular',
        secondary: 'Baron Neue',
      },
      colors: {
        ground: '#111111',
        accent: '#C84838',
      },
    },
  },
  plugins: [],
};
