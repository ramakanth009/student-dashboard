import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  rightSection: {
    flex: 1,
    backgroundColor: "white",
    padding: "48px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    overflow: "hidden",
    "@media (max-width: 960px)": {
      padding: "32px 24px",
    },
  },
  rightContent: {
    width: "100%",
    maxWidth: "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  strokeWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    pointerEvents: "none",
    overflow: "hidden",
  },
  stroke: {
    position: "absolute",
    right: 0,
    bottom: 30,
    width: "100%",
  },
  logo: {
    width: "50%",
    maxWidth: "200px",
    marginBottom: "32px",
    position: "relative",
    "@media (max-width: 960px)": {
      width: "40%",
      marginBottom: "24px",
    },
  },
  form: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "32px",
    position: "relative",
    zIndex: 0,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
  },
  formTitle: {
    marginBottom: "32px !important",
    textAlign: "center",
    fontWeight: "600 !important",
    "@media (max-width: 960px)": {
      fontSize: "1.75rem !important",
      marginBottom: "24px !important",
    },
  },
  errorMessage: {
    marginBottom: "16px",
    textAlign: "center",
  },
  textField: {
    marginBottom: "20px !important",
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "white",
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.1)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.2)",
      },
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "14px",
    },
  },
  rememberForgot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    flexWrap: "wrap",
    gap: "8px",
    "@media (max-width: 360px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  forgotLink: {
    color: "#666 !important",
    textDecoration: "none !important",
    "&:hover": {
      textDecoration: "underline !important",
    },
  },
  loginButton: {
    padding: "12px !important",
    borderRadius: "15px !important",
    fontSize: "1rem !important",
    textTransform: "none !important",
    backgroundColor: "#000 !important",
    transition: "background-color 0.3s ease !important",
    "&:hover": {
      backgroundColor: "#333 !important",
    },
  },
}));