// import React from 'react';
// import { Paper, Typography, Box, LinearProgress, Button } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useStyles } from './styles';

// const Card2 = ({ title, progress, icon: IconComponent, onProceed }) => {
//   const classes = useStyles();

//   return (
//     <Paper elevation={0} className={classes.courseCard}>
//       <Box className={classes.cardHeader}>
//         <Box className={classes.iconContainer}>
//           <IconComponent className={classes.icon} />
//         </Box>
//         <Typography variant="h6" className={classes.courseTitle}>
//           {title}
//         </Typography>
//       </Box>

//       <Box className={classes.progressContainer}>
//         <Box className={classes.progressHeader}>
//           <Typography className={classes.progressLabel}>
//             Progress
//           </Typography>
//           <Typography className={classes.progressValue}>
//             {progress}%
//           </Typography>
//         </Box>
//         <LinearProgress 
//           variant="determinate" 
//           value={progress} 
//           className={classes.progressBar}
//           classes={{
//             bar: classes.progressBarFill
//           }}
//         />
//       </Box>
      
//       <Button
//         variant="text"
//         endIcon={<ArrowForwardIcon />}
//         className={classes.proceedButton}
//         onClick={onProceed}
//       >
//         Continue Learning
//       </Button>
//     </Paper>
//   );
// };

// export default Card2;
// src/Elements/Card2/card2.jsx
import React, { useState } from 'react';
import { Paper, Typography, Box, LinearProgress, Button, Tooltip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useStyles } from './styles';

const Card2 = ({ title, progress, icon: IconComponent, description, onProceed }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <Paper elevation={0} className={classes.courseCard}>
      <Box className={classes.cardHeader}>
        <Box className={classes.iconContainer}>
          <IconComponent className={classes.icon} />
        </Box>
        <Typography variant="h6" className={classes.courseTitle}>
          {title}
        </Typography>
      </Box>

      <Typography variant="body2" className={classes.description}>
        {description}
      </Typography>

      <Box className={classes.progressContainer}>
        <Box className={classes.progressHeader}>
          <Typography className={classes.progressLabel}>
            Progress
          </Typography>
          <Typography className={classes.progressValue}>
            {progress}%
          </Typography>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          className={classes.progressBar}
          classes={{
            bar: classes.progressBarFill
          }}
        />
      </Box>
      
      <Tooltip title="Continue where you left off" placement="top" arrow>
        <Button
          variant="contained"
          className={`${classes.proceedButton} ${isHovered ? classes.buttonHovered : ''} ${isPressed ? classes.buttonPressed : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsPressed(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={onProceed}
          startIcon={<PlayArrowIcon />}
          endIcon={<ArrowForwardIcon className={classes.arrowIcon} />}
        >
          Continue Learning
        </Button>
      </Tooltip>
    </Paper>
  );
};

export default Card2;