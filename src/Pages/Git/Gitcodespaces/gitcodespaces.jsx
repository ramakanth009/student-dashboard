import React, { useState, useEffect } from 'react';
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
  CardContent
} from '@mui/material';
import {
  Code,
  ExpandMore,
  ExpandLess,
  CloudQueue,
  Terminal,
  Settings,
  Share,
  Storage,
  GitHub
} from '@mui/icons-material';
import { useStyles } from './styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language }) => (
  <SyntaxHighlighter 
    language={language} 
    style={atomDark}
    customStyle={{
      borderRadius: '8px',
      margin: '10px 0',
    }}
  >
    {code}
  </SyntaxHighlighter>
);

const STORAGE_KEY = 'git-codespaces-completed-steps';

const GitCodespaces = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [expanded, setExpanded] = useState({});
  const [completedSteps, setCompletedSteps] = useState(new Set());

  useEffect(() => {
    const savedSteps = localStorage.getItem(STORAGE_KEY);
    if (savedSteps) {
      try {
        const savedStepsArray = JSON.parse(savedSteps);
        setCompletedSteps(new Set(savedStepsArray));
      } catch (error) {
        console.error('Error loading completed steps from localStorage:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handleExpand = (section) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const markStepComplete = (index) => {
    const newCompletedSteps = new Set([...completedSteps, index]);
    setCompletedSteps(newCompletedSteps);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...newCompletedSteps]));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }

    if (index < codespaceSteps.length - 1) {
      setActiveStep(index + 1);
    }
  };

  const codespaceSteps = [
    {
      label: 'Creating Codespace',
      icon: <CloudQueue />,
      content: {
        description: [
          'Access your GitHub repository',
          'Click the green "Code" button',
          'Select "Create codespace on main"',
          'Wait for environment initialization'
        ],
        tip: 'You can create codespaces from any branch, PR, or commit',
        commands: `# Navigate to your repository
gh repo view

# Create a new codespace
gh codespace create

# List your codespaces
gh codespace list

# View codespace details
gh codespace view`
      }
    },
    {
      label: 'Environment Setup',
      icon: <Settings />,
      content: {
        description: [
          'Configure development container',
          'Set up extensions and tools',
          'Configure environment variables',
          'Customize VS Code settings'
        ],
        tip: 'Use devcontainer.json to define your development environment',
        commands: `# Create dev container config
mkdir .devcontainer
touch .devcontainer/devcontainer.json

# Configure environment
{
  "name": "Project Dev Container",
  "image": "mcr.microsoft.com/devcontainers/base:latest",
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint"
      ]
    }
  }
}`
      }
    },
    {
      label: 'Development Flow',
      icon: <Terminal />,
      content: {
        description: [
          'Use VS Code in browser',
          'Access integrated terminal',
          'Run development servers',
          'Work with source control'
        ],
        tip: 'Codespaces provides a full VS Code experience in your browser',
        commands: `# Start development server
npm run dev

# Access terminal
gh codespace ssh

# View forwarded ports
gh codespace ports

# Push changes
git push origin main`
      }
    },
    {
      label: 'Collaboration',
      icon: <Share />,
      content: {
        description: [
          'Share codespace with team',
          'Manage access permissions',
          'Review code together',
          'Share forwarded ports'
        ],
        tip: 'Enable real-time collaboration by sharing your codespace',
        commands: `# Share codespace
gh codespace share

# List shared codespaces
gh codespace list

# Configure sharing
gh codespace edit

# Stop sharing
gh codespace stop`
      }
    },
    {
      label: 'Resource Management',
      icon: <Storage />,
      content: {
        description: [
          'Monitor resource usage',
          'Manage storage space',
          'Configure machine type',
          'Control costs'
        ],
        tip: 'Choose machine type based on your project requirements',
        commands: `# View resource usage
gh codespace info

# Change machine type
gh codespace edit

# Check storage
gh codespace list --json diskUsage

# Stop codespace
gh codespace stop`
      }
    },
    {
      label: 'Performance',
      icon: <GitHub />,
      content: {
        description: [
          'Use prebuilds for faster startup',
          'Optimize container size',
          'Manage extensions',
          'Configure dotfiles'
        ],
        tip: 'Prebuilds significantly reduce codespace startup time',
        commands: `# Configure prebuild
gh repo edit --enable-prebuilds

# View prebuild status
gh run list

# Configure dotfiles
gh codespace edit --dotfiles

# Clear cached data
gh codespace rebuild`
      }
    }
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
            {expanded[`commands-${step.label}`] ? <ExpandLess /> : <ExpandMore />}
          </Button>
          <Collapse in={expanded[`commands-${step.label}`]}>
            <CodeBlock
              language="bash"
              code={step.content.commands}
            />
          </Collapse>
        </>
      )}

      <Box className={classes.actionsContainer}>
        {!completedSteps.has(codespaceSteps.indexOf(step)) && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => markStepComplete(codespaceSteps.indexOf(step))}
            className={classes.completeButton}
          >
            Mark as Complete
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        GitHub Codespaces Guide - Cloud Development
      </Typography>

      <Paper elevation={0} className={classes.paper}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {codespaceSteps.map((step, index) => (
            <Step key={step.label} completed={completedSteps.has(index)}>
              <StepLabel
                onClick={() => handleStepClick(index)}
                className={classes.stepLabel}
                StepIconComponent={() => (
                  <Box className={classes.iconContainer}>
                    {step.icon}
                  </Box>
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
              <StepContent>
                {renderStepContent(step)}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </Box>
  );
};

export default GitCodespaces;