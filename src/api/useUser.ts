import { useQuery } from 'react-query'
import { UserType } from 'src/types'
import http from './http'

async function fetchUser(id: string): Promise<UserType> {
  const users: UserType = (await http.get(`/users/${id ? id : ''}`)).data
  return users
}

export function useUser(id: string) {
  return useQuery<UserType, Error>({
    queryKey: ['users'],
    queryFn: () => fetchUser(id),
  })
}
