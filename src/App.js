// import "./App.css";
// import Sidenav from "./Components/Sidenav/sidenav";
// import AppRoutes from "./Routes/routes"; // Import the routes

// function App() {
//   return (
//     <div style={{ display: "flex",gap:"5px",  }}>
//       {/* Sidenav is always visible */}
      
//       <Sidenav style={{position:"fixed"}}/>
//       {/* <div style={{ flexGrow: 1, padding: "20px" }}> */}
//         {/* Render the imported routes */}
//         <AppRoutes /> 
//       {/* </div> */}
//     </div>
//   );
// }

// export default App;
import "./App.css";
import Sidenav from "./Components/Sidenav/sidenav";
import AppRoutes from "./Routes/routes";
// import QuestionVaultBot  from "./Bot/bot";

function App() {
  return (
    <div className="app-container">
      <div className="sidenav-container">
        <Sidenav />
      </div>
      <div className="main-content">
        {/* <QuestionVaultBot />  */}
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
