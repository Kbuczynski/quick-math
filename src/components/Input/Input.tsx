import { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import {
  AnimatedStyledInputLabel,
  AnimatedStyledInputLabelContainer,
  StyledInput,
  StyledInputContainer,
} from './styles'
import { TextInput, TouchableWithoutFeedback } from 'react-native'
import { ANIMATION_VALUES } from './constants'

interface InputProps {
  placeholder: string
  value: string
  onChangeValue: Dispatch<SetStateAction<string>>
  secure?: boolean
  testId: string
}

enum AnimationStates {
  DOWN,
  TOP,
}

export default function Input({ placeholder, value, onChangeValue, secure = false, testId }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const animationState = useSharedValue<AnimationStates>(AnimationStates.DOWN)
  const inputRef = useRef<TextInput>(null)

  const setAnimationState = (toValue: number) => {
    if (animationState.value === toValue) {
      return
    }

    animationState.value = withTiming(toValue, {
      duration: ANIMATION_VALUES.ANIMATION_DURATION,
      easing: ANIMATION_VALUES.ANIMATION_EASING,
    })
  }

  useEffect(
    function handleAnimation() {
      if (!isFocused && !value) {
        setAnimationState(AnimationStates.DOWN)
        return
      }

      if (isFocused || value) {
        setAnimationState(AnimationStates.TOP)
        return
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isFocused, value],
  )

  const animatedInputLabelContainerStyle = useAnimatedStyle(() => ({
    top: interpolate(
      animationState.value,
      [AnimationStates.DOWN, AnimationStates.TOP],
      [ANIMATION_VALUES.INITIAL_TOP, ANIMATION_VALUES.ANIMATED_TOP],
      Extrapolation.CLAMP,
    ),
  }))

  const animatedInputLabelStyle = useAnimatedStyle(() => ({
    fontSize: interpolate(
      animationState.value,
      [AnimationStates.DOWN, AnimationStates.TOP],
      [ANIMATION_VALUES.INITIAL_FONT_SIZE, ANIMATION_VALUES.ANIMATED_FONT_SIZE],
      Extrapolation.CLAMP,
    ),
  }))

  return (
    <StyledInputContainer>
      <StyledInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeValue}
        secureTextEntry={secure}
        onBlur={() => {
          setIsFocused(false)
        }}
        onFocus={() => {
          setIsFocused(true)
        }}
        testID={testId}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <AnimatedStyledInputLabelContainer style={animatedInputLabelContainerStyle}>
          <AnimatedStyledInputLabel style={animatedInputLabelStyle}>{placeholder}</AnimatedStyledInputLabel>
        </AnimatedStyledInputLabelContainer>
      </TouchableWithoutFeedback>
    </StyledInputContainer>
  )
}
