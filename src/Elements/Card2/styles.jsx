// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles(() => ({
//   courseCard: {
//     borderRadius: "16px !important",
//     border: "1px solid #e0e0e0",
//     padding: "20px",
//     transition: "all 0.2s ease-in-out",
//     display: "flex",
//     flexDirection: "column",
//     height: "auto",
//     "&:hover": {
//       transform: "translateY(-2px)",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
//       borderColor: "#1976d2",
//     },
//     marginBottom:"20px"
//   },
//   cardHeader: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     marginBottom: "20px",
//   },
//   iconContainer: {
//     backgroundColor: "#F6F8FC",
//     borderRadius: "8px",
//     padding: "8px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   icon: {
//     color: "#1976d2",
//     fontSize: "20px !important",
//   },
//   courseTitle: {
//     fontSize: "1.1rem !important",
//     fontWeight: "600 !important",
//     color: "#2c3e50",
//     flex: 1,
//   },
//   progressContainer: {
//     width: "100%",
//     marginBottom: "20px",
//   },
//   progressHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "8px",
//   },
//   progressLabel: {
//     fontSize: "0.875rem !important",
//     color: "#5f6368",
//   },
//   progressValue: {
//     fontSize: "0.875rem !important",
//     color: "#1976d2",
//     fontWeight: "500 !important",
//   },
//   progressBar: {
//     height: "8px !important",
//     borderRadius: "4px !important",
//     backgroundColor: "#E8EAF6 !important",
//   },
//   progressBarFill: {
//     backgroundColor: "#1976d2 !important",
//     borderRadius: "4px !important",
//   },
//   proceedButton: {
//     marginTop: "auto",
//     textTransform: "none !important",
//     color: "#1976d2 !important",
//     justifyContent: "flex-start !important",
//     padding: "8px 0 !important",
//     "&:hover": {
//       backgroundColor: "transparent !important",
//       "& .MuiSvgIcon-root": {
//         transform: "translateX(4px)",
//       },
//     },
//     "& .MuiSvgIcon-root": {
//       fontSize: "18px !important",
//       transition: "transform 0.2s ease-in-out",
//     },
//   },
// }));
// src/Elements/Card2/styles.jsx
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  courseCard: {
    borderRadius: "16px !important",
    border: "1px solid #e0e0e0",
    padding: "20px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#ffffff",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.1) !important",
      borderColor: "#1976d2",
    },
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  iconContainer: {
    backgroundColor: "#F6F8FC",
    borderRadius: "12px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#E3F2FD",
      transform: "scale(1.05)",
    },
  },
  icon: {
    color: "#1976d2",
    fontSize: "24px !important",
    transition: "all 0.3s ease",
  },
  courseTitle: {
    fontSize: "1.1rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
    flex: 1,
  },
  description: {
    color: "#546e7a",
    marginBottom: "16px",
    fontSize: "0.875rem !important",
    lineHeight: "1.5 !important",
  },
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
    fontWeight: "500 !important",
  },
  progressValue: {
    fontSize: "0.875rem !important",
    color: "#1976d2",
    fontWeight: "600 !important",
  },
  progressBar: {
    height: "8px !important",
    borderRadius: "4px !important",
    backgroundColor: "#E8EAF6 !important",
  },
  progressBarFill: {
    backgroundColor: "#1976d2 !important",
    borderRadius: "4px !important",
    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important",
  },
  proceedButton: {
    marginTop: "auto !important",
    padding: "10px 16px !important",
    borderRadius: "8px !important",
    backgroundColor: "#1976d2 !important",
    color: "#ffffff !important",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important",
    textTransform: "none !important",
    fontWeight: "500 !important",
    fontSize: "0.9rem !important",
    boxShadow: "0 2px 4px rgba(25, 118, 210, 0.2) !important",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "300px",
      height: "300px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "50%",
      transform: "translate(-50%, -50%) scale(0)",
      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  buttonHovered: {
    backgroundColor: "#1565c0 !important",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(25, 118, 210, 0.3) !important",
    "&::before": {
      transform: "translate(-50%, -50%) scale(3)",
    },
    "& $arrowIcon": {
      transform: "translateX(4px)",
    },
  },
  buttonPressed: {
    transform: "translateY(1px) !important",
    boxShadow: "0 2px 4px rgba(25, 118, 210, 0.2) !important",
  },
  arrowIcon: {
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important",
    fontSize: "18px !important",
  },
}));