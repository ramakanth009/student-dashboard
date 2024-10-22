import React from "react";
import { Box } from "@mui/material";
import Module from "../../Elements/Modulebox/module";  // Ensure this path is correct
import { Link } from "react-router-dom";

const Curriculum = () => {
  const moduleData = [
    { moduleNumber: 1, title: "Introduction to Programming", submissionStatus: "To do" },
    { moduleNumber: 2, title: "Introduction to Data Structures", submissionStatus: "Pending" },
    { moduleNumber: 3, title: "HTML", submissionStatus: "Submitted" },
    { moduleNumber: 4, title: "CSS", submissionStatus: "To do" },
    { moduleNumber: 5, title: "Bootstrap Layout", submissionStatus: "To do" },
    { moduleNumber: 6, title: "Javascript", submissionStatus: "To do" },
    { moduleNumber: 7, title: "React", submissionStatus: "To do" },
    { moduleNumber: 8, title: "Introduction to Server-side Programming (Back-end Module)", submissionStatus: "To do" },
    { moduleNumber: 9, title: "Intro to Spring Framework", submissionStatus: "To do" },
    { moduleNumber: 10, title: "Intro to Nodejs and Express js", submissionStatus: "To do" },
    { moduleNumber: 11, title: "Python & PHP for backend", submissionStatus: "To do" },
    { moduleNumber: 12, title: "Databases", submissionStatus: "To do" }
  ];

  return (
    <Box sx={{ padding: "2", cursor: "pointer" }}>
      {moduleData.map((module) => (
        <Link to={`/module/${module.moduleNumber}`} key={module.moduleNumber} style={{ textDecoration: 'none' }}>
          <Module
            moduleNumber={module.moduleNumber}
            title={module.title}
            submissionStatus={module.submissionStatus}
          />
        </Link>
      ))}
    </Box>
  );
};

export default Curriculum;
