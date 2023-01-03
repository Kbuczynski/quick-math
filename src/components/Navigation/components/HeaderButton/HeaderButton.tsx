import { StyledHeaderBtn, StyledHeaderBtnLabel } from './styles'

interface HeaderButtonProps {
  handlePress: () => void
}

export default function HeaderButton({ handlePress }: HeaderButtonProps) {
  return (
    <StyledHeaderBtn onPress={handlePress}>
      <StyledHeaderBtnLabel>Logout</StyledHeaderBtnLabel>
    </StyledHeaderBtn>
  )
}
