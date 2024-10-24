import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModuleDropdown from "../../../Elements/Moduledropdown/moduledropdown";
import ModuleSwitcher from "../../../Elements/Moduleselector/moduleselector";

const useStyles = makeStyles({
  moduleContainer: {
    padding: "24px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "24px",
  },
  moduleTitle: {
    color: "#333",
    fontWeight: "500!important",
    marginBottom: "24px!important",
  },
});

const Module5 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Bootstrap layout",
      status: "Completed",
      videoUrl: "https://example.com/video1",
      topics: [
        "Install or adding Bootstrap via Cdn link",
        "Layouts and Components",
        "XS, S, M, L, XL, and XXL design Specification",
        "Containers",
        "Gutter",
        "Margin and Paddings",
        "Background and color",
        "Display",
        "Float",
      ],
    },
    {
      title: "2 Advance Properties",
      status: "In Progress",
      videoUrl: "https://example.com/video2",
      topics: [
        "Bootstrap Typography, Navbars, button enhancements",
        "Position",
        "Direction",
        "justify-content",
        "align-items",
        "flex-fill",
        "flex grow & shrink",
        "Popularity and Alternatives of Bootstrap",
        "Bootstrap Documentation",
      ],
    },
    {
      title:
        "3 Bootstrap layout Advance Properties Advanced Bootstrap Control Techniques and Best Practices",
      status: "To Do",
      videoUrl: "https://example.com/video3",
      topics: [
        "Bootstrap controls size properties",
        "Control behavioral changes if any scenario can be covered",
        "Server enabled controls like dynamic data bind with backend data",
        "Proper error message representations",
        "Toaters, Models, paginated grids",
        "Server response binded grids",
      ],
    },
  ];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module5" />
        <Typography variant="h4" className={classes.moduleTitle}>
          Bootstrap
        </Typography>
      </Box>

      {sections.map((section, index) => (
        <ModuleDropdown
          key={index}
          index={index}
          title={section.title}
          status={section.status}
          topics={section.topics}
          videoUrl={section.videoUrl}
          expanded={expandedIndex === index}
          onChange={handleAccordionChange}
        />
      ))}
    </Box>
  );
};

export default Module5;
