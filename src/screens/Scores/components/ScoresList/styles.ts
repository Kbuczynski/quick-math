import { FlatList } from 'react-native'
import styled from 'styled-components'

export const StyledScoresList = styled(FlatList)`
  background-color: ${({ theme }) => theme.colors.background};
`
