import { useEffect, useRef, useState } from 'react'
import { initialSettings } from '../initialSettings'

const ONE_SECOND = 1000

export function useTimer() {
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>()
  const [leftTime, setLeftTime] = useState<number>(initialSettings.TIME_TO_PLAY)
  const [endOfTime, setEndOfTime] = useState<boolean>(false)

  useEffect(() => {
    timerRef.current = leftTime > 0 ? setInterval(() => setLeftTime(leftTime - 1), ONE_SECOND) : undefined
    leftTime === 0 && setEndOfTime(true)

    return () => {
      clearInterval(timerRef.current)
    }
  }, [leftTime])

  function addTime(time: number) {
    setLeftTime(leftTime + time)
  }

  function subTime(time: number) {
    leftTime < time ? setLeftTime(0) : setLeftTime(leftTime - time)
  }

  function resetTimer() {
    setLeftTime(initialSettings.TIME_TO_PLAY)
    setEndOfTime(false)
  }

  return {
    endOfTime,
    leftTime,
    addTime,
    subTime,
    setLeftTime,
    resetTimer,
  }
}
