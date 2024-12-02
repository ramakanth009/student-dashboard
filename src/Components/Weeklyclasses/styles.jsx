// styles.jsx for weeklyclasses
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  weeklyClassesSection: {
    width: "100%",
    marginBottom: "24px",
    padding: "24px",
    borderRadius: "20px",
    background: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "24px",
    borderLeft: "3px solid #1976d2",
    paddingLeft: "12px",
    "& svg": {
      color: "#1976d2",
      fontSize: "24px",
      marginTop: "4px",
    }
  },
  headerContent: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: "1.25rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
    marginBottom: "4px !important",
  },
  subTitle: {
    color: "#666",
    fontSize: "0.875rem !important",
  },
  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "12px",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    "@media (max-width: 900px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    paddingRight:"20px"
  },
});

// Daybox styles
export const useDayBoxStyles = makeStyles({
  dayBox: {
    minHeight: "150px",
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    transition: "all 0.2s ease-in-out",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      borderColor: "#1976d2",
    },
  },
  hasClass: {
    borderColor: "#1976d2",
    backgroundColor: "#f8faff",
  },
  dayName: {
    fontWeight: "600 !important",
    color: "#2c3e50",
    fontSize: "1rem !important",
  },
  classInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  timeSlot: {
    color: "#1976d2",
    fontWeight: "500 !important",
    fontSize: "0.875rem !important",
  },
  classTitle: {
    color: "#2c3e50",
    fontWeight: "500 !important",
    fontSize: "0.925rem !important",
    lineHeight: "1.4 !important",
  },
  instructor: {
    color: "#666",
    fontSize: "0.875rem !important",
  },
  joinButton: {
    marginTop: "auto",
    textTransform: "none !important",
    borderRadius: "8px !important",
    backgroundColor: "#1976d2 !important",
    color: "#ffffff !important",
    padding: "6px 12px !important",
    fontSize: "0.875rem !important",
    fontWeight: "500 !important",
    transition: "all 0.2s ease !important",
    "&:hover": {
      backgroundColor: "#1565c0 !important",
      transform: "translateY(-1px)",
    },
  },
  noClass: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "#666",
    fontSize: "0.875rem !important",
    fontStyle: "italic",
  },
});