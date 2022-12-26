import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Game from 'src/screens/Game/Game'
import Scores from 'src/screens/Scores/Scores'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Game" backBehavior="history">
      <Tab.Screen name="Game" component={Game} />
      <Tab.Screen name="Scores" component={Scores} />
    </Tab.Navigator>
  )
}
