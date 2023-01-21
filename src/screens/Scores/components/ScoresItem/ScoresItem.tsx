import React, { useContext, useMemo } from 'react'
import { StyledScoresItem, StyledScoresItemText, TextAlignment } from './styles'
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
      <StyledScoresItemText isCurrentUser={isCurrentUser} numberOfLines={1}>
        {user.name}
      </StyledScoresItemText>
      <StyledScoresItemText alignment={TextAlignment.RIGHT} isCurrentUser={isCurrentUser}>
        {user.score}
      </StyledScoresItemText>
    </StyledScoresItem>
  )
}
