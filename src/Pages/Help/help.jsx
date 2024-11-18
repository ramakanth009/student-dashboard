// import React, { useState } from "react";
// import { useStyles } from "./styles";
// import {
//   Box,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Faq from "../../Assets/helpsec1.png";

// // Sample FAQ data
// const faqData = [
//   {
//     question: "Why can't I sign up or manage my own credentials?",
//     answer:
//       "To ensure security and maintain consistent user experience, all user credentials are managed by the admin. If you need access or have issues with your account, please contact your admin for assistance.",
//   },
//   {
//     question: "How do I access the curriculum and watch videos?",
//     answer:
//       "You can watch videos through the curriculum section by clicking on the 'Watch Videos' option within each module. Alternatively, you can continue watching videos by clicking the 'Continue' button located in the Home section under Progress.",
//   },
//   {
//     question: "What tasks do I need to perform, and where can I find them?",
//     answer:
//       "All tasks assigned to you can be found in the Task section. You are required to complete these tasks as part of your learning journey. Please check this section regularly for any new assignments.",
//   },
//   {
//     question: "How is my progress tracked, and where can I view it?",
//     answer:
//       "our progress is automatically tracked and updated in the Home section under Progress. You can view your current status and completed modules there. This helps you stay on track with your learning goals.",
//   },
//   {
//     question: "What should I do if a course video isn't loading?",
//     answer:
//       "First, check your internet connection. If the problem persists, try clearing your browser cache or using a different browser. If issues continue, please contact our support team.",
//   },
// ];

// const Help = () => {
//   const classes = useStyles();
//   const [expanded, setExpanded] = useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <Box>
//       <Typography variant="h5" color="initial" sx={{ marginBottom: "5px" }}>
//         Help
//       </Typography>
//       <Box className={classes.helpBox2}>
//         <Box className={classes.faqsec}>
//           <Typography variant="h4" color="initial">
//             FAQ's
//           </Typography>
//           <Box sx={{ marginTop: 2, marginBottom: 2 }}>
//             {faqData.map((faq, index) => (
//               <Accordion
//                 key={index}
//                 expanded={expanded === `panel${index}`}
//                 onChange={handleChange(`panel${index}`)}
//                 sx={{ borderRadius: "10px 10px 10px 10px" }}
//               >
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls={`panel${index}bh-content`}
//                   id={`panel${index}bh-header`}
//                   sx={{ borderRadius: "20px" }}
//                 >
//                   <Typography sx={{ fontWeight: "bold" }}>
//                     {faq.question}
//                   </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Typography>{faq.answer}</Typography>
//                 </AccordionDetails>
//               </Accordion>
//             ))}
//           </Box>
//           <Typography
//             variant="h5"
//             color="initial"
//             sx={{ margin: " 30px 0  10px 0" }}
//           >
//             We're Just An Email Away
//           </Typography>
//           <Typography variant="body1" color="initial">
//             For any further inquiries, feel free to reach out to us at <br />
//             <span className={classes.mail}>info@sunelearning.com</span>
//             <br />
//             Our dedicated team is ready to assist you and will respond within{" "}
//             <br /> 24 hours!
//           </Typography>
//         </Box>
//         <Box className={classes.faqsec2}>
//           <img src={Faq} alt="FAQ illustration" />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Help;

// help.jsx
import React, { useState } from "react";
import { useStyles } from "./styles";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Faq from "../../Assets/helpsec1.png";

