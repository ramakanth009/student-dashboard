import React from 'react';
import { Card, Typography, Button, Box } from '@mui/material';
import { useStyles } from './styles.jsx';

const Learninghub = () => {
  const classes = useStyles();

  const studyGroups = [
    {
      title: 'React Advanced Patterns',
      learners: 12,
      backgroundColor: "rgb(255,255,255)",
    },
    {
      title: 'Algorithm Practice',
      learners: 8,
      backgroundColor: "rgb(255,255,255)",
    }
  ];

  return (
    <div className={classes.learningHub}>
      <Typography variant="h5" component="h1" className={classes.hubTitle}>
        {/* Learning Hub */}
        Live Study Groups
      </Typography>
      
      <Box className={classes.studyGroupsContainer}>
        {/* <Box className={classes.studyGroupsHeader}>
          <Typography variant="h6" component="h2">
            Live Study Groups
          </Typography>
        </Box> */}

        {studyGroups.map((group, index) => (
          <Card 
            key={index}
            className={classes.studyGroupCard}
            style={{ backgroundColor: group.backgroundColor }}
          >
            <Box className={classes.cardContent}>
              <Box>
                <Typography variant="subtitle1" className={classes.groupTitle}>
                  {group.title}
                </Typography>
                <Typography variant="body2" className={classes.learnersCount}>
                  {group.learners} posts till now
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                className={index === 0 ? classes.joinButtonPurple : classes.joinButtonBlue}
              >
                Visit
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Learninghub;