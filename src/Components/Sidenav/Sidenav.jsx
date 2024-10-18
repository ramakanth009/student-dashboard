import React from "react";
import { useStyles } from "./Sidenav.styles";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
  Typography,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import LiveHelpRoundedIcon from "@mui/icons-material/LiveHelpRounded";
import { Avatar } from "@mui/material";
import Dashlogo from "../../Assets/dashlogo.png";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Sidenav = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidenav}>
      <Avatar
        sx={{ width: "250px", height: "70px" }}
        variant="square"
        src={Dashlogo}
      ></Avatar>
      <List>
        <ListItem
          button
          component={Link}
          to="#"
          sx={{
            padding: "20px 20px",
            backgroundColor: "transparent", // Default background
            "&:hover": {
              backgroundColor: "#eeb015af", // Color on hover
            },
            "&.Mui-selected": {
              backgroundColor: "#eeb015af", // Color when active
            },
          }}
        >
          <HomeRoundedIcon
            className={classes.sidebarlogos}
            sx={{ fontSize: "2rem" }}
          />
          <Typography
            variant="body2"
            color="initial"
            className={classes.sidebuttons}
          >
            Home
          </Typography>
          <ListItemText />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="#"
          sx={{
            padding: "20px 20px",
            backgroundColor: "transparent", // Default background
            "&:hover": {
              backgroundColor: "#eeb015af", // Color on hover
            },
            "&.Mui-selected": {
              backgroundColor: "#eeb015af", // Color when active
            },
          }}
        >
          <PersonRoundedIcon
            className={classes.sidebarlogos}
            sx={{ fontSize: "2rem" }}
          />
          <Typography
            variant="body2"
            color="initial"
            className={classes.sidebuttons}
          >
            Profile
          </Typography>
          <ListItemText />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="#"
          sx={{
            padding: "20px 20px",
            backgroundColor: "transparent", // Default background
            "&:hover": {
              backgroundColor: "#eeb015af", // Color on hover
            },
            "&.Mui-selected": {
              backgroundColor: "#eeb015af", // Color when active
            },
          }}
        >
          <InsertChartRoundedIcon
            className={classes.sidebarlogos}
            sx={{ fontSize: "2rem" }}
          />
          <Typography
            variant="body2"
            color="initial"
            className={classes.sidebuttons}
          >
            Curriculum
          </Typography>
          <ListItemText />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="#"
          sx={{
            padding: "20px 20px",
            backgroundColor: "transparent", // Default background
            "&:hover": {
              backgroundColor: "#eeb015af", // Color on hover
            },
            "&.Mui-selected": {
              backgroundColor: "#eeb015af", // Color when active
            },
          }}
        >
          <TaskAltRoundedIcon
            className={classes.sidebarlogos}
            sx={{ fontSize: "2rem" }}
          />
          <Typography
            variant="body2"
            color="initial"
            className={classes.sidebuttons}
          >
            Task
          </Typography>
          <ListItemText />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="#"
          sx={{
            padding: "20px 20px",
            backgroundColor: "transparent", // Default background
            "&:hover": {
              backgroundColor: "#eeb015af", // Color on hover
            },
            "&.Mui-selected": {
              backgroundColor: "#eeb015af", // Color when active
            },
          }}
        >
          <LiveHelpRoundedIcon
            className={classes.sidebarlogos}
            sx={{ fontSize: "2rem" }}
          />
          <Typography
            variant="body2"
            color="initial"
            className={classes.sidebuttons}
          >
            Help
          </Typography>
          <ListItemText />
        </ListItem>
      </List>
      <Box className={classes.sidebottom}>
        <LightModeRoundedIcon className={classes.bottomlogos} />
        <Typography
          variant="body2"
          color="initial"
          className={classes.logout}
          sx={{
            backgroundColor: "transparent", // Default background
            "&:hover": {
              padding: "8px 8px",
              borderRadius:"20px",
              backgroundColor: "#eeb015af", // Color on hover

            },
            "&.Mui-selected": {
              backgroundColor: "#eeb015af", // Color when active
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
