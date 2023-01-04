import { useContext, useEffect, useMemo, useState } from 'react'
import { useEquation, useSettings, useTimer } from './hooks'
import CustomModal from 'src/components/CustomModal/CustomModal'
import GameWrapper from './components/GameWrapper/GameWrapper'
import GameHeader from './components/GameHeader/GameHeader'
import Timer from './components/Timer/Timer'
import Score from './components/Score/Score'
import Equation from './components/Equation/Equation'
import ResultForm from './components/ResultForm/ResultForm'
import { AuthContext } from 'src/context'
import { useUpdateUser } from 'src/api/useUpdateUser'

export default function Game() {
  const [score, setScore] = useState<number>(0)
  const [modalVisible, setModalVisible] = useState(false)
  const { settings, resetSettings } = useSettings(score)
  const { leftTime, endOfTime, addTime, subTime, resetTimer } = useTimer()
  const {
    numberOne,
    numberTwo,
    operation,
    numberOfEquation,
    isCorrectAnswer,
    isWrongAnswer,
    result,
    setResult,
    increaseNumberOfEquation,
    resetEquation,
  } = useEquation(settings, score, setScore, addTime, subTime)
  const { auth, setAuth } = useContext(AuthContext)
  const { mutate } = useUpdateUser()

  function resetGame() {
    resetSettings()
    resetTimer()
    resetEquation()
  }

  function handleModalSuccess() {
    setModalVisible(false)
    resetGame()
  }

  useEffect(() => {
    if (endOfTime) {
      setModalVisible(true)
      if (auth && auth?.score < score) {
        mutate({ id: auth?.id as string, score: score })
        setAuth({ ...auth, score })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endOfTime])

  const playAgainVisible = useMemo(() => endOfTime && !modalVisible, [endOfTime, modalVisible])

  return (
    <GameWrapper>
      <GameHeader>
        <Timer time={leftTime} />
        <Score numberOfEquation={numberOfEquation} score={score} />
      </GameHeader>
      <Equation numberOne={numberOne} numberTwo={numberTwo} operation={operation} />
      <ResultForm
        disabled={endOfTime}
        isCorrectAnswer={isCorrectAnswer}
        isWrongAnswer={isWrongAnswer}
        setResult={setResult}
        result={result}
        increaseNumberOfEquation={increaseNumberOfEquation}
        playAgainVisible={playAgainVisible}
        resetGame={resetGame}
      />
      <CustomModal
        visible={modalVisible}
        score={score}
        numberOfEquation={numberOfEquation}
        handleSuccess={handleModalSuccess}
        handleClose={() => setModalVisible(false)}
      />
    </GameWrapper>
  )
}
