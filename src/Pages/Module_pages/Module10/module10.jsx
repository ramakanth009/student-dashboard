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

const Module10 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Introduction to Java Fundamentals",
      status: "Completed",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "Polymorphism",
        "Generics & Exceptions",
        "Multi-threading",
        "Important Design Patterns",
      ],
    },
  ];
  const moduleDescription = {
    title: "Introduction to Server-side Programming",
    subtitle: "Learn the basics of server-side development",
    description:
      "This module introduces you to the world of back-end development, covering the fundamentals of server-side programming to handle web application logic, databases, and authentication.",
    learningOutcomes: [
      "Understand how server-side programming works",
      "Learn about HTTP requests and responses",
      "Implement basic authentication and session management",
      "Connect your application to a database",
      "Develop and deploy server-side logic for web applications",
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of web technologies (HTML, CSS, JavaScript)",
    ],
    duration: "4 weeks",
    skillLevel: "Intermediate",
    highlightText:
      "Upon completion, you'll be able to build the server-side logic that powers web applications.",
  };

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

export default Module10;
