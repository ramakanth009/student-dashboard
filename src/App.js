import "./App.css";
import Sidenav from "./Components/Sidenav/sidenav";
import AppRoutes from "./routes/Routes.jsx"; // Import the routes

function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidenav is always visible */}
      <Sidenav />
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <AppRoutes /> {/* Render the imported routes */}
      </div>
    </div>
  );
}

export default App;
