import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/home"; // Import the Home page component
import Profile from "../Pages/Profile/profile"
import Curriculam from "../Pages/Curriculam/curriculam";
import Tasks from "../Pages/Tasks/task"
import Help from "../Pages/Help/help"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home Page */}
      <Route path="/profile" element={<Profile />} /> {/* Profile Page */}
      <Route path="/curriculam" element={<Curriculam />} /> {/* Curriculam Page */}
      <Route path="/tasks" element={<Tasks />} /> {/* Tasks Page */}
      <Route path="/help" element={<Help />} /> {/* Help Page */}
    </Routes>
  );
};

export default AppRoutes;
