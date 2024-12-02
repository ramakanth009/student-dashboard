import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { FaUserGraduate, FaLaptopCode, FaPython, FaDatabase } from "react-icons/fa";
import { SiScikitlearn, SiTensorflow } from "react-icons/si";
import { BiData } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineAreaChart } from "react-icons/ai";
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { useStyles } from './styles';
import CourseCard from '../../Elements/Card2/card2';
import { FaChartPie } from "react-icons/fa6";
import { FaMicrochip } from "react-icons/fa";

const fullStackCourses = [
  {
    title: "Fundamentals",
    progress: 0,
    icon: FaLaptopCode,
    description: "Programming fundamentals and basics"
  },
  {
    title: "DSA",
    progress: 0,
    icon: StorageIcon,
    description: "Data Structures and Algorithms"
  },
  // Frontend courses
  {
    title: "HTML",
    progress: 0,
    icon: WebIcon,
    description: "HyperText Markup Language fundamentals"
  },
  {
    title: "CSS",
    progress: 0,
    icon: WebIcon,
    description: "Cascading Style Sheets and modern styling"
  },
  {
    title: "Bootstrap",
    progress: 0,
    icon: WebIcon,
    description: "Bootstrap framework and responsive design"
  },
  {
    title: "JavaScript",
    progress: 0,
    icon: WebIcon,
    description: "Modern JavaScript and ES6+ features"
  },
  {
    title: "React",
    progress: 0,
    icon: WebIcon,
    description: "React.js library and modern web development"
  },
  // Backend courses
  {
    title: "Java",
    progress: 0,
    icon: DataObjectIcon,
    description: "Core Java and advanced concepts"
  },
  {
    title: "Spring Boot",
    progress: 0,
    icon: DataObjectIcon,
    description: "Spring Boot framework and microservices"
  },
  {
    title: "Node.js",
    progress: 0,
    icon: DataObjectIcon,
    description: "Node.js runtime and server-side JavaScript"
  },
  {
    title: "Express",
    progress: 0,
    icon: DataObjectIcon,
    description: "Express.js framework for Node.js"
  },
  {
    title: "Python",
    progress: 0,
    icon: FaPython,
    description: "Python programming and its applications"
  },
  {
    title: "PHP",
    progress: 0,
    icon: DataObjectIcon,
    description: "PHP web development"
  },
  {
    title: "Database",
    progress: 0,
    icon: FaDatabase,
    description: "SQL and database management systems"
  }
];

const dataScienceCourses = [
  {
    title: "Python Programming",
    progress: 0,
    icon: FaPython,
    description: "Core Python programming for data science"
  },
  {
    title: "SQL & Databases",
    progress: 0,
    icon: BiData,
    description: "Essential mathematics for data science"
  },
  {
    title: "Statistics & Mathematics",
    progress: 0,
    icon: FaChartPie,
    description: "Statistical methods and probability"
  },
  {
    title: "Exploratory Data Analysis",
    progress: 0,
    icon: AiOutlineAreaChart,
    description: "Numerical computing with NumPy"
  },
  {
    title: "Machine Learning",
    progress: 0,
    icon: SiScikitlearn,
    description: "Machine learning fundamentals"
  },
  {
    title: "Deep Learning",
    progress: 0,
    icon: SiTensorflow,
    description: "Neural networks and deep learning"
  },
  {
    title: "NLP",
    progress: 0,
    icon: BiData,
    description: "Big data processing and analytics"
  },
  {
    title: "Generative AI",
    progress: 0,
    icon: FaMicrochip,
    description: "Data visualization techniques"
  },
];

const courseCategories = {
  fullStack: {
    frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
    backend: ["Java", "Spring Boot", "Node.js", "Express", "Python", "PHP"],
    fundamentals: ["Fundamentals", "DSA"],
    database: ["Database"]
  },
  dataScience: {
    foundations: ["Python Programming", "SQL & Databases"],
    core: ["Statistics & Mathematics", "Exploratory Data Analysis"],
    advanced: ["Machine Learning", "Deep Learning", "NLP", "Generative AI"],
  }
};

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
  // In a real application, you would get this from your authentication context
  const userTrack = localStorage.getItem('userTrack') || 'fullStack'; // 'fullStack' or 'dataScience'

  const courses = userTrack === 'fullStack' ? fullStackCourses : dataScienceCourses;
  const categories = courseCategories[userTrack];

  let sections = [];
  if (userTrack === 'fullStack') {
    sections = [
      {
        title: "Fundamentals",
        icon: FaLaptopCode,
        courses: courses.filter(course => categories.fundamentals.includes(course.title))
      },
      {
        title: "Frontend Development",
        icon: WebIcon,
        courses: courses.filter(course => categories.frontend.includes(course.title))
      },
      {
        title: "Backend Development",
        icon: DataObjectIcon,
        courses: courses.filter(course => categories.backend.includes(course.title))
      },
      {
        title: "Database",
        icon: StorageIcon,
        courses: courses.filter(course => categories.database.includes(course.title))
      }
    ];
  } else {
    sections = [
      {
        title: "Fundamentals",
        icon: FaPython,
        courses: courses.filter(course => categories.foundations.includes(course.title))
      },
      {
        title: "Core Datascience",
        icon: BiData,
        courses: courses.filter(course => categories.core.includes(course.title))
      },
      {
        title: "Advanced Topics",
        icon: BsGraphUp,
        courses: courses.filter(course => categories.advanced.includes(course.title))
      }
    ];
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.mainHeader}>
        <FaUserGraduate className={classes.headerIcon} />
        <Typography variant="h5" className={classes.mainTitle}>
          My Courses - {userTrack === 'fullStack' ? 'Full Stack Development' : 'Data Science'}
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