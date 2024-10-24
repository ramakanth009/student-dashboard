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

const Module4 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Introduction & Selectors",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      topics: [
        "What is CSS",
        "Client vs Server Applications",
        "Web Design Patterns and Architecture",
        "Course Overview",
        "HTML Validations",
      ],
    },
    {
      title: "2 CSS Layout & Design",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      topics: [
        "Background - colour, images and transparency properties",
        "Fonts, Colour and Text Properties",
        "Box Model - Box, Inline and inline-block",
        "Padding, Border and Margin Properties",
      ],
    },
    {
      title: "3 CSS Layout & Design",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: ["Positioning- Float and Display", "Flexbox and properties"],
    },
    {
      title: "4 Responsive CSS",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      topics: ["Media Queries", "Grid"],
    },
    {
      title: "5 Animations",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      topics: [
        "CSS Animation",
        "Transitions",
        "Transformations",
        "CSS traversing",
        "pseudo classes",
        "child & siblling techniques",
      ],
    },
    {
      title: "6 Mastering CSS Variables, SCSS/LESS & Advanced Styling",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: ["Positioning- Float and Display", "Flexbox and properties"],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module4" />
        <Typography variant="h4" className={classes.moduleTitle}>
          CSS
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

export default Module4;
