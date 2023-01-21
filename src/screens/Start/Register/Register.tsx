import { StyledRegisterBtnContainer, StyledRegisterContainer } from './styles'
import Input from 'src/components/Input/Input'
import Button from 'src/components/Button/Button'
import { useContext, useState } from 'react'
import { MessageTypes, UserType } from 'src/types'
import { useCreateUser } from 'src/api/useCreateUser'
import { StartTabs } from '../types'
import { AuthContext } from 'src/context'
import Message from 'src/components/Message/Message'

interface RegisterProps {
  users: UserType[] | undefined
  handleTabChange: (idx: StartTabs) => void
}

export default function Register({ users, handleTabChange }: RegisterProps) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const { mutateAsync } = useCreateUser()
  const { auth, setAuth } = useContext(AuthContext)
  const [isError, setIsError] = useState(false)

  async function handleRegister() {
    const userNameTaken = users?.some((user: UserType) => user.name === login)
    if (!userNameTaken && password.length && login.length) {
      setIsError(false)
      await mutateAsync({ name: login, password })
      auth && setAuth({ ...auth, name: login })
      handleTabChange(StartTabs.LoginTab)
    } else {
      setIsError(true)
    }
  }

  return (
    <StyledRegisterContainer>
      <Input placeholder="Enter login" value={login} onChangeValue={setLogin} />
      <Input placeholder="Enter password" value={password} onChangeValue={setPassword} secure />
      {isError && <Message text="Entered login is taken." type={MessageTypes.FAILURE} />}
      <StyledRegisterBtnContainer>
        <Button label="Register" handlePress={handleRegister} />
      </StyledRegisterBtnContainer>
    </StyledRegisterContainer>
  )
}
