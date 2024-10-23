// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "../Pages/Home/home"; // Import the Home page component
// import Profile from "../Pages/Profile/profile"
// import Curriculam from "../Pages/Curriculam/curriculam";
// import Tasks from "../Pages/Tasks/task"
// import Help from "../Pages/Help/help"

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} /> {/* Home Page */}
//       <Route path="/profile" element={<Profile />} /> {/* Profile Page */}
//       <Route path="/curriculam" element={<Curriculam />} /> {/* Curriculam Page */}
//       <Route path="/tasks" element={<Tasks />} /> {/* Tasks Page */}
//       <Route path="/help" element={<Help />} /> {/* Help Page */}
//     </Routes>
//   );
// };

// export default AppRoutes;


import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/home";
import Profile from "../Pages/Profile/profile";
import Curriculam from "../Pages/Curriculam/curriculam";
import Tasks from "../Pages/Tasks/task";
import Help from "../Pages/Help/help";
import Module1 from "../Pages/Module_pages/Module1/module1";
import Module2 from "../Pages/Module_pages/Module2/module2";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/curriculam" element={<Curriculam />} />
      <Route path="/curriculam/module1" element={<Module1 />} />
      <Route path="/curriculam/module2" element={<Module2 />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default AppRoutes;