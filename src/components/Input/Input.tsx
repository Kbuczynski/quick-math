import { Dispatch, SetStateAction } from 'react'
import { StyledInput } from './styles'

interface InputProps {
  placeholder: string
  value: string
  onChangeValue: Dispatch<SetStateAction<string>>
  secure?: boolean
}

export default function Input({ placeholder, value, onChangeValue, secure = false }: InputProps) {
  return <StyledInput placeholder={placeholder} value={value} onChangeText={onChangeValue} secureTextEntry={secure} />
}
