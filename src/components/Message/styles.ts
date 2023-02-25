import { Text } from 'react-native'
import { MessageTypes } from 'src/types'
import styled from 'styled-components/native'

export const StyledMessage = styled(Text)<{ type: MessageTypes }>`
  margin: 12px 0;
  font-size: 20px;
  width: 250px;
  color: ${(props) => props.theme.colors[props.type]};
  text-align: left;
`
