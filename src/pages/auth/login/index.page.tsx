import React, { use, useContext, useEffect } from 'react'
import { CircularProgress } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSnackbar } from 'notistack'

import { Text } from '@/components/Text'
import { TextInput } from '@/components/TextInput'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'

import {
  Account,
  Container,
  ContainerBox,
  ContainerItem,
  Form,
  FormsErros,
  Link,
  ResetPassword
} from './styles'
import useLocalStorage from '@/hooks/useLocalStorage'
import { UserContext, UserInteface } from '@/context/UseContext'

const formLoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
})

type FormLoginData = z.infer<typeof formLoginSchema>

export default function Login() {
  const { enqueueSnackbar } = useSnackbar()
  const { fetchData } = useFetch()
  const router = useRouter()

  const [, setUser] = useLocalStorage<UserInteface | null>('user', null)
  const [, setToken] = useLocalStorage<string | null>('token', null)

  const { handleSetUser } = useContext(UserContext)

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormLoginData>({
    resolver: zodResolver(formLoginSchema)
  })

  useEffect(() => {
    let user: UserInteface | null = null
    const hasUser = localStorage.getItem('user')

    if (hasUser) {
      user = JSON.parse(hasUser)

      if (user?.id) {
        router.push('/dashboard')
      }
    }
  })

  const handleLogin = async (formData: FormLoginData) => {
    const payload = {
      email: formData.email,
      password: formData.password
    }

    const response = await fetchData('/auth/login', 'post', {
      data: payload
    })

    if (response) {
      const { user, token } = response
      setUser(user)
      setToken(token)
      handleSetUser(user)

      enqueueSnackbar('Login realizado com sucesso', {
        variant: 'success'
      })
      router.push('/dashboard')
    } else {
      enqueueSnackbar('Erro ao realizar login', {
        variant: 'error'
      })
    }
  }

  const handleForgotPassword = () => {
    router.push('/auth/forgot-password')
  }

  const handleCreateAccount = () => {
    router.push('/users/register')
  }

  return (
    <Container>
      <ContainerBox>
        <Heading as='h2'>Login</Heading>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <ContainerItem>
            <Text>Email</Text>
            <Controller
              control={control}
              name='email'
              defaultValue=''
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder='Email'
                  fullWidth
                  disabled={isSubmitting}
                />
              )}
            />
            {errors.email && <FormsErros>{errors.email.message}</FormsErros>}
          </ContainerItem>
          <ContainerItem>
            <Text>Senha</Text>
            <Controller
              control={control}
              name='password'
              defaultValue=''
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder='Senha'
                  type='password'
                  fullWidth
                  disabled={isSubmitting}
                />
              )}
            />
            {errors.password && (
              <FormsErros>{errors.password.message}</FormsErros>
            )}
          </ContainerItem>
          <ResetPassword>
            <Text>Esqueceu a senha?</Text>
            <Link onClick={handleForgotPassword}>recuperar</Link>
          </ResetPassword>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <CircularProgress
                size={25}
                color='primary'
              />
            ) : (
              'Entrar'
            )}
          </Button>
        </Form>
        <Account>
          Não tem uma conta?
          <Link onClick={handleCreateAccount}>Criar</Link>
        </Account>
      </ContainerBox>
    </Container>
  )
}
