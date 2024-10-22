import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Button, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyles } from "./styles";

//Tasks data 
const mockTasks = [
  {
    id: 1,
    title: "Build a Todo App",
    description: "Create a simple Todo application",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    components: ["Components", "State management", "Routing"],
    steps: [
      "Set up development environment",
      "Create React app",
      "Build components",
      "Implement routing",
      "Add state management"
    ],
    status: "To Do"
  },
  {
    id: 2,
    title: "Build a Weather App",
    description: "Create a weather application",
    skills: ["React", "JavaScript", "HTML", "CSS", "API integration"],
    components: ["Components", "State management", "API calls"],
    steps: [
      "Set up development environment",
      "Create React app",
      "Build components",
      "Fetch weather data",
      "Display weather information"
    ],
    status: "To Do"
  },
];

// Helping function to fetch tasks (simulate API call)
const fetchTasks = async () => {
  // To simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockTasks;
};

const Tasks = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const saveTasks = useCallback((todoTasks, completedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(todoTasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, []);

  const loadTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
      const savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks'));

      if (savedTasks && savedCompletedTasks) {
        setTasks(savedTasks);
        setCompletedTasks(savedCompletedTasks);
      } else {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
        saveTasks(fetchedTasks, []);
      }
    } catch (err) {
      setError('Failed to load tasks. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [saveTasks]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleStart = useCallback((taskId) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => 
        task.id === taskId ? { ...task, status: "In Progress" } : task
      );
      saveTasks(updatedTasks, completedTasks);
      return updatedTasks;
    });
  }, [completedTasks, saveTasks]);

  const handleSubmit = useCallback((taskId, link) => {
    setTasks(prevTasks => {
      const completedTask = prevTasks.find(task => task.id === taskId);
      const updatedCompletedTask = { ...completedTask, link, status: "Completed" };
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      
      setCompletedTasks(prevCompletedTasks => {
        const updatedCompletedTasks = [...prevCompletedTasks, updatedCompletedTask];
        saveTasks(updatedTasks, updatedCompletedTasks);
        return updatedCompletedTasks;
      });

      return updatedTasks;
    });
  }, [saveTasks]);

  const renderTask = useCallback((task, isCompleted = false) => (
    <Box
    key={task.id}
    className={`${classes.taskBox} ${
      isCompleted
        ? classes.completedTask
        : task.status === "In Progress"
        ? classes.inProgressTask
        : ""
    }`}
  >
      <Typography variant="h6" width="70%">{task.title}</Typography>
      <Typography className={classes.statusBadge} style={{
        backgroundColor: task.status === "Completed" ? "green" : 
                         task.status === "In Progress" ? "blue" : "gray"
      }}>
        {task.status}
      </Typography>
      {!isCompleted && (
        <Button onClick={() => handleStart(task.id)} disabled={task.status === "In Progress"}>
          {task.status === "To Do" ? "Start" : "In Progress"}
        </Button>
      )}
      {task.status === "In Progress" && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Project Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Description: {task.description}</Typography>
            <Typography>Skills: {task.skills.join(", ")}</Typography>
            <Typography>Key Components: {task.components.join(", ")}</Typography>
            <Typography>Steps:</Typography>
            <ol>
              {task.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <TextField 
              label="Project Link" 
              variant="outlined" 
              fullWidth 
              style={{ marginTop: '16px', marginBottom: '16px', }}
            />
            <Button onClick={() => handleSubmit(task.id, "dummy-link")}>Submit</Button>
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  ), [classes, handleStart, handleSubmit]);

  if (isLoading) {
    return <Typography>Loading tasks...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.section}>
        <Typography variant="h5">To Do</Typography>
        {tasks.map(task => renderTask(task))}
      </Box>
      <Box className={classes.section}>
        <Typography variant="h5">Completed</Typography>
        {completedTasks.map(task => renderTask(task, true))}
      </Box>
    </Box>
  );
};

export default Tasks;