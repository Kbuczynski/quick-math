import { SafeAreaView, Text, View } from 'react-native'
import styled from 'styled-components'

export const StyledCustomModalContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`

export const StyledCustomModalContent = styled(View)`
  padding: 48px;
  background-color: #000;
`

export const StyledCustomModalText = styled(Text)`
  font-size: 28px;
  color: #fff;
  text-align: center;
  margin: 10px 0;
`

export const StyledCustomModalRow = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;
`
