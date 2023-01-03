import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useContext } from 'react'
import { AuthContext } from 'src/context'
import Game from 'src/screens/Game/Game'
import Scores from 'src/screens/Scores/Scores'
import Start from 'src/screens/Start/Start'

const Tab = createBottomTabNavigator()

// TODO: add logout to header
export default function Navigation() {
  const { auth } = useContext(AuthContext)

  return (
    <Tab.Navigator backBehavior="history">
      {!auth?.logged ? (
        <Tab.Screen name="Start" component={Start} />
      ) : (
        <>
          <Tab.Screen name="Game" component={Game} />
          <Tab.Screen name="Scores" component={Scores} />
        </>
      )}
    </Tab.Navigator>
  )
}
