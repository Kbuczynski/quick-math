import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const StyledBtn = styled(TouchableOpacity)<{ isPartOfList: boolean }>`
  padding: 12px 8px;
  border: 1px solid ${({ theme }) => theme.colors.ornament};
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  ${(props) => props.isPartOfList && 'flex: 1;'}
`

export const StyledBtnLabel = styled(Text)<{ disabled: boolean }>`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text};
  ${(props) => props.disabled && 'opacity: 0.5;'}
`
