import { Easing } from 'react-native-reanimated'

export const ANIMATION_VALUES = {
  ANIMATION_DURATION: 300,
  ANIMATION_EASING: Easing.bezier(0.22, 1, 0.36, 1),
  INITIAL_TOP: 0,
  ANIMATED_TOP: -30,
  INITIAL_FONT_SIZE: 24,
  ANIMATED_FONT_SIZE: 20,
}
