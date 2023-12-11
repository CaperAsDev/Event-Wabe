import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import Detail from "./components/pages/EventDetail";
import Register from "./components/pages/Register";
import CreateEventPage from "./components/pages/CreateEventPage";
import axios from "axios";

// axios.defaults.baseURL = `http://localhost:3031/api`; //Local
axios.defaults.baseURL = `https://event-wave-server.vercel.app/api`; //deployada

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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
