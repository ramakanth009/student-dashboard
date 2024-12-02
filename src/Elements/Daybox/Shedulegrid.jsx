import React from 'react';
import { Grid } from '@mui/material';
import { useSchedule } from './Sheduleprovider';
import UpdatedDayBox from './Daybox';

const ScheduleGrid = () => {
  const { scheduleData, loading, error } = useSchedule();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="schedule-container">
      <h1>Class Schedule</h1>
      <Grid container spacing={2}>
        {scheduleData.map((daySchedule) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={daySchedule.day}>
            <UpdatedDayBox daySchedule={daySchedule} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ScheduleGrid;
