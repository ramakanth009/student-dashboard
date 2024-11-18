// // App.js
// import "./App.css";
// import { useState } from "react";
// import Sidenav from "./Components/Sidenav/sidenav";
// import AppRoutes from "./Routes/routes";
// import { useLocation } from "react-router-dom";

// function App() {
//   const location = useLocation();
//   const isLoginPage = location.pathname === "/login";
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const handleCollapse = (collapsed) => {
//     setIsCollapsed(collapsed);
//   };

//   return (
//     <div className="app-container">
//       {!isLoginPage && (
//         <div className={`sidenav-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
//           <Sidenav onCollapse={handleCollapse} />
//         </div>
//       )}
//       <div className={isLoginPage ? "full-content" : `main-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
//         <AppRoutes />
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";
import Sidenav from "./Components/Sidenav/sidenav";
import AppRoutes from "./Routes/routes";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "./error-boundary";

function App() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isLoginPage = location.pathname === "/login";

  const handleCollapse = (collapsed) => {
    setIsCollapsed(collapsed);
  };

  return (
    <ErrorBoundary>
      <div className="app-container">
        {!isLoginPage && (
          <div className={`sidenav-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <Sidenav onCollapse={handleCollapse} />
          </div>
        )}
        <div className={isLoginPage ? "full-content" : `main-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
          <AppRoutes />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;