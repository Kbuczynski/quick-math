import { StyledRegisterBtnContainer, StyledRegisterContainer } from './styles'
import Input from 'src/components/Input/Input'
import Button from 'src/components/Button/Button'
import { useState } from 'react'
import { UserType } from 'src/types'
import { useCreateUser } from 'src/api/useCreateUser'

interface RegisterProps {
  users: UserType[] | undefined
}

export default function Register({ users }: RegisterProps) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const { mutateAsync } = useCreateUser()

  // TODO: add error handling
  async function handleRegister() {
    const userNameTaken = users?.some((user: UserType) => user.name === login)
    if (!userNameTaken && password.length && login.length) {
      await mutateAsync({ name: login, password })
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
