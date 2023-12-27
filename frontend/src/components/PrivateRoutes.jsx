import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const loginStatus = useSelector((state) => state.login.loginStatus);
  return loginStatus ? <Outlet /> : <Navigate to="/" />;
};

const PrivateAuthRoute = () => {
  const loginStatus = useSelector((state) => state.login.loginStatus);
  return loginStatus ? <Navigate to="/" /> : <Outlet />;
};

export { PrivateRoutes, PrivateAuthRoute };
