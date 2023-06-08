import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const NaveBar = () => {
  const router = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          height: '60px',
          minHeight: '60px',
          maxHeight: '60px'
        }}
      >
        <Toolbar
          sx={{
            height: '60px',
            minHeight: '60px',
            maxHeight: '60px'
          }}
        >
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => router.push('/')}
          >
            Home
          </Typography>
          <Button
            color='inherit'
            onClick={() => router.push('/auth/login')}
          >
            Login
          </Button>
          <Button
            color='inherit'
            onClick={() => router.push('/users/register')}
          >
            Cadastre-se
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NaveBar
