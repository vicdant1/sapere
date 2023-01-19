import React from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
  sidebarClasses,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import AnimationOutlinedIcon from "@mui/icons-material/AnimationOutlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import { Badge, Box, Switch, Typography } from "@mui/material";
import { LogoDev } from "@mui/icons-material";
import { Taglabel } from "../../utilities/Taglabel/Taglabel";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";

export const TestSidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {/* <Switch onChange={() => collapseSidebar()} /> */}
      <Sidebar
        transitionDuration={400}
        rootStyles={{
          '&': {
            border: "none",
          },
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400]
          }
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Menu menuItemStyles={{
            button: {
              backgroundColor: colors.primary[400],
              ':hover': {
                backgroundColor: theme.palette.mode === 'dark' ? colors.primary[500] : '#babcbf',
                transition: "ease-in-out .4s"
              }
            }
          }}>
            
            {collapsed ? (
              <Box my={2} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <img style={{borderRadius: "50%", width: "40px", height: "40px", margin: "5px 0"}}
                  src="https://cdn.mos.cms.futurecdn.net/eJoxKEnka43QmpxGo6BymH.jpg"
                  alt="profile image"/>
            </Box>
            ) : (
              <Box my={2} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <img style={{borderRadius: "50%", width: "140px", height: "140px", marginBottom: "10px"}}
                    src="https://cdn.mos.cms.futurecdn.net/eJoxKEnka43QmpxGo6BymH.jpg"
                    alt="profile image"/>
                <Typography variant="h3" color={colors.greenAccent[500]}>Mr. Groovador</Typography>
                <Typography variant="overline">Administrator</Typography>          
              </Box>
            )}

            <SubMenu label="Accounts" icon={<AccountBalanceOutlinedIcon />}>
              <MenuItem active icon={<SavingsOutlinedIcon />}>
                Account
              </MenuItem>
              <MenuItem
                disabled
                icon={<ProductionQuantityLimitsOutlinedIcon />}
              >
                Account
              </MenuItem>
              <MenuItem icon={<LocalAtmOutlinedIcon />}>Account</MenuItem>
            </SubMenu>
            <MenuItem icon={<ArchitectureOutlinedIcon />}>Menu Item</MenuItem>
            <MenuItem
              icon={
                <Badge badgeContent={3} color="primary">
                  <AnchorOutlinedIcon />
                </Badge>
              }
            >
              Menu Item
            </MenuItem>
            <MenuItem icon={<ArchiveOutlinedIcon />}>Menu Item</MenuItem>
            <MenuItem
              icon={<AnimationOutlinedIcon />}
              suffix={
                <Taglabel
                  color={theme.palette.success.main}
                  displayText="Success"
                />
              }
            >
              Menu Item
            </MenuItem>
            <MenuItem
              icon={<BackupOutlinedIcon />}
              suffix={
                <Taglabel
                  color={theme.palette.error.main}
                  displayText="Error"
                />
              }
            >
              Menu Item
            </MenuItem>
            <MenuItem
              icon={<CrisisAlertOutlinedIcon />}
              suffix={<Badge badgeContent={100} max={9} color="error"></Badge>}
            >
              Menu Item
            </MenuItem>
          </Menu>
          <Box
            py={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {collapsed ? (
              <LogoDev />
            ) : (
              <Typography noWrap>Made with 💘 by @vicdant1</Typography>
            )}
          </Box>
        </Box>
      </Sidebar>
    </>
  );
};
