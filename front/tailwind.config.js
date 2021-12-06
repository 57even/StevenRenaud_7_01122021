module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#fd2e02',
      'darker': '#e32c02',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#fd2e02',
      'secondary': '#ffe6e6',
      'darker': '#e32c02',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#fd2e02',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
