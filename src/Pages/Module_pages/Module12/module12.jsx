  // module1.jsx
  import React, { useState } from "react";
  import { Box, Typography } from "@mui/material";
  import { makeStyles } from "@mui/styles";
  import ModuleDropdown from "../../../Elements/Moduledropdown/moduledropdown";
  import ModuleSwitcher from "../../../Elements/Moduleselector/moduleselector";
  import ModuleDescription from "../../../Elements/Moduledescription/moduledescription";

  // Module content based on track
  const moduleContent = {
    fullStack: {
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
      sections: [
        {
          title: "1 Nodejs",
          status: "To Do",
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
          status: "To Do",
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
      ],
    },
    dataScience: {
      title: "Python Programming Foundations",
      subtitle: "Master Python basics for data science",
      description:
        "This foundational module introduces Python programming with a focus on data science applications. Learn core Python concepts, data structures, and basic algorithms essential for data analysis.",
      learningOutcomes: [
        "→ Write efficient Python code for data manipulation",
        "→ Understand Python data structures and their applications",
        "→ Implement basic algorithms for data processing",
        "→ Handle files and data input/output operations",
        "→ Debug and optimize Python code",
      ],
      prerequisites: [
        "→ Basic understanding of mathematics",
        "→ Familiarity with computer operations",
        "→ Analytical thinking skills",
      ],
      duration: "4 weeks",
      skillLevel: "Beginner",
      highlightText:
        "This module lays the foundation for your data science journey with Python.",
      sections: [
        {
          title: "Python Basics & Environment Setup",
          status: "To Do",
          videoUrl: "https://example.com/video1",
          slidesUrl: "https://docs.google.com/presentation/d/xyz",
          topics: [
            "→ Python Installation and IDE Setup",
            "→ Variables, Data Types, and Operations",
            "→ Basic Input/Output Operations",
            "→ String Manipulation",
            "→ Program Flow Control",
          ],
        },
        {
          title: "Data Structures in Python",
          status: "To Do",
          videoUrl: "https://example.com/video2",
          slidesUrl: "https://docs.google.com/presentation/d/xyz",
          topics: [
            "→ Lists and Tuples",
            "→ Dictionaries and Sets",
            "→ List Comprehensions",
            "→ Working with Files",
            "→ Exception Handling",
          ],
        },
      ],
    },
  };

  const useStyles = makeStyles({
    moduleContainer: {
      width: "100%",
      padding: "24px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    content: {
      display: "flex",
      gap: "24px",
      "@media (max-width: 1024px)": {
        flexDirection: "column",
        gap: "16px",
      },
    },
    header: {
      marginBottom: "24px",
    },
    moduleTitle: {
      color: "#333",
      fontWeight: "500!important",
      marginBottom: "24px!important",
      "@media (max-width: 768px)": {
        fontSize: "1.75rem!important",
        marginBottom: "16px!important",
      },
    },
    contentWrapper: {
      width: "100%",
      padding: "0px 20px",
      "@media (max-width: 768px)": {
        padding: "0px",
      },
    },
  });

  const Module12= () => {
    const classes = useStyles();
    const [expandedIndex, setExpandedIndex] = useState(null);
    const userTrack = localStorage.getItem("userTrack") || "fullStack";
    const content = moduleContent[userTrack];

    const handleAccordionChange = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
      <Box className={classes.moduleContainer}>
        <Box className={classes.header}>
          <ModuleSwitcher currentModule="/curriculam/module12" />
          <Typography variant="h4" className={classes.moduleTitle}>
            {content.title}
          </Typography>
        </Box>

        <Box className={classes.content}>
          <ModuleDescription
            moduleData={{
              title: content.title,
              subtitle: content.subtitle,
              description: content.description,
              learningOutcomes: content.learningOutcomes,
              prerequisites: content.prerequisites,
              duration: content.duration,
              skillLevel: content.skillLevel,
              highlightText: content.highlightText,
            }}
          />

          <Box className={classes.contentWrapper}>
            <Box className={classes.dropdownSection}>
              {content.sections.map((section, index) => (
                <ModuleDropdown
                  key={index}
                  index={index}
                  title={section.title}
                  status={section.status}
                  topics={section.topics}
                  videoUrl={section.videoUrl}
                  slidesUrl={section.slidesUrl}
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
