import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Curriculum from './Curriculum';
import ModuleDetail1 from '../Pages/Module_pages/Module1/module1';
import ModuleDetail2 from '../Pages/Module_pages/Module2/module2';

const CurriculumRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Main curriculum page */}
        <Route path="/" element={<Curriculum />} />

        {/* Individual module detail pages */}
        <Route path="/module/1" element={<ModuleDetail1 />} />
        <Route path="/module/2" element={<ModuleDetail2 />} />
        {/* Add more routes for additional modules */}
      </Routes>
    </Router>
  );
};

export default CurriculumRouter;
