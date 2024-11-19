import React from "react";
import { useStyles } from "./styles";
import {
  Box,
  // Typography
} from "@mui/material";
import Welcomebanner from "../../Components/Welcome/welcome";
import Weeklyclasses from "../../Components/Weeklyclasses/weeklyclasses";
import { Studygroupcard } from "../../Components/Livestudygroup/livestudygroup";
import Mycourses from "../../Components/Mycourses/mycourses";
// import Home2 from "../Home2/dashboard"

const Home = () => {
  const classes = useStyles();
  const studyGroups = [
    {
      title: "React Advanced Patterns",
      postCount: 12,
      onVisit: () => console.log("Visiting React group"),
    },
    {
      title: "Algorithm Practice",
      postCount: 8,
      onVisit: () => console.log("Visiting Algorithms group"),
    },
  ];
  return (
    <Box className={classes.page}>
    
      <Welcomebanner />
      <Weeklyclasses className={classes.weekbox}/>
      <Box className={classes.sticker}>
        <Studygroupcard groups={studyGroups} />
        <Mycourses />
      </Box>
      {/* <Home2/> */}
    </Box>
  );
};

export default Home;
