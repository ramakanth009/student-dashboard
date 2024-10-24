import React from "react";
import { Box, Typography } from "@mui/material";
import Module from "../../Elements/Modulebox/module";

const Curriculum = () => {
  const curriculumSections = [
    {
      title: "Programming Fundamentals",
      modules: [
        {
          moduleNumber: 1,
          title: "Introduction to Programming",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 2,
          title: "Introduction to Data Structures",
          submissionStatus: "Pending"
        }
      ]
    },
    {
      title: "Frontend Development",
      modules: [
        {
          moduleNumber: 3,
          title: "HTML",
          submissionStatus: "Submitted"
        },
        {
          moduleNumber: 4,
          title: "CSS",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 5,
          title: "Bootstrap Layout",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 6,
          title: "Javascript",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 7,
          title: "React",
          submissionStatus: "To do"
        }
      ]
    },
    {
      title: "Backend Development",
      modules: [
        {
          moduleNumber: 8,
          title: "Introduction to Programming",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 9,
          title: "Introduction to Data Structures",
          submissionStatus: "Pending"
        },
      // ]
    // },
    // {
    //   title: "Backend Development",
    //   modules: [
        {
          moduleNumber: 10,
          title: "Introduction to Server-side Programming (Back-end Module)",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 11,
          title: "Intro to Spring Framework",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 12,
          title: "Intro to Node.js and Express.js",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 13,
          title: "Python & PHP for backend",
          submissionStatus: "To do"
        },
      ]
      
    },
    {
      title: "Introduction To Databases",
      modules: [
        {
          moduleNumber: 14,
          title: "Databases",
          submissionStatus: "To do"
        }
      ]
      
    }
  ];

  return (
    <Box sx={{ padding: 2 }}>
      {curriculumSections.map((section, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: 'primary.main',
              borderBottom: '2px solid',
              borderColor: 'primary.main',
              paddingBottom: 1,
              textAlign:"center"
            }}
          >
            {section.title}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {section.modules.map((module) => (
              <Module
                key={module.moduleNumber}
                moduleNumber={module.moduleNumber}
                title={module.title}
                submissionStatus={module.submissionStatus}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Curriculum;