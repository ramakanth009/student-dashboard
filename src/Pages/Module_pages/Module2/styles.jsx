import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  moduleContainer: {
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '20px',
  },
  moduleHeader: {
    marginBottom: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  moduleTitle: {
    fontWeight: '500!important',
    color: '#333',
  },
  moduleContent: {
    '& ul': {
      paddingLeft: '20px',
      marginBottom: '20px',
    },
    '& li': {
      marginBottom: '8px',
    }
  },
  backButton: {
    alignSelf: 'flex-start!important',
    marginBottom: '16px!important',
    // backgroundColor: '#1976d2!important',
    color: '#000000!important',
    border:"1px solid #000000",
    '&:hover': {
      // backgroundColor: '#1565c0!important',
      color: '#1565c0!important',
    }
  }
});