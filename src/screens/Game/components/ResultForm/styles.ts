import { FlatList, TextInput, View } from 'react-native'
import styled from 'styled-components/native'

export const StyledResultForm = styled(View)`
  flex-direction: column;
`

export const StyledResultInput = styled(TextInput).attrs({
  type: 'text',
})<{ isCorrectAnswer: boolean; isWrongAnswer: boolean }>`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  text-align: right;
  background-color: ${(props) =>
    props.isCorrectAnswer
      ? props.theme.colors.success
      : props.isWrongAnswer
      ? props.theme.colors.failure
      : props.theme.colors.background};
  transition: background-color 0.1s ease;
`

export const StyledNumbersList = styled(FlatList)``
