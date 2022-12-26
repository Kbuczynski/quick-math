import { Text, View } from 'react-native'
import styled from 'styled-components'

export const StyledTimer = styled(View)<{ isFinalSeconds: boolean }>`
  flex-direction: row;
  gap: 4px;
  color: ${(props) => (props.isFinalSeconds ? 'red' : '#fff')};
`

export const StyledTimerValue = styled(Text)`
  color: #fff;
  font-size: 48px;
`

export const StyledSeparator = styled(Text)`
  color: #fff;
  font-size: 48px;
`
