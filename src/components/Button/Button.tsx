import { StyledBtn, StyledBtnLabel } from './style'

interface ButtonProps {
  label: string
  handlePress: () => void
  disabled?: boolean
  isPartOfList?: boolean
  testId?: string
}

export default function Button({ label, handlePress, disabled = false, isPartOfList = false, testId }: ButtonProps) {
  return (
    <StyledBtn
      onPress={disabled ? () => null : handlePress}
      disabled={disabled}
      isPartOfList={isPartOfList}
      testID={testId}
    >
      <StyledBtnLabel disabled={disabled}>{label}</StyledBtnLabel>
    </StyledBtn>
  )
}
