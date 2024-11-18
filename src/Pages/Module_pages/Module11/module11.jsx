import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModuleDropdown from "../../../Elements/Moduledropdown/moduledropdown";
import ModuleSwitcher from "../../../Elements/Moduleselector/moduleselector";
import ModuleDescription from "../../../Elements/Moduledescription/moduledescription";
const useStyles = makeStyles({
  moduleContainer: {
    width:"100%",
    padding: "24px",
    // backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection:"column"
  },
  content:{
    display:"flex",
    gap:"10px"
  },
  header: {
    marginBottom: "24px",
  },
  moduleTitle: {
    color: "#333",
    fontWeight: "500!important",
    marginBottom: "24px!important",
  },
  contentWrapper:{
    width:"100%",
    padding:"0px 20px"
  }
});

const Module11 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Spring Framework",
      status: "Completed",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "Overview of Spring Integration",
        "Overview of Spring Cloud",
        "Overview of Spring AOP",
      ],
    },
  ];
  const moduleDescription = {
    title: "Intro to Spring Framework",
    subtitle: "Develop enterprise-level applications with Spring",
    description:
      "This module provides an introduction to the Spring Framework, a powerful tool for building enterprise-level Java applications. You'll learn the core principles of Spring and how to build scalable, maintainable back-end systems.",
    learningOutcomes: [
      "Understand the architecture and benefits of Spring",
      "Set up and configure Spring applications",
      "Implement dependency injection and inversion of control",
      "Build RESTful services using Spring Boot",
      "Work with databases using Spring Data JPA",
    ],
    prerequisites: [
      "Java programming",
      "Basic understanding of web development",
    ],
    duration: "4 weeks",
    skillLevel: "Intermediate to Advanced",
    highlightText:
      "Upon completion, you'll be able to develop scalable back-end applications using the Spring Framework.",
  };

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

      <Box className={classes.content}>
        <ModuleDescription moduleData={moduleDescription} />

        <Box className={classes.contentWrapper}>
          <Box className={classes.dropdownSection}>
            {sections.map((section, index) => (
              <ModuleDropdown
                key={index}
                index={index}
                title={section.title}
                status={section.status}
                topics={section.topics}
                slidesUrl={section.slidesUrl}
                videoUrl={section.videoUrl}
                expanded={expandedIndex === index}
                onChange={handleAccordionChange}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Module11;
