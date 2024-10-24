import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EditIcon from '@mui/icons-material/Edit';

// Constants
const DATA_SCIENTIST_MODULES = ['Python', 'SQL', 'ML', 'DL', 'EDA', 'Stats', 'Maths'];
const FULL_STACK_MODULES = ['Fundamentals', 'DSA', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Java', 'Springboot', 'Node & Express', 'Python & PHP', 'Database'];

const QuestionVault = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('userDetails');
  const [userInfo, setUserInfo] = useState(null);
  const [selectedModule, setSelectedModule] = useState('');
  const [questionType, setQuestionType] = useState('Class Related');
  const [question, setQuestion] = useState('');
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [indicatorActive, setIndicatorActive] = useState(true);

  useEffect(() => {
    const storedInfo = localStorage.getItem('userInfo');
    if (storedInfo) {
      setUserInfo(JSON.parse(storedInfo));
      setCurrentStep('moduleSelection');
    }
  }, []);

  const handleSubmitUserDetails = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newUserInfo = {
      name: formData.get('name'),
      email: formData.get('email'),
      program: formData.get('program')
    };
    setUserInfo(newUserInfo);
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
    setCurrentStep('moduleSelection');
  };

  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
    setCurrentStep('moduleSelection');
    setQuestion('');
    setSelectedModule('');
  };

  const handleSubmitQuestion = async () => {
    try {
      const response = await fetch('/submit_question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...userInfo,
          module: selectedModule,
          question,
          questionType
        })
      });

      if (response.ok) {
        setSuccessDialogOpen(true);
      } else {
        throw new Error('Failed to submit question');
      }
    } catch (error) {
      console.error('Error submitting question:', error);
      // You might want to show an error dialog here
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIndicatorActive(true);
    }, 500);
  };

  const renderUserDetailsForm = () => (
    <Box component="form" onSubmit={handleSubmitUserDetails} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ color: '#20a2de', mb: 3 }}>
        Welcome to Question Vault
      </Typography>
      <TextField
        fullWidth
        required
        name="name"
        label="Name"
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        required
        name="email"
        label="Email"
        type="email"
        margin="normal"
        sx={{ mb: 2 }}
      />
      <FormControl fullWidth margin="normal" sx={{ mb: 3 }}>
        <InputLabel>Program</InputLabel>
        <Select
          required
          name="program"
          label="Program"
          defaultValue=""
        >
          <MenuItem value="Data Science">Data Science</MenuItem>
          <MenuItem value="Full Stack">Full Stack Program</MenuItem>
        </Select>
      </FormControl>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{
          bgcolor: '#20a2de',
          '&:hover': {
            bgcolor: '#198c77'
          }
        }}
      >
        Get Started
      </Button>
    </Box>
  );

  const renderModuleSelection = () => (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">Select Module:</Typography>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Question Type</InputLabel>
          <Select
            value={questionType}
            label="Question Type"
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <MenuItem value="Class Related">Class Related</MenuItem>
            <MenuItem value="Project Related">Project Related</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {(userInfo?.program === 'Data Science' ? DATA_SCIENTIST_MODULES : FULL_STACK_MODULES).map((module) => (
          <Button
            key={module}
            variant="contained"
            onClick={() => {
              setSelectedModule(module);
              setCurrentStep('questionForm');
            }}
            sx={{
              m: 0.5,
              bgcolor: '#198c77',
              '&:hover': {
                bgcolor: '#20a2de'
              }
            }}
          >
            {module}
          </Button>
        ))}
      </Box>
    </Box>
  );

  const renderQuestionForm = () => (
    <Box sx={{ p: 3 }}>
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Your Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        margin="normal"
        sx={{ mb: 2 }}
      />
      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmitQuestion}
        sx={{
          mt: 2,
          bgcolor: '#20a2de',
          '&:hover': {
            bgcolor: '#198c77'
          }
        }}
      >
        Submit Question
      </Button>
    </Box>
  );

  return (
    <>
      <Button
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          width: 60,
          height: 60,
          borderRadius: '50%',
          minWidth: 'unset',
          padding: 0,
          bgcolor: '#20a2de',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            bgcolor: '#198c77',
            transform: 'scale(1.1) rotate(360deg)',
            transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
          }
        }}
        onClick={() => {
          setIsOpen(true);
          setIndicatorActive(false);
        }}
      >
        <QuestionAnswerIcon />
      </Button>

      <Fade in={indicatorActive}>
        <Box
          sx={{
            position: 'fixed',
            right: 100,
            bottom: 35,
            bgcolor: '#198c77',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: 20,
            fontSize: 18,
            fontWeight: 700,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            opacity: indicatorActive ? 1 : 0,
            transform: indicatorActive ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
            '&::after': {
              content: '""',
              display: 'inline-block',
              width: 6,
              height: 6,
              bgcolor: '#fff',
              borderRadius: '50%',
              ml: 1,
              animation: 'pulse 1.5s infinite'
            }
          }}
        >
          Ask Mate
        </Box>
      </Fade>

      <Card
        sx={{
          position: 'fixed',
          bottom: 100,
          right: 30,
          width: 400,
          maxWidth: '90vw',
          borderRadius: 3,
          overflow: 'hidden',
          transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
          transform: isOpen ? 'translateY(0)' : 'translateY(50px)',
          opacity: isOpen ? 1 : 0,
          display: isOpen ? 'block' : 'none',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Box
          sx={{
            background: 'linear-gradient(135deg, #20a2de, #198c77)',
            color: '#fff',
            p: 2.5,
            position: 'relative',
            textAlign: 'center'
          }}
        >
          <Typography variant="h6">Question Vault</Typography>
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              right: 8,
              transform: 'translateY(-50%)',
              color: 'white'
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box>
          {userInfo && currentStep !== 'userDetails' && (
            <Box sx={{ p: 2, bgcolor: '#f5f7fa' }}>
              <Typography variant="body2">Name: {userInfo.name}</Typography>
              <Typography variant="body2">Email: {userInfo.email}</Typography>
              <Typography variant="body2">Program: {userInfo.program}</Typography>
              <Button
                startIcon={<EditIcon />}
                onClick={() => setCurrentStep('userDetails')}
                size="small"
                sx={{ mt: 1, color: '#20a2de' }}
              >
                Edit Information
              </Button>
            </Box>
          )}

          {currentStep === 'userDetails' && renderUserDetailsForm()}
          {currentStep === 'moduleSelection' && renderModuleSelection()}
          {currentStep === 'questionForm' && renderQuestionForm()}
        </Box>
      </Card>
      <Dialog
        open={successDialogOpen}
        onClose={handleCloseSuccessDialog}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: 2,
            maxWidth: 400,
            width: '90%',
            p: 2
          }
        }}
      >
        <DialogTitle sx={{ 
          color: '#20a2de',
          textAlign: 'center',
          fontWeight: 600,
          pb: 1
        }}>
          Thank You!
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ 
            textAlign: 'center',
            color: '#333'
          }}>
            Your question has been submitted successfully. A trainer will contact you soon.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ 
          justifyContent: 'center',
          pt: 2 
        }}>
          <Button 
            onClick={handleCloseSuccessDialog}
            variant="contained"
            sx={{ 
              bgcolor: '#20a2de',
              '&:hover': {
                bgcolor: '#198c77'
              },
              minWidth: 100,
              textTransform: 'none'
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </>
  );
};

export default QuestionVault;