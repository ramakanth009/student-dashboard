import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "./styles";
import EnterpriseProjects from "./enterpriseprojects";

//Tasks data
const mockTasks = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "Create a personal portfolio website to showcase the student's background, skills, and interests.",
    skills: ["HTML", "CSS", "Responsive Design"],
    components: [
      "Home Page",
      "About Me Section",
      "Skills Section",
      "Contact Information",
    ],
    steps: [
      "Create the HTML structure, including sections for About Me, Skills, and Contact.",
      "Add a navigation bar linking to each section.",
      "Style each section using CSS for fonts, colors, and layouts.",
      "Add a contact form or clickable email/social links.",
      "Make the website responsive for mobile and desktop devices.",
    ],
    status: "To Do",
  },
  {
    id: 2,
    title: "Restaurant Menu Page",
    description: "Design a menu page for a fictional restaurant.",
    skills: ["HTML", "CSS", "Responsive Design"],
    components: ["Menu Categories", "Item Descriptions", "Responsive Layout"],
    steps: [
      "Set up the HTML structure with sections for menu categories.",
      "Use tables or CSS Grid/Flexbox to arrange items in a clean format.",
      "Add descriptions and prices for each item.",
      "Style the menu using CSS with a focus on typography and spacing.",
      "Ensure responsiveness for mobile and desktop.",
    ],
    status: "To Do",
  },
  {
    id: 3,
    title: "Interactive Quiz App",
    description:
      "Develop a quiz app with multiple-choice questions and instant feedback.",
    skills: ["JavaScript", "DOM Manipulation", "Event Handling"],
    components: [
      "Question Display",
      "Multiple-Choice Options",
      "Score Tracking",
      "Feedback",
    ],
    steps: [
      "Create an HTML form for the quiz with questions and multiple options.",
      "Use JavaScript to handle user interactions.",
      "Write logic to evaluate selected answers.",
      "Display feedback for correct or incorrect answers.",
      "Track and display the user’s score.",
    ],
    status: "To Do",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Create a weather dashboard that displays current weather and forecasts.",
    skills: ["React", "JavaScript", "API Integration", "Responsive Design"],
    components: ["Current Weather Display", "5-Day Forecast", "City Search"],
    steps: [
      "Set up HTML structure with input fields for city search.",
      "Use JavaScript to fetch weather data from an API.",
      "Display current weather with temperature, conditions, and icon.",
      "Implement a 5-day weather forecast.",
      "Ensure responsiveness for different devices.",
    ],
    status: "To Do",
  },
  {
    id: 5,
    title: "To-Do List Application",
    description:
      "Build a to-do list where users can add, complete, and delete tasks.",
    skills: ["JavaScript", "DOM Manipulation", "Local Storage"],
    components: ["Task Input", "Task List", "Task Completion and Deletion"],
    steps: [
      "Create HTML structure with input field and button to add tasks.",
      "Use JavaScript to dynamically add tasks to a list.",
      "Implement functionality to mark tasks as complete or delete them.",
      "Save tasks in local storage for persistence.",
      "Style the application for clarity and responsiveness.",
    ],
    status: "To Do",
  },
  {
    id: 6,
    title: "Blog Platform",
    description:
      "Develop a simple blog platform where users can create, read, update, and delete posts.",
    skills: ["React", "State Management", "Forms"],
    components: [
      "Blog Post List",
      "Post Creation and Editing",
      "Delete Functionality",
    ],
    steps: [
      "Set up a homepage showing blog post titles and a Create New Post button.",
      "Create components for post list, individual post view, and post form.",
      "Implement state management for adding and updating posts.",
      "Validate input in the post form before submission.",
      "Style for user experience and responsiveness.",
    ],
    status: "To Do",
  },
  {
    id: 7,
    title: "E-commerce Product Page",
    description: "Create a product page with shopping cart functionality.",
    skills: ["React", "State Management", "User Interactions"],
    components: ["Product Gallery", "Description and Price", "Cart Management"],
    steps: [
      "Set up components for product details.",
      "Use state to allow users to select product options.",
      "Implement Add to Cart functionality.",
      "Build a cart display to list items and allow modifications.",
      "Style the page for a clean and responsive design.",
    ],
    status: "To Do",
  },
  {
    id: 8,
    title: "Movie Search App",
    description:
      "Build a movie search app with search functionality and movie details.",
    skills: ["React", "API Integration", "Responsive Design"],
    components: [
      "Search Input",
      "Search Results Display",
      "Movie Details View",
    ],
    steps: [
      "Set up components for search bar and results.",
      "Fetch movie details using a movie database API.",
      "Display search results with titles, posters, and release dates.",
      "Allow users to view more details for each movie.",
      "Ensure responsiveness for mobile devices.",
    ],
    status: "To Do",
  },
  {
    id: 9,
    title: "Social Media Dashboard",
    description:
      "Develop a social media dashboard with various metrics and interactivity.",
    skills: ["React", "Data Visualization", "State Management"],
    components: ["Metrics Overview", "Platform Panels", "Graphs"],
    steps: [
      "Set up components for displaying metrics overview.",
      "Create platform panels for different social metrics.",
      "Integrate graphs for data visualization.",
      "Add toggling for time periods.",
      "Ensure responsiveness and interactivity.",
    ],
    status: "To Do",
  },
  {
    id: 10,
    title: "Task Management System",
    description:
      "Create a task management app with categories, due dates, and authentication.",
    skills: ["React", "Complex State Management", "Authentication"],
    components: [
      "User Registration",
      "Task Filtering and Sorting",
      "Data Persistence",
    ],
    steps: [
      "Create user registration and login components.",
      "Implement task filtering, sorting, and status tracking.",
      "Persist data using local storage or an API.",
      "Ensure tasks are categorized and trackable.",
      "Ensure a user-friendly and secure experience.",
    ],
    status: "To Do",
  },
  {
    id: 11,
    title: "Event Landing Page",
    description:
      "Build a landing page for a fictional event with a schedule and registration section.",
    skills: ["HTML", "CSS", "Responsive Design"],
    components: ["Event Description", "Schedule Section", "Registration Form"],
    steps: [
      "Create HTML structure for event details and schedule.",
      "Style the page to match the event theme.",
      "Add media elements for engagement.",
      "Create a registration form with basic validation.",
      "Ensure responsiveness for mobile and desktop.",
    ],
    status: "To Do",
  },
  {
    id: 12,
    title: "Nonprofit Organization Website",
    description:
      "Create a website for a nonprofit organization with a donation page and mission section.",
    skills: ["HTML", "CSS", "Responsive Design"],
    components: ["Homepage", "Donation Page", "About Us"],
    steps: [
      "Set up the homepage with introduction and mission statement.",
      "Create a simple donation form.",
      "Style with a user-friendly and meaningful design.",
      "Add a section for testimonials or achievements.",
      "Ensure responsiveness for all devices.",
    ],
    status: "To Do",
  },
  {
    id: 13,
    title: "Inventory Management System",
    description:
      "Create a backend for tracking products, suppliers, and stock levels.",
    skills: ["Spring Boot", "Java", "SQL", "JPA"],
    components: ["Product Management", "Stock Level Tracking", "Alerts"],
    steps: [
      "Set up the project and design the database schema.",
      "Implement product and supplier management features.",
      "Add stock level tracking functionality.",
      "Implement alerts for low stock.",
      "Create RESTful APIs for managing the inventory.",
    ],
    status: "To Do",
  },
  {
    id: 14,
    title: "Online Ticket Reservation System",
    description:
      "Build a backend for a ticket reservation system with seat selection and payment processing.",
    skills: ["Spring Boot", "Java", "SQL", "Payment Integration"],
    components: ["Event Management", "Seat Selection", "Payment Gateway"],
    steps: [
      "Set up the project and design the database schema for events and reservations.",
      "Implement seat selection and reservation functionality.",
      "Integrate a payment gateway for ticket purchases.",
      "Add functionality to generate and email tickets.",
      "Ensure real-time seat availability checks.",
    ],
    status: "To Do",
  },
];

