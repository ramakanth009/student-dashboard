import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  welcomeBanner: {
    width: "100%",
    marginBottom:"24px"
  },
  bannerPaper: {
    // "& .MuiPaper-root": {
    //   background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%) !important",
    // },
    // background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%) !important",
    background: "linear-gradient(135deg, #1a73e8 0%, #7c4dff 100%) !important",
    borderRadius: "20px !important",
    overflow: "hidden",
    position: "relative",
  },
  patternOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "40%",
    height: "100%",
    background: "linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 50%, transparent 52%)",
    backgroundSize: "20px 20px",
  },
  bannerContent: {
    position: "relative",
    padding: "32px",
    zIndex: 1,
  },
  welcomeTitle: {
    color: "#ffffff !important",
    fontWeight: "600 !important",
    marginBottom: "12px !important",
    fontSize: "1.75rem !important",
    "@media (max-width: 600px)": {
      fontSize: "1.5rem !important",
    },
  },
  welcomeMessage: {
    color: "rgba(255, 255, 255, 0.9) !important",
    fontSize: "1rem !important",
    lineHeight: "1.6 !important",
    "@media (max-width: 600px)": {
      fontSize: "0.9rem !important",
    },
  },
  wave: {
    display: "inline-block",
    marginLeft: "8px",
    animation: "$waveAnimation 2.5s infinite",
    transformOrigin: "70% 70%",
  },
  "@keyframes waveAnimation": {
    "0%": { transform: "rotate(0deg)" },
    "10%": { transform: "rotate(14deg)" },
    "20%": { transform: "rotate(-8deg)" },
    "30%": { transform: "rotate(14deg)" },
    "40%": { transform: "rotate(-4deg)" },
    "50%": { transform: "rotate(10deg)" },
    "60%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(0deg)" },
  },
}));
