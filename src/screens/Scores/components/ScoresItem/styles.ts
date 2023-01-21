import { Text, View } from 'react-native'
import styled from 'styled-components'

export enum TextAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export const StyledScoresItem = styled(View)`
  flex: 1;
  flex-direction: row;
`

export const StyledScoresItemText = styled(Text)<{ alignment?: TextAlignment; isCurrentUser: boolean }>`
  font-size: 20px;
  color: ${(props) => (props.isCurrentUser ? props.theme.colors.ornament : props.theme.colors.text)};
  flex: 1;
  text-align: ${(props) => props.alignment || TextAlignment.LEFT};
`
