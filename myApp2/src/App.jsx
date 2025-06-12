import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products/Products";
import Layout from "./layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import React from "react";

let route = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Products", element: <Products /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
