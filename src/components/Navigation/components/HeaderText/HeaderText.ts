import { Text } from 'react-native'
import styled from 'styled-components/native'

export default styled(Text)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 10px;
`
