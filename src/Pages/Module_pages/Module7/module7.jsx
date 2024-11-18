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

const Module7 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 React Introduction",
      status: "Completed",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video1",
      topics: [
        "What is React?",
        "React Project Setup/React Boilerplate",
        "Variables and Datatypes",
        "Node, Module, Package, Node Package Manager(NPM)",
        "Create React App",
      ],
    },
    {
      title: "2 React Basics",
      status: "In Progress",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video2",
      topics: [
        "Virtual DOM?",
        "Loops, Operator and Conditions?",
        "Array and String Methods",
      ],
    },
    {
      title: "3 JSX",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "What is JSX Element",
        "Commenting a JSX element",
        "Rendering a JSX Element",
        "Style and className in JSX",
        "Injecting data to a JSX Element",
      ],
    },
    {
      title: "4 Components",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "Big picture of components",
        "JavaScript function vs Class",
        "Creating React Component",
        "Class Component",
        "Functional Component",
        "How to create Reusable Components",
      ],
    },
    {
      title: "5 Props",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "Props in Functional Component",
        "What is props?",
        "Props object",
        "Destructuring props",
        "propTypes",
        "defaultProps",
        "How to share data between components using Props",
      ],
    },
    {
      title: "6 State",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "What is State in React",
        "How to set state in Functional Component",
        "How to set state in Class Component",
        "How to reset the State in class/functional",
      ],
    },
    {
      title: "7 Navigation",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "What is React Router ?",
        "BroswerRouter",
        "Route",
        "Switch",
        "NavLink",
        "Nested Routing",
        "Redirect",
        "Prompt",
      ],
    },
    {
      title: "8 Forms",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "Form input fields",
        "Form Data Binding",
        "Form Validations",
        "Styling Forms",
      ],
    },
    {
      title: "9 API Request",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "Async Request in React",
        "How to do HTTP/API request?",
        "GET, POST, PUT and Delete using Axios and Fetch",
      ],
    },
    {
      title: "10 LifeCycle Hooks",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "Functional component Lifecycle hooks",
        "Class component Lifecycle hooks",
        "Refs and useContext",
      ],
    },
    {
      title: "11 React Essentials",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "ES6 vs ES5 React code",
        "React Events",
        "What are keys in React",
        "Higher order Components",
        "Style Properties in React Component",
        "React Events",
        "What are keys in React",
        "Higher order Components",
        "Style Properties in React Component",
      ],
    },
    {
      title: "12 Advanced React Concepts and Best Practices",
      status: "To Do",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video3",
      topics: [
        "What is State Management and state management techniques using REDUX",
        "Types of builds in React and its significance",
        "Introduction to React frameworks (next.js) and what is the advantage",
        "Lifecycle management",
        "Lazy loading of routing",
      ],
    },
  ];
  const moduleDescription = {
    title: "React",
    subtitle: "Build dynamic user interfaces with React",
    description:
      "This module introduces you to React, a JavaScript library for building fast and scalable web applications. You'll learn how to create reusable components and manage state in React applications.",
    learningOutcomes: [
      "Understand the core concepts of React",
      "Build dynamic web applications using React components",
      "Manage state and props for interactive UIs",
      "Handle events and implement conditional rendering",
      "Work with React's hooks to manage side effects and state",
    ],
    prerequisites: ["JavaScript", "Basic knowledge of web development"],
    duration: "4 weeks",
    skillLevel: "Intermediate",
    highlightText:
      "Upon completion, you'll be able to create dynamic, responsive user interfaces using React.",
  };

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module7" />
        <Typography variant="h4" className={classes.moduleTitle}>
          React
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

export default Module7;
