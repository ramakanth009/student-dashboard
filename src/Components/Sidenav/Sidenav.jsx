import React from 'react';
import { useStyles } from "./Sidenav.styles";
import { Box, List, ListItem, ListItemText, Link } from "@mui/material";

const Sidenav = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidenav}>
      <List>
        <ListItem button component={Link} to="#">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="#">
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="#">
          <ListItemText primary="Curriculum" />
        </ListItem>
        <ListItem button component={Link} to="#">
          <ListItemText primary="Task" />
        </ListItem>
        <ListItem button component={Link} to="#">
          <ListItemText primary="Help" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidenav;
