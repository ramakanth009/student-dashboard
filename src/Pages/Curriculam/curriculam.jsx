// // import React from "react";
// // import { Box, Typography } from "@mui/material";
// // import Module from "../../Elements/Modulebox/module";

// // const Curriculum = () => {
// //   const curriculumSections = [
// //     {
// //       title: "Programming Fundamentals",
// //       modules: [
// //         {
// //           moduleNumber: 1,
// //           title: "Introduction to Programming",
// //           submissionStatus: "To do"
// //         },
// //         {
// //           moduleNumber: 2,
// //           title: "Introduction to Data Structures",
// //           submissionStatus: "Pending"
// //         }
// //       ]
// //     },
// //     {
// //       title: "Frontend Development",
// //       modules: [
// //         {
// //           moduleNumber: 3,
// //           title: "HTML",
// //           submissionStatus: "Submitted"
// //         },
// //         {
// //           moduleNumber: 4,
// //           title: "CSS",
// //           submissionStatus: "To do"
// //         },
// //         {
// //           moduleNumber: 5,
// //           title: "Bootstrap Layout",
// //           submissionStatus: "To do"
// //         },
// //         {
// //           moduleNumber: 6,
// //           title: "Javascript",
// //           submissionStatus: "To do"
// //         },
// //         {
// //           moduleNumber: 7,
// //           title: "React",
// //           submissionStatus: "To do"
// //         }
// //       ]
// //     },
// //     {
// //       title: "Backend Development",
// //       modules: [
// //         {
// //           moduleNumber: 8,
// //           title: "Introduction to Programming",
// //           submissionStatus: "To do"
// //         },
// //         {
// //           moduleNumber: 9,
// //           title: "Introduction to Data Structures",
// //           submissionStatus: "Pending"
// //         },
// //       // ]
// //     // },
// //     // {
// //     //   title: "Backend Development",
// //     //   modules: [
// //         {
// //           moduleNumber: 10,
// //           title: "Introduction to Server-side Programming (Back-end Module)",
// //           submissionStatus: "To do"
// //         },
// //         {
// //           moduleNumber: 11,
// //           title: "Intro to Spring Framework",
// //           submissionStatus: "To do"
// //         },
// //         {
// //           moduleNumber: 12,
// //           title: "Intro to Node.js and Express.js",
// //           submissionStatus: "To do"
// //         },
// //         {
// //           moduleNumber: 13,
// //           title: "Python & PHP for backend",
// //           submissionStatus: "To do"
// //         },
// //       ]
      
// //     },
// //     {
// //       title: "Introduction To Databases",
// //       modules: [
// //         {
// //           moduleNumber: 14,
// //           title: "Databases",
// //           submissionStatus: "To do"
// //         }
// //       ]
      
// //     }
// //   ];

// //   return (
// //     <Box sx={{ padding: 2 }}>
// //       {curriculumSections.map((section, index) => (
// //         <Box key={index} sx={{ mb: 4 }}>
// //           <Typography
// //             variant="h5"
// //             sx={{
// //               mb: 2,
// //               fontWeight: 600,
// //               color: 'primary.main',
// //               borderBottom: '2px solid',
// //               borderColor: 'primary.main',
// //               paddingBottom: 1,
// //               textAlign:"center"
// //             }}
// //           >
// //             {section.title}
// //           </Typography>
// //           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
// //             {section.modules.map((module) => (
// //               <Module
// //                 key={module.moduleNumber}
// //                 moduleNumber={module.moduleNumber}
// //                 title={module.title} 
// //                 submissionStatus={module.submissionStatus}
// //               />
// //             ))}
// //           </Box>
// //         </Box>
// //       ))}
// //     </Box>
// //   );
// // };

// // export default Curriculum;

// import React from 'react';
// import { Box, Typography, Container } from '@mui/material';
// import Module from '../../Elements/Modulebox/module';
// import { useStyles } from './styles';

// const Curriculum = () => {
//   const classes = useStyles();

