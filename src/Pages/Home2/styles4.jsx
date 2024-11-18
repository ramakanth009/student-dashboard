import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  // Page Layout Styles
  page: {
    marginLeft: "10px",
  },
  sticker: {
    boxSizing: "border-box",
    height: "auto",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
  },
  container: {
    padding: "24px",
    width: "95%",
  },

  // Welcome Banner Styles - Logo Orange theme
  welcomeBanner: {
    width: "100%",
    marginBottom: "24px"
  },
  bannerPaper: {
    background: "linear-gradient(135deg, #DD6718 0%, #B54400 100%) !important",
    borderRadius: "20px !important",
    overflow: "hidden",
    position: "relative",
  },
  patternOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "40%",
    height: "100%",
    background: "linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%)",
    backgroundSize: "20px 20px",
  },
  bannerContent: {
    position: "relative",
    padding: "32px",
    zIndex: 1,
  },
  welcomeTitle: {
    color: "#ffffff !important",
    fontWeight: "600 !important",
    marginBottom: "12px !important",
    fontSize: "1.75rem !important",
    "@media (max-width: 600px)": {
      fontSize: "1.5rem !important",
    },
  },
  welcomeMessage: {
    color: "rgba(255, 255, 255, 0.9) !important",
    fontSize: "1rem !important",
    lineHeight: "1.6 !important",
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
    },
  },
  wave: {
    display: "inline-block",
    marginLeft: "8px",
    animation: "$waveAnimation 2.5s infinite",
    transformOrigin: "70% 70%",
  },
  "@keyframes waveAnimation": {
    "0%": { transform: "rotate(0deg)" },
    "10%": { transform: "rotate(14deg)" },
    "20%": { transform: "rotate(-8deg)" },
    "30%": { transform: "rotate(14deg)" },
    "40%": { transform: "rotate(-4deg)" },
    "50%": { transform: "rotate(10deg)" },
    "60%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(0deg)" },
  },

  // Weekly Classes Styles
  weeklyClassesSection: {
    width: "100%",
    marginBottom: "24px",
    padding: "24px 0px",
    borderRadius: "20px",
    background: "#ffffff"
  },
  calendarGrid: {
    display: "flex",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    justifyContent: "space-between",
    gap: "8px",
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(7, 1fr)",
    },
    "@media (min-width: 960px) and (max-width: 1199px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 599px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "8px",
    },
  },

  // Day Box Styles
  dayBox: {
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    borderRadius: "12px !important",
    border: "1px solid rgba(221, 103, 24, 0.3)",
    padding: "12px",
    minHeight: "100px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(221, 103, 24, 0.15) !important",
    },
  },
  emptyDayBox: {
    width: "100px",
    borderColor: "#F1F3F4 !important",
    "&:hover": {
      borderColor: "rgba(221, 103, 24, 0.3)",
    },
  },
  activeDay: {
    borderColor: "#DD6718",
    borderWidth: "2px",
    backgroundColor: "rgba(221, 103, 24, 0.05) !important"
  },
  dayName: {
    fontSize: "0.875rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
    marginBottom: "8px !important",
  },
  classInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  noClassText: {
    color: "#5f6368 !important",
    fontSize: "0.8rem !important",
    textAlign: "center",
  },
  classTime: {
    fontSize: "0.875rem !important",
    color: "#DD6718",
    fontWeight: "500 !important",
    wordBreak: "break-word",
  },
  classTitle: {
    fontSize: "0.925rem !important",
    color: "#2c3e50",
    fontWeight: "500 !important",
    marginBottom: "6px !important",
    wordBreak: "break-word",
    lineHeight: "1.3 !important",
  },
  buttonContainer: {
    marginTop: "auto",
    paddingTop: "8px",
  },
  joinButton: {
    width: "100%",
    textTransform: "none !important",
    borderRadius: "6px !important",
    padding: "4px 12px !important",
    background: "linear-gradient(135deg, #DD6718 0%, #B54400 100%) !important",
    color: "#ffffff !important",
    fontSize: "0.875rem !important",
    whiteSpace: "nowrap",
    "&:hover": {
      opacity: "0.9 !important",
    },
  },

  sectionTitle: {
    fontSize: "1.25rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
  },

  // Study Group Styles
  groupsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    width: "95%",
  },
  groupCard: {
    borderRadius: "12px !important",
    border: "1px solid rgba(221, 103, 24, 0.3)",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(221, 103, 24, 0.15) !important",
      borderColor: "#DD6718",
    },
  },
  groupContent: {
    padding: "20px",
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
  },
  groupInfo: {
    flex: 1,
  },
  groupTitle: {
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
    marginBottom: "4px !important",
    lineHeight: "1.3 !important",
  },
  postCount: {
    fontSize: "0.875rem !important",
    color: "#5f6368",
  },
  visitButton: {
    textTransform: "none !important",
    color: "#DD6718 !important",
    padding: "4px 12px !important",
    fontSize: "0.875rem !important",
    "&:hover": {
      backgroundColor: "rgba(221, 103, 24, 0.08) !important",
    },
  },
  coursesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Exactly 3 columns
    gap: "24px",
    width: "100%",
    padding: "0 24px",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  courseCard: {
    borderRadius: "16px !important",
    border: "1px solid rgba(221, 103, 24, 0.3)",
    padding: "20px",
    transition: "all 0.2s ease-in-out",
    display: "flex",
    flexDirection: "column",
    height: "100%", // Ensure all cards have the same height
    backgroundColor: "#ffffff",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(221, 103, 24, 0.15) !important",
      borderColor: "#DD6718",
    },
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px",
  },
  iconContainer: {
    backgroundColor: "rgba(221, 103, 24, 0.08)",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    flexShrink: 0,
  },
  icon: {
    color: "#DD6718",
    fontSize: "20px !important",
  },
  courseTitle: {
    fontSize: "1.1rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
    flex: 1,
  },

  // Course Section Styles
  section: {
    marginBottom: "48px",
    "&:last-child": {
      marginBottom: "0",
      "& $sectionDivider": {
        display: "none",
      },
    },
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "24px",
    marginLeft: "18.5px",
    paddingLeft: "24px",
    "& svg": {
      color: "#DD6718",
      fontSize: "24px",
    },
    borderLeft: "3px solid #DD6718",
  },
  sectionDivider: {
    margin: "48px 24px 0 24px !important",
    backgroundColor: "rgba(221, 103, 24, 0.1) !important",
  },
  // Progress Bar Styles
  progressContainer: {
    width: "100%",
    marginBottom: "20px",
  },
  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  progressLabel: {
    fontSize: "0.875rem !important",
    color: "#5f6368",
  },
  progressValue: {
    fontSize: "0.875rem !important",
    color: "#DD6718",
    fontWeight: "500 !important",
  },
  progressBar: {
    height: "8px !important",
    borderRadius: "4px !important",
    backgroundColor: "rgba(221, 103, 24, 0.1) !important",
  },
  progressBarFill: {
    background: "linear-gradient(135deg, #DD6718 0%, #B54400 100%) !important",
    borderRadius: "4px !important",
  },

  // Main Header Styles
  mainHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "32px",
    borderLeft: "3px solid #DD6718"
  },
  headerIcon: {
    color: "#DD6718",
    fontSize: "28px !important",
    paddingLeft: "5px"
  },
  mainTitle: {
    fontSize: "1.75rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
  },

  // Proceed Button Styles
  proceedButton: {
    marginTop: "auto",
    textTransform: "none !important",
    color: "#DD6718 !important",
    justifyContent: "flex-start !important",
    padding: "8px 0 !important",
    "&:hover": {
      backgroundColor: "transparent !important",
      "& .MuiSvgIcon-root": {
        transform: "translateX(4px)",
      },
    },
    "& .MuiSvgIcon-root": {
      fontSize: "18px !important",
      transition: "transform 0.2s ease-in-out",
    },
  },
}));