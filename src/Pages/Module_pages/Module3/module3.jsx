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

const Module3 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Introduction to Web",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      topics: [
        "Overview of Web And Mobile application",
        "Client vs Server Applications",
        "Web Design Patterns and Architecture",
        "Course Overview",
        "HTML Validations",
      ],
    },
    {
      title: "2 HTML5 Core Concepts",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      topics: ["HTML5 Tags Overview", "HTML5 Elements"],
    },
    {
      title: "1 HTML5 Forms",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "What is Form and its Significance in HTML ",
        "Form Tag and its attributes",
        "Different input types of Form Elements",
        "Types of attributes using in Form",
        "Form Action items",
        "DOM Manupilations",
      ],
    },
    {
      title: "3 HTML Important Tags",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Web Page Layout Tags",
        "Doc Type",
        "Meta tags",
        "Text Tags",
        "Links and Anchor Tags",
      ],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module3" />
        <Typography variant="h4" className={classes.moduleTitle}>
          HTML
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

export default Module3;
