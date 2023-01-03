import { NavigationContainer } from '@react-navigation/native'
import Navigation from './components/Navigation/Navigation'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { theme } from './styles/theme'
import { AuthContext, AuthType } from './context'
import { useState } from 'react'

const queryClient = new QueryClient()

export default function App() {
  const [auth, setAuth] = useState<AuthType>()

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <QueryClientProvider client={queryClient} contextSharing>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthContext.Provider>
  )
}
