import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModuleDropdown from "../../../Elements/Moduledropdown/moduledropdown";
import ModuleSwitcher from "../../../Elements/Moduleselector/moduleselector";

const useStyles = makeStyles({
  moduleContainer: {
    padding: "24px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "24px",
  },
  moduleTitle: {
    color: "#333",
    fontWeight: "500!important",
    marginBottom: "24px!important",
  },
});

const Module9 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1.1 Object-Oriented Programming",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      topics: ["Basics of OOP", "Advance concepts OOP"],
    },
    {
      title: "1.2 Linear Data Structures",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      topics: ["Linked lists", "Stacks and Queues"],
    },
    {
      title: "1.3 Trees",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: ["Generic Trees", "Binary Trees ", "Binary Search Trees"],
    },
    {
      title: "2 Advanced Data Structures",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Time Complexity",
        "Priority Queues",
        "Hashmaps",
        "Tries",
        "Graphs",
      ],
    },
    {
      title: "3 Dynamic Programming",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Introduction to Dynamic Programming",
        "Applications of Dynamic",
      ],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module9" />
        <Typography variant="h4" className={classes.moduleTitle}>
          Introduction To Data Structures
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

export default Module9;
