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
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnglishTranslation from "./locale/en.json";
import ArabicTranslation from "./locale/ar.json";
import "./App.scss"
import ThemeProvider from './context/ThemeContext';
import EditProduct from './views/EditProduct';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EnglishTranslation,
      },
      ar: {
        translation: ArabicTranslation,
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
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
    path: "/products/:productId",
    element: <ProductDetails />
  },
  {
    path: "/products/edit/:productId",
    element: <EditProduct />
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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
