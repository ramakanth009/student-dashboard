import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  statsContainer: {
    marginTop: '24px',
    width: 'auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  sectionTitle: {
    fontWeight: '600 !important',
    color: '#1976d2',
    marginBottom: '20px !important',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  statCard: {
    padding: '24px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '12px !important',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%) !important',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1) !important',
    },
  },
  iconWrapper: {
    marginBottom: '12px',
    '& .MuiSvgIcon-root': {
      fontSize: '2rem',
    },
  },
  skillsIcon: {
    color: '#1976d2 !important',
  },
  streakIcon: {
    color: '#ed6c02 !important',
  },
  statCount: {
    fontWeight: '600 !important',
    fontSize: '1.75rem !important',
    color: '#2c3e50',
    marginBottom: '4px !important',
  },
  statLabel: {
    color: '#666',
    fontSize: '0.875rem !important',
    fontWeight: '500 !important',
  },
});