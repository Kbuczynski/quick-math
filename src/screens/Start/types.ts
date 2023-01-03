import { SceneRendererProps } from 'react-native-tab-view'

interface TabRoute {
  key: string
  title: string
}

interface NavigateState {
  index: number
  routes: TabRoute[]
}

export interface TabBarCustomProps extends SceneRendererProps {
  navigationState: NavigateState
}
