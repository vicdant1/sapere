import React from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
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

export const TestSidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <Switch onChange={() => collapseSidebar()} />
      <Sidebar transitionDuration={400}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Menu>
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
            <MenuItem icon={<Badge badgeContent={3} color="primary"><AnchorOutlinedIcon/></Badge>}>Menu Item</MenuItem>
            <MenuItem icon={<ArchiveOutlinedIcon />}>Menu Item</MenuItem>
            <MenuItem icon={<AnimationOutlinedIcon />}>Menu Item</MenuItem>
            <MenuItem icon={<BackupOutlinedIcon />}>Menu Item</MenuItem>
            <MenuItem icon={<CrisisAlertOutlinedIcon />} suffix={<Badge badgeContent={100} max={9} color="error"></Badge>}>Menu Item</MenuItem>
          </Menu>
          <Box py={2} display="flex" alignItems="center" justifyContent="center">
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
