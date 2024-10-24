// ModuleSwitcher.jsx
import React, { useState } from 'react';
import { Box, Select, MenuItem, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  formControl: {
    minWidth: '150px!important',
    marginBottom: '24px!important',
  },
  select: {
    backgroundColor: '#1976d2!important',
    color: 'white!important',
    '& .MuiSelect-select': {
      padding: '8px 16px!important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none!important',
    },
    '&:hover': {
      backgroundColor: '#1565c0!important',
    },
    '& .MuiSvgIcon-root': {
      color: 'white!important',
    },
    borderRadius: '10px 1px 10px 1px!important',
  },
  menuItem: {
    '&:hover': {
      backgroundColor: '#f5f5f5!important',
    },
    '&.Mui-selected': {
      backgroundColor: '#e3f2fd!important',
      '&:hover': {
        backgroundColor: '#e3f2fd!important',
      }
    }
  }
});

const moduleOptions = [
  // { value: '/curriculam', label: 'Back to Curriculum' },
  { value: '/curriculam/module1', label: 'Module 1' },
  { value: '/curriculam/module2', label: 'Module 2' },
  { value: '/curriculam/module3', label: 'Module 3' },
  { value: '/curriculam/module4', label: 'Module 4' },
  { value: '/curriculam/module5', label: 'Module 5' },
  { value: '/curriculam/module6', label: 'Module 6' },
  { value: '/curriculam/module7', label: 'Module 7' },
  { value: '/curriculam/module8', label: 'Module 8' },
  { value: '/curriculam/module9', label: 'Module 9' },
  { value: '/curriculam/module10', label: 'Module 10' },
  { value: '/curriculam/module11', label: 'Module 11' },
  { value: '/curriculam/module12', label: 'Module 12' },
  { value: '/curriculam/module13', label: 'Module 13' },
  { value: '/curriculam/module14', label: 'Module 14' },
];

const ModuleSwitcher = ({ currentModule }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState(currentModule);

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
                maxHeight: '400px'
              }
            }
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