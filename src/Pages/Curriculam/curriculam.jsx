// curriculum.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Module from "../../Elements/Modulebox/module";
import { useStyles } from "./styles";

const fullStackCurriculum = [
  {
    title: "Programming Fundamentals",
    icon: "PF",
    modules: [
      {
        moduleNumber: 1,
        title: "Introduction to Programming",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 2,
        title: "Introduction to Data Structures",
        submissionStatus: "Pending",
      },
    ],
  },
  {
    title: "Frontend Development",
    icon: "FE",
    modules: [
      {
        moduleNumber: 3,
        title: "HTML",
        submissionStatus: "Submitted",
      },
      {
        moduleNumber: 4,
        title: "CSS",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 5,
        title: "Bootstrap Layout",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 6,
        title: "JavaScript",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 7,
        title: "React",
        submissionStatus: "To do",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: "BE",
    modules: [
      // {
      //   moduleNumber: 8,
      //   title: "Introduction to Server-side Programming",
      //   submissionStatus: "To do",
      // },
      // {
      //   moduleNumber: 9,
      //   title: "Introduction to Data Structures",
      //   submissionStatus: "Pending",
      // },
      {
        moduleNumber: 10,
        title: "Server-side Programming",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 11,
        title: "Spring Framework",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 12,
        title: "Node.js and Express.js",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 13,
        title: "Python & PHP for backend",
        submissionStatus: "To do",
      },
    ],
  },
  {
    title: "Database Management",
    icon: "DB",
    modules: [
      {
        moduleNumber: 14,
        title: "Databases",
        submissionStatus: "To do",
      },
    ],
  },
];

const dataScienceCurriculum = [
  {
    title: "Programming Fundamentals",
    icon: "PF",
    modules: [
      {
        moduleNumber: 1,
        title: "Python Programming Basics",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 2,
        title: "SQL & Databases",
        submissionStatus: "Pending",
      },
    ],
  },
  {
    title: "Core Datascience",
    icon: "DA",
    modules: [
      {
        moduleNumber: 3,
        title: "Statistics & Mathematics",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 4,
        title: "Exploratory Data Analysis",
        submissionStatus: "To do",
      },
      
    ],
  },
  {
    title: "Advanced Data Science",
    icon: "ML",
    modules: [
      {
        moduleNumber: 5,
        title: "Machine Learning",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 6,
        title: "Deep Learning",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 7,
        title: "NLP",
        submissionStatus: "To do",
      },
      {
        moduleNumber: 8,
        title: "Generative AI",
        submissionStatus: "To do",
      },
    ],
  },
  // {
  //   title: "Advanced Topics",
  //   icon: "AT",
  //   modules: [
  //     {
  //       moduleNumber: 9,
  //       title: "Deep Learning Fundamentals",
  //       submissionStatus: "To do",
  //     },
  //     {
  //       moduleNumber: 10,
  //       title: "Natural Language Processing",
  //       submissionStatus: "To do",
  //     },
  //     {
  //       moduleNumber: 11,
  //       title: "Big Data Analytics",
  //       submissionStatus: "To do",
  //     },
  //   ],
  // },
];

const Curriculum = () => {
  const classes = useStyles();
  // Get user track from localStorage
  const userTrack = localStorage.getItem("userTrack") || "fullStack";
  const curriculumData =
    userTrack === "fullStack" ? fullStackCurriculum : dataScienceCurriculum;

  return (
    <Box className={classes.root}>
      <Box className={classes.headerContainer}>
        <Box className={classes.header}>
          <Typography variant="h1" className={classes.mainTitle}>
            {userTrack === "fullStack"
              ? "Full Stack Development Journey"
              : "Data Science Journey"}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {userTrack === "fullStack"
              ? "Master the essential skills to become a proficient full-stack developer"
              : "Master the essential skills to become a proficient data scientist"}
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" className={classes.contentContainer}>
        {curriculumData.map((track, index) => (
          <Box key={index} className={classes.trackSection}>
            <Box className={classes.trackHeader}>
              <Box className={classes.trackIcon}>{track.icon}</Box>
              <Typography variant="h2" className={classes.trackTitle}>
                {track.title}
              </Typography>
            </Box>

            <Box
              className={classes.modulesGrid}
              role="list"
              aria-label={`${track.title} modules`}
            >
              {track.modules.map((module, moduleIndex) => (
                <Box
                  key={moduleIndex}
                  role="listitem"
                  className={classes.moduleWrapper}
                >
                  <Module
                    moduleNumber={module.moduleNumber}
                    title={module.title}
                    submissionStatus={module.submissionStatus}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Curriculum;
