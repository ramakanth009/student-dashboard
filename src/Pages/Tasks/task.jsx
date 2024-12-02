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
    title: "Simple Text-Based Adventure Game",
    description: "Develop a text-based adventure game in Python where players navigate through locations, make choices, collect items, and progress toward a win or loss condition. The game utilizes Python basics, control flow, and data structures to create an engaging experience.",
    skills: [
      "Python Basics: Variables, Functions, Input/Output, Comments",
      "Control Flow: if-else Statements, Loops (while, for)",
      "Data Structures: Lists, Tuples, Dictionaries",
      "Exception Handling: try-except",
      "Modular Code Design"
    ],
    components: [
      "Python file text_based_game.py",
      "Variables for player state",
      "Location system",
      "Game progression logic"
    ],
    steps: [
      "Create a Python file text_based_game.py and define variables for player state and locations",
      "Print a welcome message and prompt the player for their name",
      "Use if-else and while loop for decision-making and game progression",
      "Use a dictionary for locations and a list for the inventory",
      "Create functions for actions like moving, collecting items, and viewing inventory",
      "Define winning and losing conditions based on the game state",
      "Handle invalid inputs using try-except",
      "Add comments and test thoroughly to ensure functionality"
    ],
    status: "To Do"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "Create an inventory management system using lambda functions, modules, and file handling to manage items and their quantities interactively.",
    skills: [
      "Python Basics: Functions, Dictionaries",
      "Lambda Functions: Filtering, Sorting",
      "File Handling: Reading/Writing Files, Exception Handling",
      "Modular Code Design"
    ],
    components: [
      "inventory_management.py",
      "Functions for CRUD operations",
      "File handling system",
      "User interface"
    ],
    steps: [
      "Create inventory_management.py and define functions for adding, removing, and viewing inventory",
      "Use a dictionary to store inventory items and their quantities",
      "Implement lambda functions to filter and sort inventory data",
      "Add file handling to save/load inventory and handle exceptions for invalid operations",
      "Build an interactive menu for user actions and thoroughly test the system"
    ],
    status: "To Do"
  },
  {
    id: 3,
    title: "Library Management System",
    description: "Develop a library management system using OOP concepts to manage a collection of books with features for adding, removing, and searching.",
    skills: [
      "OOP: Classes, Objects, Encapsulation, Polymorphism",
      "Exception Handling: Duplicate/Invalid Operations",
      "Advanced Python Functions",
      "Modular Design"
    ],
    components: [
      "library_management.py",
      "Book class",
      "Library class",
      "Search functionality"
    ],
    steps: [
      "Create library_management.py with Book and Library classes",
      "Use attributes for book details (title, author, ISBN) and methods for library operations",
      "Implement encapsulation to secure sensitive data and polymorphism for specific book types",
      "Create an interactive menu for user actions and test all functionalities thoroughly"
    ],
    status: "To Do"
  },
  {
    id: 4,
    title: "Employee Management System",
    description: "Create an employee management system utilizing advanced OOP concepts like inheritance, abstract classes, and decorators.",
    skills: [
      "OOP: Inheritance, Abstract Classes",
      "Decorators: Logging Actions",
      "Generators: Yielding Records Dynamically",
      "Advanced OOP Concepts"
    ],
    components: [
      "employee_management.py",
      "Employee base class",
      "Subclass implementations",
      "Logging system"
    ],
    steps: [
      "Create employee_management.py with Employee and subclass classes like Manager and Developer",
      "Use an abstract class for common methods like calculate_salary()",
      "Add decorators to log employee actions and a generator to iterate through records",
      "Build a menu for managing employee records and test functionalities extensively"
    ],
    status: "To Do"
  },
  {
    id: 5,
    title: "Integrated Data Analysis Project",
    description: "Perform integrated data analysis using NumPy, Pandas, and Matplotlib for numerical operations, data manipulation, and visualization.",
    skills: [
      "Libraries: NumPy, Pandas, Matplotlib",
      "Data Manipulation: Handling Missing Data, Feature Engineering",
      "Data Visualization: Scatter Plots, Histograms, Line Plots",
      "Statistical Analysis"
    ],
    components: [
      "data_analysis_project.py",
      "Data processing pipeline",
      "Visualization module",
      "Analysis functions"
    ],
    steps: [
      "Create data_analysis_project.py and generate random data using NumPy",
      "Convert the data into a Pandas DataFrame and perform statistical analysis",
      "Handle missing data, create derived features, and visualize data using Matplotlib",
      "Document the process with comments and test all operations"
    ],
    status: "To Do"
  },
  {
    id: 6,
    title: "Simple Web Application",
    description: "Develop a basic web application using Django, Flask, or Streamlit to present data analysis results interactively.",
    skills: [
      "Framework Basics: Django, Flask, or Streamlit",
      "Web Development: Routing, Views, Templates",
      "Data Presentation: Integrating Results",
      "Web Application Design"
    ],
    components: [
      "Web application files",
      "Routes and views",
      "Templates",
      "Data integration"
    ],
    steps: [
      "Choose a framework and create the project (simple_web_app, flask_app.py, or streamlit_app.py)",
      "Install necessary libraries (pip install django/flask/streamlit) and define views for displaying analysis results",
      "Use templates in Django/Flask or customize layout in Streamlit for user-friendly data presentation",
      "Test the web application in a browser and document the process in the README"
    ],
    status: "To Do"
  },
  {
    id: 7,
    title: "Create a Database System",
    description: "Develop a basic database system to understand SQL fundamentals. This project involves creating a database, defining tables, inserting data, and retrieving information using SQL queries. Key concepts include DDL operations (CREATE, ALTER, DROP), basic querying, and data filtering.",
    skills: [
      "Basic SQL syntax and statements",
      "Understanding of DDL commands",
      "Querying data using SELECT, WHERE, and ORDER BY",
      "Database Design",
      "Data Filtering"
    ],
    components: [
      "CompanyDB database",
      "Employees table",
      "Departments table",
      "Query module"
    ],
    steps: [
      "Install and set up a local SQL environment (e.g., MySQL)",
      "Create a database named CompanyDB",
      "Define two tables: Employees (ID, Name, Position, Salary) and Departments (ID, DepartmentName)",
      "Insert sample data into both tables to simulate a working dataset",
      "Write SELECT queries to retrieve and filter employee details",
      "Use ORDER BY to sort data by specified columns",
      "Experiment with ALTER TABLE to modify the schema by adding columns"
    ],
    status: "To Do"
  },
  {
    id: 8,
    title: "Manage Employee Data",
    description: "Enhance a database by implementing constraints, performing data manipulation, and using set operations. Learn how constraints ensure data integrity, DML commands update records, and set operations analyze data across tables.",
    skills: [
      "Implementing constraints (Primary Key, Foreign Key)",
      "Using DML commands (INSERT, UPDATE, DELETE)",
      "Performing set operations (UNION, INTERSECT)",
      "Data Integrity Management",
      "Database Operations"
    ],
    components: [
      "Enhanced database schema",
      "Constraint system",
      "Projects table",
      "Data manipulation module"
    ],
    steps: [
      "Add constraints to the Employees table: Primary Key on ID and Unique on Name",
      "Create a Projects table with columns ProjectID, ProjectName, and EmployeeID (Foreign Key referencing Employees.ID)",
      "Insert records into the Employees and Projects tables using INSERT INTO",
      "Update employee details such as salaries using UPDATE",
      "Remove records from tables using DELETE",
      "Use UNION to combine employee and project data",
      "Use INTERSECT to find commonalities in project assignments"
    ],
    status: "To Do"
  },
  {
    id: 9,
    title: "Analyze Employee and Project Data",
    description: "Perform data analysis on a company database to calculate statistics, manipulate strings, and apply advanced filtering. Use joins to integrate data from multiple tables and extract meaningful insights.",
    skills: [
      "Using SQL functions (aggregate, string, numeric, date)",
      "Advanced filtering (LIKE, IN, BETWEEN)",
      "Joining tables (INNER, LEFT, RIGHT, FULL OUTER)",
      "Data Analysis",
      "Query Optimization"
    ],
    components: [
      "Analysis functions",
      "Advanced filters",
      "Join operations",
      "Statistical computations"
    ],
    steps: [
      "Use aggregate functions like SUM, AVG, MIN, MAX to analyze salary and project data",
      "Apply string functions such as CONCAT to combine fields and UPPER/LOWER to format text",
      "Filter data with LIKE for patterns, IN for lists, and BETWEEN for ranges",
      "Write INNER JOIN queries to combine employee and project details",
      "Use LEFT JOIN to find employees without assigned projects",
      "Experiment with FULL OUTER JOIN to view all employees and projects together"
    ],
    status: "To Do"
  },
  {
    id: 10,
    title: "Implement and Analyze Transactions",
    description: "Implement transactions and indexing in a database to ensure data integrity, optimize performance, and analyze data. Learn how to use subqueries for complex analyses and manage data changes using transactions.",
    skills: [
      "Writing subqueries (simple and correlated)",
      "Implementing transactions (COMMIT, ROLLBACK)",
      "Creating and analyzing indexes",
      "Performance Optimization",
      "Transaction Management"
    ],
    components: [
      "Transaction system",
      "Index management",
      "Subquery module",
      "Performance analyzer"
    ],
    steps: [
      "Write subqueries to analyze data, such as employees earning above the average salary",
      "Use COMMIT and ROLLBACK to manage transactions and ensure data consistency",
      "Test ACID properties by simulating failures during transactions",
      "Create indexes on frequently queried fields, such as Name or DepartmentID",
      "Compare query execution times with and without indexes to evaluate performance"
    ],
    status: "To Do"
  },
  {
    id: 11,
    title: "Advanced SQL Features Implementation",
    description: "Explore advanced SQL features like views, stored procedures, and triggers to enhance database management. Learn to create reusable and automated solutions for common tasks.",
    skills: [
      "Creating and managing views",
      "Writing stored procedures and functions",
      "Implementing triggers for automated actions",
      "Database Automation",
      "Advanced SQL Concepts"
    ],
    components: [
      "View system",
      "Stored procedures",
      "Trigger framework",
      "Function library"
    ],
    steps: [
      "Create views for commonly accessed datasets, such as employee and project summaries",
      "Develop stored procedures for operations like adding employees or updating project statuses",
      "Write SQL functions to calculate specific metrics or transform data",
      "Implement triggers to log changes during INSERT, UPDATE, or DELETE operations",
      "Test triggers to verify automation for tasks like change tracking or notifications"
    ],
    status: "To Do"
  },
  {
    id: 12,
    title: "Exploratory Data Analysis (EDA) with Basic Statistics",
    description: "Perform EDA on a real-world dataset to summarize the data using descriptive statistics, visualize distributions with appropriate plots, and generate actionable insights.",
    skills: [
      "Descriptive statistics (mean, median, mode, variance, standard deviation)",
      "Data visualization using histograms, box plots, and scatter plots",
      "Identifying outliers, patterns, and trends",
      "Statistical Analysis",
      "Data Interpretation"
    ],
    components: [
      "Statistical analysis module",
      "Visualization system",
      "Outlier detection",
      "Pattern recognition module"
    ],
    steps: [
      "Select a dataset with numerical and categorical variables (e.g., customer purchase data, housing prices)",
      "Compute basic summary statistics: central tendency (mean, median, mode) and dispersion (range, variance, standard deviation)",
      "Create histograms to visualize distributions of numerical variables",
      "Generate box plots to identify outliers in the data",
      "Plot scatter plots to analyze relationships between numerical variables",
      "Analyze distributions, patterns, and outliers, and document key insights"
    ],
    status: "To Do"
  },
  {
    id: 13,
    title: "Linear Regression with Gradient Descent",
    description: "Implement linear regression from scratch using gradient descent, visualize the cost function convergence, and understand the underlying mathematical principles.",
    skills: [
      "Linear regression fundamentals",
      "Gradient descent optimization",
      "Python programming for numerical computations",
      "Visualization techniques",
      "Mathematical modeling"
    ],
    components: [
      "Linear regression implementation",
      "Gradient descent optimizer",
      "Cost function calculator",
      "Visualization module"
    ],
    steps: [
      "Review the theory of linear regression and gradient descent",
      "Select a dataset with features and a target variable (e.g., housing prices, salary vs. experience)",
      "Implement linear regression from scratch using Python",
      "Define the cost function (Mean Squared Error) and initialize model parameters",
      "Implement the gradient descent algorithm to iteratively minimize the cost function",
      "Experiment with different learning rates to observe the convergence behavior",
      "Plot the cost function over iterations to visualize convergence",
      "Fit the regression line to the dataset and analyze the results"
    ],
    status: "To Do"
  },
  {
    id: 14,
    title: "Dimensionality Reduction with Principal Component Analysis (PCA)",
    description: "Apply PCA to a high-dimensional dataset to reduce dimensions, visualize results, and evaluate the trade-offs between dimensionality reduction and information retention.",
    skills: [
      "Understanding PCA concepts (eigenvalues, eigenvectors)",
      "Data preprocessing (standardization)",
      "Visualization of high-dimensional data",
      "Dimensionality reduction techniques",
      "Trade-off analysis"
    ],
    components: [
      "PCA implementation",
      "Data standardizer",
      "Visualization system",
      "Variance analyzer"
    ],
    steps: [
      "Review the mathematical foundation of PCA",
      "Select a high-dimensional dataset (e.g., image data, sensor data)",
      "Standardize the dataset to normalize feature scales",
      "Compute principal components using a Python library like sklearn",
      "Create a scree plot to visualize the variance explained by each principal component",
      "Reduce the dimensions of the dataset to 2D or 3D using PCA",
      "Create scatter plots to visualize the reduced dataset and observe patterns",
      "Analyze the variance retained and discuss the trade-offs of dimensionality reduction"
    ],
    status: "To Do"
  },
  {
    id: 15,
    title: "Data Cleaning and Transformation Pipeline",
    description: "Develop a Python pipeline to clean raw data, handle missing values, and transform it into an analysis-ready format.",
    skills: [
      "Data cleaning (handling missing values, removing duplicates)",
      "Data transformation (normalization, categorical encoding)",
      "Automation using Python functions",
      "Pipeline development",
      "Data validation"
    ],
    components: [
      "Data cleaning module",
      "Transformation pipeline",
      "Missing value handler",
      "Data validator"
    ],
    steps: [
      "Select a messy dataset with missing values, duplicates, and categorical variables",
      "Identify and handle missing values using mean or median imputation or by removing rows",
      "Detect and remove duplicate records from the dataset",
      "Convert columns to appropriate data types (e.g., datetime, integers, floats)",
      "Normalize numerical features using min-max scaling or standardization",
      "Encode categorical variables using one-hot encoding or label encoding",
      "Write a Python function or script to automate the data cleaning and transformation steps"
    ],
    status: "To Do"
  },
  {
    id: 16,
    title: "Visual Analysis of High-Dimensional Data",
    description: "Use advanced visualization techniques to analyze high-dimensional datasets and uncover patterns or insights.",
    skills: [
      "Advanced data visualization using Seaborn and Matplotlib",
      "Analyzing correlation and pairwise relationships",
      "Pattern detection through visual analysis",
      "High-dimensional data analysis",
      "Statistical visualization"
    ],
    components: [
      "Visualization system",
      "Correlation analyzer",
      "Pattern detector",
      "Report generator"
    ],
    steps: [
      "Select a high-dimensional dataset (e.g., customer segmentation data, gene expression data)",
      "Create pair plots to visualize pairwise relationships between features",
      "Generate a heatmap to visualize the correlation matrix among numerical variables",
      "Use violin plots to analyze the distribution of a continuous variable split by a categorical feature",
      "Identify patterns, correlations, and trends from the visualizations",
      "Document findings and insights based on the visual analyses"
    ],
    status: "To Do"
  },
  {
    id: 17,
    title: "Comprehensive EDA and Insights Presentation",
    description: "Perform a full-scale EDA on a dataset, detect outliers, conduct hypothesis testing, and present findings effectively using data storytelling techniques.",
    skills: [
      "EDA techniques (summary statistics, outlier detection)",
      "Hypothesis testing (t-tests, chi-square tests)",
      "Data storytelling and presentation skills",
      "Statistical inference",
      "Communication techniques"
    ],
    components: [
      "EDA module",
      "Statistical testing framework",
      "Visualization system",
      "Presentation generator"
    ],
    steps: [
      "Select a dataset from a relevant domain (e.g., health data, customer churn data)",
      "Compute summary statistics: central tendency and dispersion measures",
      "Detect outliers using Z-score and IQR methods",
      "Create visualizations (histograms, box plots, scatter plots) to analyze data distributions and outliers",
      "Formulate hypotheses (e.g., differences between groups) and perform statistical tests like t-tests or chi-square tests",
      "Compile findings, including visualizations and statistical test results",
      "Create a presentation using PowerPoint or Jupyter Notebook to communicate insights effectively"
    ],
    status: "To Do"
  },
  {
    id: 18,
    title: "Decision Tree and Random Forest for Classification",
    description: "Build and evaluate decision tree and random forest models to classify a real-world dataset (e.g., predicting customer churn or loan default).",
    skills: [
      "Python, scikit-learn",
      "Data Preprocessing (handling missing data, encoding categorical variables)",
      "Model Evaluation (accuracy, precision, recall, F1 score, ROC-AUC)",
      "Data Visualization (decision trees, feature importance)",
      "Classification Algorithms"
    ],
    components: [
      "Decision Tree Model",
      "Random Forest Model",
      "Evaluation Module",
      "Visualization System"
    ],
    steps: [
      "Choose a dataset with a classification task (e.g., UCI Adult dataset)",
      "Preprocess the data (handle missing values, encode categorical variables, normalize/standardize features)",
      "Build a decision tree model using scikit-learn's DecisionTreeClassifier",
      "Visualize the decision tree using plot_tree or Graphviz",
      "Build a random forest model using RandomForestClassifier",
      "Evaluate both models using cross-validation and performance metrics (accuracy, precision, recall, F1 score, ROC-AUC)",
      "Compare decision tree and random forest models based on performance metrics and feature importance"
    ],
    status: "To Do"
  },
  {
    id: 19,
    title: "KNN, Logistic Regression, and SVM for Multi-Class Classification",
    description: "Implement K-Nearest Neighbors (KNN), Logistic Regression, and Support Vector Machine (SVM) algorithms to classify a complex dataset (e.g., MNIST digit dataset) and compare their performance.",
    skills: [
      "Python, scikit-learn",
      "Data Preprocessing (standardization, train-test split)",
      "Classification Algorithms (KNN, Logistic Regression, SVM)",
      "Model Evaluation (accuracy, confusion matrix, classification report, ROC-AUC)",
      "Algorithm Comparison"
    ],
    components: [
      "KNN Classifier",
      "Logistic Regression Model",
      "SVM Implementation",
      "Evaluation Framework"
    ],
    steps: [
      "Choose a multi-class classification dataset (e.g., MNIST, Fashion MNIST)",
      "Standardize the dataset using StandardScaler",
      "Split the data into training and testing sets using train_test_split",
      "Implement KNN using KNeighborsClassifier and experiment with different values of K",
      "Implement Logistic Regression using LogisticRegression for multiclass classification",
      "Implement SVM using SVC with linear and RBF kernels",
      "Evaluate all models using metrics such as accuracy, confusion matrix, classification report, and ROC-AUC curves",
      "Compare performance using cross-validation and evaluate decision boundaries if applicable"
    ],
    status: "To Do"
  },
  {
    id: 20,
    title: "House Price Prediction with Regularization and Gradient Boosting",
    description: "Build a robust house price prediction model using regularization techniques (Lasso and Ridge Regression) and gradient boosting methods (AdaBoost, XGBoost) to minimize overfitting and improve accuracy.",
    skills: [
      "Python, scikit-learn, XGBoost",
      "Regression Algorithms (Ridge, Lasso, AdaBoost, XGBoost)",
      "Model Evaluation (RMSE, R² score, residual analysis)",
      "Feature Engineering (interaction terms, polynomial features)",
      "Hyperparameter Tuning"
    ],
    components: [
      "Regularization Models",
      "Boosting Models",
      "Feature Engineering Module",
      "Evaluation System"
    ],
    steps: [
      "Choose a regression dataset (e.g., Kaggle House Prices)",
      "Preprocess the data (handle missing values, feature scaling, encode categorical variables)",
      "Implement Ridge and Lasso regression models using Ridge and Lasso from scikit-learn",
      "Implement AdaBoost and XGBoost regression models using AdaBoostRegressor and XGBRegressor",
      "Tune hyperparameters of the boosting models for better performance",
      "Evaluate all models using RMSE and R² score",
      "Compare the performance of regularization and boosting techniques",
      "Visualize feature importance and residuals"
    ],
    status: "To Do"
  },
  {
    id: 21,
    title: "Customer Segmentation with Clustering and PCA",
    description: "Use clustering techniques (K-Means, DBSCAN) to segment customers based on their purchasing behavior and reduce the dimensions of the data using Principal Component Analysis (PCA).",
    skills: [
      "Python, scikit-learn",
      "Clustering Algorithms (K-Means, DBSCAN)",
      "Dimensionality Reduction (PCA)",
      "Evaluation Metrics (silhouette score, inertia)",
      "Customer Analytics"
    ],
    components: [
      "Clustering Models",
      "PCA Implementation",
      "Evaluation Module",
      "Visualization System"
    ],
    steps: [
      "Choose a customer segmentation dataset (e.g., Mall Customers dataset)",
      "Clean and standardize the data",
      "Apply PCA for dimensionality reduction",
      "Implement K-Means clustering using KMeans and experiment with different values of K",
      "Implement DBSCAN clustering using DBSCAN to identify noise and non-convex clusters",
      "Evaluate clusters using silhouette score and inertia",
      "Visualize the clusters using 2D/3D scatter plots after PCA reduction",
      "Present actionable insights based on customer segments"
    ],
    status: "To Do"
  },
  {
    id: 22,
    title: "Market Basket Analysis with Association Rule Learning and Ensemble Methods",
    description: "Implement association rule learning for market basket analysis and use ensemble methods (Bagging and Boosting) to refine predictions for customer behavior.",
    skills: [
      "Python, mlxtend (for Apriori algorithm)",
      "Association Rule Learning (Apriori, association rules)",
      "Ensemble Methods (Bagging, Boosting)",
      "Evaluation Metrics (support, confidence, lift)",
      "Market Analysis"
    ],
    components: [
      "Apriori Implementation",
      "Ensemble Models",
      "Rule Generator",
      "Evaluation System"
    ],
    steps: [
      "Choose a transactional dataset (e.g., Online Retail dataset)",
      "Convert transaction data into a binary matrix (itemsets)",
      "Apply the Apriori algorithm using apriori from mlxtend",
      "Generate association rules using association_rules",
      "Implement Bagging and Boosting techniques for predicting customer purchases",
      "Evaluate association rules using support, confidence, and lift",
      "Compare the performance of ensemble techniques using classification metrics",
      "Present the findings in a report or presentation with key insights from the analysis"
    ],
    status: "To Do"
  },
  {
    id: 23,
    title: "Game-Playing Agent with Q-Learning",
    description: "Build a simple game-playing agent using reinforcement learning (Q-learning) to solve a basic game environment, such as a gridworld or a simple maze.",
    skills: [
      "Python, OpenAI Gym",
      "Reinforcement Learning (Q-learning, epsilon-greedy)",
      "Environment Setup (Gridworld, Maze)",
      "Performance Evaluation (cumulative rewards, number of steps)",
      "Agent Implementation"
    ],
    components: [
      "Q-Learning Agent",
      "Game Environment",
      "Training System",
      "Performance Monitor"
    ],
    steps: [
      "Set up a basic game environment (e.g., Gridworld or Maze) using OpenAI Gym",
      "Implement the Q-learning algorithm, defining the state-action value function",
      "Define the reward structure and exploration-exploitation strategy (epsilon-greedy)",
      "Train the agent by running multiple episodes",
      "Monitor the agent's performance by plotting cumulative rewards and Q-value updates",
      "Evaluate the agent's performance by tracking the number of steps required to solve the environment",
      "Summarize the learning experiences and suggest potential improvements"
    ],
    status: "To Do"
  },
  {
    id: 24,
    title: "Neural Network for Binary Classification",
    description: "Develop a simple neural network to classify data points into two categories, such as distinguishing between spam and non-spam emails.",
    skills: [
      "Python, TensorFlow/PyTorch",
      "Neural Networks, Backpropagation",
      "Gradient Descent, Loss Functions (Cross-Entropy, MSE)",
      "Model Evaluation (accuracy, precision, recall, F1-score)",
      "Binary Classification"
    ],
    components: [
      "Neural Network Model",
      "Training Module",
      "Loss Function Implementation",
      "Evaluation System"
    ],
    steps: [
      "Implement a neural network using TensorFlow or PyTorch",
      "Use backpropagation and gradient descent for training",
      "Experiment with different loss functions: Cross-Entropy and Mean Squared Error",
      "Experiment with optimization algorithms: SGD and Adam",
      "Train the model on a dataset (e.g., spam vs non-spam emails)",
      "Evaluate the model's performance using accuracy, precision, recall, and F1-score",
      "Generate a performance report with metrics"
    ],
    status: "To Do"
  },
  {
    id: 25,
    title: "Image Classification Using CNNs",
    description: "Build and train a Convolutional Neural Network (CNN) to classify images from a dataset such as CIFAR-10 or MNIST.",
    skills: [
      "Python, TensorFlow/Keras",
      "CNN Architecture (Convolutional, Pooling, Fully Connected layers)",
      "Transfer Learning (VGG16, ResNet)",
      "Model Evaluation (accuracy, confusion matrix, precision, recall, F1-score)",
      "Image Processing"
    ],
    components: [
      "CNN Model",
      "Data Pipeline",
      "Training System",
      "Evaluation Framework"
    ],
    steps: [
      "Develop a basic CNN architecture (Convolutional, Pooling, Fully Connected layers)",
      "Optionally, implement transfer learning using pre-trained models like VGG16 or ResNet",
      "Train the CNN on CIFAR-10 or MNIST dataset",
      "Evaluate the model with accuracy, precision, recall, and F1-score",
      "Visualize model predictions with graphs (confusion matrix, accuracy plots)",
      "Report on model performance and improvement suggestions"
    ],
    status: "To Do"
  },
  {
    id: 26,
    title: "Text Prediction Using LSTM",
    description: "Develop a Long Short-Term Memory (LSTM) model to predict the next word in a sequence from a text corpus.",
    skills: [
      "Python, TensorFlow/Keras",
      "LSTM Networks",
      "Text Preprocessing (tokenization, word embeddings)",
      "Model Evaluation (accuracy, perplexity)",
      "Sequence Modeling"
    ],
    components: [
      "LSTM Model",
      "Text Preprocessor",
      "Training Pipeline",
      "Prediction System"
    ],
    steps: [
      "Preprocess the text data (cleaning, tokenizing, creating sequences)",
      "Use word embeddings like Word2Vec or GloVe to represent words numerically",
      "Build an LSTM model to predict the next word in a sentence",
      "Train the model on a text corpus",
      "Evaluate the model using accuracy and perplexity",
      "Provide a performance report with evaluation metrics"
    ],
    status: "To Do"
  },
  {
    id: 27,
    title: "Sentiment Analysis Using BERT",
    description: "Develop a sentiment analysis model using the BERT (Bidirectional Encoder Representations from Transformers) model.",
    skills: [
      "Python, HuggingFace Transformers",
      "Pre-trained Models (BERT)",
      "NLP Tasks (Sentiment Analysis, Named Entity Recognition)",
      "Model Evaluation (precision, recall, F1-score, accuracy)",
      "Fine-tuning Techniques"
    ],
    components: [
      "BERT Model",
      "Fine-tuning Module",
      "Sentiment Analyzer",
      "Evaluation Framework"
    ],
    steps: [
      "Fine-tune the BERT model on a custom sentiment dataset (e.g., product reviews)",
      "Implement additional NLP tasks like Named Entity Recognition (NER)",
      "Train the model for sentiment classification",
      "Evaluate the model using precision, recall, F1-score, and accuracy",
      "Visualize sentiment predictions and NER results",
      "Provide a performance report with metrics and insights"
    ],
    status: "To Do"
  },
  {
    id: 28,
    title: "Text Generation with GANs",
    description: "Build a Generative Adversarial Network (GAN) for generating coherent text sequences.",
    skills: [
      "Python, TensorFlow/Keras",
      "GANs (Generator, Discriminator)",
      "Text Generation, Sequence Modeling",
      "Evaluation Metrics (BLEU score, human evaluation)",
      "Model Architecture Design"
    ],
    components: [
      "Generator Network",
      "Discriminator Network",
      "Training Pipeline",
      "Evaluation System"
    ],
    steps: [
      "Prepare a small text corpus for GAN training",
      "Develop the Generator and Discriminator networks",
      "Train the GAN to generate coherent text sequences",
      "Evaluate the generated text using human evaluation techniques",
      "Optionally, use BLEU score for text evaluation",
      "Provide examples of generated text and evaluation results"
    ],
    status: "To Do"
  },
  {
    id: 29,
    title: "Image Compression with VAEs",
    description: "Develop a Variational Autoencoder (VAE) to compress images by reducing their dimensionality while preserving key features.",
    skills: [
      "Python, TensorFlow/Keras",
      "Variational Autoencoders (VAE)",
      "Image Compression",
      "Reconstruction Error (MSE, visualizations)",
      "Latent Space Modeling"
    ],
    components: [
      "VAE Model",
      "Encoder Network",
      "Decoder Network",
      "Evaluation Module"
    ],
    steps: [
      "Train a VAE on an image dataset (e.g., CIFAR-10, MNIST)",
      "Experiment with different latent space dimensions to balance compression and quality",
      "Evaluate the VAE using reconstruction error (MSE)",
      "Visualize the reconstructed images and latent space",
      "Provide a performance report with evaluation metrics"
    ],
    status: "To Do"
  },
  {
    id: 30,
    title: "Deploying an Image Classification Model",
    description: "Deploy an image classification model using TensorFlow Serving or FastAPI, making it accessible through an API.",
    skills: [
      "Python, TensorFlow/FastAPI",
      "Model Deployment",
      "SHAP (SHapley Additive Explanations)",
      "Real-time Predictions",
      "API Development"
    ],
    components: [
      "Deployment System",
      "API Interface",
      "Model Interpreter",
      "Performance Monitor"
    ],
    steps: [
      "Train an image classification model (e.g., CNN) on a dataset (e.g., CIFAR-10)",
      "Implement SHAP to interpret the model's predictions",
      "Deploy the model using TensorFlow Serving or FastAPI to create an API for real-time predictions",
      "Test the API with live data and evaluate predictions",
      "Provide a report with model interpretation and API usage"
    ],
    status: "To Do"
  },
  {
    id: 31,
    title: "End-to-End Deep Learning Solution",
    description: "Develop a comprehensive end-to-end deep learning solution that integrates multiple techniques covered throughout the course.",
    skills: [
      "Python, TensorFlow/PyTorch",
      "Image Classification, Text Analysis",
      "Model Evaluation",
      "Model Deployment",
      "System Integration"
    ],
    components: [
      "Multiple Deep Learning Models",
      "Integration Framework",
      "Deployment System",
      "Evaluation Module"
    ],
    steps: [
      "Choose a real-world use case (e.g., e-commerce recommendation or health diagnosis)",
      "Integrate multiple deep learning techniques (CNNs for image classification, Transformers or BERT for text analysis)",
      "Train and evaluate models for both image and text data",
      "Deploy the solution and make it accessible for both image and text analysis",
      "Present the project with a demonstration, evaluation metrics, and performance analysis",
      "Provide a final report with insights and recommendations"
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
                    <li key={index}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: step.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    </li>
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
