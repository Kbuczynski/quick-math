import { TextInput } from 'react-native'
import styled from 'styled-components'

export const StyledInput = styled(TextInput)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  border-color: ${({ theme }) => theme.colors.ornament};
  border-bottom-width: 1px;
  padding: 12px 4px;
  width: 200px;
  margin: 10px 0;
`
