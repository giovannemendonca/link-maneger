import { Button as ButtonMui } from '@mui/material'
import { styled } from "@/styles";


export const Button = styled(ButtonMui, {

  textTransform: 'none',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '#008F8970'
    
  },
})