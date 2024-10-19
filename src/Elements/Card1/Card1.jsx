import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./Card1.styles";
import Button1 from "../Button1/Button1";
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const Card1 = ({ heading, paragraph, buttonText, topElement }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      {/* Conditionally render any top element (icon, image, or custom component) */}
      {topElement && <Box className={classes.topElement}>{topElement}</Box>}
      {/* <HomeRoundedIcon className={classes.topElement}/> */}

      <Typography variant="h5" className={classes.heading}>
        {heading}
      </Typography>
      <Typography
        variant="caption"
        className={classes.paragraph}
        
      >
        {paragraph}
      </Typography>
      <Button1>{buttonText}</Button1>
    </Box>
  );
};

export default Card1;
