// Daybox.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useStyles } from './styles';

const DayBox = ({ daySchedule, onJoinClass }) => {
  const classes = useStyles();
  const hasClass = daySchedule.classes.length > 0;
  const currentClass = hasClass ? daySchedule.classes[0] : null;

  return (
    <Box 
      className={`${classes.dayBox} ${hasClass ? classes.hasClass : ''}`}
    >
      <Typography className={classes.dayName}>
        {daySchedule.day}
      </Typography>
      
      {hasClass ? (
        <Box className={classes.classInfo}>
          <Typography className={classes.timeSlot}>
            {currentClass.time}
          </Typography>
          <Typography className={classes.classTitle}>
            {currentClass.title}
          </Typography>
          {/* <Typography className={classes.instructor}>
            with {currentClass.instructor}
          </Typography> */}
          <Button
            variant="contained"
            className={classes.joinButton}
            onClick={() => onJoinClass(daySchedule.day, currentClass)}
          >
            Join Class
          </Button>
        </Box>
      ) : (
        <Typography className={classes.noClass}>
          No classes scheduled
        </Typography>
      )}
    </Box>
  );
};

export default DayBox;