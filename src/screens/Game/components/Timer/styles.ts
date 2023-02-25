import { Text, View } from 'react-native'
import styled from 'styled-components/native'

export const StyledTimer = styled(View)`
  flex-direction: row;
`

export const StyledTimerValue = styled(Text)<{ isFinalSeconds: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  font-size: 48px;
  color: ${(props) => (props.isFinalSeconds ? props.theme.colors.failure : props.theme.colors.text)};
`

export const StyledSeparator = styled(Text)<{ isFinalSeconds: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  font-size: 48px;
  color: ${(props) => (props.isFinalSeconds ? props.theme.colors.failure : props.theme.colors.text)};
`
