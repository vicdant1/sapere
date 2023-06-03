import { DarkModeOutlined, LightModeOutlined, NotificationsOutlined, PersonOutlined, Search, SettingsOutlined } from "@mui/icons-material";
import { Box, IconButton, InputBase, Tooltip, useTheme } from "@mui/material";
import { useContext } from "react";


export const Topbar = () => {
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="flex-end" pt={2} pr={2}>
      <Box display="flex">
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};