// Enhanced FAQ data with categories
const faqData = [
  {
    category: "Account & Access",
    questions: [
      {
        question: "Why can't I sign up or manage my own credentials?",
        answer: "To ensure security and maintain consistent user experience, all user credentials are managed by the admin. If you need access or have issues with your account, please contact your admin for assistance.",
      },
      {
        question: "What should I do if I can't login?",
        answer: "If you're having trouble logging in, first ensure you're using the correct credentials. If problems persist, contact your administrator or reset your password through the login page.",
      }
    ]
  },
  {
    category: "Course Content",
    questions: [
      {
        question: "How do I access the curriculum and watch videos?",
        answer: "You can watch videos through the curriculum section by clicking on the 'Watch Videos' option within each module. Alternatively, you can continue watching videos by clicking the 'Continue' button located in the Home section under Progress.",
      },
      {
        question: "What tasks do I need to perform, and where can I find them?",
        answer: "All tasks assigned to you can be found in the Task section. You are required to complete these tasks as part of your learning journey. Please check this section regularly for any new assignments.",
      }
    ]
  },
  {
    category: "Progress & Performance",
    questions: [
      {
        question: "How is my progress tracked, and where can I view it?",
        answer: "Your progress is automatically tracked and updated in the Home section under Progress. You can view your current status and completed modules there. This helps you stay on track with your learning goals.",
      },
      {
        question: "What should I do if a course video isn't loading?",
        answer: "First, check your internet connection. If the problem persists, try clearing your browser cache or using a different browser. If issues continue, please contact our support team.",
      }
    ]
  }
];

// Quick stats data
const supportStats = [
  {
    icon: <AccessTimeIcon />,
    label: "Average Response Time",
    value: "2-4 hours"
  },
  {
    icon: <CheckCircleIcon />,
    label: "Satisfaction Rate",
    value: "95%"
  },
  {
    icon: <QuestionAnswerIcon />,
    label: "Questions Answered",
    value: "1000+"
  }
];

const Help = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="xl" className={classes.container}>
      {/* Header Section */}
      <Box className={classes.headerSection}>
        <Typography variant="h4" className={classes.mainTitle}>
          Help Center
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Find answers to your questions and get the support you need
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left Section - FAQs */}
        <Grid item xs={12} md={7}>
          <Paper className={classes.faqSection}>
            {faqData.map((category, categoryIndex) => (
              <Box key={categoryIndex} className={classes.categorySection}>
                <Typography variant="h6" className={classes.categoryTitle}>
                  {category.category}
                </Typography>
                {category.questions.map((faq, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${categoryIndex}-${index}`}
                    onChange={handleChange(`panel${categoryIndex}-${index}`)}
                    className={classes.accordion}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      className={classes.accordionSummary}
                    >
                      <Typography className={classes.questionText}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                      <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            ))}
          </Paper>

          {/* Contact Section */}
          <Paper className={classes.contactSection}>
            <Typography variant="h5" className={classes.contactTitle}>
              We're Just An Email Away
            </Typography>
            <Typography variant="body1" className={classes.contactText}>
              For any further inquiries, feel free to reach out to us at
              <br />
              <a 
                href="mailto:info@sunelearning.com?subject=Help%20Request%20-%20Support%20Needed&body=Hello%20Support%20Team,%0D%0A%0D%0AI%20need%20assistance%20with%20the%20following:%0D%0A%0D%0A" 
                className={classes.emailLink}
              >
                info@sunelearning.com
              </a>
              <br />
              Our dedicated team is ready to assist you and will respond within 24
              hours!
            </Typography>
          </Paper>
        </Grid>

        {/* Right Section - Image and Stats */}
        <Grid item xs={12} md={4}>
          <Box className={classes.rightSection}>
            <img
              src={Faq}
              alt="FAQ illustration"
              className={classes.faqImage}
            />

            {/* Support Stats Cards */}
            <Grid container spacing={2} className={classes.statsContainer}>
              {supportStats.map((stat, index) => (
                // <Grid item xs={12} sm={4} key={index}>
                <Box className={classes.maincard}> 
                  <Card className={classes.statCard}>
                    <CardContent>
                      <IconButton className={classes.statIcon}>
                        {stat.icon}
                      </IconButton>
                      <Typography variant="h6" className={classes.statValue}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" className={classes.statLabel}>
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                  </Box>
                // </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Help;