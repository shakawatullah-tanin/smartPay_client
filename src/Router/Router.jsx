import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Bills from "../Components/Bills/Bills";
import PrivateRoute from "../Components/Private/PrivateRoute";
import BillDeatails from "../Components/Bill-Deatils/BillDeatails";

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
      {
        path:"/register",
        Component:Register
      },
      {
        path:"/protected",
        element:<PrivateRoute><Bills></Bills></PrivateRoute>
      },

      {
        path:"/details/:id",

        element:<PrivateRoute><BillDeatails></BillDeatails></PrivateRoute>
      }
    ]
  }

]);
