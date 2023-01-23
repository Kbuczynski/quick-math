import { Keyboard, TouchableWithoutFeedback } from 'react-native'

interface HideKeyboardWrapperProps {
  children: React.ReactNode
}

export default function HideKeyboardWrapper({ children }: HideKeyboardWrapperProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  )
}
