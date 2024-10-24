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
import Module3 from "../Pages/Module_pages/Module3/module3";
import Module4 from "../Pages/Module_pages/Module4/module4";
import Module5 from "../Pages/Module_pages/Module5/module5";
import Module6 from "../Pages/Module_pages/Module6/module6";
import Module7 from "../Pages/Module_pages/Module7/module7";
import Module8 from "../Pages/Module_pages/Module8/module8";
import Module9 from "../Pages/Module_pages/Module9/module9";
import Module10 from "../Pages/Module_pages/Module10/module10";
import Module11 from "../Pages/Module_pages/Module11/module11";
import Module12 from "../Pages/Module_pages/Module12/module12";
import Module13 from "../Pages/Module_pages/Module13/module13";
import Module14 from "../Pages/Module_pages/Module14/module14";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/curriculam" element={<Curriculam />} />
      <Route path="/curriculam/module1" element={<Module1 />} />
      <Route path="/curriculam/module2" element={<Module2 />} />
      <Route path="/curriculam/module3" element={<Module3 />} />
      <Route path="/curriculam/module4" element={<Module4 />} />
      <Route path="/curriculam/module5" element={<Module5 />} />
      <Route path="/curriculam/module6" element={<Module6 />} />
      <Route path="/curriculam/module7" element={<Module7 />} />
      <Route path="/curriculam/module8" element={<Module8 />} />
      <Route path="/curriculam/module9" element={<Module9 />} />
      <Route path="/curriculam/module10" element={<Module10 />} />
      <Route path="/curriculam/module11" element={<Module11 />} />
      <Route path="/curriculam/module12" element={<Module12 />} />
      <Route path="/curriculam/module13" element={<Module13 />} />
      <Route path="/curriculam/module14" element={<Module14 />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default AppRoutes;