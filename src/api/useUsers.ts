import { useQuery } from 'react-query'
import { UserType } from 'src/types'
import http from './http'

async function fetchUsers(id?: string): Promise<UserType[]> {
  const users: UserType[] = (await http.get(`/users/${id ? id : ''}`)).data
  return users.sort((prev, next) => next.score - prev.score)
}

export function useUsers(id?: string) {
  return useQuery<UserType[], Error>({
    queryKey: ['users'],
    queryFn: () => fetchUsers(id),
  })
}
