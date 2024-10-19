import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home"; // Import the Home page component

const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} /> {/* Home Page */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
