import React from 'react';
import { useStyles } from './styles';
import { Box } from '@mui/material';

const Button1 = ({ children, ...props }) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.button1} {...props}>
      {children}
    </Box>
  );
};

export default Button1;
