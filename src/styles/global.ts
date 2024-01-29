import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Inria Serif',
      src: 'url("/fonts/InriaSerif-Light.woff") format("woff"), url("/public/fonts/InriaSerif-Light.woff2") format("woff2")',
      fontWeight: 300,
    },
    {
      fontFamily: 'Inria Serif',
      src: 'url("/fonts/InriaSerif-Bold.woff") format("woff"), url("/public/fonts/InriaSerif-Bold.woff2") format("woff2")',
      fontWeight: 700,
    },
    {
      fontFamily: 'Inria Serif',
      src: 'url("/fonts/InriaSerif-BoldItalic.woff") format("woff"), url("/public/fonts/InriaSerif-BoldItalic.woff2") format("woff2")',
      fontWeight: 700,
      fontStyle: 'italic'
    },
    {
      fontFamily: 'Work Sans',
      src: 'url("/fonts/WorkSans-Regular.woff") format("woff"), url("/fonts/WorkSans-Regular.woff2") format("woff2")',
      fontWeight: 400,
    },
    {
      fontFamily: 'Work Sans',
      src: 'url("/fonts/WorkSans-Medium.woff") format("woff"), url("/fonts/WorkSans-Medium.woff2") format("woff2")',
      fontWeight: 500,
    },
    {
      fontFamily: 'Work Sans',
      src: 'url("/fonts/WorkSans-SemiBold.woff") format("woff"), url("/fonts/WorkSans-SemiBold.woff2") format("woff2")',
      fontWeight: 600,
    },
  ],
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },

  'html, body': {
    fontSize: '62.5%',
    fontFamily: '$workSans',
    letterSpacing: '$small',
    fontWeight: '$regular',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    m: 0,
    p: 0,
    background: '$white',
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
