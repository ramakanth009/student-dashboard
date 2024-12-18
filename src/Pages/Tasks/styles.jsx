import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    // background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
    minHeight: "100vh",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      padding: "16px",
    },
  },
  section: {
    width: "48%",
    "@media (max-width: 600px)": {
      width: "100%",
      marginBottom: "16px",
    },
  },
  taskhead: {
    // paddingBottom:"20px"
  },
  taskBox: {
    cursor: "pointer",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    backdropFilter: "blur(10px)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)",
    },
  },
  inProgressTask: {
    // background: "linear-gradient(135deg, #1976D2 0%, #80D0C7 100%)",
    // background: "#e7f2fa",
    color: "#2d3748",
    "&:hover": {
      // background: "linear-gradient(135deg, #00a1ff 0%, #8ce2d8 100%)",
      // background: "#99d9ff",
    },
  },
  completedTask: {
    // background: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    // background: "#80bf80",
    color: "#2d3748",
    "&:hover": {
      // background: "linear-gradient(135deg, #90fbb6 0%, #9bd8f7 100%)",
      background: "#90fbb6",
    },
  },
  statusBadge: {
    position: "absolute",
    top: "12px",
    right: "12px",
    padding: "6px 12px",
    borderRadius: "20px",
    color: "white",
    fontSize: "0.85rem",
    fontWeight: "500",
    letterSpacing: "0.5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
  },
  inProgressBadge: {
    background: "linear-gradient(to right, #f6d365 0%, #fda085 100%)",
  },
  completedBadge: {
    background: "linear-gradient(to right, #00f2fe 0%, #4facfe 100%)",
  },
  taskTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "8px",
  },
  taskDescription: {
    fontSize: "0.95rem",
    lineHeight: "1.5",
    opacity: 0.9,
  },
  taskMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "12px",
    fontSize: "0.85rem",
    opacity: 0.8,
  },
  accordian: {
    background: "#EBE9E9 !important",
    // border:"1px solid "
  },
  startbutton: {
    backgroundColor: "rgba(48,132,215,0.8) !important",
    color: "#ffffff !important",
    marginTop: "12px !important",
    padding: "5px 15px !important",
    textTransform: "none !important",
    borderRadius: "20px 20px 20px 20px !important",
    letterSpacing: "0.8px !important",

    "&:hover": {
      backgroundColor: "#3084d7 !important",
    },
    "&:disabled": {
      display: "none",
      backgroundColor: "#718096 !important",
      color: "#CBD5E0 !important",
    },
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  refreshButton: {
    color: "#1976d2 !important",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.04) !important",
    },
    "&:disabled": {
      color: "#bdbdbd !important",
    },
  },
  projectDetailsTitle: {
    fontWeight: "600 !important",
    fontSize: "1.1rem !important",
    color: "#2c3e50",
  },
  projectDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  descriptionSection: {
    "& ul": {
      marginLeft: "20px",
      marginTop: "8px",
      marginBottom: "8px",
    },
    "& strong": {
      color: "#2c3e50",
      display: "inline-block",
      marginTop: "12px",
      marginBottom: "4px",
    },
    "& br": {
      marginBottom: "8px",
    },
  },
  skillsSection: {
    marginTop: "16px",
    "& ul": {
      marginLeft: "20px",
      marginTop: "8px",
    },
    "& li": {
      marginBottom: "4px",
    },
  },
  stepsSection: {
    marginTop: "16px",
    "& ol": {
      marginLeft: "20px",
      marginTop: "8px",
    },
    "& li": {
      marginBottom: "8px",
    },
  },
  submissionSection: {
    marginTop: "24px",
    padding: "16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
  },
  submitButton: {
    backgroundColor: "#1976d2 !important",
    color: "white !important",
    "&:hover": {
      backgroundColor: "#1565c0 !important",
    },
  },
}));
