// module1.jsx
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ModuleDropdown from "../../../Elements/Moduledropdown/moduledropdown";
import ModuleSwitcher from "../../../Elements/Moduleselector/moduleselector";
import ModuleDescription from "../../../Elements/Moduledescription/moduledescription";

// Module content based on track
const moduleContent = {
  fullStack: {
    title: "Essential Developer Tools Mastery",
    subtitle: "Comprehensive Guide to Modern Development Workflows",
    description:
      "A comprehensive program covering critical development tools and platforms to enhance productivity, collaboration, and project management.",

    learningOutcomes: [
      "Master configuration and optimization of development tools",
      "Implement effective version control and collaboration strategies",
      "Develop proficiency in project management and tracking",
      "Understand cloud-based development environments",
      "Improve workflow efficiency and team collaboration",
    ],

    prerequisites: [
      "Basic computer literacy",
      "Fundamental programming concepts",
      "Familiarity with text editors",
    ],

    duration: "6 weeks",
    skillLevel: "Beginner to Intermediate",

    highlightText:
      "Transform your development workflow with industry-standard tools and best practices",

    sections: [
      {
        title: "1. Visual Studio Code (VSCode)",
        status: "To Do",
        videoUrl: "https://drive.google.com/file/d/1n18CvhUDVzDBfWmR3Q5ICaCCuxDUqioA/view?usp=drive_link",
        slidesUrl: "https://example.com/vscode-slides",
        topics: [
          "Installation and Initial Setup",
          "User Interface Overview",
          "Workspace Management",
          "File and Folder Navigation",
          "Integrated Terminal Usage",
          "Essential Extensions Installation",
          "Live Server for Web Development",
          "Code Runner for Multiple Languages",
          "Prettier for Code Formatting",
          "Theme and Personalization",
          "Keyboard Shortcuts and Productivity Tips",
          "Debugging Techniques",
          "Version Control Integration",
          "Remote Development Options",
          "Settings Synchronization",
        ],
      },
      {
        title: "2. Git Version Control",
        status: "To Do",
        videoUrl: "https://drive.google.com/file/d/13Pu-85Am494dWeabJ4K476b0F8mrU5F7/view?usp=drive_link",
        slidesUrl: "https://example.com/git-slides",
        topics: [
          "Git Installation Process",
          "Global Configuration Setup",
          "Understanding Version Control Concepts",
          "Repository Initialization",
          "Basic Git Commands",
          "Staging and Committing Changes",
          "Branch Creation and Management",
          "Merging and Rebasing, Conflict Resolution",
          "Stashing Changes",
          "Understanding .gitignore",
          "Remote Repository Interactions",
          "Advanced Git Techniques",
        ],
      },
      {
        title: "3. GitHub Platform",
        status: "To Do",
        videoUrl: "https://drive.google.com/file/d/1LjTFvwdkcKgBgQN5VQzQReuaCk8B4tj8/view?usp=sharing",
        slidesUrl: "https://example.com/github-slides",
        topics: [
          "Account Creation and Setup",
          "Repository Management",
          "Public vs Private Repositories",
          "README and Documentation",
          "Collaboration Workflows",
          "Pull Request Process",
          "Code Review Techniques",
          "Branch Protection Rules",
          "Project Management Tools",
          "Issue Tracking",
          "Organizational Account Management",
          "Team Collaboration Features",
          "Security Features and Best Practices",
        ],
      },
      {
        title: "4. GitHub Codespaces",
        status: "To Do",
        videoUrl: "https://drive.google.com/file/d/19vlKMCM9S6YlcAyFsxeisnx6DTxsA2Yh/view?usp=sharing",
        slidesUrl: "https://example.com/codespaces-slides",
        topics: [
          "What are GitHub Codespaces",
          "Cloud Development Environment Concepts",
          "Codespace Creation and Configuration",
          "Development Container Customization",
          "Browser-based Development",
          "Performance Considerations",
          "Collaborative Coding",
          "Environment Synchronization",
          "Workflow Optimization",
          "Resource Management",
        ],
      },
      {
        title: "5. Jira Project Management",
        status: "To Do",
        videoUrl: "https://drive.google.com/file/d/1JYD3AnOPimZTAg43MSr-KCEJjFrTz7iX/view?usp=sharing",
        slidesUrl: "https://example.com/jira-slides",
        topics: [
          "Project management software",
        "Digital workspace for tracking work",
        "Used by teams to organize and manage projects",
        // "Created by Atlassian",
        // "Supports Agile methodologies",
        "Projects",
        "Issues (tasks)",
        // "Boards (Kanban or Scrum)",
        // "Workflows",
        "Logging into the platform",
        "Viewing assigned tasks",
        "Statuses: To Do, In Progress, Done",
        "Updating task status",
        "Adding comments",
        "Attaching files",
        "Marking tasks as complete",
        "Always update task status",
        "Add clear comments",
        "Keep tasks specific",
        "Use assigned tags",
        "Meet deadlines",
        "Communicate with team",
        // "Epic: Large body of work",
        // "Story: Specific task or feature",
        // "Sprint: Fixed time period for completing work",
        // "Backlog: List of pending tasks",
        // "Assignee: Person responsible for task"
        ],
      },
    ],
  },
  dataScience: {
    title: "Essential Developer Tools Mastery",
    subtitle: "Comprehensive Guide to Modern Development Workflows",
    description:
      "A comprehensive program covering critical development tools and platforms to enhance productivity, collaboration, and project management.",

    learningOutcomes: [
      "Master configuration and optimization of development tools",
      "Implement effective version control and collaboration strategies",
      "Develop proficiency in project management and tracking",
      "Understand cloud-based development environments",
      "Improve workflow efficiency and team collaboration",
    ],

    prerequisites: [
      "Basic computer literacy",
      "Fundamental programming concepts",
      "Familiarity with text editors",
    ],

    duration: "6 weeks",
    skillLevel: "Beginner to Intermediate",

    highlightText:
      "Transform your development workflow with industry-standard tools and best practices",

      sections: [
        {
          title: "1. Visual Studio Code (VSCode)",
          status: "To Do",
          videoUrl: "https://drive.google.com/file/d/1n18CvhUDVzDBfWmR3Q5ICaCCuxDUqioA/view?usp=sharing",
          slidesUrl: "https://example.com/vscode-slides",
          topics: [
            "Installation and Initial Setup",
            "User Interface Overview",
            "Workspace Management",
            "File and Folder Navigation",
            "Integrated Terminal Usage",
            "Essential Extensions Installation",
            "Live Server for Web Development",
            "Code Runner for Multiple Languages",
            "Prettier for Code Formatting",
            "Theme and Personalization",
            "Keyboard Shortcuts and Productivity Tips",
            "Debugging Techniques",
            "Version Control Integration",
            "Remote Development Options",
            "Settings Synchronization",
          ],
        },
        {
          title: "2. Git Version Control",
          status: "To Do",
          videoUrl: "https://drive.google.com/file/d/13Pu-85Am494dWeabJ4K476b0F8mrU5F7/view?usp=sharing",
          slidesUrl: "https://example.com/git-slides",
          topics: [
            "Git Installation Process",
            "Global Configuration Setup",
            "Understanding Version Control Concepts",
            "Repository Initialization",
            "Basic Git Commands",
            "Staging and Committing Changes",
            "Branch Creation and Management",
            "Merging and Rebasing, Conflict Resolution",
            "Stashing Changes",
            "Understanding .gitignore",
            "Remote Repository Interactions",
            "Advanced Git Techniques",
          ],
        },
        {
          title: "3. GitHub Platform",
          status: "To Do",
          videoUrl: "https://drive.google.com/file/d/1LjTFvwdkcKgBgQN5VQzQReuaCk8B4tj8/view?usp=sharing",
          slidesUrl: "https://example.com/github-slides",
          topics: [
            "Account Creation and Setup",
            "Repository Management",
            "Public vs Private Repositories",
            "README and Documentation",
            "Collaboration Workflows",
            "Pull Request Process",
            "Code Review Techniques",
            "Branch Protection Rules",
            "Project Management Tools",
            "Issue Tracking",
            "Organizational Account Management",
            "Team Collaboration Features",
            "Security Features and Best Practices",
          ],
        },
        {
          title: "4. GitHub Codespaces",
          status: "To Do",
          videoUrl: "https://drive.google.com/file/d/19vlKMCM9S6YlcAyFsxeisnx6DTxsA2Yh/view?usp=sharing",
          slidesUrl: "https://example.com/codespaces-slides",
          topics: [
            "What are GitHub Codespaces",
            "Cloud Development Environment Concepts",
            "Codespace Creation and Configuration",
            "Development Container Customization",
            "Browser-based Development",
            "Performance Considerations",
            "Collaborative Coding",
            "Environment Synchronization",
            "Workflow Optimization",
            "Resource Management",
          ],
        },
        {
          title: "5. Jira Project Management",
          status: "To Do",
          videoUrl: "https://drive.google.com/file/d/1JYD3AnOPimZTAg43MSr-KCEJjFrTz7iX/view?usp=sharing",
          slidesUrl: "https://example.com/jira-slides",
          topics: [
            "Project management software",
          "Digital workspace for tracking work",
          "Used by teams to organize and manage projects",
          // "Created by Atlassian",
          // "Supports Agile methodologies",
          "Projects",
          "Issues (tasks)",
          // "Boards (Kanban or Scrum)",
          // "Workflows",
          "Logging into the platform",
          "Viewing assigned tasks",
          "Statuses: To Do, In Progress, Done",
          "Updating task status",
          "Adding comments",
          "Attaching files",
          "Marking tasks as complete",
          "Always update task status",
          "Add clear comments",
          "Keep tasks specific",
          "Use assigned tags",
          "Meet deadlines",
          "Communicate with team",
          // "Epic: Large body of work",
          // "Story: Specific task or feature",
          // "Sprint: Fixed time period for completing work",
          // "Backlog: List of pending tasks",
          // "Assignee: Person responsible for task"
          ],
        },
      ],
  },
};

