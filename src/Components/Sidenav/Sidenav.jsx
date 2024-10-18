import React from 'react';
import { useStyles } from "./Sidenav.styles";
import { Box, List, ListItem, ListItemText, Link } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';


const Sidenav = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidenav}>
      <List>
        <ListItem button component={Link} to="#">
            <HomeRoundedIcon className={classes.sidebarlogos}/>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="#">
            <PersonRoundedIcon className={classes.sidebarlogos}/>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="#">
            <InsertChartRoundedIcon className={classes.sidebarlogos}/>
          <ListItemText primary="Curriculum" />
        </ListItem>
        <ListItem button component={Link} to="#">
            <TaskAltRoundedIcon className={classes.sidebarlogos}/>
          <ListItemText primary="Task" />
        </ListItem>
        <ListItem button component={Link} to="#">
            <LiveHelpRoundedIcon className={classes.sidebarlogos}/>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidenav;
