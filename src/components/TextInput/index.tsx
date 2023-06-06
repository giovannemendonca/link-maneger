import { ComponentProps, forwardRef } from 'react'
import {Input} from './styles'

export type TextInputProps = ComponentProps<typeof Input>

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return (
    <Input
      {...props}
      size='small'
      inputProps={{
        style: {
          color: '#fff'
        }
      }}
      inputRef={ref} // Passa a ref para o TextField
    />
  )
})