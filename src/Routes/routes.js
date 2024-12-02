import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "../Pages/Home/home";
import Profile from "../Pages/Profile/profile";
import Curriculam from "../Pages/Curriculam/curriculam";
import Tasks from "../Pages/Tasks/task";
import Help from "../Pages/Help/help";
// import ChatWithAI from "../Pages/Chatwithai/chatwithai";
import Git from "../Pages/Git/git";
import Login from "../Pages/Login/login";
// import ScheduleGrid from '../Elements/Daybox/Shedulegrid'

// Lazy load module components
const moduleImports = {
  Module1: React.lazy(() => import("../Pages/Module_pages/Module1/module1")),
  Module2: React.lazy(() => import("../Pages/Module_pages/Module2/module2")),
  Module3: React.lazy(() => import("../Pages/Module_pages/Module3/module3")),
  Module4: React.lazy(() => import("../Pages/Module_pages/Module4/module4")),
  Module5: React.lazy(() => import("../Pages/Module_pages/Module5/module5")),
  Module6: React.lazy(() => import("../Pages/Module_pages/Module6/module6")),
  Module7: React.lazy(() => import("../Pages/Module_pages/Module7/module7")),
  Module8: React.lazy(() => import("../Pages/Module_pages/Module8/module8")),
  Module9: React.lazy(() => import("../Pages/Module_pages/Module9/module9")),
  Module10: React.lazy(() => import("../Pages/Module_pages/Module10/module10")),
  Module11: React.lazy(() => import("../Pages/Module_pages/Module11/module11")),
  Module12: React.lazy(() => import("../Pages/Module_pages/Module12/module12")),
  Module13: React.lazy(() => import("../Pages/Module_pages/Module13/module13")),
  Module14: React.lazy(() => import("../Pages/Module_pages/Module14/module14")),
};

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isChecking, setIsChecking] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      const expiration = localStorage.getItem("credentialsExpiration");
      
      if (!token || (expiration && new Date(expiration) < new Date())) {
        // Clear any expired tokens
        localStorage.removeItem("authToken");
        localStorage.removeItem("rememberedCredentials");
        localStorage.removeItem("credentialsExpiration");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
      setIsChecking(false);
    };

    checkAuth();
  }, [location]);

  if (isChecking) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <React.Suspense fallback={<LoadingSpinner />}>{children}</React.Suspense>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      
      {/* Default route */}
      <Route 
        path="/" 
        element={
          localStorage.getItem("authToken") ? 
          <Navigate to="/home" replace /> : 
          <Navigate to="/login" replace />
        } 
      />
      
      {/* Protected routes */}
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/curriculam" element={<ProtectedRoute><Curriculam /></ProtectedRoute>} />
      {/* <Route path="/schedule" element={<ScheduleGrid />} /> */}
      
      {/* Module routes */}
      {Array.from({ length: 14 }, (_, i) => i + 1).map((moduleNumber) => (
        <Route
          key={`module${moduleNumber}`}
          path={`/curriculam/module${moduleNumber}`}
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<LoadingSpinner />}>
                {React.createElement(moduleImports[`Module${moduleNumber}`])}
              </React.Suspense>
            </ProtectedRoute>
          }
        />
      ))}
      
      {/* Utility routes */}
      <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
      {/* <Route path="/chatwithai" element={<ProtectedRoute><ChatWithAI /></ProtectedRoute>} /> */}
      <Route path="/git" element={<ProtectedRoute><Git /></ProtectedRoute>} />
      <Route path="/help" element={<ProtectedRoute><Help /></ProtectedRoute>} />

      {/* Catch all route */}
      <Route 
        path="*" 
        element={
          localStorage.getItem("authToken") ? 
          <Navigate to="/home" replace /> : 
          <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
};

export default AppRoutes;