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

const Module4 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Introduction & Selectors",
      status: "Completed",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: ["Positioning- Float and Display", "Flexbox and properties"],
    },
    {
      title: "4 Responsive CSS",
      status: "Completed",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video1",
      topics: ["Media Queries", "Grid"],
    },
    {
      title: "5 Animations",
      status: "In Progress",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: ["Positioning- Float and Display", "Flexbox and properties"],
    },
  ];

  const moduleDescription = {
    title: "CSS",
    subtitle: "Style your web pages with ease",
    description:
      "This CSS module teaches the basics of styling web pages. You'll learn how to create visually appealing layouts and improve the user experience through consistent and clean design.",
    learningOutcomes: [
      "Understand CSS syntax and core concepts",
      "Style HTML elements with CSS selectors and properties",
      "Create responsive layouts using media queries",
      "Implement advanced styling techniques like flexbox and grid",
      "Develop clean, maintainable CSS code",
    ],
    prerequisites: ["HTML Fundamentals", "Basic understanding of web design"],
    duration: "3 weeks",
    skillLevel: "Beginner",
    highlightText:
      "Upon completion, you'll be able to style your HTML content using effective CSS techniques to create modern, responsive designs.",
  };

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

export default Module4;
