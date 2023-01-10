import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material'
import { orange, red } from '@mui/material/colors'


const theme = createTheme({
  palette:{
    primary: {
      main: "#CCC"
    },
    secondary: {
      main: orange[400]
    },
    myCustomColor: {
      main: red[400],
      superDark: red[800],
      superLight: red[200]
    }
  },
  typography: {
    myVariant: {
      backgroundColor: red[600],
      color: "#FFF",
      fontSize: "2em"
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return  (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
}
