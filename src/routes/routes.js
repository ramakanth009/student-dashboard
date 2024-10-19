import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/home"; // Import the Home page component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Home Page */}
    </Routes>
  );
};

export default AppRoutes;
