import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

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

const Item = ({ title, to, icon, selected, setSelected }: {
  title: SidebarMenu.TMenuItemLabel
  to: string
  icon: React.ReactNode
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const menuItems: SidebarMenu.TMenuItem[]  = [
    { type: 'item', title: 'Dashboard', to: '/', icon: <HomeOutlinedIcon /> },
    { type: 'heading', title: 'Data' },
    { type: 'item', title: 'Manage Team', to: '/team', icon: <PeopleOutlinedIcon /> },
    { type: 'item', title: 'Contacts Information', to: '/contacts', icon: <ContactsOutlinedIcon /> },
    { type: 'item', title: 'Invoices Balances', to: '/invoices', icon: <ReceiptOutlinedIcon /> },
    { type: 'heading', title: 'Pages' },
    { type: 'item', title: 'Profile Form', to: '/form', icon: <PersonOutlinedIcon /> },
    { type: 'item', title: 'Calendar', to: '/calendar', icon: <CalendarTodayOutlinedIcon /> },
    { type: 'item', title: 'FAQ Page', to: '/faq', icon: <HelpOutlineOutlinedIcon /> },
    { type: 'heading', title: 'Charts' },
    { type: 'item', title: 'Bar Chart', to: '/bar', icon: <BarChartOutlinedIcon /> },
    { type: 'item', title: 'Pie Chart', to: '/pie', icon: <PieChartOutlineOutlinedIcon /> },
    { type: 'item', title: 'Line Chart', to: '/line', icon: <TimelineOutlinedIcon /> },
    { type: 'item', title: 'Geography Chart', to: '/geography', icon: <MapOutlinedIcon /> },
  ]

  return (
    <Box>
      <ProSidebar collapsed={isCollapsed} rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: 'transparent'
        },
      }}>
        <Menu menuItemStyles={{
          button: {
            [`&:hover`]: {
              backgroundColor: 'transparent',
              color: `${colors.blueAccent[400]} !important`,
            },
            [`& .ps-active`]: {
              color: `${colors.blueAccent[500]}`
            }
          }
        }}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  EagleView
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/bart_icon.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Bart Kustra
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Test Infrastructure
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {menuItems.map((x: SidebarMenu.TMenuItem) => {
              if (x.type === 'heading')
                return <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  {x.title}
                </Typography>
              if (x.type === 'item')
                return <Item
                  title={x.title}
                  to={x.to}
                  icon={x.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;