import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";
import Button1 from "../Button1/button1";

const Card1 = ({ heading, paragraph, buttonText, topElement }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      {topElement && <Box className={classes.topElement}>{topElement}</Box>}

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
