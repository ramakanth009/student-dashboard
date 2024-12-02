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
    title: "Deep Learning",
    subtitle: "Neural Networks and Deep Learning Applications",
    description: "Explore deep learning architectures and their applications. Learn to build and train neural networks using modern frameworks like TensorFlow and PyTorch.",
    learningOutcomes: [
      "Build and train deep neural networks",
      "Implement CNNs for computer vision tasks",
      "Design RNNs for sequential data analysis",
      "Optimize deep learning model performance",
      "Deploy deep learning models in production"
    ],
    prerequisites: [
      "Machine learning fundamentals",
      "Strong Python programming skills"
    ],
    duration: "5 weeks",
    skillLevel: "Advanced",
    highlightText: "Upon completion, you'll be able to develop sophisticated deep learning solutions for complex AI applications.",
    sections: [
      {
        title: "Introduction to Deep Learning and Neural Networks",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Basics of Artificial Neural Networks (ANNs)",
          "Structure and Components of Neural Networks",
        ],
      },
      {
        title: "Training Neural Networks",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Backpropagation, Gradient Descent", "Activation Functions"],
      },
      {
        title: "Loss Functions and Optimization Algorithms",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Loss Functions (Cross-Entropy, MSE)",
          "Optimization Algorithms (SGD, Adam)",
        ],
      },
      {
        title: "Introduction to Convolutional Neural Networks (CNNs)",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Overview of CNNs", "Convolutional Layers, Pooling Layers"],
      },
      {
        title: "Applications of CNNs in Computer Vision",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Image Classification", "Transfer Learning in CNNs"],
      },
      {
        title: "Introduction to Recurrent Neural Networks (RNNs)",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "RNN Fundamentals",
          "Applications in Time-Series and Sequential Data",
        ],
      },
      {
        title: "Long Short-Term Memory (LSTM) Networks",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "LSTM Concepts and Applications",
          "Sequence-to-Sequence Models (e.g., LSTM with Attention)",
        ],
      },
      {
        title: "Model Evaluation Metrics",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Evaluation Metrics for Deep Learning and NLP Models",
          "Precision, Recall, F1-Score, AUC",
        ],
      },
      {
        title: "Hyperparameter Optimization",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Hyperparameter Tuning Techniques",
          "Grid Search, Random Search, Bayesian Optimization",
        ],
      },
      {
        title: "Model Interpretability",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Attention Visualization",
          "SHAP (SHapley Additive exPlanations)",
        ],
      },
      {
        title: "Data Preparation for Deep Learning",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Data Augmentation Techniques",
          "Data Normalization and Feature Scaling",
        ],
      },
      {
        title: "Deployment of Deep Learning Models",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Containerization (Docker)",
          "Model Serving (TensorFlow Serving, FastAPI)",
        ],
      },
      {
        title: "Integrating Deep Learning Models with Applications",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Creating APIs for Models", "Real-time Inference"],
      },
      {
        title: "Review of Key Concepts and Techniques",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["Recap of Deep Learning", "NLP Techniques Q&A Session"],
      },
      {
        title: "Practical Application and Capstone Project",
        status: "To Do",
        videoUrl: "https://example.com/video2",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: ["→ Lists and Tuples"],
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

const Module6 = () => {
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
        <ModuleSwitcher currentModule="/curriculam/module6" />
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

export default Module6;
