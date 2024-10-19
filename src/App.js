import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidenav from "./Components/Sidenav/sidenav";
import AppRoutes from "./routes/routes"; // Import the routes

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidenav is always visible */}
        <Sidenav />

        {/* Main content area */}
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <AppRoutes /> {/* Render the imported routes */}
        </div>
      </div>
    </Router>
  );
}

export default App;
