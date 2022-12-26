import { useMemo } from 'react'
import { StyledSeparator, StyledTimer, StyledTimerValue } from './styles'

interface TimerProps {
  time: number
}

export default function Timer({ time }: TimerProps) {
  const minutes = useMemo(() => {
    const number = Math.round(Math.floor(time / 60))
    return number < 10 ? `0${number}` : number
  }, [time])
  const seconds = useMemo(() => {
    const number = Math.round(time - +minutes * 60)
    return number < 10 ? `0${number}` : number
  }, [time, minutes])
  const isFinalSeconds = useMemo(() => time < 10, [time])

  return (
    <StyledTimer isFinalSeconds={isFinalSeconds}>
      <StyledTimerValue>{minutes}</StyledTimerValue>
      <StyledSeparator>:</StyledSeparator>
      <StyledTimerValue>{seconds}</StyledTimerValue>
    </StyledTimer>
  )
}
