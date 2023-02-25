import { RenderResult, render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../styles/theme'

export function renderWithTheme(node: React.ReactElement): RenderResult {
  return render(node, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  })
}
