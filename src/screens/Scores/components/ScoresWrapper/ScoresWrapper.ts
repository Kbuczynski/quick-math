import { View } from 'react-native'
import styled from 'styled-components/native'

export default styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 32px;
`
