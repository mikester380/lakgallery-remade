import { React } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Hompage from "./pages/Home.js";
import Pieces from "./pages/Pieces.js";
import ProductDetails from "./pages/ProductDetails.js";
import Designers from "./pages/Designers.js";
import About from "./pages/About.js";
import Editorial from "./pages/Editorial.js";
import Contact from "./pages/Contact.js";
import ErrorPage from "./pages/404.js";

import CurrProvider from "./context/CurrContext.js";
import { CartProvider } from "./context/CartContext.js";
import { LayerProvider } from "./context/LayerContext.js";

const router = createBrowserRouter([
  { path: "/", element: <Hompage />, errorElement: <ErrorPage /> },
  { path: "/pieces", element: <Pieces /> },
  { path: "/piece/:productId", element: <ProductDetails /> },
  { path: "/designers", element: <Designers /> },
  { path: "/about", element: <About /> },
  { path: "/editorial", element: <Editorial /> },
  { path: "/contact", element: <Contact /> },
]);

const App = function () {
  return (
    <LayerProvider>
      <CartProvider>
        <CurrProvider>
          <RouterProvider router={router} />
        </CurrProvider>
      </CartProvider>
    </LayerProvider>
  );
};

export default App;
