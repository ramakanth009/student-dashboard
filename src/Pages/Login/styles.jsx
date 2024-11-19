import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: '#F7F8FA',
    padding: '20px',
  },
  container: {
    display: 'flex',
    minHeight: '600px',
    margin: '25px auto',
    padding: 0,
    overflow: 'hidden',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      margin: '20px auto',
    },
  },}))