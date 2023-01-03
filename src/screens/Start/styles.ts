import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

export const StyledStartContainer = styled(SafeAreaView)`
  flex: 1;
`

export const StyledTabBarContainer = styled(View)`
  background-color: ${({ theme }) => theme.colors.backgroundOpacity};
  flex-direction: row;
`

export const StyledTabBar = styled(TouchableOpacity)`
  flex: 1;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.ornament};
`

export const StyledTabBarActiveTab = styled(StyledTabBar)`
  background-color: ${({ theme }) => theme.colors.background};
`

export const StyledTabBarLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
`
