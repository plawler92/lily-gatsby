module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   blue: {
    //     compl: '#F2FEFE',
    //   },
    // },
    extend: {
      backgroundImage: theme => ({
        'lily-profile': "/public/images/LilyProfile4.jpg",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
