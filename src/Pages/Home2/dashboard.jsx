import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  LinearProgress,
  Divider,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa6";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import DataObjectIcon from "@mui/icons-material/DataObject";
// import { useStyles } from "./styles";
import { useStyles } from "./styles5";
// import { useStyles } from "./styles2";
// import { useStyles } from "./styles3";
// import { useStyles } from "./styles4";
// import { useStyles } from "./styles6";
// import { useStyles } from "./styles7";
// import { useStyles } from "./styles8";
// import { useStyles } from "./styles9";
// import { useStyles } from "./styles10";
// import { useStyles } from "./themedStyles";
import courses from "../../Components/Mycourses/coursedata";

// Welcome Banner Component
const WelcomeBanner = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile?.FirstName) {
      setFirstName(savedProfile.FirstName);
    }
  }, []);

  return (
    <Box className={classes.welcomeBanner}>
      <Paper elevation={3} className={classes.bannerPaper}>
        <Box className={classes.patternOverlay} />
        <Box className={classes.bannerContent}>
          <Typography variant="h4" className={classes.welcomeTitle}>
            Welcome back, {firstName}!<span className={classes.wave}>👋</span>
          </Typography>
          <Typography variant="body1" className={classes.welcomeMessage}>
            Continue your learning journey in Computer Science. Your dedication
            to learning is inspiring - let's make today count!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

// Weekly Classes Component
const WeeklyClasses = () => {
  const classes = useStyles();

  const weeklySchedule = [
    { day: "Sunday", classes: [] },
    {
      day: "Monday",
      classes: [
        { time: "10:00 AM", title: "Data Science Basics", hasClass: true },
      ],
    },
    { day: "Tuesday", classes: [] },
    {
      day: "Wednesday",
      classes: [
        { time: "2:00 PM", title: "Frontend Development", hasClass: true },
      ],
    },
    { day: "Thursday", classes: [] },
    {
      day: "Friday",
      classes: [{ time: "11:00 AM", title: "Algorithms", hasClass: true }],
    },
    { day: "Saturday", classes: [] },
  ];

  const handleJoinClass = (day, classInfo) => {
    console.log(`Joining ${classInfo.title} class on ${day}`);
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
        {weeklySchedule.map((daySchedule) => (
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

// Day Box Component
const DayBox = ({ daySchedule, onJoinClass }) => {
  const classes = useStyles();

  const hasClass = daySchedule.classes.length > 0;

  return (
    <Paper
      elevation={0}
      className={`${classes.dayBox} ${
        hasClass ? classes.activeDay : classes.emptyDayBox
      }`}
    >
      <Typography className={classes.dayName}>{daySchedule.day}</Typography>
      {hasClass ? (
        <Box className={classes.classInfo}>
          <Typography className={classes.classTime}>
            {daySchedule.classes[0].time}
          </Typography>
          <Typography className={classes.classTitle}>
            {daySchedule.classes[0].title}
          </Typography>
          <Box className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={classes.joinButton}
              onClick={() =>
                onJoinClass(daySchedule.day, daySchedule.classes[0])
              }
            >
              Join Class
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className={classes.classInfo}>
          <Typography className={classes.noClassText}>
            No classes scheduled
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

// Study Group Component
const StudyGroupCard = ({ groups }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.sectionHeader}>
        <Diversity3Icon />
        <Typography variant="h5" className={classes.sectionTitle}>
          Live Study Groups
        </Typography>
      </Box>
      <Box className={classes.groupsGrid}>
        {groups.map((group, index) => (
          <LiveStudyGroup
            key={index}
            title={group.title}
            postCount={group.postCount}
            onVisit={() => group.onVisit?.()}
          />
        ))}
      </Box>
    </Box>
  );
};

const LiveStudyGroup = ({ title, postCount, onVisit }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.groupCard}>
      <Box className={classes.groupContent}>
        <Box className={classes.iconContainer}>
          <ForumIcon className={classes.icon} />
        </Box>
        <Box className={classes.groupInfo}>
          <Typography variant="h6" className={classes.groupTitle}>
            {title}
          </Typography>
          <Typography className={classes.postCount}>
            {postCount} posts till now
          </Typography>
        </Box>
        <Button
          variant="text"
          endIcon={<ArrowForwardIcon />}
          className={classes.visitButton}
          onClick={onVisit}
        >
          Visit
        </Button>
      </Box>
    </Paper>
  );
};

// Course Card Component
const CourseCard = ({
  title,
  progress,
  icon: IconComponent,
  description,
  onProceed,
}) => {
  const classes = useStyles();

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
      <Box className={classes.progressContainer}>
        <Box className={classes.progressHeader}>
          <Typography className={classes.progressLabel}>Progress</Typography>
          <Typography className={classes.progressValue}>{progress}%</Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          className={classes.progressBar}
          classes={{
            bar: classes.progressBarFill,
          }}
        />
      </Box>
      <Button
        variant="text"
        endIcon={<ArrowForwardIcon />}
        className={classes.proceedButton}
        onClick={onProceed}
      >
        Continue Learning
      </Button>
    </Paper>
  );
};

// Course Section Component
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

// Main Dashboard Component
const Dashboard = () => {
  const classes = useStyles();

  const studyGroups = [
    {
      title: "React Advanced Patterns",
      postCount: 12,
      onVisit: () => console.log("Visiting React group"),
    },
    {
      title: "Algorithm Practice",
      postCount: 8,
      onVisit: () => console.log("Visiting Algorithms group"),
    },
  ];

  const categorizedCourses = {
    fundamentals: courses.filter((course) =>
      ["Fundamentals", "DSA"].includes(course.title)
    ),
    frontend: courses.filter((course) =>
      ["HTML", "CSS", "Bootstrap", "JavaScript", "React"].includes(course.title)
    ),
    backend: courses.filter((course) =>
      ["Java", "Spring Boot", "Node.js", "Express", "Python", "PHP"].includes(
        course.title
      )
    ),
    database: courses.filter((course) => ["Database"].includes(course.title)),
  };

  const sections = [
    {
      title: "Fundamentals",
      icon: FaLaptopCode,
      courses: categorizedCourses.fundamentals,
    },
    {
      title: "Frontend Development",
      icon: WebIcon,
      courses: categorizedCourses.frontend,
    },
    {
      title: "Backend Development",
      icon: DataObjectIcon,
      courses: categorizedCourses.backend,
    },
    {
      title: "Database",
      icon: StorageIcon,
      courses: categorizedCourses.database,
    },
  ];

  return (
    <Box className={classes.page}>
      <WelcomeBanner />
      <WeeklyClasses />
      <Box className={classes.sticker}>
        <StudyGroupCard groups={studyGroups} />
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
      </Box>
    </Box>
  );
};

export default Dashboard;
