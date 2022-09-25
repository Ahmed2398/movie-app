/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    '../moviesapp/src/App.vue',
    '../moviesapp/src/components/Home.vue',
    '../moviesapp/public/index.html',
    '../moviesapp/src/components/header/Navbar.vue',
    '../moviesapp/src/components/header/Searchbar.vue',
    '../moviesapp/src/components/PopularMovies.vue',
    '../moviesapp/src/components/items/MovieOne.vue',
    '../moviesapp/src/components/items/CastOne.vue',

    '../moviesapp/src/components/movies/Movie.vue',
    '../moviesapp/src/components/movies/Cast.vue',
    '../moviesapp/src/components/movies/Images.vue',
    '../moviesapp/src/components/models/MediaModel.vue',
    '../moviesapp/src/components/items/ActorOne.vue',
    '../moviesapp/src/components/actors/Actors.vue',
    '../moviesapp/src/components/actors/ActorDetail.vue',


    '../moviesapp/public/index.html'


  ],
  theme: {
    extend: {},
    spinner: (theme) => ({
      default: {
        color: '#dae1e7', // color you want to make the spinner
        size: '1em', // size of the spinner (used for both width and height)
        border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: '500ms', // the speed at which the spinner should rotate
      },
      // md: {
      //   color: theme('colors.red.500', 'red'),
      //   size: '2em',
      //   border: '2px',
      //   speed: '500ms',
      // },
    }),
  },
  plugins: [
    require('tailwindcss-spinner')({ className: 'spinner', themeKey: 'spinner' }),
  ],
}
