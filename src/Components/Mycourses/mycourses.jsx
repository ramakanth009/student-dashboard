// // // import React from 'react';
// // // import { Paper, Typography, Box, LinearProgress } from '@mui/material';
// // // import { useStyles } from './styles';
// // // import CodeIcon from '@mui/icons-material/Code';
// // // import SchoolIcon from '@mui/icons-material/School';
// // // import StorageIcon from '@mui/icons-material/Storage';
// // // import ArchitectureIcon from '@mui/icons-material/Architecture';

// // // const CourseCard = ({ title, progress, icon: IconComponent }) => {
// // //   const classes = useStyles();

// // //   return (
// // //     <Paper elevation={0} className={classes.courseCard}>
// // //       <Box className={classes.cardHeader}>
// // //         <Box className={classes.iconContainer}>
// // //           <IconComponent className={classes.icon} />
// // //         </Box>
// // //         <Typography variant="h6" className={classes.courseTitle}>
// // //           {title}
// // //         </Typography>
// // //       </Box>

// // //       <Box className={classes.progressContainer}>
// // //         <Box className={classes.progressHeader}>
// // //           <Typography className={classes.progressLabel}>
// // //             Progress
// // //           </Typography>
// // //           <Typography className={classes.progressValue}>
// // //             {progress}%
// // //           </Typography>
// // //         </Box>
// // //         <LinearProgress 
// // //           variant="determinate" 
// // //           value={progress} 
// // //           className={classes.progressBar}
// // //           classes={{
// // //             bar: classes.progressBarFill
// // //           }}
// // //         />
// // //       </Box>
// // //     </Paper>
// // //   );
// // // };

// // // // Parent component to render all courses
// // // export const Mycourses = () => {
// // //   const classes = useStyles();
  
// // //   const courses = [
// // //     {
// // //       title: "Frontend Development",
// // //       progress: 85,
// // //       icon: CodeIcon
// // //     },
// // //     {
// // //       title: "Data Structures",
// // //       progress: 70,
// // //       icon: StorageIcon
// // //     },
// // //     {
// // //       title: "System Design",
// // //       progress: 60,
// // //       icon: ArchitectureIcon
// // //     }
// // //   ];

// // //   return (
// // //     <Box className={classes.container}>
// // //       <Box className={classes.header}>
// // //         <SchoolIcon className={classes.headerIcon} />
// // //         <Typography variant="h5" className={classes.sectionTitle}>
// // //           My Courses
// // //         </Typography>
// // //       </Box>

// // //       <Box className={classes.coursesGrid}>
// // //         {courses.map((course, index) => (
// // //           <CourseCard
// // //             key={index}
// // //             title={course.title}
// // //             progress={course.progress}
// // //             icon={course.icon}
// // //           />
// // //         ))}
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default Mycourses;
// // import React from 'react';
// // import { Box, Typography } from '@mui/material';
// // import CodeIcon from '@mui/icons-material/Code';
// // import StorageIcon from '@mui/icons-material/Storage';
// // import ArchitectureIcon from '@mui/icons-material/Architecture';
// // import SchoolIcon from '@mui/icons-material/School';
// // import { useStyles } from './styles';
// // import CourseCard from '../../Elements/Card2/card2';

// // const Mycourses = () => {
// //   const classes = useStyles();
  
// //   const courses = [
// //     {
// //       title: "Frontend Development",
// //       progress: 85,
// //       icon: CodeIcon,
// //     },
// //     {
// //       title: "Data Structures",
// //       progress: 70,
// //       icon: StorageIcon,
// //     },
// //     {
// //       title: "System Design",
// //       progress: 60,
// //       icon: ArchitectureIcon,
// //     }
    
// //   ];

// //   const handleProceed = (courseTitle) => {
// //     console.log(`Proceeding with course: ${courseTitle}`);
// //   };

// //   return (
// //     <Box className={classes.container}>
// //       <Box className={classes.header}>
// //         <SchoolIcon className={classes.headerIcon} />
// //         <Typography variant="h5" className={classes.sectionTitle}>
// //           My Courses
// //         </Typography>
// //       </Box>

// //       <Box className={classes.coursesGrid}>
// //         {courses.map((course, index) => (
// //           <CourseCard
// //             key={index}
// //             title={course.title}
// //             progress={course.progress}
// //             icon={course.icon}
// //             onProceed={() => handleProceed(course.title)}
// //           />
// //         ))}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Mycourses;
// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import SchoolIcon from '@mui/icons-material/School';
// import { useStyles } from './styles';
// import CourseCard from '../../Elements/Card2/card2';
// import courses from './coursedata';

// const MyCourses = () => {
//   const classes = useStyles();

//   const handleProceed = (courseTitle) => {
//     console.log(`Proceeding with course: ${courseTitle}`);
//   };

//   return (
//     <Box className={classes.container}>
//       <Box className={classes.header}>
//         <SchoolIcon className={classes.headerIcon} />
//         <Typography variant="h5" className={classes.sectionTitle}>
//           My Courses
//         </Typography>
//       </Box>

//       <Box className={classes.coursesGrid}>
//         {courses.map((course, index) => (
//           <CourseCard
//             key={index}
//             title={course.title}
//             progress={course.progress}
//             icon={course.icon}
//             description={course.description}
//             onProceed={() => handleProceed(course.title)}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default MyCourses;
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { FaUserGraduate } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { useStyles } from './styles';
import CourseCard from '../../Elements/Card2/card2';
import { courses } from './coursedata';

const CourseSection = ({ title, icon: IconComponent, courses }) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.section}>
      <Box className={classes.sectionHeader}>
        <IconComponent className={classes.sectionIcon} />
        <Typography variant="h6" className={classes.sectionTitle}>
          {title}
        </Typography>
      </Box>
      <Box className={classes.coursesGrid}>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            progress={course.progress}
            icon={course.icon}
            description={course.description}
            onProceed={() => console.log(`Proceeding with ${course.title}`)}
          />
        ))}
      </Box>
      <Divider className={classes.sectionDivider} />
    </Box>
  );
};

const MyCourses = () => {
  const classes = useStyles();

  const categorizedCourses = {
    fundamentals: courses.filter(course => 
      ["Fundamentals", "DSA"].includes(course.title)
    ),
    frontend: courses.filter(course => 
      ["HTML", "CSS", "Bootstrap", "JavaScript", "React"].includes(course.title)
    ),
    backend: courses.filter(course => 
      ["Java", "Spring Boot", "Node.js", "Express", "Python", "PHP"].includes(course.title)
    ),
    database: courses.filter(course => 
      ["Database"].includes(course.title)
    )
  };

  const sections = [
    {
      title: "Fundamentals",
      icon: FaLaptopCode,
      courses: categorizedCourses.fundamentals
    },
    {
      title: "Frontend Development",
      icon: WebIcon,
      courses: categorizedCourses.frontend
    },
    {
      title: "Backend Development",
      icon: DataObjectIcon,
      courses: categorizedCourses.backend
    },
    {
      title: "Database",
      icon: StorageIcon,
      courses: categorizedCourses.database
    }
  ];

  return (
    <Box className={classes.container}>
      <Box className={classes.mainHeader}>
        <FaUserGraduate className={classes.headerIcon} />
        <Typography variant="h5" className={classes.mainTitle}>
          My Courses
        </Typography>
      </Box>

      {sections.map((section, index) => (
        <CourseSection
          key={index}
          title={section.title}
          icon={section.icon}
          courses={section.courses}
        />
      ))}
    </Box>
  );
};

export default MyCourses;