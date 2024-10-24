// ModuleDropdown.jsx
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  moduleBox: {
    backgroundColor: '#fff',
    borderRadius: '20px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
    '&.MuiAccordion-root': {
      borderRadius: '0px 30px 0px 30px',  
    },
    // '&.MuiPaper-root': {
    //   borderRadius: '20px', 
    // },

    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    },
    '&::before': {
      display: 'none', 
    },
  },
  moduleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '8px 0',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  moduleTitle: {
    fontWeight: '500!important',
    color: '#333',
  },
  statusChip: {
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '0.875rem',
    fontWeight: 500,
    display: 'inline-block',
    marginTop: '8px',
    width: 'fit-content',
  },
  videoIcon: {
    color: '#1976d2',
    cursor: 'pointer',
    fontSize: '2rem!important',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#1565c0',
    }
  },
  topicsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  topicItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 0',
    '&::before': {
      content: '"•"',
      color: '#1976d2',
      fontWeight: 'bold',
    }
  },
  todoStatus: {
    backgroundColor: '#FFE0E0',
    color: '#D32F2F',
    border: '1px solid #ffcdd2'
  },
  inProgressStatus: {
    backgroundColor: '#FFF3E0',
    color: '#E65100',
    border: '1px solid #ffe0b2'
  },
  completedStatus: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
    border: '1px solid #c8e6c9'
  },
  
});

const ModuleDropdown = ({ 
  title, 
  status = "To Do", 
  topics = [], 
  videoUrl,
  expanded = false,
  onChange,
  index
}) => {
  const classes = useStyles();

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "to do":
        return classes.todoStatus;
      case "in progress":
        return classes.inProgressStatus;
      case "completed":
        return classes.completedStatus;
      default:
        return classes.todoStatus;
    }
  };

  const handleVideoClick = (e, url) => {
    e.stopPropagation(); // Prevent accordion from toggling
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Accordion 
      expanded={expanded} 
      onChange={() => onChange(index)}
      className={classes.moduleBox}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box className={classes.moduleHeader}>
          <Box className={classes.leftSection}>
            <Typography variant="h6" className={classes.moduleTitle}>
              {title}
            </Typography>
            <Box 
              component="span" 
              className={`${classes.statusChip} ${getStatusStyle(status)}`}
            >
              {status}
            </Box>
          </Box>
          <VideoCallIcon 
            className={classes.videoIcon}
            onClick={(e) => handleVideoClick(e, videoUrl)}
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <ul className={classes.topicsList}>
          {topics.map((topic, idx) => (
            <li key={idx} className={classes.topicItem}>
              <Typography>{topic}</Typography>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default ModuleDropdown;