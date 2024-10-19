import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  card: {
    width:"auto",
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
    maxWidth: '200px',
    margin: '0 auto',
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  topElement: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px', // Icon size or any custom size
  },
 
  heading: {
    marginBottom: '20px',
    paddingBottom:"15px"
},
paragraph: {
    marginBottom: '24px',
    fontFamily:"none",
    fontWeight:"800 !important",
    paddingBottom:"15px"
  }
}));
