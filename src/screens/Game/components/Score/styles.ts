import { Text, View } from 'react-native'
import styled from 'styled-components/native'

export const StyledScore = styled(View)`
  flex-direction: row;
`

export const StyledNumber = styled(Text)`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.text};
`

export const StyledSeparator = styled(Text)`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.text};
`