//   const curriculumData = [
//     {
//       title: "Programming Fundamentals",
//       icon: "PF",
//       modules: [
//         {
//           moduleNumber: 1,
//           title: "Introduction to Programming",
//           submissionStatus: "To do"
//         },
//         {
//           moduleNumber: 2,
//           title: "Introduction to Data Structures",
//           submissionStatus: "Pending"
//         }
//       ]
//     },
//     {
//       title: "Frontend Development",
//       icon: "FE",
//       modules: [
//         {
//           moduleNumber: 3,
//           title: "HTML",
//           submissionStatus: "Submitted"
//         },
//         {
//           moduleNumber: 4,
//           title: "CSS",
//           submissionStatus: "To do"
//         },
//         {
//           moduleNumber: 5,
//           title: "Bootstrap Layout",
//           submissionStatus: "To do"
//         },
//         {
//           moduleNumber: 6,
//           title: "JavaScript",
//           submissionStatus: "To do"
//         },
//         {
//           moduleNumber: 7,
//           title: "React",
//           submissionStatus: "To do"
//         }
//       ]
//     },
//     {
//       title: "Backend Development",
//       icon: "BE",
//       modules: [
//         {
//           moduleNumber: 8,
//           title: "Introduction to Programming",
//           submissionStatus: "To do"
//         },
//         {
//           moduleNumber: 9,
//           title: "Introduction to Data Structures",
//           submissionStatus: "Pending"
//         },
//         {
//           moduleNumber: 10,
//           title: "Introduction to Server-side Programming",
//           submissionStatus: "To do"
//         },
//         {
//           moduleNumber: 11,
//           title: "Intro to Spring Framework",
//           submissionStatus: "To do"
//         },
//         {
//           moduleNumber: 12,
//           title: "Intro to Node.js and Express.js",
//           submissionStatus: "To do"
//         },
//         {
//           moduleNumber: 13,
//           title: "Python & PHP for backend",
//           submissionStatus: "To do"
//         }
//       ]
//     },
//     {
//       title: "Introduction To Databases",
//       icon: "DB",
//       modules: [
//         {
//           moduleNumber: 14,
//           title: "Databases",
//           submissionStatus: "To do"
//         }
//       ]
//     }
//   ];

//   return (
//     <Box className={classes.root}>
//       <Box className={classes.header}>
//         <Typography variant="h1" className={classes.mainTitle}>
//           Full Stack Development Journey
//         </Typography>
//         <Typography variant="subtitle1" className={classes.subtitle}>
//           Master the essential skills to become a proficient full-stack developer
//         </Typography>
//       </Box>

//       <Container maxWidth="lg">
//         {curriculumData.map((track, index) => (
//           <Box key={index} className={classes.trackSection}>
//             <Box className={classes.trackHeader}>
//               <Box className={classes.trackIcon}>
//                 {track.icon}
//               </Box>
//               <Typography variant="h2" className={classes.trackTitle}>
//                 {track.title}
//               </Typography>
//             </Box>

//             <Box className={classes.modulesGrid}>
//               {track.modules.map((module, moduleIndex) => (
//                 <Module
//                   key={moduleIndex}
//                   moduleNumber={module.moduleNumber}
//                   title={module.title}
//                   submissionStatus={module.submissionStatus}
//                 />
//               ))}
//             </Box>
//           </Box>
//         ))}
//       </Container>
//     </Box>
//   );
// };

// export default Curriculum;
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Module from '../../Elements/Modulebox/module';
import { useStyles } from './styles';

const Curriculum = () => {
  const classes = useStyles();

  const curriculumData = [
    {
      title: "Programming Fundamentals",
      icon: "PF",
      modules: [
        {
          moduleNumber: 1,
          title: "Introduction to Programming",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 2,
          title: "Introduction to Data Structures",
          submissionStatus: "Pending"
        }
      ]
    },
    {
      title: "Frontend Development",
      icon: "FE",
      modules: [
        {
          moduleNumber: 3,
          title: "HTML",
          submissionStatus: "Submitted"
        },
        {
          moduleNumber: 4,
          title: "CSS",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 5,
          title: "Bootstrap Layout",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 6,
          title: "JavaScript",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 7,
          title: "React",
          submissionStatus: "To do"
        }
      ]
    },
    {
      title: "Backend Development",
      icon: "BE",
      modules: [
        {
          moduleNumber: 8,
          title: "Introduction to Programming",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 9,
          title: "Introduction to Data Structures",
          submissionStatus: "Pending"
        },
        {
          moduleNumber: 10,
          title: "Introduction to Server-side Programming",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 11,
          title: "Intro to Spring Framework",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 12,
          title: "Intro to Node.js and Express.js",
          submissionStatus: "To do"
        },
        {
          moduleNumber: 13,
          title: "Python & PHP for backend",
          submissionStatus: "To do"
        }
      ]
    },
    {
      title: "Introduction To Databases",
      icon: "DB",
      modules: [
        {
          moduleNumber: 14,
          title: "Databases",
          submissionStatus: "To do"
        }
      ]
    }
  ];


  return (
    <Box className={classes.root}>
      <Box className={classes.headerContainer}>
        <Box className={classes.header}>
          <Typography variant="h1" className={classes.mainTitle}>
            Full Stack Development Journey
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Master the essential skills to become a proficient full-stack developer
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" className={classes.contentContainer}>
        {curriculumData.map((track, index) => (
          <Box key={index} className={classes.trackSection}>
            <Box className={classes.trackHeader}>
              <Box className={classes.trackIcon}>
                {track.icon}
              </Box>
              <Typography variant="h2" className={classes.trackTitle}>
                {track.title}
              </Typography>
            </Box>

            <Box 
              className={classes.modulesGrid}
              role="list"
              aria-label={`${track.title} modules`}
            >
              {track.modules.map((module, moduleIndex) => (
                <Box 
                  key={moduleIndex}
                  role="listitem"
                  className={classes.moduleWrapper}
                >
                  <Module
                    moduleNumber={module.moduleNumber}
                    title={module.title}
                    submissionStatus={module.submissionStatus}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Curriculum;