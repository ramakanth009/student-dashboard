// Module1.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

const Module1 = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.moduleHeader}>
        <Button onClick={() => navigate('/curriculam')} className={classes.backButton}>
          Back to Curriculum
        </Button>
        <Typography variant="h4" className={classes.moduleTitle}>
          Introduction to Programming
        </Typography>
      </Box>
      
      <Box className={classes.moduleContent}>
        <Typography variant="h5" gutterBottom>
          Course Overview
        </Typography>
        <Typography paragraph>
          This module introduces you to the fundamental concepts of programming. You'll learn about:
        </Typography>
        <ul>
          <li>Basic programming concepts</li>
          <li>Variables and data types</li>
          <li>Control structures</li>
          <li>Functions and procedures</li>
          <li>Basic algorithms</li>
        </ul>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Learning Objectives
        </Typography>
        <Typography paragraph>
          By the end of this module, you will be able to:
        </Typography>
        <ul>
          <li>Understand basic programming concepts</li>
          <li>Write simple programs</li>
          <li>Debug basic code</li>
          <li>Implement basic algorithms</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Module1;
