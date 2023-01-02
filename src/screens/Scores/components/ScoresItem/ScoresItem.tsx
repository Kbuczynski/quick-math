import React from 'react'
import { StyledScoresItem, StyledScoresItemText } from './styles'
import { UserType } from 'src/types'

interface ScoresItemProps {
  user: UserType
  index: number
}

export default function ScoresItem({ user, index }: ScoresItemProps) {
  return (
    <StyledScoresItem>
      <StyledScoresItemText>{index}</StyledScoresItemText>
      <StyledScoresItemText>{user.name}</StyledScoresItemText>
      <StyledScoresItemText centered>{user.score}</StyledScoresItemText>
    </StyledScoresItem>
  )
}
