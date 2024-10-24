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

const Module6 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Basics of Javascript",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      topics: [
        "What is Javascript? Use of javascript?",
        "Types of Implementing Javascript?",
        "Inline",
        "Internal",
        "External",
        "Datatypes, Variables and Constants",
        "Modals - Alert, Propmpt and Confirm",
        "console logging here and also the debugging with help of console",
      ],
    },
    {
      title: "2 Basics of Javascript",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      topics: [
        "variables",
        "scope",
        "hoisting",
        "What are Operators and Types of Operators",
      ],
    },
    {
      title: "3 Basics of Javascript",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "What is decision making and Types of Conditions?",
        "Entry vs Exit controlled loops",
      ],
    },
    {
      title: "4 Data structures",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "What are the types of data structures?",
        "Data Structures in JavaScript?",
        "Strings",
        "Mutable and Immutable Strings/Objects",
        "Arrays",
      ],
    },
    {
      title: "5 Data structures",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: ["Stingmethods", "Array Methods"],
    },
    {
      title: "6 Objects",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Objects & Methods",
        "Array of Objects",
        "Object configuration and properties",
        "Writable and Enumerable Objects",
        "Object copy and clone",
      ],
    },
    {
      title: "7 Functions",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "What are Functions?",
        "6 ways of declaring functions",
        "Arrow Functions Advantages and Disadvantages",
        "setTimout and setInterval",
        "Higher Order Functions/Reusable functions",
      ],
    },
    {
      title: "8 DOM",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "What is DOM and types DOM manipulation methods?",
        "Adding Css using Javascript",
        "Events",
      ],
    },
    {
      title: "9 Events",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Keyboard, Mouse and Form Events",
        "Event Bubling and Capturing",
        "Event loop and lifecycle",
      ],
    },
    {
      title: "10 ES6 Concepts",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Template Literals",
        "Getter and Setter functions",
        "Strict Mode",
        "Module Export and import",
        "Block Scoping",
        "error handling",
      ],
    },
    {
      title: "11 Async JS",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Callbacks",
        "Promises",
        "fetch",
        "Aync Await",
        "Call, Apply and Bind",
      ],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module6" />
        <Typography variant="h4" className={classes.moduleTitle}>
          Javascript
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

export default Module6;
