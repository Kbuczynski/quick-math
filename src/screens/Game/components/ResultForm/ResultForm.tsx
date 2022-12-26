import { Dispatch, SetStateAction } from 'react'
import { StyledResultForm, StyledResultInput, StyledNumbersList } from './styles'
import Button from 'src/components/Button/Button'

interface ResultFormProps {
  setResult: Dispatch<SetStateAction<string>>
  increaseNumberOfEquation: () => void
  result: string
  disabled: boolean
  isCorrectAnswer: boolean
  isWrongAnswer: boolean
  playAgainVisible: boolean
  resetGame: () => void
}

const chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', 'C']

export default function ResultForm({
  setResult,
  increaseNumberOfEquation,
  result,
  disabled,
  isCorrectAnswer,
  isWrongAnswer,
  playAgainVisible,
  resetGame,
}: ResultFormProps) {
  function handleSubmit() {
    setResult(result)
    increaseNumberOfEquation()
  }

  function handleSelectNumber(char: string) {
    switch (char) {
      case 'C':
        setResult('')
        break
      default:
        setResult(result + char)
        break
    }
  }

  return (
    <StyledResultForm>
      <StyledResultInput
        editable={false}
        isCorrectAnswer={isCorrectAnswer}
        isWrongAnswer={isWrongAnswer}
        value={result}
      />

      <StyledNumbersList
        data={chars}
        renderItem={(char) => (
          <Button
            disabled={disabled}
            handlePress={() => handleSelectNumber(char.item as string)}
            label={char.item as string}
            isPartOfList={true}
          />
        )}
        numColumns={3}
      />

      {playAgainVisible ? (
        <Button handlePress={resetGame} label={'Play again'} />
      ) : (
        <Button disabled={disabled} handlePress={handleSubmit} label={'Done'} />
      )}
    </StyledResultForm>
  )
}
