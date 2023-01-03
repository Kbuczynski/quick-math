import React, { useContext, useMemo } from 'react'
import { StyledScoresItem, StyledScoresItemText } from './styles'
import { UserType } from 'src/types'
import { AuthContext } from 'src/context'

interface ScoresItemProps {
  user: UserType
  index: number
}

export default function ScoresItem({ user, index }: ScoresItemProps) {
  const { auth } = useContext(AuthContext)

  const isCurrentUser = useMemo(() => auth?.id === user.id, [auth?.id, user.id])

  return (
    <StyledScoresItem>
      <StyledScoresItemText isCurrentUser={isCurrentUser}>{index}</StyledScoresItemText>
      <StyledScoresItemText isCurrentUser={isCurrentUser}>{user.name}</StyledScoresItemText>
      <StyledScoresItemText centered isCurrentUser={isCurrentUser}>
        {user.score}
      </StyledScoresItemText>
    </StyledScoresItem>
  )
}
