import { Modal } from 'react-native'
import {
  StyledCustomModalContainer,
  StyledCustomModalContent,
  StyledCustomModalRow,
  StyledCustomModalText,
} from './styles'
import Button from '../Button/Button'

interface CustomModalProps {
  visible?: boolean
  handleSuccess: () => void
  handleClose: () => void
  score: number
  numberOfEquation: number
}

export default function CustomModal({
  visible = true,
  handleSuccess,
  handleClose,
  score,
  numberOfEquation,
}: CustomModalProps) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={handleClose}>
      <StyledCustomModalContainer>
        <StyledCustomModalContent>
          <StyledCustomModalText>Time's up!</StyledCustomModalText>
          <StyledCustomModalText>
            Your score: {score}/{numberOfEquation}
          </StyledCustomModalText>

          <StyledCustomModalRow>
            <Button handlePress={handleClose} label={'Close'} />
            <Button handlePress={handleSuccess} label={'Play again'} />
          </StyledCustomModalRow>
        </StyledCustomModalContent>
      </StyledCustomModalContainer>
    </Modal>
  )
}
