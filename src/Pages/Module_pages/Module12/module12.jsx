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

const Module12 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Nodejs",
      status: "Completed",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video1",
      topics: [
        "Introduction to Nodejs and Installation",
        "Asynchronous and Non blocking Nature",
        "Folder Structure",
        "Nodejs Modules",
      ],
    },
    {
      title: "2 Nodejs",
      status: "In Progress",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video2",
      topics: [
        "Modules vs Packages",
        "NPM(Node Package Manager)",
        "core modules and User Defined Modules",
        "Exports and Imports",
      ],
    },
    {
      title: "3 Nodejs",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "File System- fs module",
        "Creation of Server and Printing Helloworld",
        "Rendering Already build frontend web application on this server",
      ],
    },
    {
      title: "4 Expressjs",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "Introduction to Expressjs",
        "MVC Architecture",
        "Router",
        "Middleware",
      ],
    },
    {
      title: "5 Expressjs",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "HTTP Methods",
        "Response and Request Object",
        "RestFull API Development",
        "Creating Dynamic Routes",
      ],
    },
    {
      title: "6 Expressjs",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "JSON Data",
        "Authorization (JWT Token majorly)",
        "Authentication",
        "API documentation",
      ],
    },
    {
      title: "7 Expressjs",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "Serialization and De-Serialization",
        "CORS Policy",
        "SOLID Principles",
        "Designe Patterns and atleast 1 pattern",
      ],
    },
  ];
  const moduleDescription = {
    title: "Intro to Node.js and Express.js",
    subtitle: "Build scalable server-side applications with JavaScript",
    description:
      "This module introduces Node.js and Express.js, powerful tools for building server-side applications using JavaScript. You'll learn how to create APIs and handle server logic with ease.",
    learningOutcomes: [
      "Understand the architecture of Node.js",
      "Set up and configure Express.js applications",
      "Build RESTful APIs using Node.js and Express.js",
      "Handle middleware and routing in Express",
      "Work with databases and deploy Node.js applications",
    ],
    prerequisites: [
      "JavaScript",
      "Basic understanding of server-side programming",
    ],
    duration: "4 weeks",
    skillLevel: "Intermediate",
    highlightText:
      "Upon completion, you'll be able to build scalable, server-side applications using Node.js and Express.js.",
  };

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module12" />
        <Typography variant="h4" className={classes.moduleTitle}>
          Intro to Node.js and Express.js
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

export default Module12;
