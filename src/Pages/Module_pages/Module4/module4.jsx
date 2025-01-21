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
    sections: [
      {
        title: "1 Introduction to Web",
        status: "To Do",
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
        status: "To Do",
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
    ],
  },
  dataScience: {
    title: "Python Programming",
    subtitle: "Master Python for Data Science and AI",
    description:
      "A comprehensive introduction to Python programming with focus on data science applications. Learn core Python concepts, data structures, and essential libraries for data manipulation and analysis.",
    learningOutcomes: [
      "Write efficient and clean Python code following best practices",
      "Work with Python data structures and object-oriented programming",
      "Use NumPy and Pandas for data manipulation and analysis",
      "Create data visualizations using Matplotlib and Seaborn",
      "Implement Python functions and modules for reusable code",
    ],
    prerequisites: [
      "Basic programming concepts",
      "Understanding of basic mathematics",
    ],
    duration: "4 weeks",
    skillLevel: "Beginner",
    highlightText:
      "Upon completion, you'll be proficient in Python programming for data science applications and ready to tackle advanced topics.",
    sections: [
      {
        title: "Introduction to Python",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to Python",
          "Overview of Python's history, importance, and features.",
          "Comparison with other programming languages.",
          "Installation and setup",
          "Basic syntax and Python Scripts",
        ],
      },
      {
        title: "Python Basics",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Explanation of Python keywords and variables.",
          "Operators and Data types",
          "Type Conversion(Casting)",
          "Intro to Control flow statements",
        ],
      },
      {
        title: "Control flow statements",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "if,else, elif statements",
          "Loops (for ,while, break, continue)",
        ],
      },
      {
        title: "Functions",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Functions and Lambda expressions",
          "Defining simple functions, Function parameters and Return Values.",
          "Lambda functions and Functional programming Basics.",
          "Map, Reduce, & Filter.",
        ],
      },
      {
        title: "Data Structures part-1",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Built-in functions",
          "Lists: Operations and methods.",
          "Dictionaries: Key-value pairs and manipulation",
        ],
      },
      {
        title: "Data Structures part-2",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Sets: Operations and applications.",
          "Tuples: Characteristics and methods.",
        ],
      },
      {
        title: "Understanding Modules and Packages",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Modules and Packages",
          "Modules: Importing and using modules.",
          "Packages: Creating and managing packages.",
          "Exception Handling",
          "Error Types: Syntax, runtime, and logical errors.",
          "Handling Exceptions: try, except, else, finally.",
          "Raising Exceptions: Custom exceptions.",
        ],
      },
      {
        title: "Mastering File Handling",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "File Handling",
          "Reading/Writing Files: Open, read, write, close.",
          "Context Management: Using with statement.",
        ],
      },
      {
        title: "Iterators, Generators, and Exception Handling",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Iterators and Generators",
          "Iterators: Protocols, creating custom iterators.",
          "Generators: Yield statement, generator expressions.",
        ],
      },
      {
        title: "Introduction to Classes and Objects",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Classes and objects.", "Attributes and methods."],
      },
      {
        title: "Exploring Inheritance and Polymorphism",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Inheritance.", "Polymorphism."],
      },
      {
        title: "Mastering Encapsulation and Abstraction",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Encapsulation and Abstarction",
          " Magic Methods and Operating Overloading",
        ],
      },
      {
        title: "Exploring NumPy",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to NumPy: installation, arrays, and basic operations.",
          "Advanced operations: indexing, slicing, and reshaping arrays.",
        ],
      },
      {
        title: "Mastering Pandas",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to Pandas: Series and DataFrame.",
          "Data manipulation: handling missing data, data alignment, and merging.",
          "Universal functions (ufuncs), broadcasting, and aggregation.",
        ],
      },
      {
        title: "Introduction to Matplotlib",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to Matplotlib: basic plots (line plots, scatter plots, histograms).",
          "Customizing plots: labels, titles, legends, and styles.",
          "Advanced plotting techniques: subplots, plotting categorical data, and bar plots.",
          "Data analysis: grouping, aggregation, and applying functions.",

          "Advanced NumPy techniques: advanced indexing, selection, and handling time series data with Pandas.",
        ],
      },

      {
        title: "Django ",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Getting Started with Django"],
      },
      {
        title: "Flask",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Building with Flask"],
      },
      {
        title: "Streamlit",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Interactive Applications with Streamlit"],
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

const Module4 = () => {
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
        <ModuleSwitcher currentModule="/curriculam/module4" />
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

export default Module4;
