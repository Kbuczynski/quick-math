import { TEST_IDS } from './constants'
import { StyledBtn, StyledBtnLabel } from './style'

interface ButtonProps {
  label: string
  handlePress: () => void
  disabled?: boolean
  isPartOfList?: boolean
}

export default function Button({ label, handlePress, disabled = false, isPartOfList = false }: ButtonProps) {
  return (
    <StyledBtn
      onPress={disabled ? () => null : handlePress}
      disabled={disabled}
      isPartOfList={isPartOfList}
      testID={TEST_IDS.BUTTON}
    >
      <StyledBtnLabel disabled={disabled} testID={TEST_IDS.BUTTON_LABEL}>
        {label}
      </StyledBtnLabel>
    </StyledBtn>
  )
}
