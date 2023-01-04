import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useContext } from 'react'
import { AuthContext } from 'src/context'
import Game from 'src/screens/Game/Game'
import Scores from 'src/screens/Scores/Scores'
import Start from 'src/screens/Start/Start'
import { theme } from 'src/styles/theme'
import HeaderText from './components/HeaderText/HeaderText'
import HeaderButton from './components/HeaderButton/HeaderButton'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  const { auth, setAuth } = useContext(AuthContext)

  function handleLogout() {
    setAuth({
      id: '',
      score: 0,
      logged: false,
    })
  }

  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarIconStyle: {
          color: theme.colors.text,
        },
        tabBarActiveTintColor: theme.colors.ornament,
        headerTitle: '',
      }}
    >
      {!auth?.logged ? (
        <Tab.Screen name="Start" component={Start} />
      ) : (
        <>
          <Tab.Screen
            name="Game"
            component={Game}
            options={{
              headerRight: () => <HeaderButton handlePress={handleLogout} />,
              headerLeft: () => <HeaderText>QuickMath</HeaderText>,
            }}
          />
          <Tab.Screen
            name="Scores"
            component={Scores}
            options={{
              headerRight: () => <HeaderButton handlePress={handleLogout} />,
              headerLeft: () => <HeaderText>QuickMath</HeaderText>,
            }}
          />
        </>
      )}
    </Tab.Navigator>
  )
}
