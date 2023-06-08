import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { useRouter } from 'next/router'
import React from 'react'

export default function DashBoard() {
  const router = useRouter()

  const backToLogin = async () => {
    router.push('/auth/login')
  }

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '1rem'
      }}
    >
      <Heading>Dashboard</Heading>
      <Button
        variant='contained'
        onClick={backToLogin}
      >
        Voltar para login
      </Button>
    </Box>
  )
}
