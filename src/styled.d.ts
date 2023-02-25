import 'styled-components/native'

declare module 'styled-components/native' {
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
