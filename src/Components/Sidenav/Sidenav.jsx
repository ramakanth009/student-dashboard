import React from 'react'
import { useStyles } from "./Sidenav.styles"
import { Box } from "@mui/material";


const Sidenav = () => {
    const classes = useStyles();
  return (
    <div className={classes.thediv}>Sidenav</div>
  )
}

export default Sidenav