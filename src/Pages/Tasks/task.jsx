import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useStyles } from "./styles";
import EnterpriseProjects from "./enterpriseprojects";

//Tasks data
const fullStackTasks = [
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
const dataScienceTasks = [
  {
    id: 1,
    title: "Week 1: Text-Based Adventure Game",
    description: `**Project Overview**
Build a text-based adventure game to practice fundamental Python programming concepts.

**Core Components**
 **Game Structure**
  → Introduction and player setup
  → Navigation through choices
  → Game state management
  → Item collection system
  
 **Technical Implementation**
  → Variables for player data and game state
  → Control flow with if-else statements
  → Lists/Tuples for inventory
  → Dictionaries for locations
  → Functions for key actions
  → Exception handling`,
    skills: ["Python", "Variables", "Control Flow", "Data Structures", "Functions", "Exception Handling"],
    components: [
      "Welcome Interface",
      "Player State Management",
      "Location Navigation",
      "Inventory System",
      "Input Validation"
    ],
    steps: [
      "1. Create text_based_game.py file",
      "2. Implement welcome message and player name input",
      "3. Create game state variables (health, score)",
      "4. Define location dictionary with descriptions",
      "5. Implement navigation system with if-else statements",
      "6. Add inventory system using lists",
      "7. Create functions for key actions",
      "8. Add exception handling for invalid inputs",
      "9. Implement win/lose conditions",
      "10. Test all game paths",
      "11. Add documentation and comments",
      "12. Create README file"
    ],
    status: "To Do"
  },
  {
    id: 2,
    title: "Week 2: Inventory Management System",
    description: `**Project Overview**
Build an inventory management system using advanced Python concepts including lambda functions, modules, and file handling.

**Core Components**
 **System Structure**
  → Item management
  → Data persistence
  → Filter and sort functionality
  
 **Technical Implementation**
  → Dictionary-based storage
  → Lambda functions for filtering
  → File I/O operations
  → Exception handling`,
    skills: ["Python", "Lambda Functions", "Modules", "File Handling", "Data Structures"],
    components: [
      "Item Management Interface",
      "Data Storage System",
      "File Operations",
      "Filtering System"
    ],
    steps: [
      "1. Create inventory_management.py file",
      "2. Set up dictionary for inventory storage",
      "3. Implement add/remove item functions",
      "4. Create lambda functions for filtering",
      "5. Add file save/load functionality",
      "6. Implement exception handling",
      "7. Create interactive menu",
      "8. Test all operations",
      "9. Document code",
      "10. Create README file"
    ],
    status: "To Do"
  },
  {
    id: 3,
    title: "Week 3: Library Management System",
    description: `**Project Overview**
Develop a library management system using Object-Oriented Programming concepts and advanced functions.

**Core Components**
 **System Structure**
  → Book and Library classes
  → Data encapsulation
  → Polymorphic implementations
  
 **Technical Implementation**
  → Class hierarchy
  → Private attributes
  → Method overriding
  → Exception handling`,
    skills: ["Python", "OOP", "Encapsulation", "Polymorphism", "Exception Handling"],
    components: [
      "Book Class System",
      "Library Management Interface",
      "Search Functionality",
      "Data Protection"
    ],
    steps: [
      "1. Create library_management.py file",
      "2. Define Book class with attributes",
      "3. Create Library class",
      "4. Implement encapsulation",
      "5. Add polymorphic methods",
      "6. Create exception handling",
      "7. Build interactive menu",
      "8. Test all functionalities",
      "9. Add documentation",
      "10. Create README file"
    ],
    status: "To Do"
  },
  {
    id: 4,
    title: "Week 4: Employee Management System",
    description: `**Project Overview**
Build an employee management system utilizing advanced OOP concepts and Python features.

**Core Components**
 **System Structure**
  → Employee class hierarchy
  → Abstract base classes
  → Decorator implementation
  → Generator functions
  
 **Technical Implementation**
  → Inheritance
  → Abstract methods
  → Custom decorators
  → Generator yields`,
    skills: ["Python", "Advanced OOP", "Abstract Classes", "Decorators", "Generators"],
    components: [
      "Employee Class Hierarchy",
      "Abstract Methods",
      "Action Logging",
      "Record Generation"
    ],
    steps: [
      "1. Create employee_management.py file",
      "2. Define Employee base class",
      "3. Create employee subclasses",
      "4. Implement abstract methods",
      "5. Add decorators for logging",
      "6. Create generator for records",
      "7. Build management interface",
      "8. Test system functionality",
      "9. Document code",
      "10. Create README file"
    ],
    status: "To Do"
  },
  {
    id: 5,
    title: "Week 5: Data Analysis Project",
    description: `**Project Overview**
Perform comprehensive data analysis using NumPy, Pandas, and Matplotlib.

**Core Components**
 **Analysis Structure**
  → Data generation
  → DataFrame operations
  → Statistical analysis
  → Data visualization
  
 **Technical Implementation**
  → NumPy arrays
  → Pandas operations
  → Matplotlib plots
  → Data manipulation`,
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Analysis"],
    components: [
      "Data Generation",
      "Statistical Analysis",
      "Data Visualization",
      "Results Documentation"
    ],
    steps: [
      "1. Create data_analysis_project.py file",
      "2. Generate dataset using NumPy",
      "3. Create Pandas DataFrame",
      "4. Perform statistical analysis",
      "5. Handle missing data",
      "6. Create derived features",
      "7. Generate visualizations",
      "8. Document results",
      "9. Add code comments",
      "10. Create README file"
    ],
    status: "To Do"
  },
  {
    id: 6,
    title: "Week 6: Web Framework Project",
    description: `**Project Overview**
Build a web application using a chosen framework (Django/Flask/Streamlit) to present data analysis results.

**Core Components**
 **Application Structure**
  → Framework setup
  → Route definitions
  → Template creation
  → Data presentation
  
 **Technical Implementation**
  → Web framework
  → Routing system
  → Template engine
  → Static files`,
    skills: ["Python", "Web Framework", "HTML", "Data Presentation"],
    components: [
      "Framework Setup",
      "Route Configuration",
      "Template System",
      "Data Display"
    ],
    steps: [
      "1. Choose and install framework",
      "2. Set up project structure",
      "3. Define routes/views",
      "4. Create templates",
      "5. Implement data display",
      "6. Add static files",
      "7. Test application",
      "8. Deploy locally",
      "9. Document setup process",
      "10. Create README file"
    ],
    status: "To Do"
  }
];

const fetchTasks = async (userTrack) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return userTrack === "fullStack" ? fullStackTasks : dataScienceTasks;
};


