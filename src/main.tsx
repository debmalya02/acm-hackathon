import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import Hero from './components/Hero.tsx'
import AboutUs from './components/AboutUs.tsx';
import ProcessFlow from './components/ProcessFlow.tsx';
import Theme from './components/Theme.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "hero",
    element: <Hero />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "processflow",
    element: <ProcessFlow />,
  },
  {
    path: "theme",
    element: <Theme />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
