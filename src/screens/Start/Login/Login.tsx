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
  const { auth, setAuth } = useContext(AuthContext)
  const [login, setLogin] = useState(auth?.name || '')
  const [password, setPassword] = useState('')

  // TODO: add error handling
  function handleLogin() {
    const correctData = users?.filter((user: UserType) => user.name === login && user.password === password)
    correctData?.length && setAuth({ id: correctData[0].id, name: login, score: correctData[0].score, logged: true })
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
