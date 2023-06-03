import React, { useEffect, useState } from "react";
import {
  Sidebar as ProSideBar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Link from "next/link";

//@ts-ignore
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();

  return (
    <>
      <MenuItem
        active={selected == title}
        onClick={() => setSelected(title)}
        icon={icon}
        routerLink={<Link href={to} />}
      >
        {title}
      </MenuItem>
    </>
  );
};

export const Sidebar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Dashboard");
  const [screenDimensions, setscreenDimensions] = useState<any>({});
  const { collapseSidebar } = useProSidebar();

  const handleScreenResize = () => {
    setscreenDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    if (screenDimensions.width < 796) setIsCollapsed(true);
    else setIsCollapsed(false);

    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  }, [screenDimensions]);

  useEffect(() => {
    collapseSidebar(isCollapsed);
  }, [isCollapsed]);

  return (
    <>
      <Box>
        <ProSideBar
          rootStyles={{
            ["&"]: {
              border: "none !important",
              color: theme.palette.grey[100],
            },
            [`.${sidebarClasses.container}`]: {
              background: `${theme.palette.primary.main} !important`,
              borderRadius: "0 4px 4px 0",
            },
          }}
        >
          <Menu
            menuItemStyles={{
              button({ active }) {
                return {
                  backgroundColor: `${theme.palette.primary.main} !important`,
                  color: active ? "#6870fa !important" : "inherit",
                };
              },
            }}
          >
            <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}>
              <IconButton>
                <MenuOutlinedIcon style={{ color: theme.palette.grey[100] }} />
              </IconButton>
            </MenuItem>

            {!isCollapsed && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                my={2}
              >
                <img
                  src="https://raw.githubusercontent.com/ed-roh/react-admin-dashboard/master/public/assets/user.png"
                  width={100}
                  height={100}
                  alt="user image"
                />

                <Box textAlign="center">
                  <Typography
                    variant="h6"
                    color={theme.palette.grey[100]}
                    fontWeight="bold"
                    sx={{ mt: "10px" }}
                  >
                    @username
                  </Typography>
                </Box>
              </Box>
            )}

            <Box>
              <Item
                title="Dashboard"
                to="/dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <SubMenu label="Cadastros" icon={<AppRegistrationIcon />}>
                <Item
                  title="Propriedades"
                  to="/"
                  icon={<ApartmentOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                <Item
                title="Test area"
                to="/testarea"
                icon={<BugReportOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />

              </SubMenu>
            </Box>
          </Menu>
        </ProSideBar>
      </Box>
    </>
  );
};

// EXAMPLES

// <Typography
// variant="body1"
// color={theme.palette.grey[300]}
// sx={{ m: "15px 0 5px 20px" }}
// >
// Data
// </Typography>
// <Item
// title="Manage Team"
// to="/team"
// icon={<PeopleOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />
// <Item
// title="Contacts Information"
// to="/contacts"
// icon={<ContactsOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />
// <Item
// title="Invoices Balances"
// to="/invoices"
// icon={<ReceiptOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />

// <Typography
// variant="body1"
// color={theme.palette.grey[300]}
// sx={{ m: "15px 0 5px 20px" }}
// >
// Pages
// </Typography>
// <Item
// title="Profile Form"
// to="/form"
// icon={<PersonOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />
// <Item
// title="Calendar"
// to="/calendar"
// icon={<CalendarTodayOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />
// <Item
// title="FAQ Page"
// to="/faq"
// icon={<HelpOutlineOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />

// <SubMenu label="Charts">
// <MenuItem> Pie charts </MenuItem>
// <MenuItem> Line charts </MenuItem>
// </SubMenu>

// <Typography
// variant="body1"
// color={theme.palette.grey[300]}
// sx={{ m: "15px 0 5px 20px" }}
// >
// Charts
// </Typography>
// <Item
// title="Bar Chart"
// to="/bar"
// icon={<BarChartOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />
// <Item
// title="Pie Chart"
// to="/pie"
// icon={<PieChartOutlineOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />
// <Item
// title="Line Chart"
// to="/line"
// icon={<TimelineOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />
// <Item
// title="Geography Chart"
// to="/geography"
// icon={<MapOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />
// <Item
// title="Test area"
// to="/testarea"
// icon={<BugReportOutlinedIcon />}
// selected={selected}
// setSelected={setSelected}
// />
