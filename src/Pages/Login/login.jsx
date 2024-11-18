import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { useStyles } from './styles';
import LeftSection from './Leftsection/leftsection';
import RightSection from './Rightsection/Rightsection';

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Paper className={classes.container}>
          <LeftSection />
          <RightSection />
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;