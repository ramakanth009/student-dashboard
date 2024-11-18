// // import React from "react";
// // import { Box, Typography } from "@mui/material";
// // import { useStyles } from "./styles";
// // import { useNavigate } from "react-router-dom";

// // const Module = ({ moduleNumber, title, submissionStatus }) => {
// //   const classes = useStyles();
// //   const navigate = useNavigate();

// //   const getStatusStyle = (status) => {
// //     switch (status.toLowerCase()) {
// //       case "to do":
// //         return classes.statusTodo;
// //       case "pending":
// //         return classes.statusInProgress;
// //       case "submitted":
// //         return classes.statusSubmitted;
// //       default:
// //         return classes.statusTodo;
// //     }
// //   };

// //   const handleModuleClick = () => {
// //     navigate(`/curriculam/module${moduleNumber}`);
// //   };

// //   return (
// //     <Box className={classes.moduleBox} onClick={handleModuleClick}>
// //       <Box className={classes.moduleContent}>
// //         <Box className={classes.moduleNumber}>Module: {moduleNumber}</Box>
// //         <Box className={classes.modulebox2}>
// //           <Typography variant="h5" className={classes.moduleTitle}>
// //             {title}
// //           </Typography>
// //           <Box
// //             component="span"
// //             className={`${classes.statusChip} ${getStatusStyle(
// //               submissionStatus
// //             )}`}
// //           >
// //             {submissionStatus}
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Module;

// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useStyles } from './styles';

// const Module = ({ moduleNumber, title, submissionStatus }) => {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const getStatusClassName = (status) => {
//     switch (status.toLowerCase()) {
//       case 'submitted':
//         return classes.statusSubmitted;
//       case 'pending':
//         return classes.statusPending;
//       case 'to do':
//         return classes.statusTodo;
//       default:
//         return classes.statusTodo;
//     }
//   };

//   return (
//     <Box className={classes.moduleCard}>
//       <Box className={classes.moduleContent}>
//         <Typography variant="body1" className={classes.moduleTitle}>
//           {title}
//         </Typography>
//         <Box component="span" className={classes.moduleNumber}>
//           Module {moduleNumber}
//         </Box>
//       </Box>
//       <Box component="span" className={`${classes.statusChip} ${getStatusClassName(submissionStatus)}`}>
//         {submissionStatus}
//       </Box>
//     </Box>
//   );
// };

// export default Module;
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

const Module = ({ moduleNumber, title, submissionStatus }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const getStatusClassName = (status) => {
    switch (status.toLowerCase()) {
      case 'submitted':
        return classes.statusSubmitted;
      case 'pending':
        return classes.statusPending;
      case 'to do':
        return classes.statusTodo;
      default:
        return classes.statusTodo;
    }
  };

  const handleModuleClick = () => {
        navigate(`/curriculam/module${moduleNumber}`);
      };

  return (
    <Box 
      className={classes.moduleCard}
      onClick={handleModuleClick}
      role="button"
      tabIndex={0}
    >
      <Box className={classes.moduleInner}>
        <Box className={classes.moduleContent}>
          <Typography variant="body1" className={classes.moduleTitle}>
            {title}
          </Typography>
          <Box component="span" className={classes.moduleNumber}>
            Module {moduleNumber}
          </Box>
        </Box>
        <Box component="span" className={`${classes.statusChip} ${getStatusClassName(submissionStatus)}`}>
          {submissionStatus}
        </Box>
      </Box>
    </Box>
  );
};

export default Module;