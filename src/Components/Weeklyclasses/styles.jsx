import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  weeklyClassesSection: {
    width: "100%",
    marginBottom: "24px",
    padding: "24px 5px", // Reduced padding
    borderRadius:"20px",
    background :"#ffffff"
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
    marginLeft: "18.5px",
    "& svg": {
      color: "#1976d2",
      fontSize: "24px",
      paddingLeft:"5px",
    },
    borderLeft:"3px solid #1976d2"
  },
  sectionTitle: {
    fontSize: "1.25rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
  },
  calendarGrid: {
    display: "flex", // Changed to flex
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", // Responsive columns
    justifyContent: "space-between", // Distribute space evenly
    // alignItems: "start",
    gap: "8px", // Reduced gap
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
});

// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles({
//   weeklyClassesSection: {
//     width: "100%",
//     marginBottom: "24px",
//   },
//   sectionHeader: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: "20px",
//     padding: "0 8px",
//   },
//   headerLeft: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     "& svg": {
//       color: "#1976d2",
//       fontSize: "24px",
//     },
//   },
//   sectionTitle: {
//     fontSize: "1.25rem !important",
//     fontWeight: "600 !important",
//     color: "#2c3e50",
//   },
//   sliderContainer: {
//     position: "relative",
//     padding: "0 40px", // Space for navigation buttons
//   },
//   slider: {
//     display: "flex",
//     overflowX: "hidden",
//     scrollBehavior: "smooth",
//     gap: "16px",
//     padding: "8px 0",
//   },
//   navigationButton: {
//     position: "absolute !important",
//     top: "50%",
//     transform: "translateY(-50%)",
//     zIndex: 2,
//     backgroundColor: "#ffffff !important",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1) !important",
//     "&:hover": {
//       backgroundColor: "#f5f5f5 !important",
//     },
//     "&.Mui-disabled": {
//       backgroundColor: "#f0f0f0 !important",
//       color: "#bdbdbd !important",
//     },
//   },
//   prevButton: {
//     left: 0,
//   },
//   nextButton: {
//     right: 0,
//   },
//   navigationDots: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "8px",
//     marginTop: "16px",
//   },
//   dot: {
//     width: "8px !important",
//     height: "8px !important",
//     minWidth: "unset !important",
//     borderRadius: "50% !important",
//     padding: "0 !important",
//     backgroundColor: "#e0e0e0 !important",
//     "&.active": {
//       backgroundColor: "#1976d2 !important",
//     },
//   },
// });
