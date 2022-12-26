import { StyledNumber, StyledScore, StyledSeparator } from './styles'

interface ScoreProps {
  score: number
  numberOfEquation: number
}

export default function Score({ score, numberOfEquation }: ScoreProps) {
  return (
    <StyledScore>
      <StyledNumber>{score}</StyledNumber>
      <StyledSeparator>/</StyledSeparator>
      <StyledNumber>{numberOfEquation}</StyledNumber>
    </StyledScore>
  )
}
