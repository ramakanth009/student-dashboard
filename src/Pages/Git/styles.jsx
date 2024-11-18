// GitGuide.styles.jsx
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
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
    '&:MuiPaper-root':{backgroundColor: 'transparent !important'}
  },
  stepLabel: {
    cursor: 'pointer',
    '&:hover': {
      '& $iconContainer': {
        backgroundColor: '#1565c0',
      },
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1976d2',
    transition: 'background-color 0.3s ease',
    '& svg': {
      color: '#ffffff',
      fontSize: '24px',
    },
  },
  activeIcon: {
    backgroundColor: '#1565c0',
  },
  stepContentBox: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  section: {
    marginBottom: '24px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  sectionContent: {
    marginLeft: '8px',
  },
  sectionTitle: {
    marginBottom: '16px',
    color: '#1976d2',
    fontWeight: 500,
  },
  stepsList: {
    marginBottom: '16px',
  },
  step: {
    marginBottom: '8px',
    paddingLeft: '8px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  tipCard: {
    marginTop: '16px',
    marginBottom: '16px',
    backgroundColor: 'rgba(25, 118, 210, 0.05) !important',
    border: '1px solid rgba(25, 118, 210, 0.1) !important',
    
  },
  expandButton: {
    marginTop: '16px',
    marginBottom: '8px',
  },
  codeBlock: {
    marginTop: '8px',
    marginBottom: '16px',
  },
  code: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '16px',
    borderRadius: '4px',
    overflow: 'auto',
    margin: 0,
    fontSize: '14px',
    lineHeight: 1.5,
  },
  actionsContainer: {
    marginTop: '24px',
    marginBottom: '16px',
  },
  button: {
    marginRight: '8px',
  },
});