// // import { makeStyles } from "@mui/styles";

// // export const useStyles = makeStyles(() => ({
// //   container: {
// //     padding: "24px",
// //     width: "95%",
// //   },
// //   header: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "12px",
// //     marginBottom: "24px",
// //     borderLeft:"3px solid #1976d2"
// //   },
// //   headerIcon: {
// //     color: "#1976d2",
// //     fontSize: "24px !important",
// //   },
// //   sectionTitle: {
// //     fontSize: "1.5rem !important",
// //     fontWeight: "600 !important",
// //     color: "#2c3e50",
// //   },
// //   coursesGrid: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
// //     gap: "24px",
// //     width: "100%",
// //   },
// //   courseCard: {
// //     borderRadius: "16px !important",
// //     border: "1px solid #e0e0e0",
// //     padding: "20px",
// //     transition: "all 0.2s ease-in-out",
// //     "&:hover": {
// //       transform: "translateY(-2px)",
// //       boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
// //       borderColor: "#1976d2",
// //     },
// //   },
// //   cardHeader: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "12px",
// //     marginBottom: "20px",
// //   },
// //   iconContainer: {
// //     backgroundColor: "#F6F8FC",
// //     borderRadius: "8px",
// //     padding: "8px",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   icon: {
// //     color: "#1976d2",
// //     fontSize: "20px !important",
// //   },
// //   courseTitle: {
// //     fontSize: "1.1rem !important",
// //     fontWeight: "600 !important",
// //     color: "#2c3e50",
// //     flex: 1,
// //   },
// //   progressContainer: {
// //     width: "100%",
// //   },
// //   progressHeader: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: "8px",
// //   },
// //   progressLabel: {
// //     fontSize: "0.875rem !important",
// //     color: "#5f6368",
// //   },
// //   progressValue: {
// //     fontSize: "0.875rem !important",
// //     color: "#1976d2",
// //     fontWeight: "500 !important",
// //   },
// //   progressBar: {
// //     height: "8px !important",
// //     borderRadius: "4px !important",
// //     backgroundColor: "#E8EAF6 !important",
// //   },
// //   progressBarFill: {
// //     backgroundColor: "#1976d2 !important",
// //     borderRadius: "4px !important",
// //   },
// // }));
// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles(() => ({
//   container: {
//     boxSizing:"border-box",
//     padding: "24px",
//     width: "95%",
//     height:"auto"
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px !important",
//     marginBottom: "24px",
//   },
//   headerIcon: {
//     color: "#1976d2",
//     fontSize: "24px !important",
//   },
//   sectionTitle: {
//     fontSize: "1.5rem !important",
//     fontWeight: "600 !important",
//     color: "#2c3e50",
//   },
//   coursesGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)", // Exactly 3 columns
//     gap: "24px !important",
//     width: "100%",
//     "@media (max-width: 1200px)": {
//       gridTemplateColumns: "repeat(2, 1fr)", // 2 columns on medium screens
//     },
//     "@media (max-width: 768px)": {
//       gridTemplateColumns: "1fr", // 1 column on mobile
//     },
//   },
// }));
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    padding: "24px",
    width: "95%",
  },
  mainHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "32px",
    borderLeft:"3px solid #1976d2"

  },
  headerIcon: {
    color: "#1976d2",
    fontSize: "28px !important",
    paddingLeft:"5px"
  },
  mainTitle: {
    fontSize: "1.75rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
  },
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
    gap: "12px",
    marginBottom: "24px",
    padding: "0 8px",
  },
  sectionIcon: {
    color: "#1976d2",
    fontSize: "24px !important",
  },
  sectionTitle: {
    fontSize: "1.25rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-4px",
      left: "0",
      width: "50px",
      height: "3px",
      backgroundColor: "#1976d2",
      borderRadius: "2px",
    },
  },
  coursesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Exactly 3 columns
    gap: "55px 14px",
    width: "100%",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "repeat(2, 1fr)", // 2 columns on medium screens
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr", // 1 column on mobile
    },
  },
  sectionDivider: {
    margin: "48px 0 0 0 !important",
    backgroundColor: "#e0e0e0 !important",
  },
}));