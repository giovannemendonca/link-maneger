import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Alert, AlertTitle, Collapse, Snackbar } from '@mui/material'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'

export default function Tests() {
  /*  const [open, setOpen] = useState<boolean>(false) */

  const { enqueueSnackbar } = useSnackbar()

  const handlerClick = () => {
    enqueueSnackbar('Sucesso', {
      variant: 'success'
    })
  }

  return (
    <Box
      css={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}
    >
      <Button
        variant='contained'
        onClick={handlerClick }
        /*         onClick={() => setOpen(true)} */
      >
        Login
      </Button>

      {/*  <Snackbar
        open={open}
        message='Alerta Snackbar'
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          variant='filled'
          onClose={() => setOpen(false)}
          severity='error'
        >
          <AlertTitle>Error</AlertTitle>
          Error ao realizar o Login
        </Alert>
      </Snackbar> */}
    </Box>
  )
}
