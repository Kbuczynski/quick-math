import { View } from 'react-native'
import styled from 'styled-components/native'

export const StyledRegisterContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`

export const StyledRegisterBtnContainer = styled(View)`
  width: 250px;
  margin-top: 10px;
`
