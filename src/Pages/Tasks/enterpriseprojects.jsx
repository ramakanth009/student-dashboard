import React from 'react';
import { Box, Typography, Card, CardContent, Chip, IconButton, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Code, Users, Phone, ShoppingBag } from 'lucide-react';

const useStyles = makeStyles(() => ({
  projectsContainer: {
    padding: '20px',
    '@media (max-width: 600px)': {
      padding: '16px',
    },
  },
  projectCard: {
    marginBottom: '20px',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  },
  iconContainer: {
    marginRight: '16px',
    padding: '12px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 600,
    fontSize: '1.25rem',
    color: '#2d3748',
  },
  description: {
    color: '#4a5568',
    marginBottom: '16px',
    lineHeight: 1.6,
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px',
  },
  chip: {
    borderRadius: '8px',
  },
  header: {
    marginBottom: '24px',
  },
  subheader: {
    color: '#4a5568',
    marginTop: '8px',
  }
}));

const enterpriseProjects = [
  {
    id: 1,
    title: 'CRM System',
    description: 'Advanced Customer Relationship Management system with AI-powered insights, automated workflow management, and comprehensive analytics dashboard.',
    icon: <Users />,
    iconBg: '#e3f2fd',
    iconColor: '#1976d2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
    features: ['Lead Tracking', 'Sales Pipeline', 'Analytics']
  },
  {
    id: 2,
    title: 'ATS with Resume Scoring',
    description: 'Intelligent Applicant Tracking System featuring ML-based resume scoring, candidate matching, and automated recruitment workflow.',
    icon: <Code />,
    iconBg: '#f3e5f5',
    iconColor: '#9c27b0',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    features: ['AI Scoring', 'Candidate Matching', 'Interview Scheduling']
  },
  {
    id: 3,
    title: 'Call Audit System',
    description: 'Voice call analysis platform with real-time transcription, sentiment analysis, and compliance monitoring capabilities.',
    icon: <Phone />,
    iconBg: '#e8f5e9',
    iconColor: '#2e7d32',
    technologies: ['Python', 'AWS', 'React', 'ElasticSearch'],
    features: ['Speech-to-Text', 'Sentiment Analysis', 'Compliance Checks']
  },
  {
    id: 4,
    title: 'Marketplace Solutions',
    description: 'Custom marketplace applications with features like real-time inventory management, payment processing, and vendor management.',
    icon: <ShoppingBag />,
    iconBg: '#fff3e0',
    iconColor: '#ef6c00',
    technologies: ['React', 'Node.js', 'MySQL', 'Redux'],
    features: ['Multi-vendor Support', 'Payment Gateway', 'Analytics']
  }
];

const EnterpriseProjects = () => {
  const classes = useStyles();

  return (
    <Box className={classes.projectsContainer}>
      <Box className={classes.header}>
        <Typography variant="h5" gutterBottom>
          Enterprise Projects Showcase
        </Typography>
        <Typography className={classes.subheader}>
          Advanced projects you'll be capable of building after completing the course
        </Typography>
      </Box>

      {enterpriseProjects.map((project) => (
        <Card key={project.id} className={classes.projectCard}>
          <CardContent>
            <Box className={classes.cardHeader}>
              <Box 
                className={classes.iconContainer} 
                style={{ 
                  backgroundColor: project.iconBg,
                  color: project.iconColor
                }}
              >
                {project.icon}
              </Box>
              <Typography className={classes.title}>
                {project.title}
              </Typography>
            </Box>

            <Typography className={classes.description}>
              {project.description}
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
              Key Technologies:
            </Typography>
            <Box className={classes.chipContainer}>
              {project.technologies.map((tech) => (
                <Chip 
                  key={tech}
                  label={tech}
                  className={classes.chip}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Box>

            <Typography variant="subtitle2" style={{ marginTop: '16px' }} gutterBottom>
              Core Features:
            </Typography>
            <Box className={classes.chipContainer}>
              {project.features.map((feature) => (
                <Chip 
                  key={feature}
                  label={feature}
                  className={classes.chip}
                  size="small"
                  color="primary"
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default EnterpriseProjects;