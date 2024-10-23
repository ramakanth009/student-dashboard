import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

const Module2 = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.moduleHeader}>
        <Button onClick={() => navigate('/curriculam')} className={classes.backButton}>
          Back to Curriculum
        </Button>
        <Typography variant="h4" className={classes.moduleTitle}>
          Introduction to Data Structures
        </Typography>
      </Box>
      
      <Box className={classes.moduleContent}>
        <Typography variant="h5" gutterBottom>
          Course Overview
        </Typography>
        <Typography paragraph>
          This module covers fundamental data structures in programming. Topics include:
        </Typography>
        <ul>
          <li>Arrays and Lists</li>
          <li>Stacks and Queues</li>
          <li>Trees and Graphs</li>
          <li>Hash Tables</li>
          <li>Basic implementations</li>
        </ul>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Learning Objectives
        </Typography>
        <Typography paragraph>
          After completing this module, you will be able to:
        </Typography>
        <ul>
          <li>Understand different data structures</li>
          <li>Choose appropriate data structures for different scenarios</li>
          <li>Implement basic data structures</li>
          <li>Analyze the performance of different data structures</li>
        </ul>
      </Box>
    </Box>
  );
};

export default Module2;