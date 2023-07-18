import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import Products from './pages/Products/Prosucts.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/products/:id',
      element: <Products />,
    },
    {
      path : '/product/:id',
      element: <Product />,
    }
  ]
  
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
