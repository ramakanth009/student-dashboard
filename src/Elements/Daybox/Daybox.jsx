import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { useStyles } from './styles';

const Daybox = ({ daySchedule, onJoinClass }) => {
  const classes = useStyles();
  const hasClass = daySchedule.classes.length > 0;

  return (
    <Paper 
      elevation={0}
      className={`${classes.dayBox} ${hasClass ? classes.activeDay : classes.emptyDayBox}`}
    >
      <Typography className={classes.dayName}>
        {daySchedule.day}
      </Typography>
      
      {hasClass ? (
        <Box className={classes.classInfo}>
          <Typography className={classes.classTime}>
            {daySchedule.classes[0].time}
          </Typography>
          <Typography className={classes.classTitle}>
            {daySchedule.classes[0].title}
          </Typography>
          <Box className={classes.buttonContainer}>
            <Button
            sx={{borderWidth: "2px !important",
              borderColor: "rgba(235,161,18,0.3) !important",}}
              variant="contained"
              className={classes.joinButton}
              onClick={() => onJoinClass(daySchedule.day, daySchedule.classes[0])}
            >
              Join Class
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className={classes.classInfo}>
          <Typography className={classes.noClassText}>
            No classes scheduled
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default Daybox;

