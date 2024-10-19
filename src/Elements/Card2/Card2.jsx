import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./styles";
import Button2 from "../Button2/button2";

const Card2 = ({ heading, paragraph, buttonText, sideElement }) => {
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
        <Button2>{buttonText}</Button2>
      </Box>

      {/* Conditionally render the side element (icon, image, or custom component) */}
      <Box className={classes.rightSection}>
        {sideElement && <Box className={classes.sideElement}>{sideElement}</Box>}
      </Box>
    </Box>
  );
};


export default Card2;
