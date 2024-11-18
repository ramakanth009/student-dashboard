import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    padding: "24px",
    paddingLeft:"none !important",
    width: "100%",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center !important",
    gap: "8px !important",
    // marginBottom: "20px",
    "& svg": {
      color: "#1976d2",
      fontSize: "30px",
      paddingLeft:"5px"
    },
    marginBottom: "24px !important",
    borderLeft:"3px solid #1976d2"

},
  sectionTitle: {
    // fontSize: "1.5rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
  },
  groupsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    width: "95%",
  },
  groupCard: {
    borderRadius: "12px !important",
    border: "1px solid #e0e0e0",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
      borderColor: "#1976d2",
    },
  },
  groupContent: {
    padding: "20px",
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
  },
  iconContainer: {
    backgroundColor: "#F6F8FC",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#1976d2",
    fontSize: "24px !important",
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
    color: "#1976d2 !important",
    padding: "4px 12px !important",
    fontSize: "0.875rem !important",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.04) !important",
    },
  },
}));