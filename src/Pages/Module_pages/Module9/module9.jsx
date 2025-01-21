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
    title: "Introduction to Programming",
    subtitle: "Learn the basics of software development",
    description:
      "This introductory programming module covers the core principles of writing and understanding code. You'll learn essential programming concepts, syntax, and logic to build simple programs.",
    learningOutcomes: [
      "→ Understand the fundamentals of programming languages",
      "→ Write basic algorithms using variables, data types, and operators",
      "→ Implement control structures like loops and conditionals",
      "→ Gain hands-on experience in problem-solving with code",
      "→ Build simple programs that demonstrate logic and structure",
    ],
    prerequisites: [
      "→ Basic computer literacy",
      "→ Familiarity with text editors",
      "→ Problem-solving mindset",
    ],
    duration: "3 weeks",
    skillLevel: "Beginner",
    highlightText:
      "Upon completing the program, you will be able to write simple programs and understand core programming concepts and logic",
    sections: [
      {
        title: "1.1 Basics of Programming",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video1",
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
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video2",
        topics: ["While loops", "Patterns", "For loops"],
      },
      {
        title: "1.3 Arrays",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: ["Introduction to arrays", "Searching and Sorting"],
      },
      {
        title: "2 Strings and 2D Arrays",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: [
          "Strings",
          "2D Arrays",
          "Foreach loops,",
          "continue and break statements of the loops",
        ],
      },
      {
        title: "3 Problem Solving Techniques",
        status: "To Do",
        slidesUrl:
          "https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
        videoUrl: "https://example.com/video3",
        topics: ["Recursion", "Time and space complexity"],
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
