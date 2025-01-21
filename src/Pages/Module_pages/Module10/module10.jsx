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

const Module10 = () => {
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
        <ModuleSwitcher currentModule="/curriculam/module10" />
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

export default Module10;
