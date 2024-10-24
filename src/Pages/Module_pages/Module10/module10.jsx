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

const Module10 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Introduction to Java Fundamentals",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      topics: [
        "Data Types, Variables & Operators",
        "Reading Input & Formatting Output",
        "Conditions & Loops",
        "Arrays",
        "Java Collections",
      ],
    },
    {
      title: "2 OOP with Java",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      topics: [
        "Classes & Objects",
        "Attributes & Methods (Instance, Static, Class)",
        "Abstraction",
        "Inheritance",
      ],
    },
    {
      title: "3 OOP with Java",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Public, Private, Protected Scopes",
        "Encapsulation",
        "Method Overloading & Overriding",
        "Interfaces",
      ],
    },
    {
      title: "4 OOP with Java",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Polymorphism",
        "Generics & Exceptions",
        "Multi-threading",
        "Important Design Patterns",
      ],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module10" />
        <Typography variant="h4" className={classes.moduleTitle}>
          Introduction to Server-side Programming
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

export default Module10;
