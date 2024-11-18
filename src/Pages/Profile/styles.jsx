import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "24px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  profileSection: {
    display: "flex",
    gap: "24px",
    height: "auto",
  },
  leftPanel: {
    width: "22vw",
    height: "auto",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#ffffff",
    borderRadius: "20px !important",
  },
  rightPanel: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    borderRadius: "20px !important",
  },
  avatarSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    width: "100%",
    marginBottom: "24px",
  },
  avatar: {
    width: "120px !important",
    height: "120px !important",
    border: "4px solid #ffffff",
    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
  },
  avatarEditButton: {
    backgroundColor: "#ffffff !important",
    padding: "8px !important",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "#f5f5f5 !important",
    },
  },
  avatarOptionsContainer: {
    position: "absolute",
    top: "180px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "16px",
    width: "90%",
    zIndex: 1000,
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "12px",
  },
  avatarGrid: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    marginTop: "12px",
  },
  avatarOption: {
    width: "60px !important",
    height: "60px !important",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    },
  },
  userName: {
    fontWeight: "600 !important",
    fontSize: "1.25rem !important",
    textAlign: "center",
    color: "#2c3e50",
  },
  userInfo: {
    textAlign: "center",
    color: "#666666",
    fontSize: "0.9rem !important",
  },
  divider: {
    margin: "24px 0 !important",
  },
  navigationTabs: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    padding: "24px 24px",
    borderBottom: "1px solid #e0e0e0",
  },
  navTab: {
    padding: "8px 16px !important",
    borderRadius: "10px !important",
    textTransform: "none !important",
    fontWeight: "500 !important",
    fontSize: "0.95rem !important",
    minWidth: "140px !important",
    "&.MuiButton-contained": {
      backgroundColor: "#1976d2 !important",
      color: "#ffffff !important",
    },
    "&.MuiButton-outlined": {
      borderColor: "#1976d2 !important",
      color: "#1976d2 !important",
    },
  },
  contentSection: {
    flex: 1,
    overflowY: "auto",
    padding: "24px",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  sectionInfo: {
    marginBottom: "24px",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  sectionTitle: {
    color: "#2c3e50",
    fontWeight: "600 !important",
    fontSize: "1.25rem !important",
  },
  infoIcon: {
    fontSize: "20px !important",
    color: "#1976d2 !important",
    cursor: "pointer",
  },
  sectionDescription: {
    color: "#666666",
    marginBottom: "16px",
    fontSize: "0.9rem !important",
  },
  sectionDivider: {
    backgroundColor: "#e0e0e0 !important",
  },
  fieldsContainer: {
    flex: 1,
  },
  fieldCard: {
    backgroundColor: "#ffffff",
    transition: "transform 0.2s, box-shadow 0.2s",
    border: "1px solid #e0e0e0",
    borderRadius: "12px !important",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08) !important",
    },
  },
  fieldContent: {
    padding: "16px !important",
    "&:last-child": {
      paddingBottom: "16px !important",
    },
  },
  fieldLabel: {
    color: "#2c3e50",
    fontWeight: "500 !important",
    marginBottom: "8px !important",
    fontSize: "0.9rem !important",
  },
  valueContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  valueText: {
    color: "#666666",
    flex: 1,
    fontSize: "0.95rem !important",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  editInput: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
      "&:hover fieldset": {
        borderColor: "#1976d2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1976d2",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "8px 12px",
      fontSize: "0.95rem",
    },
  },
  editButton: {
    marginLeft: "auto !important",
    color: "#1976d2 !important",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.08) !important",
    },
  },
  saveButton: {
    backgroundColor: "#1976d2 !important",
    color: "#ffffff !important",
    "&:hover": {
      backgroundColor: "#1565c0 !important",
    },
  },
  cancelButton: {
    backgroundColor: "#f44336 !important",
    color: "#ffffff !important",
    "&:hover": {
      backgroundColor: "#d32f2f !important",
    },
  },
  editActionsContainer: {
    display: "flex",
    gap: "8px",
    marginLeft: "auto",
  },
  nonEditableField: {
    backgroundColor: "#f5f5f5",
    "& .MuiOutlinedInput-root": {
      "&.Mui-disabled": {
        backgroundColor: "#f5f5f5",
      },
    },
  },
});