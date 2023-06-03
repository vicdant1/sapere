import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Sidebar } from "../components/global/Sidebar/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { TestSidebar } from "../components/global/Sidebar/TestSidebar";
import { Topbar } from "../components/global/Topbar";
import { Footer } from "../components/global/Footer";
import { theme } from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
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
          <Footer/>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
