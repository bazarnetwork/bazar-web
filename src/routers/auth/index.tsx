import { RouteObject, Navigate } from "react-router-dom";
import Login from "../../modules/auth/pages/login";

const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "verify",
    element: <Navigate to="/auth/login" />
  },
];

export default authRoutes;
