import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  container: {
    padding: '24px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '32px',
    textAlign: 'center',
    fontWeight: 600,
  },
  paper: {
    padding: '24px',
    backgroundColor: 'transparent !important',
  },
  stepLabel: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  stepContent: {
    marginTop: '16px',
    '& > div': {
      marginBottom: '8px',
    },
    '& a': {
      color: '#1976d2',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  stepContentBox: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  actionsContainer: {
    marginTop: '24px',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  expandButton: {
    marginTop: '16px',
    marginBottom: '8px',
    backgroundColor:"#ffffff !important",
  },
  completeButton: {
    minWidth: '150px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#1976d2',
    color: '#fff',
  },
  tipCard: {
    marginTop: '16px',
    backgroundColor: 'rgba(25, 118, 210, 0.05) !important',
    border: '1px solid rgba(25, 118, 210, 0.1) !important',
  },
}));