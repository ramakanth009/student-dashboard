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

const Module3 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Introduction to Web",
      status: "Completed",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video2",
      topics: ["HTML5 Tags Overview", "HTML5 Elements"],
    },
    {
      title: "1 HTML5 Forms",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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

  const moduleDescription = {
    title: "HTML Fundamentals",
    subtitle: "Master the building blocks of web development",
    description:
      "This comprehensive HTML module provides a strong foundation in web development. You'll learn everything from basic HTML structure to advanced form handling and semantic markup.",
    learningOutcomes: [
      "Understand the core concepts of HTML5 and web development",
      "Create well-structured and semantic HTML documents",
      "Build and validate complex HTML forms",
      "Implement proper document structure using HTML5 elements",
      "Master essential HTML tags and attributes",
    ],
    prerequisites: [
      "Basic computer literacy",
      "Understanding of file systems",
      "Text editor familiarity",
    ],
    duration: "4 weeks",
    skillLevel: "Beginner",
    highlightText:
      "Upon completion, you'll be able to create structured, semantic HTML documents that form the foundation of modern web applications.",
  };

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

export default Module3;
