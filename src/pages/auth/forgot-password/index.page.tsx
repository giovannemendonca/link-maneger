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
import { useSnackbar } from 'notistack'

const forgotPasswordScrema = z.object({
  email: z.string().email('Email inválido')
})

type ForgotPasswordSchema = z.infer<typeof forgotPasswordScrema>

export default function ForgotPassword() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordScrema)
  })

  const handlerForgotPassword = async (dataForm: ForgotPasswordSchema) => {
    try {
      await api.post('auth/forgot_password', {
        email: dataForm.email
      })
      enqueueSnackbar('Email enviado com sucesso', {
        variant: 'success'  
      })
      router.push('/auth/reset-password')
    } catch (error: any) {
      enqueueSnackbar('Erro ao enviar email', {
        variant: 'error'
      })
    }
  }

  const backToLogin = async () => {
    router.push('/auth/login')
  }

  return (
    <Container>
      <ContainerBox>
        <Heading as='h2'>Perdi a senha</Heading>

        <Text>
          Enviaremos a você um e-mail com um token de recuperação para redefinir
          sua senha.
        </Text>

        <Form onSubmit={handleSubmit(handlerForgotPassword)}>
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
