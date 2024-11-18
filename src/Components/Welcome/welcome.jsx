import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useStyles } from './styles';

const Welcomebanner = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    // Get profile data from localStorage just like in profile.jsx
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile && savedProfile.FirstName) {
      setFirstName(savedProfile.FirstName);
    }
  }, []);

  return (
    <Box className={classes.welcomeBanner}>
      <Paper elevation={3} className={classes.bannerPaper}>
        {/* Pattern Overlay */}
        <Box className={classes.patternOverlay}>
          {/* <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="banner-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#banner-pattern)" />
          </svg> */}
        </Box>

        {/* Content */}
        <Box className={classes.bannerContent}>
          <Typography variant="h4" className={classes.welcomeTitle}>
            Welcome back, {firstName}!
            <span className={classes.wave}>👋</span>
          </Typography>
          <Typography variant="body1" className={classes.welcomeMessage}>
            Continue your learning journey in Computer Science. Your dedication to
            learning is inspiring - let's make today count!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Welcomebanner;