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

const Module11 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Spring Framework",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      topics: [
        "Overview of Spring Framework",
        "Building Java Projects with Maven/Gradle",
        "Building REST APIs with Spring Boot",
      ],
    },
    {
      title: "2 Spring Framework",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      topics: [
        "Consuming RESTful Web Services",
        "Working with Relational Data using JDBC",
        "JPA and Hibernate",
      ],
    },
    {
      title: "3 Spring Framework",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Uploading Files & Validating Form Inputs",
        "Writing Unit Tests",
        "Overview of Spring Batch",
      ],
    },
    {
      title: "4 Spring Framework",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Overview of Spring Integration",
        "Overview of Spring Cloud",
        "Overview of Spring AOP",
      ],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module11" />
        <Typography variant="h4" className={classes.moduleTitle}>
        Intro to Spring Framework
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

export default Module11;
