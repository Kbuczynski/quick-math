import { useCallback, useState } from 'react'
import ScoresItem from '../ScoresItem/ScoresItem'
import { useUsers } from 'src/api/useUsers'
import { StyledScoresList } from './styles'
import ListSeparator from 'src/components/ListSeparator/ListSeparator'
import { UserType } from 'src/types'
import ScoresEmptyList from '../ScoresEmptyList/ScoresEmptyList'
import { useFocusEffect } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'

export default function ScoresList() {
  const { data: users, isLoading, isError, refetch } = useUsers()
  const [refreshing, setRefreshing] = useState(false)

  const handlePullToRefresh = useCallback(() => {
    setRefreshing(true)
    refetch().finally(() => setRefreshing(false))
  }, [refetch])

  const initRefresh = useCallback(() => {
    refetch()
  }, [refetch])

  useFocusEffect(initRefresh)

  if (isLoading && !users) {
    return <ActivityIndicator />
  }

  if (isError) {
    return <ScoresEmptyList text="Something went wrong" />
  }

  return (
    <StyledScoresList
      onRefresh={handlePullToRefresh}
      refreshing={refreshing}
      data={users}
      ItemSeparatorComponent={() => <ListSeparator />}
      keyExtractor={(user: any) => `${user.name}${user.id}`}
      renderItem={(user) => <ScoresItem user={user.item as UserType} index={++user.index} />}
      ListEmptyComponent={<ScoresEmptyList text={'No scores'} />}
      initialNumToRender={users?.length}
      showsVerticalScrollIndicator={false}
    />
  )
}
