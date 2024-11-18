import React, { useState, useEffect } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Button,
  Paper,
  Collapse,
  Card,
  CardContent,
} from "@mui/material";
import {
  GitHub,
  // Terminal,
  Code,
  AccountTree,
  ExpandMore,
  ExpandLess,
  Settings,
  Security,
  Build,
  Cloud,
} from "@mui/icons-material";
import { useStyles } from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import GitCodespaces from "./Gitcodespaces/gitcodespaces";


const CodeBlock = ({ code, language }) => (
  <SyntaxHighlighter
    language={language}
    style={atomDark}
    customStyle={{
      borderRadius: "8px",
      margin: "10px 0",
    }}
  >
    {code}
  </SyntaxHighlighter>
);

const STORAGE_KEY = "git-guide-completed-steps";

const Git = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState({});
  const [completedSteps, setCompletedSteps] = useState(new Set());

  // Load completed steps from localStorage on component mount
  useEffect(() => {
    const savedSteps = localStorage.getItem(STORAGE_KEY);
    if (savedSteps) {
      try {
        const savedStepsArray = JSON.parse(savedSteps);
        setCompletedSteps(new Set(savedStepsArray));
      } catch (error) {
        console.error(
          "Error loading completed steps from localStorage:",
          error
        );
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handleExpand = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const markStepComplete = (index) => {
    const newCompletedSteps = new Set([...completedSteps, index]);
    setCompletedSteps(newCompletedSteps);

    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...newCompletedSteps]));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }

    if (index < gitSteps.length - 1) {
      setActiveStep(index + 1);
    }
  };

  const gitSteps = [
    {
      label: "Creating GitHub Account",
      icon: <GitHub />,
      content: {
        description: [
          "Visit GitHub.com",
          'Click on "Sign up" button',
          "Fill in required details:",
          "- Username",
          "- Email address",
          "- Password",
          "Verify your email address",
        ],
        tip: "Choose a professional username as it will be visible in your repository URLs",
        commands: null,
      },
    },
    {
      label: "Creating Your First Repository",
      icon: <AccountTree />,
      content: {
        description: [
          'Click the "+" icon in the top right corner',
          'Select "New repository"',
          "Fill in repository details:",
          "- Repository name",
          "- Description (optional)",
          "- Public/Private setting",
          "- Initialize with README",
        ],
        tip: "Use a clear and descriptive repository name",
        commands: `# Initialize new repository
git init

# Add remote origin
git remote add origin https://github.com/username/repository.git

# Create and switch to main branch
git branch -M main

# Add files
git add .

# Commit changes
git commit -m "Initial commit"

# Push to remote repository
git push -u origin main`,
      },
    },
    {
      label: "Installing Git",
      icon: <Build />,
      content: {
        description: [
          "Download Git from git-scm.com",
          "Run the installer with recommended settings",
          "Verify installation in terminal/command prompt:",
          "- git --version",
        ],
        tip: "Always use the latest stable version of Git",
        commands: `# Windows (using winget)
winget install -e --id Git.Git

# macOS (using Homebrew)
brew install git

# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git`,
      },
    },
    {
      label: "Basic Git Configuration",
      icon: <Settings />,
      content: {
        description: [
          "Set up your identity",
          "Configure default editor",
          "Set default branch name",
          "Configure line endings",
        ],
        tip: "Use the same email address as your GitHub account",
        commands: `# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default editor (e.g., VS Code)
git config --global core.editor "code --wait"

# Set default branch name
git config --global init.defaultBranch main

# Configure line endings (Windows)
git config --global core.autocrlf true`,
      },
    },
    {
      label: "SSH Key Setup",
      icon: <Security />,
      content: {
        description: [
          "Generate SSH key pair",
          "Add SSH key to ssh-agent",
          "Copy public key to GitHub",
          "Test SSH connection",
        ],
        tip: "Use a strong passphrase for your SSH key",
        commands: `# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Start ssh-agent
eval "$(ssh-agent -s)"

# Add SSH key to ssh-agent
ssh-add ~/.ssh/id_ed25519

# Test SSH connection
ssh -T git@github.com`,
      },
    },
    {
      label: "Working with Remote Repositories",
      icon: <Cloud />,
      content: {
        description: [
          "Clone repositories",
          "Manage remote connections",
          "Fetch and pull changes",
          "Push local changes",
        ],
        tip: "Always pull before pushing to avoid conflicts",
        commands: `# Clone a repository
git clone git@github.com:username/repository.git

# Add remote
git remote add origin git@github.com:username/repository.git

# Fetch changes
git fetch origin

# Pull changes
git pull origin main

# Push changes
git push origin main`,
      },
    },
  ];

  const renderStepContent = (step) => (
    <Box className={classes.stepContentBox}>
      <Typography variant="body1" className={classes.stepContent}>
        {step.content.description.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </Typography>

      {step.content.tip && (
        <Card className={classes.tipCard}>
          <CardContent>
            <Typography variant="subtitle2" color="primary">
              Pro Tip: {step.content.tip}
            </Typography>
          </CardContent>
        </Card>
      )}

      {step.content.commands && (
        <>
          <Button
            variant="outlined"
            startIcon={<Code />}
            onClick={() => handleExpand(`commands-${step.label}`)}
            className={classes.expandButton}
          >
            View Commands
            {expanded[`commands-${step.label}`] ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
          </Button>
          <Collapse in={expanded[`commands-${step.label}`]}>
            <CodeBlock language="bash" code={step.content.commands} />
          </Collapse>
        </>
      )}

      <Box className={classes.actionsContainer}>
        {!completedSteps.has(gitSteps.indexOf(step)) && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => markStepComplete(gitSteps.indexOf(step))}
            className={classes.completeButton}
          >
            Mark as Complete
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Git & GitHub Guide
        </Typography>

        <Paper elevation={0} className={classes.paper}>
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {gitSteps.map((step, index) => (
              <Step key={step.label} completed={completedSteps.has(index)}>
                <StepLabel
                  onClick={() => handleStepClick(index)}
                  className={classes.stepLabel}
                  StepIconComponent={() => (
                    <Box className={classes.iconContainer}>{step.icon}</Box>
                  )}
                  optional={
                    completedSteps.has(index) && (
                      <Typography variant="caption" color="success.main">
                        Completed
                      </Typography>
                    )
                  }
                >
                  <Typography variant="h6">{step.label}</Typography>
                </StepLabel>
                <StepContent>{renderStepContent(step)}</StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </Box>
      <GitCodespaces/>
    </Box>
  );
};

export default Git;
