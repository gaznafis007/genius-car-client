import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginAndOut/Login";
import MyOrders from "../Pages/MyOrders/MyOrders";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://genius-car-server-rho-tawny.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://genius-car-server-rho-tawny.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/myOrders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
