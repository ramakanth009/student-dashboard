// styles.jsx
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  chatContainer: {
    display: 'flex',
    height: 'calc(100vh - 100px)',
    gap: '20px',
    padding: '20px',
    // backgroundColor: 'rgba(204,204,204,0.2)',
  },
  
  sidebar: {
    width: '240px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
  },

  sidebarHeader: {
    padding: '16px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sessionItem: {
    padding: '10px 16px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },

  sessionIcon: {
    marginRight: '12px',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '20px',
  },

  mainChat: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
  },

  chatHeader: {
    padding: '20px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },

  messageArea: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px', // Increased gap to accommodate timestamp
    backgroundColor: '#f8f9fa',
  },

  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '70%',
    gap: '4px',
  },

  messageWrapperUser: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },

  messageWrapperAi: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },

  userMessage: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '12px 16px',
    borderRadius: '12px',
    borderBottomRightRadius: '4px',
    maxWidth: '100%',
    wordBreak: 'break-word',
  },

  aiMessage: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '12px 16px',
    borderRadius: '12px',
    borderBottomLeftRadius: '4px',
    maxWidth: '100%',
    wordBreak: 'break-word',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },

  timestamp: {
    fontSize: '0.75rem',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: '4px',
  },

  inputArea: {
    display: 'flex',
    gap: '12px',
    padding: '20px',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: '#fff',
  },

  input: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '25px',
      backgroundColor: '#f8f9fa',
    },
  },

  sendButton: {
    backgroundColor: '#1976d2',
    color: '#fff',
    width: '40px',
    height: '40px',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
    '&:disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
      color: 'rgba(0, 0, 0, 0.26)',
    },
  },

  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  },
}));