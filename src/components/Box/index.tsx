import { styled } from "@/styles";

export const Box = styled('div', {
  padding: '$16',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: 'solid 1px $gray600',

  '@media (max-width: 620px)': {
    padding: '$6'
  }

})
