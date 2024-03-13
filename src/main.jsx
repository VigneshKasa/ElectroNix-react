import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Home from './components/Home'
import Layout from './routes/Layout'
import Store from './components/Store'
import './index.css'
import Login from './components/Login'
import Cart from './components/Cart'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Store",
        element:<Store/>
      },
      {
        path:"/About",
        element:<AboutUs/>
      },
      {
        path:"/Contact",
        element:<ContactUs/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
