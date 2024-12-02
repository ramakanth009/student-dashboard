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
    title: "Statistics & Mathematics",
    subtitle: "Mathematical Foundations for Data Science",
    description: "Build a strong foundation in statistics and mathematics essential for data science. Cover probability, statistical inference, linear algebra, and calculus concepts relevant to data analysis.",
    learningOutcomes: [
      "Apply statistical methods for data analysis",
      "Understand probability distributions and hypothesis testing",
      "Master linear algebra concepts for machine learning",
      "Perform statistical inference and parameter estimation",
      "Use statistical libraries in Python for analysis"
    ],
    prerequisites: [
      "Basic mathematics",
      "Python programming fundamentals"
    ],
    duration: "5 weeks",
    skillLevel: "Intermediate",
    highlightText: "Upon completion, you'll have the mathematical foundation needed for advanced data science and machine learning concepts.",
    sections: [
      {
        title: "Introduction to Mathematics in Data Science",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Overview of mathematical concepts used in data science",
          "Importance of mathematics in data analysis and modeling",
          "Introduction to mathematical notation and terminology",
          "Basic set theory and logic",
        ],
      },
      {
        title: "Descriptive Statistics",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Measures of central tendency: Mean, median, mode",
          "Measures of dispersion: Range, variance, standard deviation",
          "Data visualization techniques",
          "Introduction to exploratory data analysis (EDA)",
        ],
      },
      {
        title: "Probability Basics",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Fundamentals of probability",
          "Probability distributions (normal, binomial, Poisson)",
          "Bayes' theorem and conditional probability",
          "Application: Naive Bayes classification",
        ],
      },
      {
        title: "Calculus Basics",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Differentiation basics and rules",
          "Integration basics and techniques",
          "Applications in optimization (introduction to gradient descent)",
          "Partial derivatives and their role in multivariate calculus",
        ],
      },
      {
        title: "Optimization Techniques",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to optimization problems in data science",
          "Gradient descent and its variants (e.g., stochastic gradient descent)",
          "Constrained optimization and Lagrange multipliers",
          "Application: Linear regression using gradient descent",
        ],
      },
      {
        title: "Linear Algebra Foundations",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Vector and matrix operations",
          "Solving systems of linear equations",
          "Linear transformations",
          "Application: Implementing simple neural networks",
        ],
      },
      {
        title: "Advanced Linear Algebra",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Eigenvalues and eigenvectors",
          "Principal Component Analysis (PCA) introduction",
          "Singular Value Decomposition (SVD)",
          "Application: Dimensionality reduction in data",
        ],
      },
      {
        title: "Review and Integration",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Recap of key concepts from Days 1-7",
          "Integrating multiple concepts in data science scenarios",
          "Case study: Applying mathematical concepts to a real-world data problem",
          "Introduction to further topics and resources for continued learning",
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

const Module3 = () => {
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
        <ModuleSwitcher currentModule="/curriculam/module3" />
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

export default Module3;
