/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: 'transparent',
  white: '#fff',
  blue: {
    50: '#F3F7FB',
    100: '#E7EFF8',
    200: '#CCDBF0',
    300: '#A9C3E5',
    400: '#85AADA',
    500: '#5588CC',
    DEFAULT: '#5588CC',
    600: '#3F79C5',
    700: '#3468AD',
    800: '#2D5A95',
    900: '#20406A',
    950: '#142843'
  }
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};