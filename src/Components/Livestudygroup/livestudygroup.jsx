import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { useStyles } from './styles';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const Livestudygroup = ({ title, postCount, onVisit }) => {
  const classes = useStyles();

  return (
    <Paper 
      elevation={0}
      className={classes.groupCard}
    >
      <Box className={classes.groupContent}>
        <Box className={classes.iconContainer}>
          <ForumIcon className={classes.icon} />
        </Box>
        
        <Box className={classes.groupInfo}>
          <Typography variant="h6" className={classes.groupTitle}>
            {title}
          </Typography>
          
          <Typography className={classes.postCount}>
            {postCount} posts till now
          </Typography>
        </Box>

        <Button
          variant="text"
          endIcon={<ArrowForwardIcon />}
          className={classes.visitButton}
          onClick={onVisit}
        >
          Visit
        </Button>
      </Box>
    </Paper>
  );
};

export default Livestudygroup;

// Parent component to render multiple study groups
export const Studygroupcard = ({ groups }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.sectionHeader}>
        <Diversity3Icon/>
      <Typography variant="h5" className={classes.sectionTitle}>
        Live Study Groups
        </Typography>
      </Box>

      <Box className={classes.groupsGrid}>
        {groups.map((group, index) => (
          <Livestudygroup
            key={index}
            title={group.title}
            postCount={group.postCount}
            onVisit={() => group.onVisit?.()}
          />
        ))}
      </Box>
    </Box>
  );
};