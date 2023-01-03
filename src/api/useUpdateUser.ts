import { useMutation } from 'react-query'
import http from './http'

interface PatchUserProps {
  id: string
  score: number
}

async function patchUser({ id, score }: PatchUserProps) {
  return (await http.patch(`/users/${id}`, { score })).data
}

export function useUpdateUser() {
  return useMutation({ mutationFn: ({ id, score }: PatchUserProps) => patchUser({ id, score }) })
}
