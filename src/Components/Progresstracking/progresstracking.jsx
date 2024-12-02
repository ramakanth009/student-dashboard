import React from 'react';
import { 
  Box, 
  Typography, 
  LinearProgress, 
  Card, 
  CardContent,
  Grid,
  CircularProgress,
  IconButton,
  Tooltip,
  Chip,
  // Badge
} from '@mui/material';
import {
  CheckCircle,
  PlayCircle,
  PauseCircle,
  Schedule,
  TrendingUp,
  CalendarToday,
  LocalFireDepartment,
  EmojiEvents,
  Stars
} from '@mui/icons-material';
import { useStyles } from './styles';

const ProgressTracking = () => {
  const classes = useStyles();

  const moduleProgress = [
    { 
      label: 'Watched Videos', 
      value: 1, 
      color: 'primary',
      streak: 7,
      badge: 'Video Master'
    },
    { 
      label: 'To Do Modules', 
      value: 1, 
      color: 'secondary',
      streak: 3,
      badge: 'Getting Started'
    },
    { 
      label: 'In Progress Modules', 
      value: 1, 
      color: 'warning',
      streak: 5,
      badge: 'Steady Pace'
    },
    { 
      label: 'Completed Modules', 
      value: 1, 
      color: 'success',
      streak: 12,
      badge: 'Achievement Hunter'
    }
  ];

  const taskWidgets = [
    {
      label: 'To Do Tasks',
      value: 4,
      total: 15,
      color: 'error',
      icon: <Schedule />,
      trend: '+2 from last week',
      dueDate: '2 tasks due today',
      action: 'Start'
    },
    {
      label: 'In Progress',
      value: 3,
      total: 15,
      color: 'warning',
      icon: <PlayCircle />,
      trend: '-1 from last week',
      dueDate: '1 task due tomorrow',
      action: 'Continue'
    },
    {
      label: 'Completed',
      value: 8,
      total: 15,
      color: 'success',
      icon: <CheckCircle />,
      trend: '+3 from last week',
      dueDate: 'Completed today: 2',
      action: 'View'
    }
  ];

  const renderBadge = (badge, streak) => (
    <Box className={classes.badgeContainer}>
      <Chip
        icon={<EmojiEvents className={classes.badgeIcon} />}
        label={badge}
        color="primary"
        variant="outlined"
        size="small"
        className={classes.badge}
      />
      <Tooltip title="Current Streak">
        <Chip
          icon={<LocalFireDepartment className={classes.streakIcon} />}
          label={`${streak} days`}
          color="secondary"
          size="small"
          className={classes.streakChip}
        />
      </Tooltip>
    </Box>
  );

  return (
    <Box className={classes.progressContainer}>
      {/* Left Section - Progress Bars */}
      <Card className={classes.progressCard}>
        <CardContent>
          <Typography variant="h6" className={classes.sectionTitle}>
            Learning Progress
            <Stars className={classes.titleIcon} />
          </Typography>
          
          {moduleProgress.map((item, index) => (
            <Box key={index} className={classes.progressItem}>
              <Box className={classes.progressHeader}>
                <Typography variant="body1">{item.label}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.value}%
                </Typography>
              </Box>
              <Box className={classes.progressBarContainer}>
                <LinearProgress 
                  variant="determinate" 
                  value={item.value} 
                  color={item.color}
                  className={classes.progressBar}
                />
                <Box className={classes.progressOverlay} style={{ width: `${item.value}%` }} />
              </Box>
              {renderBadge(item.badge, item.streak)}
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Right Section - Task Overview Widgets */}
      <Card className={classes.progressCard}>
        <CardContent>
          <Typography variant="h6" className={classes.sectionTitle}>
            Tasks Overview
            <TrendingUp className={classes.titleIcon} />
          </Typography>
          
          <Grid container spacing={2}>
            {taskWidgets.map((widget, index) => (
              <Grid item xs={12} key={index}>
                <Card variant="outlined" className={classes.taskWidget}>
                  <Box className={classes.taskWidgetContent}>
                    {/* Left side - Progress Circle */}
                    <Box className={classes.progressCircleSection}>
                      <Box className={classes.progressCircleWrapper}>
                        <CircularProgress
                          variant="determinate"
                          value={(widget.value / widget.total) * 100}
                          color={widget.color}
                          size={60}
                          className={classes.circularProgress}
                        />
                        <Box className={classes.progressIconWrapper}>
                          {widget.icon}
                        </Box>
                      </Box>
                      <Typography className={classes.progressFraction}>
                        {widget.value}/{widget.total}
                      </Typography>
                    </Box>

                    {/* Middle section - Details */}
                    <Box className={classes.taskDetails}>
                      <Typography variant="h6" className={classes.taskTitle}>
                        {widget.label}
                      </Typography>
                      
                      <Box className={classes.taskMetrics}>
                        <Box className={classes.metric}>
                          <TrendingUp fontSize="small" />
                          <Typography variant="body2">
                            {widget.trend}
                          </Typography>
                        </Box>
                        <Box className={classes.metric}>
                          <CalendarToday fontSize="small" />
                          <Typography variant="body2">
                            {widget.dueDate}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Right side - Actions */}
                    <Box className={classes.taskActions}>
                      <Tooltip title={widget.action}>
                        <IconButton color={widget.color}>
                          {widget.action === 'Start' && <PlayCircle />}
                          {widget.action === 'Continue' && <PauseCircle />}
                          {widget.action === 'View' && <CheckCircle />}
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProgressTracking;