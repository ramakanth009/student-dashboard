import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ModuleDropdown from '../../../Elements/Moduledropdown/moduledropdown';
import ModuleSwitcher from '../../../Elements/Moduleselector/moduleselector';

const useStyles = makeStyles({
  moduleContainer: {
    padding: '24px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  header: {
    marginBottom: '24px',
  },
  moduleTitle: {
    color: '#333',
    fontWeight: '500!important',
    marginBottom: '24px!important',
  }
});

const Module8 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1.1 Basics of Programming",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      topics: [
        "What is Programming?",
        "Programming Languages",
        "Syntax and Semantics",
        "Variables and Constants",
        "Data Types",
        "Operators",
        "Input and Output",
        "Control Structures (Conditionals)",
        "Introduction to Functions",
      ],
    },
    {
      title: "1.2 Loops and Functions",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      topics: ["While loops", "Patterns", "For loops"],
    },
    {
      title: "1.3 Arrays",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: ["Introduction to arrays", "Searching and Sorting"],
    },
    {
      title: "2 Strings and 2D Arrays",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Strings",
        "2D Arrays",
        "Foreach loops,",
        "continue and break statements of the loops",
      ],
    },
    {
      title: "3 Problem Solving Techniques",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: ["Recursion", "Time and space complexity"],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module8" />
        <Typography variant="h4" className={classes.moduleTitle}>
          Introduction To Programming
        </Typography>
      </Box>

      {sections.map((section, index) => (
        <ModuleDropdown
          key={index}
          index={index}
          title={section.title}
          status={section.status}
          topics={section.topics}
          videoUrl={section.videoUrl}
          expanded={expandedIndex === index}
          onChange={handleAccordionChange}
        />
      ))}
    </Box>
  );
};

export default Module8;