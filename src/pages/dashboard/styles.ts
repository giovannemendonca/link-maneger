import { Box } from '@/components/Box'
import { styled } from '@/styles'
import {
  TableCell as TableCellMui,
  TableContainer as TableContainerMui
} from '@mui/material'

export const BoxContainer = styled(Box, {
  display: 'flex',
  padding: ' $6',
  borderRadius: '$md',
  justifyContent: 'space-evenly',
  alignItems: 'center',

  '@media (max-width: 620px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '$4',
    gap: '$4',
  }
})

export const TableCell = styled(TableCellMui, {
  color: '$gray100'
})

export const TableContainer = styled(TableContainerMui, {
  backgroundColor: '$gray600',
  margin: '$12 0',
  padding: '0 $12'
})

export const SumaryCard = styled('div', {
  padding: '2rem',
  borderRadius: '6px',
  backgroundColor: '$gray600',
  
  '@media (max-width: 620px)': {
    width: '100%',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$gray400',
    gap: '$2',
  },

  strong: {
    display: 'block',
    marginTop: '$2',
    fontSize: '$2'
  }
})
