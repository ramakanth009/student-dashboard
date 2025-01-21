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
      title: "Python & PHP for Backend",
    subtitle: "Learn server-side programming with Python and PHP",
    description:
      "This module teaches the fundamentals of backend development using Python and PHP. You'll learn how to handle server-side logic, work with databases, and develop dynamic web applications.",
    learningOutcomes: [
      "Understand the principles of server-side programming",
      "Write backend logic using Python and PHP",
      "Develop RESTful APIs and handle HTTP requests",
      "Work with databases and manage server-side sessions",
      "Deploy Python and PHP applications on a server",
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of web development",
    ],
    duration: "4 weeks",
    skillLevel: "Intermediate",
    highlightText:
      "Upon completion, you'll be able to build server-side applications using Python and PHP.",
      sections: [
        {
          title: "1 Python",
          status: "To Do",
          slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
          videoUrl: "https://example.com/video1",
          topics: [
            "Introduction to Python",
            "Flask Framework",
            "Django Framework",
            "RESTful API Development",
          ],
        },
        {
          title: "2 PHP",
          status: "To Do",
          slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
          videoUrl: "https://example.com/video2",
          topics: [
            "Introduction to PHP",
            "PHP Frameworks (Laravel, CodeIgniter)",
            "RESTful API Development",
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
          status: "Completed",
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
          status: "In Progress",
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

  const Module14= () => {
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
          <ModuleSwitcher currentModule="/curriculam/module14" />
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

  export default Module14;
