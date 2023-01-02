import { Text } from 'react-native'
import styled from 'styled-components'

export const StyledScoresEmptyList = styled(Text)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`
