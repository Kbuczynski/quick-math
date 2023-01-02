import { NavigationContainer } from '@react-navigation/native'
import Navigation from './components/Navigation/Navigation'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { theme } from './styles/theme'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