const fetchTasks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockTasks;
};

const Tasks = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const saveTasks = useCallback((updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }, []);

  const loadTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));

      if (savedTasks) {
        setTasks(savedTasks);
      } else {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
        saveTasks(fetchedTasks);
      }
    } catch (err) {
      setError("Failed to load tasks. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [saveTasks]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleStart = useCallback(
    (taskId) => {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: "In Progress" } : task
        );
        saveTasks(updatedTasks);
        return updatedTasks;
      });
    },
    [saveTasks]
  );

  const handleSubmit = useCallback(
    (taskId, link) => {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks
          .map((task) =>
            task.id === taskId ? { ...task, status: "Completed", link } : task
          )
          .sort((a, b) => {
            // Sort completed tasks to the bottom
            if (a.status === "Completed" && b.status !== "Completed") return 1;
            if (a.status !== "Completed" && b.status === "Completed") return -1;
            return 0;
          });
        saveTasks(updatedTasks);
        return updatedTasks;
      });
    },
    [saveTasks]
  );

  const renderTask = useCallback(
    (task) => (
      <Box
        key={task.id}
        className={`${classes.taskBox} ${
          task.status === "Completed"
            ? classes.completedTask
            : task.status === "In Progress"
            ? classes.inProgressTask
            : ""
        }`}
      >
        <Typography variant="h6" width="70%">
          {task.title}
        </Typography>
        <Typography
          className={classes.statusBadge}
          style={{
            backgroundColor:
              task.status === "Completed"
                ? "#339933"
                : task.status === "In Progress"
                ? "#3084d7"
                : "#d74444",
          }}
        >
          {task.status}
        </Typography>

        {task.status !== "Completed" && (
          <Button
            className={classes.startbutton}
            onClick={() => handleStart(task.id)}
            disabled={task.status === "In Progress"}
          >
            {task.status === "To Do" ? "Start" : "In Progress"}
          </Button>
        )}

        {task.status === "In Progress" && (
          <Accordion className={classes.accordian}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Project Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Description: {task.description}</Typography>
              <Typography>Skills: {task.skills.join(", ")}</Typography>
              <Typography>
                Key Components: {task.components.join(", ")}
              </Typography>
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
                style={{ marginTop: "16px", marginBottom: "16px" }}
              />
              <Button onClick={() => handleSubmit(task.id, "dummy-link")}>
                Submit
              </Button>
            </AccordionDetails>
          </Accordion>
        )}
      </Box>
    ),
    [classes, handleStart, handleSubmit]
  );

  if (isLoading) {
    return <Typography>Loading tasks...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.section}>
        <Typography className={classes.taskhead} variant="h5">
          Projects
        </Typography>
        {tasks.map((task) => renderTask(task))}
      </Box>
      <Box className={classes.section}>
        <EnterpriseProjects />
      </Box>
    </Box>
  );
};

export default Tasks;
