import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#210B34",
      light: "#250C3B",
      dark: "#160725",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#A78BEB",
      light: "#C9B9FF",
      dark: "#8256B5",
      contrastText: "#FFFFFF"
    },
    error: {
      main: "#E94057",
      light: "#FF7080",
      dark: "#C40035",
      contrastText: "#FFFFFF"
    },
    warning: {
      main: "#F59F0B",
      light: "#FFE080",
      dark: "#B26E00",
      contrastText: "#FFFFFF"
    },
    info: {
      main: "#44BBA4",
      light: "#80FFE0",
      dark: "#007B6C",
      contrastText: "#FFFFFF"
    },
    success: {
      main: "#78e08f",
      light: "#B6EDC7",
      dark: "#379683",
      contrastText: "#FFFFFF"
    },
    background: {
      default: "#F7F7F7",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#333333",
      secondary: "#888888",
      disabled: "#CCCCCC",
    }
  },
});
