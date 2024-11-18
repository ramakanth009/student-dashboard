// src/components/Login/styles.js
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  // Layout styles
  leftSection: {
    flex: 1,
    background: 'linear-gradient(135deg, #EEAC11 0%, #FF8833 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '48px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 960px)': {
      padding: '32px',
      minHeight: '300px',
    },
  },
  leftContent: {
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 960px)': {
      textAlign: 'center',
    },
  // },
  animation: "$float 6s ease-in-out infinite",
},
"@keyframes float": {
  "0%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-20px)",
  },
  "100%": {
    transform: "translateY(0px)",
  },
  },
  studentImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '90%',
    zIndex: 1,
    animation: "$float 6s ease-in-out infinite",
    '@media (max-width: 960px)': {
      width: '70%',
      right: '50%',
      transform: 'translateX(50%)',
    },
    
  },
  heading: {
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    marginBottom: '24px !important',
    lineHeight: '1.2 !important',
    '@media (max-width: 960px)': {
      fontSize: '2rem !important',
    },
  },
  subheading: {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginBottom: '32px',
    maxWidth: '300px',
    '@media (max-width: 960px)': {
      fontSize: '1rem',
      margin: '0 auto 24px',
    },
  },}))

  