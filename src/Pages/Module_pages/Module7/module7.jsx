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
    title: "JavaScript",
    subtitle: "Bring interactivity to your web pages",
    description:
      "This module covers the fundamentals of JavaScript, the programming language of the web. You'll learn how to make web pages interactive by writing and executing JavaScript code in the browser.",
    learningOutcomes: [
      "Understand JavaScript syntax and data structures",
      "Manipulate the DOM to dynamically update web content",
      "Handle user events like clicks and form submissions",
      "Implement control structures, functions, and loops",
      "Develop interactive web applications",
    ],
    prerequisites: ["HTML Fundamentals", "Basic programming knowledge"],
    duration: "4 weeks",
    skillLevel: "Beginner to Intermediate",
    highlightText:
      "Upon completion, you'll be able to create dynamic and interactive web pages using JavaScript.",
    sections: [
      {
        title: "1 Basics of Javascript",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video1",
        topics: [
          "What is Javascript? Use of javascript?",
          "Types of Implementing Javascript?",
          "Inline",
          "Internal",
          "External",
          "Datatypes, Variables and Constants",
          "Modals - Alert, Propmpt and Confirm",
          "Console logging here and also the debugging with help of console",
        ],
      },
      {
        title: "2 Basics of Javascript",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video2",
        topics: [
          "Variables",
          "Scope",
          "Hoisting",
          "What are Operators and Types of Operators",
        ],
      },
      {
        title: "3 Basics of Javascript",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: [
          "What is decision making and Types of Conditions?",
          "Entry vs Exit controlled loops",
        ],
      },
      {
        title: "4 Data structures",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: ["Stingmethods", "Array Methods"],
      },
      {
        title: "6 Objects",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: [
          "Callbacks",
          "Promises",
          "fetch",
          "Aync Await",
          "Call, Apply and Bind",
        ],
      },
    ],
  },
  dataScience: {
    title: "Exploratory Data Analysis",
    subtitle: "Data Visualization and Insights Discovery",
    description: "Learn techniques for exploring, visualizing, and understanding data patterns. Master the art of data cleaning, preprocessing, and extracting meaningful insights from datasets.",
    learningOutcomes: [
      "Clean and preprocess raw data effectively",
      "Create insightful data visualizations",
      "Perform feature engineering and selection",
      "Identify patterns and relationships in data",
      "Communicate findings through data storytelling"
    ],
    prerequisites: [
      "Python programming",
      "Basic statistics knowledge"
    ],
    duration: "3 weeks",
    skillLevel: "Intermediate",
    highlightText: "Upon completion, you'll be able to analyze complex datasets and extract actionable insights through visualization and exploration.",
    sections: [
      {
        title: "Introduction to EDA and Data Collection",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Definition and importance of EDA",
          "Objectives and steps in EDA",
          "Data sources and importing data",
          "Initial inspection of data",
          "Introduction to Python libraries for data analysis (pandas, numpy)",
        ],
      },
      {
        title: "Data Cleaning Basics",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Handling missing values",
          "Techniques for dealing with missing data",
          "Identifying and removing duplicates",
          "Basic data type conversions",
        ],
      },
      {
        title: "Data Transformation",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Normalization and standardization",
          "Encoding categorical variables",
          "Handling datetime data",
          "Dealing with skewed data",
        ],
      },
      {
        title: "Summary Statistics and Data Distributions",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Measures of central tendency (mean, median, mode)",
          "Measures of dispersion (variance, standard deviation)",
          "Understanding data distributions",
          "Creating and interpreting histograms, box plots, and scatter plots",
        ],
      },
      {
        title: "Data Visualization Fundamentals",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Importance of data visualization in EDA",
          "Introduction to visualization libraries (Matplotlib, Seaborn)",
          "Creating basic plots: bar charts, line graphs, scatter plots",
          "Best practices in data visualization",
        ],
      },
      {
        title: "Advanced Visualization and Feature Engineering",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Creating advanced plots: heatmaps, pair plots, violin plots",
          "Techniques for visualizing high-dimensional data",
          "Introduction to feature engineering",
          " Creating new features and selecting important features",
        ],
      },
      {
        title: "Outlier Detection and Handling",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Understanding outliers and their impact",
          "Techniques for identifying outliers (Z-score, IQR method)",
          "Visualizing outliers",
          "Strategies for handling outliers",
          "Introduction to anomaly detection techniques",
        ],
      },
      {
        title: "Hypothesis Testing and Presenting Findings",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Basic concepts of hypothesis testing",
          "Conducting simple statistical tests (t-tests, chi-square tests)",
         "Interpreting p-values and significance levels",
          "Techniques for summarizing and presenting EDA findings",
          "Introduction to data storytelling"
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

const Module7 = () => {
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
        <ModuleSwitcher currentModule="/curriculam/module7" />
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

export default Module7;
