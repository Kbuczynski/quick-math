import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getRandomNumber, isDivideBy } from 'src/helpers'
import { OperationType, Settings } from 'src/types'

const HALF_SECOND = 500

export function useEquation(
  settings: Settings,
  score: number,
  setScore: Dispatch<SetStateAction<number>>,
  addTime: (time: number) => void,
  subTime: (time: number) => void,
) {
  const [numberOfEquation, setNumberOfEquation] = useState<number>(0)
  const [result, setResult] = useState<string>('')
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [isWrongAnswer, setIsWrongAnswer] = useState(false)

  const { firstNumber, secondNumber, operationChar } = generateEquation(settings.minNumber, settings.maxNumber)
  const [numberOne, setNumberOne] = useState<number>(firstNumber)
  const [numberTwo, setNumberTwo] = useState<number>(secondNumber)
  const [operation, setOperation] = useState<OperationType>(operationChar)

  useEffect(() => {
    if (isCorrectResult()) {
      setScore(score + 1)
      addTime(settings.timeToAdd)
      showCorrectAnswer()
    } else {
      if (numberOfEquation === 0) {
        return
      }
      subTime(settings.timeToSub)
      showWrongAnswer()
    }

    nextEquation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfEquation])

  function showCorrectAnswer() {
    setIsCorrectAnswer(true)
    setTimeout(() => setIsCorrectAnswer(false), HALF_SECOND)
  }

  function showWrongAnswer() {
    setIsWrongAnswer(true)
    setTimeout(() => setIsWrongAnswer(false), HALF_SECOND)
  }

  function nextEquation() {
    const equation = generateEquation(settings.minNumber, settings.maxNumber)
    setResult('')
    setNumberOne(equation.firstNumber)
    setNumberTwo(equation.secondNumber)
    setOperation(equation.operationChar)
  }

  function isCorrectResult() {
    try {
      // eslint-disable-next-line no-eval
      const correctResult = eval(`${numberOne}${operation}${numberTwo}`.replace(/--/, '+'))
      return correctResult.toString() === result
    } catch {
      return false
    }
  }

  function increaseNumberOfEquation() {
    setNumberOfEquation(numberOfEquation + 1)
  }

  function resetEquation() {
    const equation = generateEquation(settings.minNumber, settings.maxNumber)
    setScore(0)
    setNumberOfEquation(0)
    setResult('')
    setNumberOne(equation.firstNumber)
    setNumberTwo(equation.secondNumber)
    setOperation(equation.operationChar)
  }

  return {
    numberOne,
    numberTwo,
    operation,
    numberOfEquation,
    score,
    isCorrectAnswer,
    isWrongAnswer,
    result,
    setResult,
    increaseNumberOfEquation,
    resetEquation,
  }
}

function generateEquation(
  minNumber: number,
  maxNumber: number,
): { firstNumber: number; secondNumber: number; operationChar: OperationType } {
  const operations = [OperationType.ADDING, OperationType.DIVISION, OperationType.MULTIPLY, OperationType.SUBTRACTING]
  const firstNumber = getRandomNumber(minNumber, maxNumber)
  const secondNumber = getRandomNumber(minNumber, maxNumber)
  const operationChar = operations[getRandomNumber(0, operations.length)]

  if (operationChar === OperationType.DIVISION) {
    if (secondNumber === 0 || !isDivideBy(firstNumber, secondNumber)) {
      return generateEquation(minNumber, maxNumber)
    }
  }

  return {
    firstNumber,
    secondNumber,
    operationChar,
  }
}
