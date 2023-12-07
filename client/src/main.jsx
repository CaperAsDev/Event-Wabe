import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import Detail from "./components/pages/EventDetail";
import Register from "./components/pages/Register";
import CreateEventPage from "./components/pages/CreateEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/createEvent",
        element: <CreateEventPage />,
      },
      {
        path: "*",
        element: <h2>Ya casi hacemos esa pagina, paciencia 🤓</h2>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
