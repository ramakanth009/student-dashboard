import React from "react";
import { NavLink } from "react-router-dom";
import { Box, List, ListItem, Typography, Avatar } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import LiveHelpRoundedIcon from "@mui/icons-material/LiveHelpRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Dashlogo from "../../Assets/dashlogo.webp";
import { useStyles } from "./styles";

const Sidenav = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidenav}>
      <Avatar
        sx={{ width: "250px", height: "70px" }}
        variant="square"
        src={Dashlogo}
      />
      <List>
        <ListItem
          button
          component={NavLink}
          to="/"
          exact
          sx={{
            padding: "20px 20px",
            "&:hover": {
              backgroundColor: "#eeb015af",
            },
            "&.active": {
              backgroundColor: "#eeb015af", // Color when active
            },
          }}
        >
          <HomeRoundedIcon sx={{ fontSize: "2rem" }} />
          <Typography variant="body2" className={classes.sidebuttons}>
            Home
          </Typography>
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/profile"
          sx={{
            padding: "20px 20px",
            "&:hover": {
              backgroundColor: "#eeb015af",
            },
            "&.active": {
              backgroundColor: "#eeb015af",
            },
          }}
        >
          <PersonRoundedIcon sx={{ fontSize: "2rem" }} />
          <Typography variant="body2" className={classes.sidebuttons}>
            Profile
          </Typography>
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/curriculum"
          sx={{
            padding: "20px 20px",
            "&:hover": {
              backgroundColor: "#eeb015af",
            },
            "&.active": {
              backgroundColor: "#eeb015af",
            },
          }}
        >
          <InsertChartRoundedIcon sx={{ fontSize: "2rem" }} />
          <Typography variant="body2" className={classes.sidebuttons}>
            Curriculum
          </Typography>
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/tasks"
          sx={{
            padding: "20px 20px",
            "&:hover": {
              backgroundColor: "#eeb015af",
            },
            "&.active": {
              backgroundColor: "#eeb015af",
            },
          }}
        >
          <TaskAltRoundedIcon sx={{ fontSize: "2rem" }} />
          <Typography variant="body2" className={classes.sidebuttons}>
            Task
          </Typography>
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/help"
          sx={{
            padding: "20px 20px",
            "&:hover": {
              backgroundColor: "#eeb015af",
            },
            "&.active": {
              backgroundColor: "#eeb015af",
            },
          }}
        >
          <LiveHelpRoundedIcon sx={{ fontSize: "2rem" }} />
          <Typography variant="body2" className={classes.sidebuttons}>
            Help
          </Typography>
        </ListItem>
      </List>
      <Box className={classes.sidebottom}>
        <LightModeRoundedIcon className={classes.bottomlogos} />
        <Typography
          variant="body2"
          className={classes.logout}
          sx={{
            backgroundColor: "transparent",
            "&:hover": {
              padding: "8px 8px",
              borderRadius: "20px",
              backgroundColor: "#eeb015af",
            },
          }}
        >
          <LogoutRoundedIcon />
          Logout
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidenav;
