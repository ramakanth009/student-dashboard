// routerConfig.js
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

export const routerConfig = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    errorElement: <App />, // This ensures App handles all routes
  },
]);
