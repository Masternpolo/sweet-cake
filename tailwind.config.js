/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'from-primary-50',
    'from-primary-100',
    'from-primary-200',
    'from-primary-300',
    'from-primary-400',
    'from-primary-500',
    'from-primary-600',
    'from-primary-700',
    'from-primary-800',
    'from-primary-900',
    'to-primary-50',
    'to-primary-100',
    'to-primary-200',
    'to-primary-300',
    'to-primary-400',
    'to-primary-500',
    'to-primary-600',
    'to-primary-700',
    'to-primary-800',
    'to-primary-900',
  ],
  theme: {
    colors: {
      primary: {
        50:  '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ff6b9d',
        600: '#e55a8a',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      },
      // You may want to add other default colors here (gray, white, etc.)
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
