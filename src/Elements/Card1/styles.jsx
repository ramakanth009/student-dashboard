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
    maxWidth: '300px',
    margin: '0 10px',
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
    paddingBottom:"10px",
    paddingRight:"60px",
    paddingLeft:"60px"
},
paragraph: {
    marginBottom: '20px',
    paddingBottom:"10px",
    fontFamily:"none",
    fontWeight:"800 !important",
  }
}));
