import React from "react";
import { Box } from "@mui/material";
import Module from "../../Elements/Modulebox/module";

const Curriculum = () => {
  const moduleData = [
    {
      moduleNumber: 1,
      title: "Introduction to Programming",
      submissionStatus: "To do"
    },
    {
      moduleNumber: 2,
      title: "Introduction to Data Structures",
      submissionStatus: "Pending"
    },
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
    },
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
    {
      moduleNumber: 14,
      title: "Databases",
      submissionStatus: "To do"
    }
  ];

  return (
    <Box sx={{ padding: "2", cursor:"pointer"}}>
      {moduleData.map((module) => (
        <Module
          key={module.moduleNumber}
          moduleNumber={module.moduleNumber}
          title={module.title}
          submissionStatus={module.submissionStatus}
        />
      ))}
    </Box>
  );
};

export default Curriculum;