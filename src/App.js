import "./App.css";
import Sidenav from "./Components/Sidenav/sidenav";
import AppRoutes from "./Routes/routes"; // Import the routes

function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidenav is always visible */}
      <Sidenav />
      <div style={{ flexGrow: 1, padding: "20px" }}>
        {/* Render the imported routes */}
        <AppRoutes /> 
      </div>
    </div>
  );
}

export default App;
