import { useCallback, useState } from 'react'
import { TabView, SceneMap, Route } from 'react-native-tab-view'
import Login from './Login/Login'
import Register from './Register/Register'
import { Dimensions } from 'react-native'
import {
  StyledTabBarActiveTab,
  StyledTabBar,
  StyledTabBarContainer,
  StyledTabBarLabel,
  StyledStartContainer,
} from './styles'
import { TabBarCustomProps } from './types'
import { useUsers } from 'src/api/useUsers'

const windowWidth = Dimensions.get('window').width

export default function Start() {
  const [index, setIndex] = useState(0)
  const { data: users, refetch } = useUsers()
  const [routes] = useState([
    { key: 'login', title: 'Login' },
    { key: 'register', title: 'Register' },
  ])

  const handleTabChange = useCallback(
    (idx: number) => {
      setIndex(idx)
      refetch()
    },
    [refetch],
  )

  const renderScene = SceneMap({
    login: () => <Login users={users} />,
    register: () => <Register users={users} />,
  })

  const renderTabBar = useCallback(
    (props: TabBarCustomProps) => (
      <StyledTabBarContainer>
        {props.navigationState.routes.map((route: Route, idx: number) => {
          if (idx === props.navigationState.index) {
            return (
              <StyledTabBarActiveTab key={route.key} onPress={() => props.jumpTo(route.key)}>
                <StyledTabBarLabel>{route.title}</StyledTabBarLabel>
              </StyledTabBarActiveTab>
            )
          }
          return (
            <StyledTabBar key={route.key} onPress={() => props.jumpTo(route.key)}>
              <StyledTabBarLabel>{route.title}</StyledTabBarLabel>
            </StyledTabBar>
          )
        })}
      </StyledTabBarContainer>
    ),
    [],
  )

  return (
    <StyledStartContainer>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={handleTabChange}
        initialLayout={{ width: windowWidth }}
      />
    </StyledStartContainer>
  )
}
