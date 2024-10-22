import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: '50px',
    gap: '24px',
    minHeight: '50vh',
    backgroundColor: '#f5f5f5',
    
  },
  leftPanel: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '20px',
    border: '2px solid #e0e0e0',
  },
  rightPanel: {
    width: '70%',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '20px',
    border: '2px solid #e0e0e0',
  },
  avatarSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    height:"10vh"
  },
  avatar: {
    width: '110px !important',
    height: '110px !important',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
  avatarGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center',
    marginTop: '16px',
  },
  avatarOption: {
    width: '60px !important',
    height: '60px !important',
    cursor: 'pointer',
    '&:hover': {
      border: '2px solid #1976d2',
    },
  },
  section: {
    marginBottom: '24px',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
    cursor: 'pointer',
    '&:hover': {
      color: '#1976d2',
    },
  },
  fieldContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    padding: '8px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
    },
  },
  label: {
    fontWeight: 'bold',
    flex: '0 0 40%',
    textAlign: 'left',
  },
  value: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: '0 0 60%',
    justifyContent: 'flex-end',
  },
  editButton: {
    minWidth: 'unset !important',
    padding: '4px 8px !important',
  },
  navigationTabs: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
  },
  navTab: {
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    '&.active': {
      backgroundColor: '#1976d2',
      color: '#ffffff',
    },
  },
}));