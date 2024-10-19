import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  my_courses: {
    // backgroundColor:"#fff"
  },
 
skill: {
    marginBottom: "20px",
},
  skillsec: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  course_detail: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
      backgroundColor: "#fff",
      borderRadius:"20px",
      padding:"20px"
  },
  box: {
    width: "calc(33.33% - 20px)", // Adjust width for 3 cards per row
    marginBottom: "20px",
    "@media (max-width: 960px)": {
      width: "calc(50% - 20px)", // 2 cards per row on medium screens
    },
    "@media (max-width: 600px)": {
      width: "100%", // 1 card per row on small screens
    },
  },
}));
