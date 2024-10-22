import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  moduleBox: {
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    }
  },
  moduleContent: {
    display: 'flex',
    flexDirection:"column",
    // alignItems: 'center',
    // justifyContent:"flexstart",
    alignItems:"flex-start",
    gap: '16px'
  },
  moduleNumber: {
    width: 'auto',
    // height: '20px',
    borderRadius: '20px',
    padding:"5px 10px",
    backgroundColor: 'rgb(25,118,208,0.5)',
    
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  modulebox2:{
    width:"100%",
    display:"flex",
    justifyContent:"space-around",
    padding:"0px 5px"
  },
  moduleTitle: {
    flex: 1,
    fontWeight: 500,
    fontSize: '1rem',
    margin: 0
  },
  statusChip: {
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '0.875rem',
    fontWeight: 500,
    display: 'inline-block'
  },
  statusTodo: {
    backgroundColor: '#FFE0E0',
    color: '#D32F2F',
    border: '1px solid #ffcdd2'
  },
  statusInProgress: {
    backgroundColor: '#FFF3E0',
    color: '#E65100',
    border: '1px solid #ffe0b2'
  },
  statusSubmitted: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
    border: '1px solid #c8e6c9'
  }
});