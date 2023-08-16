import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './views/Home';
import Todo from './views/Todo';
import Products from './views/Products';
import Cart from './views/Cart';
import Error from './views/Error';
import ProductDetails from './views/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/todo",
    element: <Todo />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path:"/products/:productId",
    element:<ProductDetails />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/*",
    element: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
