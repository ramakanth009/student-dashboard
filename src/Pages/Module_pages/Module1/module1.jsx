import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModuleDropdown from "../../../Elements/Moduledropdown/moduledropdown";
import ModuleSwitcher from "../../../Elements/Moduleselector/moduleselector";
import ModuleDescription from "../../../Elements/Moduledescription/moduledescription";

const useStyles = makeStyles({
  moduleContainer: {
    width: "100%",
    padding: "24px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 768px)": {
      padding: "16px",
    },
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
    "@media (max-width: 768px)": {
      marginBottom: "16px",
    },
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
  dropdownSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
});

const Module1 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const moduleDescription = {
    title: "Introduction to Programming",
    subtitle: "Learn the basics of software development",
    description:
      "This introductory programming module covers the core principles of writing and understanding code. You'll learn essential programming concepts, syntax, and logic to build simple programs.",
    learningOutcomes: [
      "Understand the fundamentals of programming languages",
      "Write basic algorithms using variables, data types, and operators",
      "Implement control structures like loops and conditionals",
      "Gain hands-on experience in problem-solving with code",
      "Build simple programs that demonstrate logic and structure",
    ],
    prerequisites: [
      "Basic computer literacy",
      "Familiarity with text editors",
      "Problem-solving mindset",
    ],
    duration: "3 weeks",
    skillLevel: "Beginner",
    highlightText:
      "Upon completion, you'll be able to write simple programs and understand core programming logic.",
  };

  const sections = [
    {
      title: "1.1 Basics of Programming",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      slidesUrl:
        "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      topics: [
        "What is Programming?",
        "Programming Languages",
        "Syntax and Semantics",
        "Variables and Constants",
        "Data Types",
        "Operators",
        "Input and Output",
        "Control Structures (Conditionals)",
        "Introduction to Functions",
      ],
    },
    {
      title: "1.2 Loops and Functions",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      slidesUrl:
        "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      topics: [
        "While loops",
        "For loops",
        "Nested loops",
        "Pattern printing",
        "Function declaration",
        "Function parameters",
        "Return values",
        "Function scope",
        "Recursive functions",
      ],
    },
    {
      title: "1.3 Arrays and Lists",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      slidesUrl:
        "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      topics: [
        "Introduction to Arrays",
        "Array Declaration and Initialization",
        "Array Operations",
        "Linear Search",
        "Binary Search",
        "Bubble Sort",
        "Selection Sort",
        "Array Problems and Practice",
      ],
    },
    {
      title: "2.1 Strings and 2D Arrays",
      status: "To Do",
      videoUrl: "https://example.com/video4",
      slidesUrl:
        "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      topics: [
        "String Operations",
        "String Methods",
        "2D Array Declaration",
        "2D Array Operations",
        "Matrix Problems",
        "foreach loops",
        "break and continue statements",
        "Advanced Pattern Problems",
      ],
    },
    {
      title: "2.2 Problem Solving Techniques",
      status: "To Do",
      videoUrl: "https://example.com/video5",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      topics: [
        "Introduction to Recursion",
        "Base Cases and Recursive Cases",
        "Time Complexity",
        "Space Complexity",
        "Big O Notation",
        "Problem-Solving Strategies",
        "Common Programming Patterns",
        "Practice Problems",
      ],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module1" />
        <Typography variant="h4" className={classes.moduleTitle}>
          Introduction To Programming
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

export default Module1;
