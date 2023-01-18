import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string
      textOpacity: string
      background: string
      backgroundOpacity: string
      success: string
      failure: string
      ornament: string
    }
  }
}
