import React from 'react'
import { Text } from '@/components/Text'
import { TextInput } from '@/components/TextInput'
import { Heading } from '@/components/Heading'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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
import { api } from '@/lib/axios'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import useFetch from '@/hooks/useFecth'

const formLoginScrema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
})

type FormLoginSchema = z.infer<typeof formLoginScrema>

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormLoginSchema>({
    resolver: zodResolver(formLoginScrema)
  })

  const { data, fetchData, isLoading, error } = useFetch()

  const handlerLogin = async (dataForm: FormLoginSchema) => {
    const payload = {
      email: dataForm.email,
      password: dataForm.password
    }
    await fetchData('/auth/login', 'post', {
      data: payload
    })
  }
  const router = useRouter()

  const forgotPassword = () => {
    router.push('/auth/forgot-password')
  }

  const createAccount = () => {
    router.push('/users/register')
  }

  return (
    <Container>
      <ContainerBox>
        <Heading as='h2'>Login</Heading>
        <Form onSubmit={handleSubmit(handlerLogin)}>
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
                />
              )}
            />
            {errors.email?.message && (
              <FormsErros>{errors.email?.message}</FormsErros>
            )}
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
                  placeholder='senha'
                  type='password'
                  fullWidth
                />
              )}
            />
            {errors.password?.message && (
              <FormsErros>{errors.password?.message}</FormsErros>
            )}
          </ContainerItem>
          <ResetPassword>
            <Text>Esqueceu a senha?</Text>
            <Link onClick={forgotPassword}>recuperar</Link>
          </ResetPassword>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={isSubmitting}
          >
            Entrar
          </Button>
          {isLoading && <Text>esta logando...</Text>}
          {data && <Text>Logado com sucesso</Text>}
          {error && <FormsErros>Erro ao logar</FormsErros>}
        </Form>
        <Account>
          Não tem uma conta?
          <Link onClick={createAccount}>Criar</Link>
        </Account>
      </ContainerBox>
    </Container>
  )
}
