import { SiCodenewbie } from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa"
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { DiPhp } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";

export const courses = [
  {
    title: "Fundamentals",
    progress: 95,
    icon: SiCodenewbie,
    description: "Programming fundamentals and basics"
  },
  {
    title: "DSA",
    progress: 75,
    icon: FaCodeBranch,
    description: "Data Structures and Algorithms"
  },
  {
    title: "HTML",
    progress: 90,
    icon: DiHtml5,
    description: "HyperText Markup Language fundamentals"
  },
  {
    title: "CSS",
    progress: 85,
    icon: IoLogoCss3,
    description: "Cascading Style Sheets and modern styling"
  },
  {
    title: "Bootstrap",
    progress: 80,
    icon: SiBootstrap,
    description: "Bootstrap framework and responsive design"
  },
  {
    title: "JavaScript",
    progress: 78,
    icon: IoLogoJavascript,
    description: "Modern JavaScript and ES6+ features"
  },
  {
    title: "React",
    progress: 82,
    icon: FaReact,
    description: "React.js library and modern web development"
  },
  {
    title: "Java",
    progress: 73,
    icon: FaJava,
    description: "Core Java and advanced concepts"
  },
  {
    title: "Spring Boot",
    progress: 68,
    icon: BiLogoSpringBoot,
    description: "Spring Boot framework and microservices"
  },
  {
    title: "Node.js",
    progress: 70,
    icon: FaNodeJs,
    description: "Node.js runtime and server-side JavaScript"
  },
  {
    title: "Express",
    progress: 65,
    icon: SiExpress,
    description: "Express.js framework for Node.js"
  },
  {
    title: "Python",
    progress: 72,
    icon: FaPython,
    description: "Python programming and its applications"
  },
  {
    title: "PHP",
    progress: 60,
    icon: DiPhp,
    description: "PHP web development"
  },
  {
    title: "Database",
    progress: 77,
    icon: FaDatabase,
    description: "SQL and database management systems"
  }
];

// You can also categorize courses if needed
export const courseCategories = {
  frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
  backend: ["Java", "Spring Boot", "Node.js", "Express", "Python", "PHP"],
  fundamentals: ["Fundamentals", "DSA"],
  database: ["Database"]
};

// Function to get courses by category
export const getCoursesByCategory = (category) => {
  return courses.filter(course => 
    courseCategories[category].includes(course.title)
  );
};

export default courses;