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
    title: "Machine Learning",
    subtitle: "Foundations of Predictive Modeling",
    description: "Master fundamental machine learning concepts and algorithms. Learn to build, evaluate, and deploy machine learning models for real-world applications.",
    learningOutcomes: [
      "Implement supervised and unsupervised learning algorithms",
      "Build and evaluate classification and regression models",
      "Perform model selection and hyperparameter tuning",
      "Handle imbalanced datasets and feature engineering",
      "Deploy machine learning models to production"
    ],
    prerequisites: [
      "Statistics and mathematics",
      "Python programming proficiency"
    ],
    duration: "6 weeks",
    skillLevel: "Advanced",
    highlightText: "Upon completion, you'll be able to develop and deploy machine learning solutions for complex real-world problems.",
    sections: [
      {
        title: "Introduction to Machine Learning",
        status: "Completed",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Definition and Importance of Machine Learning",
          "Types of Machine Learning: Supervised, Unsupervised, Reinforcement",
          "Applications and real-world examples",
        ],
      },
      {
        title: "Supervised Learning Basics",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to Classification and Regression Problems",
          "Differences between Classification and Regression",
          "Evaluation Metrics Overview",
        ],
      },
      {
        title: "Decision Trees and Random Forests",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Understanding Decision Trees",
          "Building and Visualizing Decision Trees",
          "Random Forest Algorithm",
          "Implementing Random Forests",
        ],
      },
      {
        title: "K-Nearest Neighbors (KNN) and Logistic Regression",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "KNN Algorithm Explanation",
          "Choosing the Right K Value",
          "Logistic Regression Theory",
          "Implementing Logistic Regression",
        ],
      },
      {
        title: "Support Vector Machines (SVM)",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "SVM Theory and Kernel Trick",
          "Implementing SVM for Classification",
          "Support Vector Regression (SVR)",
          "Kernel Tricks in SVR",
        ],
      },
      {
        title: "Linear and Polynomial Regression",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Simple and Multiple Linear Regression",
          "Implementing Linear Regression",
          "Polynomial Regression",
          "Overfitting and Underfitting",
        ],
      },
      {
        title: "Regularization Techniques",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Ridge Regression (L2 Regularization)",
          "Lasso Regression (L1 Regularization)",
          "Elastic Net Regression",
        ],
      },
      {
        title: "Gradient Boosting Machines",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to Boosting",
          "AdaBoost",
          "XGBoost and LightGBM",
          "Implementing and Tuning Gradient Boosting Models",
        ],
      },
      {
        title: "Neural Networks",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to Neural Networks",
          "Feedforward Neural Networks",
          "Backpropagation Algorithm",
          "Implementing Simple Neural Networks",
        ],
      },
      {
        title: "Unsupervised Learning",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Introduction to Clustering",
          "K-Means Clustering Algorithm",
          "Hierarchical Clustering",
          "DBSCAN (Density-Based Spatial Clustering of Applications with Noise)",
        ],
      },
      {
        title: "Dimensionality Reduction",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Principal Component Analysis (PCA)",
          "t-Distributed Stochastic Neighbor Embedding (t-SNE)",
          "Feature Selection vs. Dimensionality Reduction",
        ],
      },
      {
        title: "Association Rule Learning",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Apriori Algorithm",
          "Eclat Algorithm",
          "Market Basket Analysis",
        ],
      },
      {
        title: "Advanced Unsupervised Learning",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Gaussian Mixture Models (GMM)",
          "Self-Supervised Learning Basics",
          "Introduction to Autoencoders",
        ],
      },
      {
        title: "Model Evaluation and Ensemble Methods",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Cross-Validation Techniques",
          "Bagging and Boosting",
          "Stacking Models",
        ],
      },
      {
        title: "Introduction to Reinforcement Learning",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Basics of Reinforcement Learning",
          "Markov Decision Processes (MDPs)",
          "Q-Learning Algorithm",
        ],
      },
      {
        title: "Advanced Topics and Future Trends",
        status: "To Do",
        videoUrl: "https://example.com/video1",
        slidesUrl: "https://docs.google.com/presentation/d/xyz",
        topics: [
          "Transfer Learning Basics",
          "Interpretability in Machine Learning",
          "Ethical Considerations in AI",
          "Future Trends in Machine Learningx",
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

const Module8 = () => {
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
        <ModuleSwitcher currentModule="/curriculam/module8" />
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

export default Module8;
