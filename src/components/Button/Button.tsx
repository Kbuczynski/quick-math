import React from 'react'
import { StyledBtn, StyledBtnLabel } from './style'

interface ButtonProps {
  label: string
  handlePress: () => void
  disabled?: boolean
  isPartOfList?: boolean
}

export default function Button({ label, handlePress, disabled = false, isPartOfList = false }: ButtonProps) {
  return (
    <StyledBtn onPress={handlePress} disabled={disabled} isPartOfList={isPartOfList}>
      <StyledBtnLabel disabled={disabled}>{label}</StyledBtnLabel>
    </StyledBtn>
  )
}
