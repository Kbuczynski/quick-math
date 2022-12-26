import { OperationType } from 'src/types'
import { StyledEquation, StyledNumber, StyledNumbersContainer, StyledOperation } from './styles'

interface EquationProps {
  numberOne: number
  numberTwo: number
  operation: OperationType
}

export default function Equation({ numberOne, numberTwo, operation }: EquationProps) {
  return (
    <StyledEquation>
      <StyledOperation>{operation}</StyledOperation>
      <StyledNumbersContainer>
        <StyledNumber>{numberOne}</StyledNumber>
        <StyledNumber>{numberTwo}</StyledNumber>
      </StyledNumbersContainer>
    </StyledEquation>
  )
}
