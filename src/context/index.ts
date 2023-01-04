import { Dispatch, SetStateAction, createContext } from 'react'

export type AuthType = {
  id: string
  score: number
  logged: boolean
}

type AuthContextType = {
  auth: AuthType | undefined
  setAuth: Dispatch<SetStateAction<AuthType | undefined>>
}

const initialState = {
  auth: undefined,
  setAuth: () => undefined,
}

export const AuthContext = createContext<AuthContextType>(initialState)
