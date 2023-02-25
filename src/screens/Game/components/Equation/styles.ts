import { Text, View } from 'react-native'
import styled from 'styled-components/native'

export const StyledEquation = styled(View)`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`
export const StyledOperation = styled(Text)`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.text};
`

export const StyledNumbersContainer = styled(View)``

export const StyledNumber = styled(Text)`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.text};
  text-align: right;
`
