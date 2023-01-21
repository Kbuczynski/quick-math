import { useContext, useState } from 'react'
import { StyledLoginBtnContainer, StyledLoginContainer } from './styles'
import Input from 'src/components/Input/Input'
import Button from 'src/components/Button/Button'
import { MessageTypes, UserType } from 'src/types'
import { AuthContext } from 'src/context'
import Message from 'src/components/Message/Message'

interface LoginProps {
  users: UserType[] | undefined
}

export default function Login({ users }: LoginProps) {
  const { auth, setAuth } = useContext(AuthContext)
  const [login, setLogin] = useState(auth?.name || '')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)

  function handleLogin() {
    const correctData = users?.filter((user: UserType) => user.name === login && user.password === password)

    if (correctData?.length) {
      setIsError(false)
      setAuth({ id: correctData[0].id, name: login, score: correctData[0].score, logged: true })
    } else {
      setIsError(true)
    }
  }

  return (
    <StyledLoginContainer>
      <Input placeholder="Enter login" value={login} onChangeValue={setLogin} />
      <Input placeholder="Enter password" value={password} onChangeValue={setPassword} secure />
      {isError && <Message text="Login or password are incorrect." type={MessageTypes.FAILURE} />}
      <StyledLoginBtnContainer>
        <Button label="Login" handlePress={handleLogin} />
      </StyledLoginBtnContainer>
    </StyledLoginContainer>
  )
}
