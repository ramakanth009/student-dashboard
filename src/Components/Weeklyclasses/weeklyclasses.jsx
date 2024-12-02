import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DayBox from '../../Elements/Daybox/Daybox';
import { useStyles } from './styles';
// import { useSchedule } from '../../Elements/Daybox/Sheduleprovider';

// Weekly schedule data by track
const scheduleData = {
  fullStack: [
    {
      day: 'Sunday',
      classes: []
    },
    {
      day: 'Monday',
      classes: [
       
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        {
          time: '08:00 PM',
          title: 'Introduction to programming',
          // instructor: 'Jane Smith',
          hasClass: true
        }
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        
      ]
    },
    {
      day: 'Thursday',
      classes: [
        {
          time: '08:00 PM',
          title: 'Introduction to DSA',
          // instructor: 'Sarah Wilson',
          hasClass: true
        }
      ]
    },
    {
      day: 'Friday',
      classes: [
        
      ]
    },
    {
      day: 'Saturday',
      classes: [{
        time: '08:00 PM',
        title: 'Database Design',
        // instructor: 'Dr. Emily Chen',
        hasClass: true
      }]
    }
  ],
  dataScience: [
    {
      day: 'Sunday',
      classes: []
    },
    {
      day: 'Monday',
      classes: [
        
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        {
          time: '08:00 PM',
          title: 'Python intro',
          // instructor: 'Dr. Emily Chen',
          hasClass: true
        }
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        
      ]
    },
    {
      day: 'Thursday',
      classes: [
        {
          time: '08:00 PM',
          title: 'Python Basics',
          // instructor: 'Mark Davis',
          hasClass: true
        }
      ]
    },
    {
      day: 'Friday',
      classes: [
        
      ]
    },
    {
      day: 'Saturday',
      classes: [
        {
          time: '08:00 PM',
          title: 'Control Flow',
          // instructor: 'Mark Davis',
          hasClass: true
        }
      ]
    }
  ]
};

const WeeklyClasses = () => {
  const classes = useStyles();
  const userTrack = localStorage.getItem('userTrack') || 'fullStack';
  const weeklySchedule = scheduleData[userTrack];

  const handleJoinClass = (day, classInfo) => {
    // Here you can implement the logic to join the class
    console.log(`Joining ${classInfo.title} class on ${day}`);
    window.open('https://your-virtual-classroom-url.com', '_blank');
  };

  return (
    <Box className={classes.weeklyClassesSection}>
      <Box className={classes.sectionHeader}>
        <CalendarMonthIcon />
        <Box className={classes.headerContent}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Weekly Live Classes
          </Typography>
          <Typography variant="body2" className={classes.subTitle}>
            {userTrack === 'fullStack' 
              ? 'Join interactive coding sessions with industry experts'
              : 'Learn data science concepts through live demonstrations'
            }
          </Typography>
        </Box>
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

export default WeeklyClasses;
// const WeeklyClasses = () => {
//   const classes = useStyles();
//   const userTrack = localStorage.getItem('userTrack') || 'fullStack';
//   const { scheduleData: sheetsData, loading, error } = useSchedule();
//   const [weeklySchedule, setWeeklySchedule] = useState(scheduleData[userTrack]);

//   useEffect(() => {
//     if (sheetsData && sheetsData.length > 0) {
//       // Filter and transform sheets data based on userTrack
//       const filteredData = sheetsData.map(day => ({
//         day: day.day,
//         classes: day.classes
//           .filter(cls => cls.track === userTrack)
//           .map(cls => ({
//             time: cls.time,
//             title: cls.title,
//             hasClass: true,
//             joinLink: cls.joinLink // New property from sheets
//           }))
//       }));
//       setWeeklySchedule(filteredData);
//     }
//   }, [sheetsData, userTrack]);

//   const handleJoinClass = (day, classInfo) => {
//     if (classInfo.joinLink) {
//       window.open(classInfo.joinLink, '_blank');
//     } else {
//       // Fallback to default URL if no specific link is provided
//       window.open('https://your-virtual-classroom-url.com', '_blank');
//     }
//   };

//   if (loading) {
//     return (
//       <Box className={classes.weeklyClassesSection}>
//         <Typography>Loading schedule...</Typography>
//       </Box>
//     );
//   }

//   if (error) {
//     // Fallback to default schedule if there's an error
//     console.error('Failed to load schedule from sheets:', error);
//   }

//   return (
//     <Box className={classes.weeklyClassesSection}>
//       <Box className={classes.sectionHeader}>
//         <CalendarMonthIcon />
//         <Box className={classes.headerContent}>
//           <Typography variant="h6" className={classes.sectionTitle}>
//             Weekly Live Classes
//           </Typography>
//           <Typography variant="body2" className={classes.subTitle}>
//             {userTrack === 'fullStack' 
//               ? 'Join interactive coding sessions with industry experts'
//               : 'Learn data science concepts through live demonstrations'
//             }
//           </Typography>
//         </Box>
//       </Box>

//       <Box className={classes.calendarGrid}>
//         {weeklySchedule.map((daySchedule, index) => (
//           <DayBox
//             key={daySchedule.day}
//             daySchedule={daySchedule}
//             onJoinClass={handleJoinClass}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default WeeklyClasses;