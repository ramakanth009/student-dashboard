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
    sections: [
      {
        title: "1 Introduction & Selectors",status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: ["Positioning- Float and Display", "Flexbox and properties"],
      },
      {
        title: "4 Responsive CSS",status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video1",
        topics: ["Media Queries", "Grid"],
      },
      {
        title: "5 Animations",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video2",
        topics: [
          "CSS Animation",
          "Transitions",
          "Transformations",
          "CSS traversing",
          "Pseudo classes",
          "Child & siblling techniques",
        ],
      },
      {
        title: "6 Mastering CSS Variables, SCSS/LESS & Advanced Styling",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: ["Positioning- Float and Display", "Flexbox and properties"],
      },
    ],
  },
  dataScience: {
    title: "SQL & Databases",
    subtitle: "Data Management and Database Systems",
    description: "Learn database design principles, SQL querying, and data management techniques. Master both relational and NoSQL databases for efficient data storage and retrieval.",
    learningOutcomes: [
      "Design normalized database schemas and ERD diagrams",
      "Write complex SQL queries for data analysis",
      "Understand database indexing and optimization",
      "Work with both SQL and NoSQL database systems",
      "Implement database operations in Python applications"
    ],
    prerequisites: [
      "Basic Python programming",
      "Understanding of data structures"
    ],
    duration: "3 weeks", 
    skillLevel: "Intermediate",
    highlightText: "Upon completion, you'll be able to design, implement and optimize database solutions for data science applications.",
    sections: [
      {
        title: "Introduction to Databases and SQL",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          " What is SQL and its importance in data science",
          " Introduction to relational databases",
          " SQL command categories (DQL, DDL, DML, DCL)",
          " Basic SELECT statement structure",
        ],
      },
      {
        title: "Basic Querying",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "SELECT statements with multiple columns",
          "Filtering data with WHERE clause",
          "Sorting data with ORDER BY",
          "Handling NULL values",
        ],
      },
      {
        title: "Data Types and Functions",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Common SQL data types",
          "String functions",
          "Numeric functions",
          "Date and time functions",
        ],
      },
      {
        title: "Aggregation and Grouping",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Aggregation functions (COUNT, SUM, AVG, MIN, MAX)",
          "GROUP BY clause",
          "HAVING clause",
          "Combining multiple aggregations",
        ],
      },
      {
        title: "Joins",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "INNER JOIN",
          "LEFT JOIN and RIGHT JOIN",
          "Self-joins",
          "Handling multiple joins in a query",
        ],
      },
      {
        title: "Subqueries and CTEs",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to subqueries",
          "Correlated subqueries",
          "Common Table Expressions (CTEs)",
          "Use cases for subqueries vs CTEs",
        ],
      },
      {
        title: "Advanced Querying Techniques",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "UNION and UNION ALL",
          "INTERSECT and EXCEPT",
          "CASE statements",
          "Coalesce and NVL functions",
        ],
      },
      {
        title: "Window Functions",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to window functions",
          "Ranking functions (ROW_NUMBER, RANK, DENSE_RANK)",
          "Sliding window calculations",
          "Practical applications in data analysis",
        ],
      },
      {
        title: "Data Manipulation",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "INSERT statements",
          "UPDATE statements",
          "DELETE statements",
          "MERGE statement (upsert operations)",
        ],
      },
      {
        title: "Working with Time Series Data",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Pivoting data",
          "Unpivoting data",
          "String splitting and concatenation",
          "JSON and semi-structured data in SQL",
        ],
      },
      {
        title: "Views and Temporary Tables",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Creating and using views",
          "Materialized views",
          "Temporary tables",
          "Use cases in data preparation",
        ],
      },
      {
        title: "Performance Optimization Basics",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to indexes",
          "Understanding query execution plans",
          "Basic query optimization techniques",
          "Writing efficient subqueries",
        ],
      },
      {
        title: "Integrating SQL with Python",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Connecting to databases from Python",
          "Using pandas with SQL",
          "Executing SQL queries in Jupyter notebooks",
          "Basic ETL processes",
        ],
      },
      {
        title: "Practical Application and Review",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Mini-project: Exploratory Data Analysis using SQL",
          "Best practices for SQL in data science workflows",
          "Review of key concepts",
          "Q&A and future learning paths",
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

const Module5 = () => {
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
        <ModuleSwitcher currentModule="/curriculam/module5" />
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

export default Module5;
