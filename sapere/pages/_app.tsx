import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'


const theme = createTheme({
  palette:{
    primary: {
      main: "#CCC"
    },
    secondary: {
      main: orange[400]
    }
  },
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
