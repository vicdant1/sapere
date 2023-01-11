import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { orange } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>      
    </>
  )
}

export default MyApp
