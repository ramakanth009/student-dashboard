import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./Card2.styles";
import Button2 from "../Button2/Button2";

const Card2 = ({ heading, paragraph, buttonText, topElement }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <Box className={classes.leftSection}>
        <Typography variant="h5" className={classes.heading}>
          {heading}
        </Typography>
        <Typography
          variant="body1"
          className={classes.paragraph}
        >
          {paragraph}
        </Typography>
        <Button2>{buttonText}hello</Button2>
      </Box>

      {/* Conditionally render the top element (icon, image, or custom component) */}
      <Box className={classes.rightSection}>
        {topElement && <Box className={classes.topElement}>{topElement}</Box>}
      </Box>
    </Box>
  );
};

export default Card2;
