// styles.jsx for livestudygroup
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    padding: "24px",
    width: "100%",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
    "& svg": {
      color: "#1976d2",
      fontSize: "30px",
      paddingLeft: "5px"
    },
    borderLeft: "3px solid #1976d2"
  },
  sectionTitle: {
    fontWeight: "600 !important",
    color: "#2c3e50",
  },
  sectionDescription: {
    color: "#666",
    marginBottom: "24px !important",
    fontSize: "1rem !important",
    paddingLeft: "38px",
  },
  groupsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
    width: "95%",
  },
  groupCard: {
    borderRadius: "12px !important",
    border: "1px solid #e0e0e0",
    transition: "all 0.2s ease-in-out",
    backgroundColor: "#ffffff",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
      borderColor: "#1976d2",
    },
  },
  groupContent: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  iconContainer: {
    backgroundColor: "#f5f9ff",
    borderRadius: "8px",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    "& svg": {
      color: "#1976d2",
      fontSize: "24px",
    },
  },
  groupInfo: {
    flex: 1,
  },
  groupTitle: {
    fontSize: "1.1rem !important",
    fontWeight: "600 !important",
    color: "#2c3e50",
    marginBottom: "8px !important",
  },
  description: {
    color: "#666",
    fontSize: "0.9rem !important",
    marginBottom: "12px !important",
    lineHeight: "1.5 !important",
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "12px",
  },
  tag: {
    backgroundColor: "#f0f7ff",
    color: "#1976d2",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "0.8rem",
    fontWeight: 500,
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #eee",
    paddingTop: "12px",
  },
  stats: {
    color: "#666 !important",
    fontSize: "0.85rem !important",
  },
  meetingTime: {
    color: "#1976d2 !important",
    fontSize: "0.85rem !important",
    fontWeight: "500 !important",
  },
  visitButton: {
    textTransform: "none !important",
    borderRadius: "8px !important",
    backgroundColor: "#1976d2 !important",
    color: "#ffffff !important",
    padding: "8px 16px !important",
    fontSize: "0.9rem !important",
    fontWeight: "500 !important",
    alignSelf: "flex-end",
    "&:hover": {
      backgroundColor: "#1565c0 !important",
    },
  },
}));