const Tasks = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const userTrack = localStorage.getItem("userTrack") || "fullStack";

  const saveTasks = useCallback((updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }, []);

  const loadTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const freshTasks = await fetchTasks(userTrack);
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));

      if (savedTasks) {
        const savedTasksMap = new Map(
          savedTasks.map((task) => [
            task.id,
            {
              status: task.status,
              link: task.link,
            },
          ])
        );

        const mergedTasks = freshTasks.map((task) => {
          const savedTask = savedTasksMap.get(task.id);
          if (savedTask) {
            return {
              ...task,
              status: savedTask.status,
              link: savedTask.link,
            };
          }
          return task;
        });

        const sortedTasks = mergedTasks.sort((a, b) => {
          if (a.status === "Completed" && b.status !== "Completed") return 1;
          if (a.status !== "Completed" && b.status === "Completed") return -1;
          return 0;
        });

        setTasks(sortedTasks);
        saveTasks(sortedTasks);
      } else {
        setTasks(freshTasks);
        saveTasks(freshTasks);
      }
    } catch (err) {
      setError("Failed to load tasks. Please try again later.");
      console.error("Error loading tasks:", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [saveTasks, userTrack]);

  useEffect(() => {
    localStorage.removeItem("tasks");
    loadTasks();
  }, [userTrack, loadTasks]);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    localStorage.removeItem("tasks");
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
              <Typography className={classes.projectDetailsTitle}>
                Project Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.projectDetails}>
              <Box className={classes.descriptionSection}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: task.description
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br/>")
                      .replace(/\* (.*?)(?=\n|$)/g, "<li>$1</li>")
                      .replace(/<li>/g, "<ul><li>")
                      .replace(/<\/li>\n/g, "</li></ul>"),
                  }}
                />
              </Box>

              <Box className={classes.skillsSection}>
                <Typography>
                  <strong>Required Skills:</strong>
                </Typography>
                <ul>
                  {task.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </Box>

              <Box className={classes.stepsSection}>
                <Typography>
                  <strong>Implementation Steps:</strong>
                </Typography>
                <ol>
                  {task.steps.map((step, index) => (
                    // <li key={index}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: step.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    // </li>
                  ))}
                </ol>
              </Box>

              <Box className={classes.submissionSection}>
                <TextField
                  label="Project Link"
                  variant="outlined"
                  fullWidth
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                />
                <Button
                  variant="contained"
                  onClick={() => handleSubmit(task.id, "dummy-link")}
                  className={classes.submitButton}
                >
                  Submit Project
                </Button>
              </Box>
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
        <Box className={classes.headerContainer}>
          <Typography className={classes.taskhead} variant="h5">
            {userTrack === "fullStack"
              ? "Full Stack Development Projects"
              : "Data Science Projects"}
          </Typography>
          <Tooltip title="Refresh Tasks">
            <IconButton
              onClick={handleRefresh}
              disabled={isRefreshing}
              className={classes.refreshButton}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Box>
        {tasks.map((task) => renderTask(task))}
      </Box>
      <Box className={classes.section}>
        <Typography variant="h5">Tools That Shape the Future</Typography>
        <EnterpriseProjects userTrack={userTrack} />
      </Box>
    </Box>
  );
};

export default Tasks;
