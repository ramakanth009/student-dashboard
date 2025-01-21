// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles(() => ({
//     dayBox: {
//         boxSizing: "border-box",
//         backgroundColor: "#ffffff",
//         borderRadius: "12px !important",
//         border: "1px solid #e0e0e0",
//         padding: "12px",
//         minHeight: "100px",
//         width: "100%", // Take full width of grid cell
//         display: "flex",
//         flexDirection: "column",
//         transition: "all 0.2s ease-in-out",
//         "&:hover": {
//           transform: "translateY(-2px)",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
//         },
//         position:"relative  ",
//       },
//   emptyDayBox: {
//     width: "100px", 
//     // backgroundColor: "#F1F3F4 !important",
//     borderColor: "#F1F3F4 !important",
//     "&:hover": {
//       borderColor: "#e0e0e0",
//     },
//   },
//   activeDay: {
//     borderColor: "rgba(172, 192, 232, 0.5)",
//     borderWidth: "2px",
//     // backgroundColor:"#F6F8FC !important"
//   },
//   dayName: {
//     fontSize: "0.875rem !important",
//     fontWeight: "600 !important",
//     color: "#2c3e50",
//     marginBottom: "8px !important",
//   },
//   classInfo: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     gap: "6px",
//   },
//   noClassText: {
//     color: "#5f6368 !important",
//     fontSize: "0.8rem !important",
//     textAlign: "center",
//   },
//   classTime: {
//     fontSize: "0.875rem !important",
//     color: "#1976d2",
//     fontWeight: "500 !important",
//     wordBreak: "break-word",
//   },
//   classTitle: {
//     fontSize: "0.925rem !important",
//     color: "#2c3e50",
//     fontWeight: "500 !important",
//     marginBottom: "6px !important",
//     wordBreak: "break-word",
//     lineHeight: "1.3 !important",
//   },
//   buttonContainer: {
//     marginTop: "auto",
//     paddingTop: "8px",
    
//   },
//   joinButton: {
//     width: "100%",
//     textTransform: "none !important",
//     borderRadius: "6px !important",
//     padding: "4px 12px !important",
//     backgroundColor: "#ffffff !important",
//     color: "#1976d2 !important",
//     fontSize: "0.875rem !important",
//     whiteSpace: "nowrap",
//     "&:hover": {
//       backgroundColor: "#1565c0 !important",
//       color:"#ffffff !important"
//     },
//     position:"absolute",
//     bottom:"2px"
//   },
// }));

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    dayBox: {
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        borderRadius: "12px !important",
        border: "1px solid #e0e0e0",
        padding: "12px",
        minHeight: "180px", // Increased fixed height
        width: "100%", // Take full width of grid cell
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s ease-in-out",
        position: "relative",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
        },
      },
  emptyDayBox: {
    width: "100px", 
    borderColor: "#F1F3F4 !important",
    "&:hover": {
      borderColor: "#e0e0e0",
    },
  },
  activeDay: {
    borderColor: "rgba(172, 192, 232, 0.5)",
    borderWidth: "2px",
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
    justifyContent: "space-between", // Ensures proper spacing
    height: "100%", // Full height of the container
  },
  noClassText: {
    color: "#5f6368 !important",
    fontSize: "0.8rem !important",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  classTime: {
    fontSize: "0.875rem !important",
    color: "#1976d2",
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
    width: "98%",
    textTransform: "none !important",
    borderRadius: "6px !important",
    padding: "4px 12px !important",
    backgroundColor: "#ffffff !important",
    color: "#1976d2 !important",
    fontSize: "0.875rem !important",
    whiteSpace: "nowrap",
    position: "absolute", // Absolute positioning
    bottom: "5px", // 5px from bottom as requested
    // left: "12px", 
    // right: "15px",
    "&:hover": {
      backgroundColor: "#1565c0 !important",
      color:"#ffffff !important"
    },
  },
}));