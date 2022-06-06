import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },

  'html, body': {
    fontSize: '62.5%',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    m: 0,
    p: 0,
  },

  'h1, h2, h3, h4, h5, h6, p, dd, dl': {
    margin: 0,
  },

  ul: {
    listStyle: 'none',
    p: 0,
    m: 0,
  },
})
