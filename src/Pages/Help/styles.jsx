// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles(() => ({
//   help: {
//     marginBottom: "50px",
//     color: "#ffffff",
//   },
//   helpBox2: {
//     display: "flex",
//   },
//   faqsec: {
//     width: "50%",
//     padding: "20px",
//   },
//   faqsec2: {
//     width: "50%",
//   },
//   faqpara: {
//     padding: "0px 90px 0px 0px",
//   },
//   question: { backgroundColor:"#000000"},
//   mail:{color:"#3333FF",
//     margin:"10px 0",
//     fontSize:"1.2rem"
//   }
// }));
// styles.jsx
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    padding: "24px",
    backgroundColor: "#F9FAFB",
  },
  headerSection: {
    marginBottom: "40px",
    textAlign: "left",
    width: "50%",
  },
  mainTitle: {
    fontWeight: "700 !important",
    marginBottom: "8px !important",
    color: "#111827",
  },
  subtitle: {
    color: "#6B7280",
  },
  faqSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px !important",
    padding: "24px",
    marginBottom: "24px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1) !important",
  },
  categorySection: {
    marginBottom: "32px",
  },
  categoryTitle: {
    fontWeight: "600 !important",
    marginBottom: "16px !important",
    color: "#111827",
  },
  accordion: {
    boxShadow: "none !important",
    backgroundColor: "#F3F4F6 !important",
    borderRadius: "12px !important",
    marginBottom: "12px !important",
    "&:before": {
      display: "none",
    },
    "&.Mui-expanded": {
      margin: "0 0 12px 0 !important",
    },
  },
  accordionSummary: {
    padding: "0 24px !important",
    minHeight: "64px !important",
    "&.Mui-expanded": {
      minHeight: "64px !important",
    },
    "& .MuiAccordionSummary-content": {
      margin: "12px 0 !important",
    },
  },
  questionText: {
    fontWeight: "500 !important",
    color: "#374151",
  },
  accordionDetails: {
    padding: "0 24px 24px !important",
    color: "#6B7280",
  },
  contactSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px !important",
    padding: "32px",
    marginTop: "32px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1) !important",
  },
  contactTitle: {
    fontWeight: "600 !important",
    marginBottom: "16px !important",
    color: "#111827",
  },
  contactText: {
    color: "#4B5563",
    lineHeight: "1.75 !important",
  },
  // emailHighlight: {
  //   color: "#2563EB !important",
  //   fontWeight: "500 !important",
  //   fontSize: "1.125rem !important",
  //   display: "inline-block",
  //   margin: "8px 0",
  // },
  emailLink: {
    color: "#2563EB !important",
    fontWeight: "500 !important",
    fontSize: "1.125rem !important",
    display: "inline-block",
    margin: "8px 0",
    textDecoration: "none !important",
    position: "relative",
    transition: "all 0.3s ease !important",
    "&:hover": {
      color: "#1D4ED8 !important",
      "&:after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
      },
    },
    "&:after": {
      content: '""',
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "2px",
      bottom: "-2px",
      left: "0",
      backgroundColor: "#1D4ED8",
      transformOrigin: "bottom right",
      transition: "transform 0.3s ease",
    },
  },
  rightSection: {
    position: "fixed",
    top: "24px",
  },
  faqImage: {
    width: "90%",
    height: "auto",
    borderRadius: "16px",
    marginBottom: "8px",
    // boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    animation: "$float 6s ease-in-out infinite",
  },
  "@keyframes float": {
    "0%": {
      transform: "translateY(0px)",
    },
    "50%": {
      transform: "translateY(-20px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
  statsContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
  },
  maincard: {
    width: "30%",
    height: "25%",
  },
  statCard: {
    textAlign: "center",
    borderRadius: "12px !important",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1) !important",
    transition: "transform 0.2s ease-in-out !important",
    "&:hover": {
      transform: "translateY(-4px)",
    },
  },
  statIcon: {
    backgroundColor: "#EFF6FF !important",
    color: "#2563EB !important",
    marginBottom: "12px !important",
  },
  statValue: {
    fontWeight: "600 !important",
    color: "#111827 !important",
    marginBottom: "4px !important",
  },
  statLabel: {
    color: "#6B7280 !important",
    fontSize: "0.875rem !important",
  },
}));
