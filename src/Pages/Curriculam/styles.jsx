// import { makeStyles } from '@mui/styles';

// export const useStyles = makeStyles({
//   root: {
//     backgroundColor: '#ffffff',
//     minHeight: '100vh',
//     width: '100%'
//   },
//   header: {
//     backgroundColor: '#4299E1',
//     padding: '40px 20px',
//     textAlign: 'center',
//     marginBottom: '40px',
//     borderRadius: '16px'
//   },
//   mainTitle: {
//     color: '#FFFFFF !important',
//     fontSize: '2.25rem !important',
//     fontWeight: '700 !important',
//     marginBottom: '8px !important'
//   },
//   subtitle: {
//     color: '#EBF8FF !important',
//     fontSize: '1rem !important',
//     fontWeight: '400 !important'
//   },
//   trackSection: {
//     marginBottom: '48px'
//   },
//   trackHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     marginBottom: '24px'
//   },
//   trackIcon: {
//     width: '40px',
//     height: '40px',
//     backgroundColor: '#4299E1',
//     borderRadius: '8px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#FFFFFF',
//     fontSize: '1rem',
//     fontWeight: '600'
//   },
//   trackTitle: {
//     fontSize: '1.25rem !important',
//     fontWeight: '600 !important',
//     color: '#2D3748',
//     margin: '0 !important'
//   },
//   modulesGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//     gap: '24px',
//     padding: '0 16px'
//   }
// });

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    // backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden'
  },
  headerContainer: {
    backgroundColor: '#4299E1',
    padding: '40px 20px',
    marginBottom: '40px',
    marginLeft: '20px',
    position: 'relative',
    borderRadius:"20px",
    // '&::after': {
    //   content: '""',
    //   position: 'absolute',
    //   bottom: '-20px',
    //   left: '0',
    //   right: '0',
    //   height: '40px',
    //   background: 'linear-gradient(180deg, #4299E1 0%, transparent 100%)',
    //   zIndex: 1
    // }
  },
  header: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2
  },
  mainTitle: {
    color: '#FFFFFF !important',
    fontSize: '2.5rem !important',
    fontWeight: '700 !important',
    marginBottom: '16px !important',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)'
    }
  },
  subtitle: {
    color: '#EBF8FF !important',
    fontSize: '1.125rem !important',
    fontWeight: '400 !important',
    maxWidth: '600px',
    margin: '0 auto !important',
    opacity: 0.9
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2
  },
  trackSection: {
    marginBottom: '48px',
    opacity: 0,
    animation: '$fadeInUp 0.5s ease forwards',
    '&:nth-child(1)': { animationDelay: '0.1s' },
    '&:nth-child(2)': { animationDelay: '0.2s' },
    '&:nth-child(3)': { animationDelay: '0.3s' },
    '&:nth-child(4)': { animationDelay: '0.4s' }
  },
  trackHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
    padding: '0 16px'
  },
  trackIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#4299E1',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(66, 153, 225, 0.2)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 8px rgba(66, 153, 225, 0.3)'
    }
  },
  trackTitle: {
    fontSize: '1.25rem !important',
    fontWeight: '600 !important',
    color: '#2D3748',
    margin: '0 !important',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#4299E1'
    }
  },
  modulesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
    padding: '0 16px',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr'
    }
  },
  moduleWrapper: {
    opacity: 0,
    animation: '$fadeInUp 0.5s ease forwards',
    animationDelay: 'calc(var(--animation-order, 0) * 0.1s)'
  },
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
});