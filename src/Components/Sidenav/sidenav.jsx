// sidenav.jsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, List, ListItem, Typography, Avatar, IconButton, Tooltip } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import LiveHelpRoundedIcon from "@mui/icons-material/LiveHelpRounded";
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Dashlogo from "../../Assets/dash.svg";
import { useStyles } from "./styles";

const Sidenav = ({ onCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const classes = useStyles({ isCollapsed });
  const navigate = useNavigate();

  const handleToggle = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    if (onCollapse) {
      onCollapse(newCollapsedState);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("rememberedCredentials");
    localStorage.removeItem("credentialsExpiration");
    navigate("/login");
  };

  const menuItems = [
    { path: "/home", icon: HomeRoundedIcon, label: "Home" },
    { path: "/profile", icon: PersonRoundedIcon, label: "Profile" },
    { path: "/curriculam", icon: InsertChartRoundedIcon, label: "Curriculum" },
    { path: "/tasks", icon: TaskAltRoundedIcon, label: "Task" },
    // { path: "/chatwithai", icon: ChatRoundedIcon, label: "Chat With AI" },
    { path: "/git", icon: GitHubIcon, label: "Git" },
    { path: "/help", icon: LiveHelpRoundedIcon, label: "Help" },
  ];

  return (
    <Box className={classes.sidenav}>
      <Box className={classes.header}>
      <Avatar
  sx={{
    width: isCollapsed ? "52px" : "auto",
    height: "40px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    borderRadius: isCollapsed ? "15px 8px 8px 15px":"none",
    "& .MuiAvatar-img": {
      objectFit: "contain",
      objectPosition: isCollapsed ? "7px center" : "0px center",
      width: "180px",
      height: "40px",
      transform: isCollapsed ? "scale(2.3)" : "scale(2.1)",
      transformOrigin: "left center",
      padding: isCollapsed ? "none":"auto",
    }
  }}
  variant="square"
  src={Dashlogo}
  alt="Dashboard Logo"
/>
        <IconButton 
          onClick={handleToggle}
          className={classes.collapseButton}
        >
          {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>

      <List className={classes.menuList}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Tooltip
              key={item.path}
              title={isCollapsed ? item.label : ""}
              placement="right"
              arrow
            >
              <ListItem
                button
                component={NavLink}
                to={item.path}
                className={classes.menuItem}
              >
                <Icon className={classes.icon} />
                {!isCollapsed && (
                  <Typography variant="body2" className={classes.menuText}>
                    {item.label}
                  </Typography>
                )}
              </ListItem>
            </Tooltip>
          );
        })}
      </List>

      <Box className={classes.sidebottom}>
        <Tooltip title={isCollapsed ? "Logout" : ""} placement="right" arrow>
          <Typography
            variant="body2"
            className={classes.logout}
            onClick={handleLogout}
          >
            <LogoutRoundedIcon className={classes.icon} />
            {!isCollapsed && "Logout"}
          </Typography>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Sidenav;