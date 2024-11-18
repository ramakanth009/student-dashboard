import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  learningHub: {
    padding: "20px 20px 0px 20px",
    // backgroundColor: "#F9FAFB",
    marginBottom: "10px",
  },
  hubTitle: {
    color: "#111827",
    marginBottom: "14px !important",
    fontWeight: "600 !important",
    paddingLeft:"15px !important" ,

  },
  studyGroupsContainer: {
    // backgroundColor: "white",
    borderRadius: 8,
    padding: 18,
    // boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  studyGroupsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  personIcon: {
    color: "#6B7280",
  },
  studyGroupCard: {
    marginBottom: "12px !important",
    boxShadow: "none !important",
    border: "1px solid rgba(0, 0, 0, 0.08) !important",
  },
  cardContent: {
    padding: 13,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  groupTitle: {
    fontWeight: "500 !important",
    color: "#111827",
    marginBottom: "4px !important",
  },
  learnersCount: {
    color: "#6B7280",
  },
  joinButtonPurple: {
    backgroundColor: "#2563EB !important",
    textTransform: "none !important",
    minWidth: "80px !important",
    boxShadow: "none !important",
    "&:hover": {
      backgroundColor: "#1D4ED8 !important",
    },
  },
  joinButtonBlue: {
    backgroundColor: "#2563EB !important",
    textTransform: "none !important",
    minWidth: "80px !important",
    boxShadow: "none !important",
    "&:hover": {
      backgroundColor: "#1D4ED8 !important",
    },
  },
}));