import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  section: {
    width: "48%",
    "@media (max-width: 600px)": {
      width: "100%",
      marginBottom: "16px",
    },
  },
  taskBox: {
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "16px",
    marginBottom: "16px",
    transition: "all 0.3s ease",
    position: "relative",
    "&:hover": {
      transform: "scale(1.01)",
      backgroundColor: "#f5f5f5",
    },
  },
  inProgressTask: {
    backgroundColor: "rgba(33, 150, 243, 0.5)", // Blue color with 0.5 opacity
    "&:hover": {
      backgroundColor: "rgba(33, 150, 243, 0.7)", // Blue color with 0.7 opacity
    },
  },
  completedTask: {
    backgroundColor: "rgba(66, 159, 73, 0.5)", // Green color with 0.5 opacity
    "&:hover": {
      backgroundColor: "rgba(66, 159, 73, 0.7)", // Green color with 0.7 opacity
    },
  },
  statusBadge: {
    position: "absolute",
    top: "8px",
    right: "8px",
    padding: "4px 8px",
    borderRadius: "10px",
    color: "white",
    fontSize: "0.8rem",
  },
  
}));