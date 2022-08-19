/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'light-white': '#ffffff',
      'light-black': '#000000',
      'light-blue': '#2727e6',
      'dark-black': '#000000',
      'dark-white': '#ffffff',
      'dark-red': '#ff4141',
    },
    extend: {
      backgroundImage: {
        'home-background': `url('assets/images/grid.svg')`,
      },
    },
  },
  darkMode: 'class',
  plugins: [
    // * Custom plugin that allows children elements to be selected. Ex: child:text-white
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
