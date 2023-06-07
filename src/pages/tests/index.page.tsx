import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import useFetch from '@/hooks/useFecth'
import React from 'react'

export default function Tests() {
  const { data, error, fetchData, isLoading } = useFetch()

  const handlerTest = async () => {
    await fetchData(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/microrregioes'
    )
    console.log(data)
  }

  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Button
        onClick={handlerTest}
        variant='contained'
      >
        Testa função
      </Button>
    </Box>
  )
}
