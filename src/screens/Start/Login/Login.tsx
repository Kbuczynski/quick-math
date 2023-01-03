import { useContext, useState } from 'react'
import { StyledLoginBtnContainer, StyledLoginContainer } from './styles'
import Input from 'src/components/Input/Input'
import Button from 'src/components/Button/Button'

import { UserType } from 'src/types'
import { AuthContext } from 'src/context'

interface LoginProps {
  users: UserType[] | undefined
}

export default function Login({ users }: LoginProps) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const { setAuth } = useContext(AuthContext)

  // TODO: add error handling
  function handleLogin() {
    const correctData = users?.filter((user: UserType) => user.name === login && user.password === password)
    correctData?.length && setAuth({ id: correctData[0].id, logged: true })
  }

  return (
    <StyledLoginContainer>
      <Input placeholder="Enter login" value={login} onChangeValue={setLogin} />
      <Input placeholder="Enter password" value={password} onChangeValue={setPassword} secure />
      <StyledLoginBtnContainer>
        <Button label="Login" handlePress={handleLogin} />
      </StyledLoginBtnContainer>
    </StyledLoginContainer>
  )
}
