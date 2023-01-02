import { useMutation } from 'react-query'
import http from './http'

interface PostUserProps {
  name: string
  password: string
}

async function postUser({ name, password }: PostUserProps) {
  return (await http.post('/users/', { id: Date.now().toString(), name, password, score: 0 })).data
}

export function useCreateUser() {
  return useMutation({ mutationFn: ({ name, password }: PostUserProps) => postUser({ name, password }) })
}
