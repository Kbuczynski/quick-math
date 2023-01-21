import React from 'react'
import { StyledMessage } from './styles'
import { MessageTypes } from 'src/types'

interface MessageProps {
  text: string
  type?: MessageTypes
}

export default function Message({ text, type = MessageTypes.DEFAULT }: MessageProps) {
  return <StyledMessage type={type}>{text}</StyledMessage>
}
