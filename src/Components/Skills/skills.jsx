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
import Nodeexp from "../../Assets/nodejs.svg"
import Pythonphp from "../../Assets/python.svg"
import Database from "../../Assets/database.svg"

const Skills = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.skill}>
        <Typography variant="h5" color="initial">
          Skills
        </Typography>
        <Box className={classes.skillsec}>
          <Card1
            heading="Front-End"
            paragraph="Join Over 702 Students."
            buttonText="Get Started"
            topElement={<LaptopMacIcon />}
          />
          <Card1
            heading="Back-End"
            paragraph="Join Over 573 Students."
            buttonText="Get Started"
            topElement={<SettingsRoundedIcon />}
          />

          <Card1
            heading="FullStack"
            paragraph="Join Over 423 Students."
            buttonText="Get Started"
            topElement={<TableRowsRoundedIcon />}
          />
        </Box>
      </Box>
      <Box className={classes.my_courses}>
        <Typography variant="h5" color="initial">
          My Courses
        </Typography>
        <Box className={classes.course_detail}>
          <Card2
            className={classes.box}
            heading="Fundamentals"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Code} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="DSA"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Tree} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="HTML"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Html} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="CSS"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Css} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="BootStrap"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Bootstrap} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="JavaScript"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Javascript} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="React"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Reacticon} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="Java"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Java} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="Spring Boot"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Springboot} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="Node & Express"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Nodeexp} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="Python & PHP"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Pythonphp} alt="code icon" />}
          />
          <Card2
            className={classes.box}
            heading="DataBase"
            paragraph="0% - progress"
            buttonText="Continue"
            sideElement={<img src={Database} alt="code icon" />}
          />
          
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
