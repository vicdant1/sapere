import React, { useEffect, useState } from "react";
import { Sidebar as ProSideBar, Menu, MenuItem, useProSidebar, SubMenu, sidebarClasses } from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';

import { tokens } from "../../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Link from "next/link";

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <MenuItem
        active={selected == title}
        style={{
          color: colors.grey[100]
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        routerLink={<Link href={to}/>}
        >
          {title}
      </MenuItem>
    </>
  )
}

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Dashboard");

  const { collapseSidebar } = useProSidebar();

  useEffect(() => {
    collapseSidebar(isCollapsed);
  }, [isCollapsed])
  return (
    <>
      <Box>
        <ProSideBar rootStyles={{
          ['&']: {
            border: "none !important"
          },
          [`.${sidebarClasses.container}`]: {
            background: `${colors.primary[400]} !important`,
            borderRadius: "0 15px 15px 0"
          },
        }}>
          <Menu menuItemStyles={{
            button({active}) {
              return {
                backgroundColor: "transparent !important",
                color: active ? "#6870fa !important" : "inherit"
              }                
            },
          }}>
            <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                {!isCollapsed && (
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                )}
                <IconButton>
                  <MenuOutlinedIcon/>
                </IconButton>
              </Box>
            </MenuItem>

            {!isCollapsed && (
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={2}>
                <img
                  src="https://raw.githubusercontent.com/ed-roh/react-admin-dashboard/master/public/assets/user.png"
                  width={100}
                  height={100}
                  alt="user image"/>

                <Box textAlign="center">
                  <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mt: "10px" }}>
                    Ed Roh
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            )}

            <Box>
              <Item title="Dashboard" to="/dashboard" icon={<HomeOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
              
              <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                Data
              </Typography>
              <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
              <Item title="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected}/>
              <Item title="Invoices Balances" to="/invoices" icon={<ReceiptOutlinedIcon/>} selected={selected} setSelected={setSelected}/>

              <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                Pages
              </Typography>
              <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
              <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
              <Item title="FAQ Page" to="/faq" icon={<HelpOutlineOutlinedIcon/>} selected={selected} setSelected={setSelected}/>

              <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                Charts
              </Typography>
              <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
              <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected}/>
              <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected}/>
              <Item title="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected}/>
              <Item title="Test area" to="/testarea" icon={<BugReportOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            </Box>  
          </Menu>
        </ProSideBar>
      </Box>
    </>
  );
};
