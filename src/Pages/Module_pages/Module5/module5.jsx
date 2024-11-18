import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModuleDropdown from "../../../Elements/Moduledropdown/moduledropdown";
import ModuleSwitcher from "../../../Elements/Moduleselector/moduleselector";
import ModuleDescription from "../../../Elements/Moduledescription/moduledescription";
const useStyles = makeStyles({
  moduleContainer: {
    width:"100%",
    padding: "24px",
    // backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection:"column"
  },
  content:{
    display:"flex",
    gap:"10px"
  },
  header: {
    marginBottom: "24px",
  },
  moduleTitle: {
    color: "#333",
    fontWeight: "500!important",
    marginBottom: "24px!important",
  },
  contentWrapper:{
    width:"100%",
    padding:"0px 20px"
  }
});

const Module5 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sections = [
    {
      title: "1 Bootstrap layout",
      status: "Completed",
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
      slidesUrl:"https://docs.google.com/presentation/d/1hluN1783q8a8M9vuw_zQYwYq8lcc1rnQNYO6g0q6cTk/edit#slide=id.p",
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
  const moduleDescription = {
    title: "Bootstrap Layout",
    subtitle: "Master responsive design with Bootstrap",
    description:
      "This module focuses on Bootstrap, a popular CSS framework that helps you create responsive and mobile-first web designs quickly and efficiently.",
    learningOutcomes: [
      "Understand Bootstrap's grid system and responsive utilities",
      "Build responsive layouts using Bootstrap's predefined classes",
      "Implement navigation bars, forms, buttons, and other UI components",
      "Customize Bootstrap components to suit your design needs",
      "Use Bootstrap to create professional, mobile-friendly websites",
    ],
    prerequisites: ["HTML Fundamentals", "CSS"],
    duration: "2 weeks",
    skillLevel: "Beginner",
    highlightText:
      "Upon completion, you'll be able to build fully responsive websites using Bootstrap's powerful grid system and components.",
  };

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
      <Box className={classes.content}>
        <ModuleDescription moduleData={moduleDescription} />

        <Box className={classes.contentWrapper}>
          <Box className={classes.dropdownSection}>
            {sections.map((section, index) => (
              <ModuleDropdown
                key={index}
                index={index}
                title={section.title}
                status={section.status}
                topics={section.topics}
                slidesUrl={section.slidesUrl}
                videoUrl={section.videoUrl}
                expanded={expandedIndex === index}
                onChange={handleAccordionChange}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Module5;
