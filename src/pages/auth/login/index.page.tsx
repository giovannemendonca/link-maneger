import React from 'react'
import {
  Account,
  Container,
  ContainerBox,
  ContainerItem,
  Form,
  Link,
  ResetPassword
} from './styles'
import { Text } from '@/components/Text'
import { TextInput } from '@/components/TextInput'
import { Button } from '@mui/material'
import { Heading } from '@/components/Heading'

export default function Login() {
  return (
    <Container>
      <ContainerBox>
        <Heading as='h2'>Login</Heading>
        <Form>
          <ContainerItem>
            <Text>Email</Text>
            <TextInput
              placeholder='Email'
              fullWidth
            />
          </ContainerItem>
          <ContainerItem>
            <Text>Senha</Text>
            <TextInput
              placeholder='senha'
              type='password'
              fullWidth
            />
          </ContainerItem>
          <ResetPassword>
            <Text>Esqueceu a senha?</Text>
            <Link>recuperar</Link>
          </ResetPassword>
          <Button
            variant='contained'
            color='primary'
            fullWidth
          >
            Entrar
          </Button>
        </Form>
        <Account>
          Não tem uma conta?
          <Link>Criar</Link>
          </Account>
      </ContainerBox>
    </Container>
  )
}
