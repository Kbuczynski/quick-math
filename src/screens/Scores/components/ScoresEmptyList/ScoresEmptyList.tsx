import React from 'react'
import { StyledScoresEmptyList } from './styles'

interface ScoresEmptyListProps {
  text: string
}

export default function ScoresEmptyList({ text }: ScoresEmptyListProps) {
  return <StyledScoresEmptyList>{text}</StyledScoresEmptyList>
}
