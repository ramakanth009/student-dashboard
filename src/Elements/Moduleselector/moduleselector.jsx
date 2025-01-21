// moduleselector.jsx
import React, { useState } from "react";
import { Box, Select, MenuItem, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  formControl: {
    minWidth: "300px!important",
    marginBottom: "24px!important",
  },
  select: {
    backgroundColor: "#1976d2!important",
    color: "white!important",
    "& .MuiSelect-select": {
      padding: "8px 16px!important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none!important",
    },
    "&:hover": {
      backgroundColor: "#1565c0!important",
    },
    "& .MuiSvgIcon-root": {
      color: "white!important",
    },
    borderRadius: "10px 1px 10px 1px!important",
  },
  menuItem: {
    "&:hover": {
      backgroundColor: "#f5f5f5!important",
    },
    "&.Mui-selected": {
      backgroundColor: "#e3f2fd!important",
      "&:hover": {
        backgroundColor: "#e3f2fd!important",
      },
    },
  },
});

const fullStackModules = [
  { value: "/curriculam/module1", label: "Developer Tools Essentials" },
  { value: "/curriculam/module2", label: "Introduction to Programming" },
  { value: "/curriculam/module3", label: "Introduction to Data Structures" },
  { value: "/curriculam/module4", label: "HTML" },
  { value: "/curriculam/module5", label: "CSS" },
  { value: "/curriculam/module6", label: "Bootstrap" },
  { value: "/curriculam/module7", label: "JavaScript" },
  { value: "/curriculam/module8", label: "React" },
  // { value: "/curriculam/module9", label: "Introduction to Programming" },
  // { value: "/curriculam/module10", label: "Introduction to Data Structures" },
  { value: "/curriculam/module11", label: "Server-side Programming" },
  { value: "/curriculam/module12", label: "Spring Framework" },
  { value: "/curriculam/module13", label: "Node.js and Express.js" },
  { value: "/curriculam/module14", label: "Python & PHP" },
  { value: "/curriculam/module15", label: "Databases" },
];

const dataScienceModules = [
  { value: "/curriculam/module1", label: "Developer Tools Essentials" },
  // { value: "/curriculam/module2", label: "Introduction to Programming" },
  // { value: "/curriculam/module3", label: "Introduction to Data Structures" },
  { value: "/curriculam/module4", label: "Python Programming" },
  { value: "/curriculam/module5", label: "SQL & Databases" },
  { value: "/curriculam/module6", label: "Statistics & Mathematics" },
  { value: "/curriculam/module7", label: "Exploratory Data Analysis" },
  { value: "/curriculam/module8", label: "Machine Learning" },
  { value: "/curriculam/module9", label: "Deep Learning" },
  { value: "/curriculam/module10", label: "NLP" },
  { value: "/curriculam/module11", label: "Generative AI" },
  // { value: '/curriculam/module12', label: 'Supervised Learning' },
  // { value: '/curriculam/module13', label: 'Unsupervised Learning' },
  // { value: '/curriculam/module12', label: 'Deep Learning Fundamentals' },
  // { value: '/curriculam/module13', label: 'Natural Language Processing' },
  // { value: '/curriculam/module14', label: 'Time Series Analysis' },
  // { value: '/curriculam/module15', label: 'Big Data Analytics' }
];

const ModuleSwitcher = ({ currentModule }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState(currentModule);

  // Get user track from localStorage
  const userTrack = localStorage.getItem("userTrack") || "fullStack";
  const moduleOptions =
    userTrack === "fullStack" ? fullStackModules : dataScienceModules;

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box>
      <FormControl className={classes.formControl}>
        <Select
          value={value}
          onChange={handleChange}
          className={classes.select}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: "400px",
              },
            },
          }}
        >
          {moduleOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              className={classes.menuItem}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ModuleSwitcher;
