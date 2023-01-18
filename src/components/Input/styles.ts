import { TextInput, View } from 'react-native'
import Reanimated from 'react-native-reanimated'
import Animated from 'react-native-reanimated'
import styled from 'styled-components'

export const StyledInputContainer = styled(View)`
  border-color: ${({ theme }) => theme.colors.ornament};
  border-bottom-width: 1px;
  width: 200px;
  margin: 14px 0;
`

export const StyledInput = styled(TextInput)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 4px;
`

const StyledInputLabelContainer = styled(Animated.View)`
  position: absolute;
  padding: 12px 4px;
`

const StyledInputLabel = styled(Animated.Text)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textOpacity};
`

export const AnimatedStyledInputLabelContainer = Reanimated.createAnimatedComponent(StyledInputLabelContainer)
export const AnimatedStyledInputLabel = Reanimated.createAnimatedComponent(StyledInputLabel)
