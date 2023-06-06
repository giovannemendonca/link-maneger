import {globalCss} from '.'

export const globalStyles =  globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    backgroundColor: '#1E293B',
    color: '$gray100',
    "--webkit-font-smoothing": "antialiased",
  },
  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

})