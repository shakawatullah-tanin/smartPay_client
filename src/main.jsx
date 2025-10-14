import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";

import "./index.css";

import { router } from "./Router/Router.jsx";
import AuthContextProvider from "./Components/Context/AuthContextProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
       <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  </StrictMode>
);
