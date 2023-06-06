import { Box } from '@/components/Box'
import { Text } from '@/components/Text'
import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '100vh'
})

export const ContainerBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  flex: 1,
  maxWidth: 572,


  '@media (max-width: 520px)': {
    width: '100%',
    height: '100vh',

    borderRadius: 0,
    paddingTop: '$16'
  }
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16
})

export const ContainerItem = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})

export const ResetPassword = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const Link = styled('span', {
  cursor: 'pointer',
  color: '#008F8970',
  width: 'fit-content',


  '&:hover': {
    color: '$green300'
  }
})

export const Account = styled(Text, {
  display: 'flex',
  justifyContent: 'center',
  gap: '$2'
})
