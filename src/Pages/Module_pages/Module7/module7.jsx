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
    sections: [
      {
        title: "1 React Introduction",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: [
          "What is State Management and state management techniques using REDUX",
          "Types of builds in React and its significance",
          "Introduction to React frameworks (next.js) and what is the advantage",
          "Lifecycle management",
          "Lazy loading of routing",
        ],
      },
    ],
  },
  dataScience: {
    title: "Natural Language Processing",
    subtitle: "Text Analysis and Language Understanding",
    description: "Learn techniques for processing and analyzing natural language data. Master modern NLP approaches using transformers and deep learning models.",
    learningOutcomes: [
      "Process and analyze text data effectively",
      "Implement text classification and sentiment analysis",
      "Work with word embeddings and language models",
      "Build sequence-to-sequence models",
      "Deploy NLP models for production use"
    ],
    prerequisites: [
      "Deep learning fundamentals",
      "Python programming expertise"
    ],
    duration: "4 weeks",
    skillLevel: "Advanced",
    highlightText: "Upon completion, you'll be able to develop sophisticated NLP solutions for text analysis and language understanding tasks.",
    sections: [
      {
        title: "Introduction to Natural Language Processing (NLP)",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Basics of NLP Tasks",
          "Text Preprocessing: Cleaning, Tokenization",
        ],
      },
      {
        title: "Feature Extraction for NLP",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Word Embeddings (Word2Vec, GloVe)",
          "Text Classification with CNNs and RNNs",
        ],
      },
      {
        title: "Introduction to Transformers",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Transformer Architecture", "Attention Mechanisms"],
      },
      {
        title: "BERT and Its Variants",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Overview of BERT", "Applications of BERT in NLP"],
      },
      {
        title: "Advanced NLP Techniques",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Named Entity Recognition (NER)", "Sequence Labeling Tasks"],
      },
      {
        title: "Self-Supervised Learning Techniques in NLP",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Introduction and Applications", "Practical Implementations"],
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
