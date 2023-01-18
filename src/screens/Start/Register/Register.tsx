import { StyledRegisterBtnContainer, StyledRegisterContainer } from './styles'
import Input from 'src/components/Input/Input'
import Button from 'src/components/Button/Button'
import { useContext, useState } from 'react'
import { UserType } from 'src/types'
import { useCreateUser } from 'src/api/useCreateUser'
import { StartTabs } from '../types'
import { AuthContext } from 'src/context'

interface RegisterProps {
  users: UserType[] | undefined
  handleTabChange: (idx: StartTabs) => void
}

export default function Register({ users, handleTabChange }: RegisterProps) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const { mutateAsync } = useCreateUser()
  const { auth, setAuth } = useContext(AuthContext)

  // TODO: add error handling
  async function handleRegister() {
    const userNameTaken = users?.some((user: UserType) => user.name === login)
    if (!userNameTaken && password.length && login.length) {
      await mutateAsync({ name: login, password })
      auth && setAuth({ ...auth, name: login })
      handleTabChange(StartTabs.LoginTab)
    }
  }

  return (
    <StyledRegisterContainer>
      <Input placeholder="Enter login" value={login} onChangeValue={setLogin} />
      <Input placeholder="Enter password" value={password} onChangeValue={setPassword} secure />
      <StyledRegisterBtnContainer>
        <Button label="Register" handlePress={handleRegister} />
      </StyledRegisterBtnContainer>
    </StyledRegisterContainer>
  )
}
