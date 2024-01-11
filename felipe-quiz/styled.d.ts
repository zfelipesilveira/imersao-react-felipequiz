import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      contrastText: string
      primary: string
      secondary: string
    }
  }
}
