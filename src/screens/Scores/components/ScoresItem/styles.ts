import { Text, View } from 'react-native'
import styled from 'styled-components'

export const StyledScoresItem = styled(View)`
  flex: 1;
  flex-direction: row;
`

export const StyledScoresItemText = styled(Text)<{ centered?: boolean }>`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
`
