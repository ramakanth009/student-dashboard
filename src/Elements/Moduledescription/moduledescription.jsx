// moduledescription.jsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  descriptionBox: {
    width: '50%',
    borderRadius: '20px',
    padding: '24px',
    overflowY: 'auto',
    backgroundColor: 'transparent',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    },
    '&.MuiPaper-root': {
      backgroundColor: 'transparent !important',
    },
  },
  title: {
    color: '#333',
    fontWeight: '500!important',
    marginBottom: '16px!important',
  },
  subtitle: {
    color: '#666',
    marginBottom: '24px!important',
    fontWeight: '400!important',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    color: '#1976d2',
    fontWeight: '500!important',
    marginBottom: '8px!important',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      position: 'relative',
      paddingLeft: '20px',
      marginBottom: '8px',
      '&::before': {
        content: '"→"',
        position: 'absolute',
        left: 0,
        color: '#1976d2',
        fontWeight: 'bold',
      }
    }
  },
  highlight: {
    backgroundColor: '#E3F2FD',
    padding: '16px',
    borderRadius: '8px',
    marginTop: '24px',
  },
  highlightText: {
    color: '#1976d2',
    fontWeight: '500!important',
  }
});

const ModuleDescription = ({ moduleData = {} }) => {
  const classes = useStyles();

  const formatList = (items = []) => {
    return items.map(item => item.startsWith('→') ? item.substring(1).trim() : item);
  };

  return (
    <Paper className={classes.descriptionBox} elevation={0}>
      <Typography variant="h5" className={classes.title}>
        Overview
      </Typography>
      
      <Typography variant="subtitle1" className={classes.subtitle}>
        {moduleData.subtitle}
      </Typography>

      <Box className={classes.section}>
        <Typography variant="body1">
          {moduleData.description}
        </Typography>
      </Box>

      {moduleData.learningOutcomes?.length > 0 && (
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Learning Outcomes
          </Typography>
          <ul className={classes.list}>
            {formatList(moduleData.learningOutcomes).map((outcome, index) => (
              <li key={index}>
                <Typography variant="body1">{outcome}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {moduleData.prerequisites?.length > 0 && (
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Prerequisites
          </Typography>
          <ul className={classes.list}>
            {formatList(moduleData.prerequisites).map((prerequisite, index) => (
              <li key={index}>
                <Typography variant="body1">{prerequisite}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {(moduleData.duration || moduleData.skillLevel) && (
        <Box className={classes.section}>
          {moduleData.duration && (
            <Typography variant="body1">
              <strong>Duration:</strong> {moduleData.duration}
            </Typography>
          )}
          {moduleData.skillLevel && (
            <Typography variant="body1">
              <strong>Skill Level:</strong> {moduleData.skillLevel}
            </Typography>
          )}
        </Box>
      )}

      {moduleData.highlightText && (
        <Box className={classes.highlight}>
          <Typography variant="body1" className={classes.highlightText}>
            {moduleData.highlightText}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default ModuleDescription;