const useStyles = makeStyles({
  moduleContainer: {
    width: "100%",
    padding: "24px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    gap: "24px",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      gap: "16px",
    },
  },
  header: {
    marginBottom: "24px",
  },
  moduleTitle: {
    color: "#333",
    fontWeight: "500!important",
    marginBottom: "24px!important",
    "@media (max-width: 768px)": {
      fontSize: "1.75rem!important",
      marginBottom: "16px!important",
    },
  },
  contentWrapper: {
    width: "100%",
    padding: "0px 20px",
    "@media (max-width: 768px)": {
      padding: "0px",
    },
  },
});

const Module1 = () => {
  const classes = useStyles();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const userTrack = localStorage.getItem("userTrack") || "fullStack";
  const content = moduleContent[userTrack];

  const handleAccordionChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box className={classes.moduleContainer}>
      <Box className={classes.header}>
        <ModuleSwitcher currentModule="/curriculam/module1" />
        <Typography variant="h4" className={classes.moduleTitle}>
          {content.title}
        </Typography>
      </Box>

      <Box className={classes.content}>
        <ModuleDescription
          moduleData={{
            title: content.title,
            subtitle: content.subtitle,
            description: content.description,
            learningOutcomes: content.learningOutcomes,
            prerequisites: content.prerequisites,
            duration: content.duration,
            skillLevel: content.skillLevel,
            highlightText: content.highlightText,
          }}
        />

        <Box className={classes.contentWrapper}>
          <Box className={classes.dropdownSection}>
            {content.sections.map((section, index) => (
              <ModuleDropdown
                key={index}
                index={index}
                title={section.title}
                status={section.status}
                topics={section.topics}
                videoUrl={section.videoUrl}
                slidesUrl={section.slidesUrl}
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

export default Module1;
