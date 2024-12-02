// livestudygroup.jsx
import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { useStyles } from './styles';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DataIcon from '@mui/icons-material/DataUsage';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BarChartIcon from '@mui/icons-material/BarChart';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import WebIcon from '@mui/icons-material/Web';

// Study group data by track
const studyGroups = {
  fullStack: [
    {
      title: "React Advanced Patterns",
      description: "Master advanced React patterns, hooks, and performance optimization",
      postCount: 12,
      icon: <CodeIcon />,
      tags: ["React", "Advanced", "Frontend"],
      activeMembers: 25,
      meetingTime: "Wednesdays, 7 PM EST",
      onVisit: () => console.log("Visiting React group")
    },
    {
      title: "System Design & Architecture",
      description: "Discuss and practice system design principles and patterns",
      postCount: 15,
      icon: <WebIcon />,
      tags: ["Architecture", "Design Patterns", "Scaling"],
      activeMembers: 30,
      meetingTime: "Fridays, 6 PM EST",
      onVisit: () => console.log("Visiting System Design group")
    },
    {
      title: "Algorithm Practice Group",
      description: "Weekly algorithm practice and problem-solving sessions",
      postCount: 8,
      icon: <PsychologyIcon />,
      tags: ["DSA", "Algorithms", "Problem Solving"],
      activeMembers: 20,
      meetingTime: "Mondays, 8 PM EST",
      onVisit: () => console.log("Visiting Algorithms group")
    }
  ],
  dataScience: [
    {
      title: "Machine Learning Projects",
      description: "Collaborative ML projects and model optimization discussions",
      postCount: 18,
      icon: <AutoGraphIcon />,
      tags: ["ML", "Deep Learning", "Projects"],
      activeMembers: 28,
      meetingTime: "Tuesdays, 7 PM EST",
      onVisit: () => console.log("Visiting ML group")
    },
    {
      title: "Data Visualization Techniques",
      description: "Advanced data visualization and storytelling with data",
      postCount: 14,
      icon: <BarChartIcon />,
      tags: ["Visualization", "Analytics", "Reporting"],
      activeMembers: 22,
      meetingTime: "Thursdays, 6 PM EST",
      onVisit: () => console.log("Visiting Data Viz group")
    },
    {
      title: "Statistical Analysis Group",
      description: "Discuss statistical methods and their applications",
      postCount: 16,
      icon: <DataIcon />,
      tags: ["Statistics", "Analysis", "Methods"],
      activeMembers: 24,
      meetingTime: "Saturdays, 5 PM EST",
      onVisit: () => console.log("Visiting Stats group")
    }
  ]
};

const Livestudygroup = ({ group }) => {
  const classes = useStyles();
  const { title, description, postCount, icon, tags, activeMembers, meetingTime, onVisit } = group;

  return (
    <Paper elevation={0} className={classes.groupCard}>
      <Box className={classes.groupContent}>
        <Box className={classes.iconContainer}>
          {icon}
        </Box>
        
        <Box className={classes.groupInfo}>
          <Typography variant="h6" className={classes.groupTitle}>
            {title}
          </Typography>
          
          <Typography className={classes.description}>
            {description}
          </Typography>

          <Box className={classes.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={classes.tag}>
                {tag}
              </span>
            ))}
          </Box>

          <Box className={classes.statsContainer}>
            <Typography className={classes.stats}>
              {activeMembers} active members • {postCount} posts
            </Typography>
            {/* <br/> */}
            {/* <Typography className={classes.meetingTime}>
              Meets: {meetingTime}
            </Typography> */}
          </Box>
        </Box>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          className={classes.visitButton}
          onClick={onVisit}
        >
          Join Group
        </Button>
      </Box>
    </Paper>
  );
};

// Parent component to render multiple study groups
export const Studygroupcard = () => {
  const classes = useStyles();
  const userTrack = localStorage.getItem('userTrack') || 'fullStack';
  const groups = studyGroups[userTrack];

  return (
    <Box className={classes.container}>
      <Box className={classes.sectionHeader}>
        <Diversity3Icon />
        <Typography variant="h5" className={classes.sectionTitle}>
          Live Study Groups
        </Typography>
      </Box>

      <Typography className={classes.sectionDescription}>
        {userTrack === 'fullStack' 
          ? 'Join our developer communities to learn and grow together'
          : 'Connect with fellow data scientists and share knowledge'
        }
      </Typography>

      <Box className={classes.groupsGrid}>
        {groups.map((group, index) => (
          <Livestudygroup
            key={index}
            group={group}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Livestudygroup;