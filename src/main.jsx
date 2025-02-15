import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import PdcDetails from './components/Details/PdcDetails.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import About from './components/About/About.jsx';
import Statistics from './components/Statistics/Statistics.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/gadgets/:product_id',
        element: <PdcDetails />,
        loader: () => fetch("gadget.json")
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'statistics',
        element: <Statistics/>
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
