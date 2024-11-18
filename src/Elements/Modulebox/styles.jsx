// // import { makeStyles } from "@mui/styles";

// // export const useStyles = makeStyles({
// //   moduleBox: {
// //     borderRadius: '8px',
// //     padding: '16px',
// //     marginBottom: '16px',
// //     backgroundColor: '#fff',
// //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// //     transition: 'all 0.3s ease-in-out',

// //     cursor:"pointer",
// //     '&:hover': {
// //       transform: 'translateY(-4px)',
// //       boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
// //     }
// //   },
// //   moduleContent: {
// //     display: 'flex',
// //     flexDirection:"column",
// //     alignItems:"flex-start",
// //     gap: '16px'
// //   },
// //   moduleNumber: {
// //     width: 'auto',
// //     borderRadius: '20px',
// //     padding:"5px 10px",
// //     backgroundColor: 'rgb(25,118,208,0.5)',
    
// //     color: '#000000',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     fontWeight: 'bold'
// //   },
// //   modulebox2:{
// //     width:"100%",
// //     display:"flex",
// //     justifyContent:"space-around",
// //     padding:"0px 5px"
// //   },
// //   moduleTitle: {
// //     flex: 1,
// //     fontWeight: 500,
// //     fontSize: '1rem',
// //     margin: 0
// //   },
// //   statusChip: {
// //     padding: '4px 12px',
// //     borderRadius: '16px',
// //     fontSize: '0.875rem',
// //     fontWeight: 500,
// //     display: 'inline-block'
// //   },
// //   statusTodo: {
// //     backgroundColor: '#FFE0E0',
// //     color: '#D32F2F',
// //     border: '1px solid #ffcdd2'
// //   },
// //   statusInProgress: {
// //     backgroundColor: '#FFF3E0',
// //     color: '#E65100',
// //     border: '1px solid #ffe0b2'
// //   },
// //   statusSubmitted: {
// //     backgroundColor: '#E8F5E9',
// //     color: '#2E7D32',
// //     border: '1px solid #c8e6c9'
// //   }
// // });
// import { makeStyles } from '@mui/styles';

// export const useStyles = makeStyles({
//   moduleCard: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     padding: '20px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//     border: '1px solid #edf2f7',
//     position: 'relative',
//     minHeight: '80px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     gap: '12px'
//   },
//   moduleContent: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     gap: '12px'
//   },
//   moduleTitle: {
//     fontSize: '1rem !important',
//     fontWeight: '500 !important',
//     color: '#2D3748',
//     flex: 1
//   },
//   moduleNumber: {
//     backgroundColor: '#3182CE',
//     color: '#FFFFFF',
//     padding: '4px 12px',
//     borderRadius: '16px',
//     fontSize: '0.875rem',
//     fontWeight: 500
//   },
//   statusChip: {
//     fontSize: '0.875rem',
//     fontWeight: 500,
//     padding: '2px 0',
//     width: 'fit-content'
//   },
//   statusTodo: {
//     color: '#E53E3E'
//   },
//   statusPending: {
//     color: '#DD6B20'
//   },
//   statusSubmitted: {
//     color: '#38A169'
//   }
// });
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  moduleCard: {
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    borderRadius: '12px',
    outline: 'none',
    
    '&:hover': {
      transform: 'translateY(-4px)',
      '& $moduleInner': {
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        borderColor: '#E2E8F0'
      },
      '& $moduleNumber': {
        transform: 'scale(1.05)',
        boxShadow: '0 2px 4px rgba(66, 153, 225, 0.2)'
      }
    },
    
    '&:focus': {
      '& $moduleInner': {
        borderColor: '#4299E1',
        boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.3)'
      }
    },
    
    '&:active': {
      transform: 'translateY(-2px)',
      '& $moduleInner': {
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }
    }
  },
  
  moduleInner: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    border: '1px solid #EDF2F7',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    minHeight:"95px",
    height: '100%'
  },
  
  moduleContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '12px'
  },
  
  moduleTitle: {
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    color: '#2D3748',
    flex: 1,
    transition: 'color 0.3s ease'
  },
  
  moduleNumber: {
    backgroundColor: '#4299E1',
    color: '#FFFFFF',
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  },
  
  statusChip: {
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: '2px 0',
    width: 'fit-content',
    transition: 'opacity 0.3s ease',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '-12px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      marginRight: '8px'
    }
  },
  
  statusTodo: {
    color: '#E53E3E',
    '&::before': {
      backgroundColor: '#E53E3E'
    }
  },
  
  statusPending: {
    color: '#DD6B20',
    '&::before': {
      backgroundColor: '#DD6B20'
    }
  },
  
  statusSubmitted: {
    color: '#38A169',
    '&::before': {
      backgroundColor: '#38A169'
    }
  }
});