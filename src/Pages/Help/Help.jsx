import React, { useState } from "react";
import { useStyles } from "./styles";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Faq from "../../Assets/helpsec1.png";

// Sample FAQ data
const faqData = [
  {
    question: "Why can't I sign up or manage my own credentials?",
    answer:
      "To ensure security and maintain consistent user experience, all user credentials are managed by the admin. If you need access or have issues with your account, please contact your admin for assistance.",
  },
  {
    question: "How do I access the curriculum and watch videos?",
    answer:
      "You can watch videos through the curriculum section by clicking on the 'Watch Videos' option within each module. Alternatively, you can continue watching videos by clicking the 'Continue' button located in the Home section under Progress.",
  },
  {
    question: "What tasks do I need to perform, and where can I find them?",
    answer:
      "All tasks assigned to you can be found in the Task section. You are required to complete these tasks as part of your learning journey. Please check this section regularly for any new assignments.",
  },
  {
    question: "How is my progress tracked, and where can I view it?",
    answer:
      "our progress is automatically tracked and updated in the Home section under Progress. You can view your current status and completed modules there. This helps you stay on track with your learning goals.",
  },
  {
    question: "What should I do if a course video isn't loading?",
    answer:
      "First, check your internet connection. If the problem persists, try clearing your browser cache or using a different browser. If issues continue, please contact our support team.",
  },
];

const Help = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography variant="h5" color="initial" sx={{ marginBottom: "5px" }}>
        Help
      </Typography>
      <Box className={classes.helpBox2}>
        <Box className={classes.faqsec}>
          <Typography variant="h4" color="initial">
            FAQ's
          </Typography>
          {/* <p className={classes.faqpara}>
            Having questions? Here you'll find the answers most valued by our
            students, along with access to step-by-step instructions and support
          </p> */}
          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{ borderRadius: "10px 10px 10px 10px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                  sx={{ borderRadius: "20px" }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Typography
            variant="h5"
            color="initial"
            sx={{ margin: " 30px 0  10px 0" }}
          >
            We're Just An Email Away
          </Typography>
          <Typography variant="body1" color="initial">
            For any further inquiries, feel free to reach out to us at <br />
            <span className={classes.mail}>info@sunelearning.com</span>
            <br />
            Our dedicated team is ready to assist you and will respond within 24
            hours!
          </Typography>
        </Box>
        <Box className={classes.faqsec2}>
          <img src={Faq} alt="FAQ illustration" />
        </Box>
      </Box>
    </Box>
  );
};

export default Help;
