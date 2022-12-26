import { FlatList, TextInput, View } from 'react-native'
import styled from 'styled-components'

export const StyledResultForm = styled(View)`
  flex-direction: column;
`

export const StyledResultInput = styled(TextInput).attrs({
  type: 'text',
})<{ isCorrectAnswer: boolean; isWrongAnswer: boolean }>`
  font-size: 50px;
  color: #fff;
  border: none;
  text-align: right;
  background-color: ${(props) => (props.isCorrectAnswer ? '#23B565' : props.isWrongAnswer ? '#F15152' : '#000')};
  transition: background-color 0.1s ease;
`

export const StyledNumbersList = styled(FlatList)``
