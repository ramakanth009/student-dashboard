// // styles.jsx
// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles(() => ({
//   sidenav: {
//     width: ({ isCollapsed }) => (isCollapsed ? "60px" : "180px"),
//     minWidth: ({ isCollapsed }) => (isCollapsed ? "60px" : "180px"),
//     height: "100vh",
//     backgroundColor: "#ffffff",
//     padding: ({ isCollapsed }) => (isCollapsed ? "2px" : "5px"),
//     position: "relative",
//     display: "flex",
//     flexDirection: "column",
//     transition: "all 0.3s ease",
//     overflow: "visible", // Changed from hidden to allow button to overflow
//     borderRadius: "30px",
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: ({ isCollapsed }) => (isCollapsed ? "8px 2px" : "8px 12px"),
//     position: "relative",
//     marginBottom: "20px",
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       bottom: "-10px",
//       left: 0,
//       right: 0,
//       height: "1px",
//       backgroundColor: "rgba(0, 0, 0, 0.12)",
//     },
//   },
//   collapseButton: {
//     "&.MuiIconButton-root": {
//       padding: "6px",
//       color: "#181C14",
//       position: "absolute",
//       right: ({ isCollapsed }) => (isCollapsed ? "-12px" : "-16px"),
//       top: "53px",
//       backgroundColor: "#DCDCDC",
//       border: "1px solid rgba(0, 0, 0, 0.12)",
//       borderRadius: "50%",
//       width: "24px",
//       height: "24px",
//       minWidth: "24px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
//       transform: "translateZ(0)", // Creates a new stacking context
//       "&:hover": {
//         backgroundColor: "rgb(195,235,250)",
//       },
//       "& .MuiSvgIcon-root": {
//         fontSize: "18px",
//       },
//     },
//   },
//   menuList: {
//     padding: ({ isCollapsed }) => (isCollapsed ? "4px 2px" : "40px 8px"),
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     gap: "4px",
//     marginTop: "10px",
//     overflow: "hidden",
//   },
//   menuItem: {
//     padding: ({ isCollapsed }) => (isCollapsed ? "12px 0" : "12px 16px"),
//     minHeight: "48px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: ({ isCollapsed }) =>
//       isCollapsed ? "center" : "flex-start",
//     borderRadius: "12px",
//     transition: "all 0.2s ease",
//     "&:hover": {
//       // backgroundColor: "rgba(124,77,255,0.4) !important",
//       transform: "translateY(-2px)",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
//     },
//     "&.active": {
//       backgroundColor: "rgb(195,235,250) !important",
//       color: "#1976D2 !important",
//     },
//   },
//   icon: {
//     fontSize: "24px !important",
//     color:"#1976D2",
//     // color: "#181C14",
//     transition: "all 0.2s ease",
//   },
//   menuText: {
//     "&.MuiTypography-root": {
//       fontSize: "1rem",
//       // color:"#1976D2",
//       color: "#181C14",
//       marginLeft: "12px",
//       fontWeight: 500,
//       whiteSpace: "nowrap",
//       "&.active": {
//         // backgroundColor: "rgb(195,235,250) !important",
//         color: "#1976D2 !important",
//       },
//     },
//   },
//   sidebottom: {
//     padding: ({ isCollapsed }) => (isCollapsed ? "8px 2px" : "8px 8px"),
//     marginTop: "auto",
//     borderTop: "1px solid rgba(0, 0, 0, 0.12)",
//   },
//   logout: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: ({ isCollapsed }) =>
//       isCollapsed ? "center" : "flex-start",
//     padding: ({ isCollapsed }) => (isCollapsed ? "12px 0" : "12px 16px"),
//     borderRadius: "12px",
//     transition: "all 0.2s ease",
//     cursor: "pointer",
//     "&.MuiTypography-root": {
//       fontSize: "1rem",
//       color: "#555353",
//     },
//     "&:hover": {
//       backgroundColor: "#FFC107",
//       "& $icon": {
//         color: "#181C14",
//       },
//     },
//   },
// }));
// styles.jsx
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  sidenav: {
    width: ({ isCollapsed }) => (isCollapsed ? "60px" : "180px"),
    minWidth: ({ isCollapsed }) => (isCollapsed ? "60px" : "180px"),
    height: "100vh",
    backgroundColor: "#ffffff",
    padding: ({ isCollapsed }) => (isCollapsed ? "2px" : "5px"),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.2s ease-in-out",
    overflow: "visible",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ({ isCollapsed }) => (isCollapsed ? "8px 2px" : "8px 12px"),
    position: "relative",
    marginBottom: "20px",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: 0,
      right: 0,
      height: "1px",
      backgroundColor: "#e0e0e0",
    },
  },
  collapseButton: {
    "&.MuiIconButton-root": {
      padding: "6px",
      color: "#2c3e50",
      position: "absolute",
      right: ({ isCollapsed }) => (isCollapsed ? "-12px" : "-16px"),
      top: "53px",
      backgroundColor: "#ffffff",
      border: "1px solid #e0e0e0",
      borderRadius: "6px",
      width: "24px",
      height: "24px",
      minWidth: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        backgroundColor: "#ffffff",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "18px",
      },
    },
  },
  menuList: {
    padding: ({ isCollapsed }) => (isCollapsed ? "4px 2px" : "12px 8px"),
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    overflow: "hidden",
  },
  menuItem: {
    boxSizing: "border-box",
    padding: ({ isCollapsed }) => (isCollapsed ? "12px 0" : "12px 16px"),
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: ({ isCollapsed }) =>
      isCollapsed ? "center" : "flex-start",
    borderRadius: "6px !important",
    backgroundColor: "#ffffff !important",
    // border: "1px solid #e0e0e0",
    transition: "all 0.2s ease-in-out",
    textTransform: "none !important",
    fontSize: "0.875rem !important",
    whiteSpace: "nowrap",
    color: "#000000 !important",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
      backgroundColor: "#C3EBFA !important",
      fontWeight: "bold !important",
    },
    "&.active": {
      backgroundColor: "#C3EBFA !important",
      color: "#1976d2 !important",
      transform: "translateY(-2px) !important",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
      "& $icon": {
        color: "#1976d2 !important",
        fontSize: "1.9rem !important",
      },
      "& $menuText": {
        fontSize: "1rem !important",
        color: "#000000 !important",
        fontWeight: "600 !important",
      },
    },
  },
  icon: {
    fontSize: "20px !important",
    color: "#1976d2",
    transition: "all 0.2s ease-in-out",
  },
  menuText: {
    "&.MuiTypography-root": {
      fontSize: "0.875rem !important",
      color: "#000000",
      marginLeft: "12px",
      fontWeight: "500",
      whiteSpace: "nowrap",
      transition: "all 0.2s ease-in-out",
    },
  },
  sidebottom: {
    padding: ({ isCollapsed }) => (isCollapsed ? "8px 2px" : "8px 8px"),
    marginTop: "auto",
    borderTop: "1px solid #e0e0e0",
  },
  logout: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: ({ isCollapsed }) =>
      isCollapsed ? "center" : "flex-start",
    padding: ({ isCollapsed }) => (isCollapsed ? "12px 0" : "12px 16px"),
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    "&.MuiTypography-root": {
      fontSize: "0.875rem !important",
      color: "#1976d2",
    },
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
      backgroundColor: "#ffffff !important",
      borderColor: "#1976d2",
      "& $icon": {
        color: "#1976d2",
      },
    },
  },
}));
