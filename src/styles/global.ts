import {globalCss} from '.'

export const globalStyles =  globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    backgroundColor: '$gray600',  
    color: '$white',
    "--webkit-font-smoothing": "antialiased",
  },
  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

})