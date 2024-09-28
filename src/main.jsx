import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dashboard from "./components/Dashboard"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Recurit from './components/Recurit'
import FullWidthCalendar from './components/FullWidthCalendar.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Dashboard />
      },
      {
        path:"/recurit",
        element: <Recurit />
      },
      {
        path:"/calendar",
        element: <FullWidthCalendar />
      }

    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
