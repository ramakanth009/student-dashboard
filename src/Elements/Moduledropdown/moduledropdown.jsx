import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { makeStyles } from '@mui/styles';
import slidedeckIcon from '../../Assets/slide_deck.svg';

const useStyles = makeStyles({
  // moduleBox: {
  //   width: "100%",
  //   backgroundColor: '#fff',
  //   borderRadius: '20px',
  //   marginBottom: '16px',
  //   boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  //   transition: 'all 0.3s ease-in-out',
  //   '&.MuiAccordion-root': {
  //     borderRadius: '0px 30px 0px 30px',
  //   },
  //   '&.MuiPaper-root': {
  //     borderRadius: '0px 30px 0px 30px !important',
  //   },
  //   '&:hover': {
  //     transform: 'translateY(-2px)',
  //     boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
  //   },
  //   '&::before': {
  //     display: 'none',
  //   },
  // },
  // moduleHeader: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   width: '100%',
  //   padding: '8px 0',
  // },
  // leftSection: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '8px',
  // },
  // rightSection: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   gap: '16px',
  // },
  // topicsList: {
  //   listStyle: 'none',
  //   padding: 0,
  //   margin: 0,
  // },
  // topicItem: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   gap: '8px',
  //   padding: '8px 0',
  //   marginLeft: '20px',
  //   position: 'relative',
  //   '&::before': {
  //     content: '"→"',
  //     position: 'absolute',
  //     left: '-20px',
  //     color: '#1976d2',
  //     fontWeight: 'bold',
  //   }
  // },
  // moduleTitle: {
  //   fontWeight: '500 !important',
  //   color: '#333',
  // },
  // statusChip: {
    // padding: '4px 12px',
    // borderRadius: '16px',
    // fontSize: '0.875rem',
    // fontWeight: 500,
    // display: 'inline-block',
    // marginTop: '8px',
    // width: 'fit-content',
  // },
  moduleBox: {
    width:"100%",
    backgroundColor: '#fff',
    borderRadius: '20px',
    marginBottom: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
    '&.MuiAccordion-root': {
      borderRadius: '0px 30px 0px 30px',  
    },
    '&.MuiPaper-root': {
      borderRadius: '0px 30px 0px 30px !important', 
    },
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
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
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
  icon: {
    cursor: 'pointer',
    fontSize: '2rem!important',
    transition: 'color 0.3s ease, transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },
  videoIcon: {
    color: '#1976d2',
    '&:hover': {
      color: '#1565c0',
    }
  },
  slidesIconContainer: {
    width: '28px',
    height: '28px',
    borderRadius: '20%',
    backgroundColor: '#FAE27C',
    border: '2px solid #DD6718',
    padding: '6px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: '#f8d757',
    }
  },
  slideIcon: {
    width: '18px',
    height: '18px',
    filter: 'brightness(0) saturate(100%) invert(31%) sepia(83%) saturate(1750%) hue-rotate(359deg) brightness(91%) contrast(93%)',
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
  slidesUrl,
  expanded = false,
  onChange,
  index
}) => {
  const classes = useStyles();
  const userTrack = localStorage.getItem('userTrack') || 'fullStack';

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

  const handleVideoClick = (e) => {
    e.stopPropagation();
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  const handleSlidesClick = (e) => {
    e.stopPropagation();
    if (slidesUrl) {
      window.open(slidesUrl, '_blank');
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
          <Box className={classes.rightSection}>
            <Box 
              className={classes.slidesIconContainer}
              onClick={handleSlidesClick}
              title="Open slides"
            >
              <Box
                component="img"
                src={slidedeckIcon}
                alt="Slide deck"
                className={classes.slideIcon}
              />
            </Box>
            <VideoCallIcon 
              className={`${classes.icon} ${classes.videoIcon}`}
              onClick={handleVideoClick}
              title="Open video"
            />
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle1" className={classes.sectionTitle}>
          {userTrack === 'fullStack' ? 'Topics to Cover:' : 'Learning Objectives:'}
        </Typography>
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