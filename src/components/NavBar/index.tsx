import { UserContext } from '@/context/UseContext'
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Text } from '../Text'
import { Button } from '../Button'

const NaveBar = () => {
  const router = useRouter()

  const { user } = useContext(UserContext)

  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down(620))

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
          >
            {(isMobile && user?.id) && <Text>Menu</Text>}
            {!isMobile && user?.id && <Text>Links maneger</Text>}
          </Typography>
          {!user?.id && (
            <>
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
            </>
          )}
          {user?.id && (
            <>
              {!isMobile && (
                <>
                  <Button
                    color='info'
                    variant='contained'
                  >
                    Cadastrar Link
                  </Button>
                </>
              )}
              <span
                style={{
                  borderLeft: '1px solid #ccc',
                  padding: '0 16px',
                  marginLeft: '16px'
                }}
              >
                <Avatar
                  alt='Remy Sharp'
                  src={user.gravatarUrl}
                  style={{ cursor: 'pointer' }}
                />
              </span>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NaveBar
