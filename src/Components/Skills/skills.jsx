import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";
import Card1 from "../../Elements/Card1/card1";
import Card2 from "../../Elements/Card2/card2";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import Code from "../../Assets/code.svg";
import Tree from "../../Assets/tree.svg";
import Html from "../../Assets/html.svg";
import Css from "../../Assets/css.svg";
import Bootstrap from "../../Assets/bootstrap.svg";
import Javascript from "../../Assets/javascript.svg";
import Reacticon from "../../Assets/react.svg";
import Java from "../../Assets/java.svg";
import Springboot from "../../Assets/spring.svg";
import Nodeexp from "../../Assets/nodejs.svg";
import Pythonphp from "../../Assets/python.svg";
import Database from "../../Assets/database.svg";

const Skills = () => {
  const classes = useStyles();

  // Data for the skill cards
  const skillCards = [
    { heading: "Front-End", paragraph: "Join Over 702 Students.", buttonText: "Get Started", topElement: <LaptopMacIcon /> },
    { heading: "Back-End", paragraph: "Join Over 573 Students.", buttonText: "Get Started", topElement: <SettingsRoundedIcon /> },
    { heading: "FullStack", paragraph: "Join Over 423 Students.", buttonText: "Get Started", topElement: <TableRowsRoundedIcon /> },
  ];

  // Data for the course cards
  const courseCards = [
    { heading: "Fundamentals", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Code} alt="code icon" /> },
    { heading: "DSA", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Tree} alt="tree icon" /> },
    { heading: "HTML", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Html} alt="html icon" /> },
    { heading: "CSS", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Css} alt="css icon" /> },
    { heading: "BootStrap", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Bootstrap} alt="bootstrap icon" /> },
    { heading: "JavaScript", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Javascript} alt="javascript icon" /> },
    { heading: "React", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Reacticon} alt="react icon" /> },
    { heading: "Java", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Java} alt="java icon" /> },
    { heading: "Spring Boot", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Springboot} alt="spring icon" /> },
    { heading: "Node & Express", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Nodeexp} alt="nodejs icon" /> },
    { heading: "Python & PHP", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Pythonphp} alt="python icon" /> },
    { heading: "DataBase", paragraph: "0% - progress", buttonText: "Continue", sideElement: <img src={Database} alt="database icon" /> },
  ];

  return (
    <Box>
      <Box className={classes.skill}>
        <Typography variant="h5" color="initial">
          Skills
        </Typography>
        <Box className={classes.skillsec}>
          {skillCards.map((card, index) => (
            <Card1
              key={index}
              heading={card.heading}
              paragraph={card.paragraph}
              buttonText={card.buttonText}
              topElement={card.topElement}
            />
          ))}
        </Box>
      </Box>

      <Box className={classes.my_courses}>
        <Typography variant="h5" color="initial">
          My Courses
        </Typography>
        <Box className={classes.course_detail}>
          {courseCards.map((course, index) => (
            <Card2
              key={index}
              className={classes.box}
              heading={course.heading}
              paragraph={course.paragraph}
              buttonText={course.buttonText}
              sideElement={course.sideElement}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
