import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './styles';
import Student from '../../../Assets/student.png';

const LeftSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.leftSection}>
      <Box className={classes.leftContent}>
        <Typography variant="h5" className={classes.heading}>
          Master Skills,<br />Break Boundaries!
        </Typography>
        <Typography className={classes.subheading}>
          Join our platform to enhance your learning journey and achieve your goals.
        </Typography>
      </Box>
      <img
        src={Student}
        alt="Learning illustration"
        className={classes.studentImage}
      />
    </Box>
  );
};

export default LeftSection;