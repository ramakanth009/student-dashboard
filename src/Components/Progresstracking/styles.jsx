import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  progressContainer: {
    display: 'flex',
    gap: '24px',
    height: '95vh',
  },
  progressCard: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    borderRadius: '16px !important',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1) !important',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%) !important',
    '& .MuiCardContent-root': {
      height: '100%',
    },
  },
  sectionTitle: {
    marginBottom: '24px !important',
    fontWeight: '600 !important',
    color: '#1976d2',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  titleIcon: {
    fontSize: '1.5rem !important',
    color: '#1976d2',
  },
  progressItem: {
    marginBottom: '24px',
    padding: '16px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  progressBarContainer: {
    position: 'relative',
    marginBottom: '12px',
  },
  progressBar: {
    height: '10px !important',
    borderRadius: '5px !important',
    backgroundColor: 'rgba(0,0,0,0.05) !important',
  },
  progressOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 100%)',
    borderRadius: '5px',
    transition: 'width 0.3s ease',
  },
  badgeContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
  },
  badge: {
    borderRadius: '16px !important',
    '& .MuiChip-label': {
      fontWeight: '500 !important',
    },
  },
  badgeIcon: {
    color: '#1976d2 !important',
    fontSize: '1rem !important',
  },
  streakChip: {
    borderRadius: '16px !important',
    background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%) !important',
    color: 'white !important',
    '& .MuiChip-label': {
      fontWeight: '500 !important',
    },
  },
  streakIcon: {
    color: '#fff !important',
    fontSize: '1rem !important',
  },
  taskWidget: {
    padding: '16px',
    borderRadius: '12px !important',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%) !important',
    '&:hover': {
      boxShadow: '0 4px 12px rgba(0,0,0,0.1) !important',
      transform: 'translateY(-2px)',
      transition: 'all 0.3s ease',
    },
  },
  taskWidgetContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  progressCircleSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  progressCircleWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circularProgress: {
    '& .MuiCircularProgress-circle': {
      strokeLinecap: 'round',
    },
  },
  progressIconWrapper: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
    },
  },
  progressFraction: {
    fontSize: '0.75rem !important',
    color: '#666',
    fontWeight: '500 !important',
  },
  taskDetails: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  taskTitle: {
    fontSize: '1rem !important',
    fontWeight: '500 !important',
    color: '#2c3e50',
  },
  taskMetrics: {
    display: 'flex',
    gap: '16px',
  },
  metric: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#666',
    '& .MuiSvgIcon-root': {
      fontSize: '0.875rem',
    },
    '& .MuiTypography-root': {
      fontSize: '0.75rem',
    },
  },
  taskActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));