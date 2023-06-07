import React from 'react'
import { Text } from '@/components/Text'
import { TextInput } from '@/components/TextInput'
import { Heading } from '@/components/Heading'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { Button } from '@/components/Button'
import { z } from 'zod'
import {
  Container,
  ContainerBox,
  ContainerItem,
  Form,
  FormsErros,
  Link
} from './styles'
import { useRouter } from 'next/router'

const resetPasswordScrema = z
  .object({
    email: z.string().email('Email inválido'),
    token: z.string().min(6, 'Token deve ter no mínimo 6 caracteres'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword']
  })

type ResetPasswordSchema = z.infer<typeof resetPasswordScrema>

export default function ForgotPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordScrema)
  })
  const router = useRouter()

  const handlerResetPassword = async (dataForm: ResetPasswordSchema) => {
    try {
      const response = await api.post('/auth/reset_password', {
        email: dataForm.email,
        token: dataForm.token,
        password: dataForm.password
      })
      console.log(response)
      alert('Senha alterada com sucesso')
      router.push('/auth/login')

    } catch (error: any) {
      console.log(error)
      alert(error?.response?.data?.error)
    }
  }

  const backToLogin = async () => {
    router.push('/auth/login')
  }

  return (
    <Container>
      <ContainerBox>
        <Heading as='h2'>Recuperar senha</Heading>

        <Form onSubmit={handleSubmit(handlerResetPassword)}>
          <ContainerItem>
            <Text>Token</Text>
            <Controller
              control={control}
              name='token'
              defaultValue=''
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder='Token'
                  fullWidth
                />
              )}
            />
            {errors.token?.message && (
              <FormsErros>{errors.token?.message}</FormsErros>
            )}
          </ContainerItem>
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
                  type='email'
                />
              )}
            />
            {errors.email?.message && (
              <FormsErros>{errors.email?.message}</FormsErros>
            )}
          </ContainerItem>
          <ContainerItem>
            <Text>Password</Text>
            <Controller
              control={control}
              name='password'
              defaultValue=''
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder='Password'
                  fullWidth
                  type='password'
                />
              )}
            />
            {errors.confirmPassword?.message && (
              <FormsErros>{errors.confirmPassword?.message}</FormsErros>
            )}
          </ContainerItem>

          <ContainerItem>
            <Text>Confirme Password</Text>
            <Controller
              control={control}
              name='confirmPassword'
              defaultValue=''
              render={({ field }) => (
                <TextInput
                  {...field}
                  placeholder='Password'
                  fullWidth
                  type='password'
                />
              )}
            />
            {errors.confirmPassword?.message && (
              <FormsErros>{errors.confirmPassword?.message}</FormsErros>
            )}
          </ContainerItem>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={isSubmitting}
          >
            Enviar
          </Button>
        </Form>
        <Link onClick={backToLogin}>Voltar para login</Link>
      </ContainerBox>
    </Container>
  )
}
