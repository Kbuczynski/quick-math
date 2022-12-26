import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const StyledBtn = styled(TouchableOpacity)<{ isPartOfList: boolean }>`
  padding: 12px 8px;
  border: 1px solid #3b8e94;
  background-color: #000;
  justify-content: center;
  align-items: center;
  ${(props) => props.isPartOfList && 'flex: 1;'}
`

export const StyledBtnLabel = styled(Text)<{ disabled: boolean }>`
  font-size: 28px;
  color: #fff;
  ${(props) => props.disabled && 'opacity: 0.5;'}
`
