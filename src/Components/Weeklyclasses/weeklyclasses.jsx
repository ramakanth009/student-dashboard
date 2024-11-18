import React from 'react';
import { Box, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DayBox from '../../Elements/Daybox/Daybox';
import { useStyles } from './styles';

const Weeklyclasses = () => {
  const classes = useStyles();

  const weeklySchedule = [
    {
      day: 'Sunday',
      classes: []
    },
    {
      day: 'Monday',
      classes: [
        {
          time: '10:00 AM',
          title: 'Data Science Basics',
          hasClass: true
        }
      ]
    },
    {
      day: 'Tuesday',
      classes: []
    },
    {
      day: 'Wednesday',
      classes: [
        {
          time: '2:00 PM',
          title: 'Frontend Development',
          hasClass: true
        }
      ]
    },
    {
      day: 'Thursday',
      classes: []
    },
    {
      day: 'Friday',
      classes: [
        {
          time: '11:00 AM',
          title: 'Algorithms',
          hasClass: true
        }
      ]
    },
    {
      day: 'Saturday',
      classes: []
    }
  ];

  const handleJoinClass = (day, classInfo) => {
    console.log(`Joining ${classInfo.title} class on ${day}`);
    // Add yjoining logic here
  };

  return (
    <Box className={classes.weeklyClassesSection}>
      <Box className={classes.sectionHeader}>
        <CalendarMonthIcon />
        <Typography variant="h6" className={classes.sectionTitle}>
          Weekly Classes
        </Typography>
      </Box>

      <Box className={classes.calendarGrid}>
        {weeklySchedule.map((daySchedule, index) => (
          <DayBox
            key={daySchedule.day}
            daySchedule={daySchedule}
            onJoinClass={handleJoinClass}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Weeklyclasses;



// import React, { useState, useRef } from 'react';
// import { Box, Typography, IconButton, Button } from '@mui/material';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import DayBox from '../../Elements/Daybox/Daybox';
// import { useStyles } from './styles';

// const Weeklyclasses = () => {
//   const classes = useStyles();
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const itemsPerView = 4; // Number of days visible at once

//   const weeklySchedule = [
//     {
//       day: 'Sunday',
//       classes: []
//     },
//     {
//       day: 'Monday',
//       classes: [
//         {
//           time: '10:00 AM',
//           title: 'Data Science Basics',
//           hasClass: true
//         }
//       ]
//     },
//     {
//       day: 'Tuesday',
//       classes: []
//     },
//     {
//       day: 'Wednesday',
//       classes: [
//         {
//           time: '2:00 PM',
//           title: 'Frontend Development',
//           hasClass: true
//         }
//       ]
//     },
//     {
//       day: 'Thursday',
//       classes: []
//     },
//     {
//       day: 'Friday',
//       classes: [
//         {
//           time: '11:00 AM',
//           title: 'Algorithms',
//           hasClass: true
//         }
//       ]
//     },
//     {
//       day: 'Saturday',
//       classes: []
//     }
//   ];

//   const handleJoinClass = (day, classInfo) => {
//     console.log(`Joining ${classInfo.title} class on ${day}`);
//   };

//   const handlePrevious = () => {
//     if (currentSlide > 0) {
//       const newSlide = currentSlide - 1;
//       setCurrentSlide(newSlide);
//       const offset = newSlide * (180 + 16); // box width + gap
//       if (sliderRef.current) {
//         sliderRef.current.scrollLeft = offset;
//       }
//     }
//   };

//   const handleNext = () => {
//     if (currentSlide < weeklySchedule.length - itemsPerView) {
//       const newSlide = currentSlide + 1;
//       setCurrentSlide(newSlide);
//       const offset = newSlide * (180 + 16); // box width + gap
//       if (sliderRef.current) {
//         sliderRef.current.scrollLeft = offset;
//       }
//     }
//   };

//   return (
//     <Box className={classes.weeklyClassesSection}>
//       <Box className={classes.sectionHeader}>
//         <Box className={classes.headerLeft}>
//           <CalendarMonthIcon />
//           <Typography variant="h6" className={classes.sectionTitle}>
//             Weekly Classes
//           </Typography>
//         </Box>
//       </Box>

//       <Box className={classes.sliderContainer}>
//         <IconButton 
//           className={`${classes.navigationButton} ${classes.prevButton}`}
//           onClick={handlePrevious}
//           disabled={currentSlide === 0}
//         >
//           <ChevronLeftIcon />
//         </IconButton>

//         <Box 
//           ref={sliderRef}
//           className={classes.slider}
//         >
//           {weeklySchedule.map((daySchedule, index) => (
//             <DayBox
//               key={daySchedule.day}
//               daySchedule={daySchedule}
//               onJoinClass={handleJoinClass}
//             />
//           ))}
//         </Box>

//         <IconButton 
//           className={`${classes.navigationButton} ${classes.nextButton}`}
//           onClick={handleNext}
//           disabled={currentSlide >= weeklySchedule.length - itemsPerView}
//         >
//           <ChevronRightIcon />
//         </IconButton>
//       </Box>

//       <Box className={classes.navigationDots}>
//         {Array.from({ length: Math.ceil(weeklySchedule.length / itemsPerView) }).map((_, index) => (
//           <Button
//             key={index}
//             className={`${classes.dot} ${currentSlide === index ? 'active' : ''}`}
//             onClick={() => {
//               setCurrentSlide(index);
//               if (sliderRef.current) {
//                 sliderRef.current.scrollLeft = index * (180 + 16) * itemsPerView;
//               }
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Weeklyclasses;