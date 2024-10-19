import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';        // Import the Home page component
import Profile from '../Pages/Profile/Profile';  // Import the Profile page component
import Curriculum from '../Pages/Curriculam/Curriculam'; // Import the Curriculum page component
import Tasks from '../Pages/Tasks/Tasks';        // Import the Task page component
import Help from '../Pages/Help/Help';        // Import the Help page component
import Sidenav from '../Components/Sidenav/Sidenav'; // Import the Sidenav

const AppRoutes = () => {
  return (
    <Router>
      <Sidenav />  {/* This will be displayed on all routes */}
      <Routes>
        <Route path="/" element={<Home />} />           {/* Home Page */}
        <Route path="/profile" element={<Profile />} /> {/* Profile Page */}
        <Route path="/curriculum" element={<Curriculum />} /> {/* Curriculum Page */}
        <Route path="/task" element={<Tasks />} />       {/* Task Page */}
        <Route path="/help" element={<Help />} />       {/* Help Page */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
