import "./App.css";
import { useState } from "react";
import Sidenav from "./Components/Sidenav/sidenav.jsx";
import AppRoutes from "./Routes/routes.js";
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