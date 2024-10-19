import React from 'react'
import { useStyles } from './styles'
import { Box, Typography } from '@mui/material'
import Skills from "../../Components/Skills/skills"

const Home = () => {
    const classes = useStyles();
  return (
    <Box className={classes.page}>
      {/* Home */}
      <Skills/>
    </Box>
  )
}

export default Home