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

const Module14 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1  Relational Databases & SQL",
      status: "Completed",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video1",
      topics: [
        " Relational Databases",
        "Introduction to SQL",
        "Introduction to MySQL",
      ],
    },
    {
      title: "2 PostgreSQL, NoSQL, MongoDB ",
      status: "In Progress",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
      videoUrl: "https://example.com/video2",
      topics: [
        "Introduction to PostgreSQL",
        "Introduction to NoSQL Databases",
        "Introduction to MongoDB",
      ],
    },
  ];
  const moduleDescription = {
    title: "Databases",
    subtitle: "Manage and query data effectively",
    description:
      "This module covers the basics of database design, querying, and management. You'll learn how to store, retrieve, and manipulate data using SQL and NoSQL databases.",
    learningOutcomes: [
      "Understand the fundamentals of relational and NoSQL databases",
      "Write and execute SQL queries to manage data",
      "Design efficient database schemas for web applications",
      "Work with popular database management systems (e.g., MySQL, MongoDB)",
      "Integrate databases with back-end applications",
    ],
    prerequisites: [
      "Basic understanding of server-side programming",
      "Knowledge of web development",
    ],
    duration: "3 weeks",
    skillLevel: "Intermediate",
    highlightText:
      "Upon completion, you'll be able to design and manage databases for web applications and perform complex data queries.",
  };

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module14" />
        <Typography variant="h4" className={classes.moduleTitle}>
          Introduction to Databases
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

export default Module14;
