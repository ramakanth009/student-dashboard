import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Tooltip,
} from '@mui/material';
import {
  EmojiEvents as TrophyIcon,
  Whatshot as FireIcon,
} from '@mui/icons-material';
import { useStyles } from './styles';

const UserStats = () => {
  const classes = useStyles();

  const stats = [
    {
      icon: <TrophyIcon />,
      label: 'Skills',
      count: 15,
      tooltip: 'Verified skills in your portfolio',
      iconClass: classes.skillsIcon
    },
    {
      icon: <FireIcon />,
      label: 'Daily Streak',
      count: 7,
      tooltip: 'Consecutive days of activity',
      iconClass: classes.streakIcon
    }
  ];

  return (
    <Box className={classes.statsContainer}>
      <Typography 
        variant="subtitle1" 
        className={classes.sectionTitle}
      >
        User Progress
      </Typography>

      <Box className={classes.statsGrid}>
        {stats.map((stat, index) => (
          <Tooltip 
            key={index} 
            title={stat.tooltip} 
            placement="top"
            arrow
          >
            <Paper 
              elevation={1} 
              className={classes.statCard}
            >
              <Box className={classes.iconWrapper}>
                <span className={stat.iconClass}>
                  {stat.icon}
                </span>
              </Box>
              <Typography 
                variant="h5" 
                className={classes.statCount}
              >
                {stat.count}
              </Typography>
              <Typography 
                variant="body2" 
                className={classes.statLabel}
              >
                {stat.label}
              </Typography>
            </Paper>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default UserStats;