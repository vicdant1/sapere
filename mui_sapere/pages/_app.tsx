import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { Topbar } from "../components/global/Topbar/Topbar";
import { Sidebar } from "../components/global/Sidebar/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProSidebarProvider>
            <div className="app">
              <Sidebar />
              <main className="content">
                <Topbar />
                <Component {...pageProps} />
              </main>
            </div>
          </ProSidebarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default MyApp;
