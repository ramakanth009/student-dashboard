import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  sidenav: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  sidelist: {
    padding: "200px 20px",
  },
  sidebarlogos: {
    paddingRight: "10px",
    color: "#555353",
    fontSize: "2rem",
  },
  sidebuttons: {
    "&.MuiTypography-root": {
      fontSize: "1.3rem", // Ensure this applies specifically to Typography
      color: "#555353",
    },
  },
  sidebottom: {
    display: "flex",
    alignItems: "center",
    gap:"50px",
    position:"absolute",
    bottom:"10px",
    padding:"10px 10px 10px 20px"
  },
  logout: {
    display:"flex",
    alignItems:"center",
    "&.MuiTypography-root": {
      fontSize: "1.6rem", // Ensure this applies specifically to Typography
      color: "#555353",
    },
  },
  bottomlogos: {
    paddingRight: "10px",
    color: "#555353",
    fontSize: "2rem",
  },
}));
