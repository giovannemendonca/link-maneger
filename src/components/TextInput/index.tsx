import { ComponentProps } from 'react'
import { Input } from './styles'

export type TextInputProps = ComponentProps<typeof Input>

export function TextInput({...props}: TextInputProps) {
  return <Input  {...props} size='small' inputProps={{
    style: {
      color: '#fff',
    }
  }}/>
}
