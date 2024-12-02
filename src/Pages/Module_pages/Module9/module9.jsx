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
    title: "Introduction to Data Structures",
    subtitle: "Organize and manipulate data effectively",
    description:
      "This module provides an introduction to data structures, helping you understand how data can be efficiently organized and accessed. You'll cover arrays, lists, stacks, and queues in depth.",
    learningOutcomes: [
      "Understand the importance of data structures in programming",
      "Learn about basic data structures such as arrays and linked lists",
      "Implement and use stacks, queues, and other fundamental structures",
      "Analyze the time and space complexity of different structures",
      "Solve problems using appropriate data structures",
    ],
    prerequisites: [
      "Introduction to Programming",
      "Basic understanding of algorithms",
    ],
    duration: "4 weeks",
    skillLevel: "Beginner",
    highlightText:
      "Upon completion, you'll be able to implement and work with essential data structures for more efficient problem solving.",
    sections: [
      {
        title: "1.1 Object-Oriented Programming",
        status: "Completed",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video1",
        topics: ["Basics of OOP", "Advance concepts OOP"],
      },
      {
        title: "1.2 Linear Data Structures",
        status: "In Progress",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video2",
        topics: ["Linked lists", "Stacks and Queues"],
      },
      {
        title: "1.3 Trees",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: ["Generic Trees", "Binary Trees ", "Binary Search Trees"],
      },
      {
        title: "2 Advanced Data Structures",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: [
          "Time Complexity",
          "Priority Queues",
          "Hashmaps",
          "Tries",
          "Graphs",
        ],
      },
      {
        title: "3 Dynamic Programming",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: [
          "Introduction to Dynamic Programming",
          "Applications of Dynamic",
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

const Module9 = () => {
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
        <ModuleSwitcher currentModule="/curriculam/module9" />
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

export default Module9;
