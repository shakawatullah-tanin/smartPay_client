import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Bills from "../Components/Bills/Bills";
import PrivateRoute from "../Components/Private/PrivateRoute";
import BillDeatails from "../Components/Bill-Deatils/BillDeatails";
import Update from "../ProfileUpdate/Update";
import UpdateProfile from "../ProfileUpdate/UpdateProfile";
import History from "../History/History";

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
      },
      {
        path:"/update",
        element:<PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path:"/updateProfile",
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path:"/history",
        Component: History
      }
    ]
  }

]);
