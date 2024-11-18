import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModuleDropdown from "../../../Elements/Moduledropdown/moduledropdown";
import ModuleSwitcher from "../../../Elements/Moduleselector/moduleselector";
import ModuleDescription from "../../../Elements/Moduledescription/moduledescription";
const useStyles = makeStyles({
  moduleContainer: {
    width:"100%",
    padding: "24px",
    // backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection:"column"
  },
  content:{
    display:"flex",
    gap:"10px"
  },
  header: {
    marginBottom: "24px",
  },
  moduleTitle: {
    color: "#333",
    fontWeight: "500!important",
    marginBottom: "24px!important",
  },
  contentWrapper:{
    width:"100%",
    padding:"0px 20px"
  }
});

const Module13 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Python",
      status: "Completed",
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
      status: "In Progress",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video2",
      topics: [
        "Introduction to PHP",
        "PHP Frameworks (Laravel, CodeIgniter)",
        "RESTful API Development",
      ],
    },
  ];
  const moduleDescription = {
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
  };

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module13" />
        <Typography variant="h4" className={classes.moduleTitle}>
          Python & PHP for backend
        </Typography>
      </Box>

      <Box className={classes.content}>
        <ModuleDescription moduleData={moduleDescription} />

        <Box className={classes.contentWrapper}>
          <Box className={classes.dropdownSection}>
            {sections.map((section, index) => (
              <ModuleDropdown
                key={index}
                index={index}
                title={section.title}
                status={section.status}
                topics={section.topics}
                slidesUrl={section.slidesUrl}
                videoUrl={section.videoUrl}
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

export default Module13;
