import React, { createContext, useState, useEffect, useContext } from 'react';

const ScheduleContext = createContext();

export const useSchedule = () => useContext(ScheduleContext);

export const ScheduleProvider = ({ children, webAppUrl }) => {
  const [scheduleData, setScheduleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchScheduleData = async () => {
    try {
      const response = await fetch(webAppUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const { data, status } = await response.json();
      
      if (status !== 'success') {
        throw new Error('Data fetch was not successful');
      }

      // Transform the data into daily schedules
      const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const transformedData = daysOfWeek.map(day => ({
        day,
        classes: data
          .filter(item => item.day === day)
          .map(item => ({
            time: item.time,
            title: item.title,
            track: item.track,
            joinLink: item.joinLink,
            hasClass: true
          }))
      }));
      
      setScheduleData(transformedData);
      setLoading(false);
    } catch (err) {
      console.error('Schedule fetch error:', err);
      setError(`Failed to fetch schedule data: ${err.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScheduleData();
  }, [webAppUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  const refreshSchedule = () => {
    setLoading(true);
    setError(null);
    fetchScheduleData();
  };

  return (
    <ScheduleContext.Provider value={{ 
      scheduleData, 
      loading, 
      error,
      refreshSchedule
    }}>
      {children}
    </ScheduleContext.Provider>
  );
};