import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/login",

        Component: Login,
      },
    ]
  }

]);
