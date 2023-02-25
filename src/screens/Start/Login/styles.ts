import { View } from 'react-native'
import styled from 'styled-components/native'

export const StyledLoginContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`

export const StyledLoginBtnContainer = styled(View)`
  width: 250px;
  margin-top: 10px;
`
