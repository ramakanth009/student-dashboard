// import React, { useCallback } from 'react';
// import { Box, Typography, Button, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { useStyles } from "./styles";

// const TaskBox = ({ task, isCompleted, handleStart, handleSubmit }) => {
//   const classes = useStyles();

//   return (
//     <Box
//       className={`${classes.taskBox} ${
//         isCompleted
//           ? classes.completedTask
//           : task.status === "In Progress"
//           ? classes.inProgressTask
//           : ""
//       }`}
//     >
//       <Typography variant="h6" width="70%">{task.title}</Typography>
//       <Typography className={classes.statusBadge} style={{
//         backgroundColor: task.status === "Completed" ? "green" :
//           task.status === "In Progress" ? "blue" : "gray"
//       }}>
//         {task.status}
//       </Typography>
//       {!isCompleted && (
//         <Button onClick={() => handleStart(task.id)} disabled={task.status === "In Progress"}>
//           {task.status === "To Do" ? "Start" : "In Progress"}
//         </Button>
//       )}
//       {task.status === "In Progress" && (
//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography>Project Details</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>Description: {task.description}</Typography>
//             <Typography>Skills: {task.skills.join(", ")}</Typography>
//             <Typography>Key Components: {task.components.join(", ")}</Typography>
//             <Typography>Steps:</Typography>
//             <ol>
//               {task.steps.map((step, index) => (
//                 <li key={index}>{step}</li>
//               ))}
//             </ol>
//             <TextField
//               label="Project Link"
//               variant="outlined"
//               fullWidth
//               style={{ marginTop: '16px', marginBottom: '16px', }}
//             />
//             <Button onClick={() => handleSubmit(task.id, "dummy-link")}>Submit</Button>
//           </AccordionDetails>
//         </Accordion>
//       )}
//     </Box>
//   );
// };

// export default TaskBox;