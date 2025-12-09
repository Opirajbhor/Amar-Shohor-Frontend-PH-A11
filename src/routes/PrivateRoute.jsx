import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import { SmallLoading } from "../utils/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return SmallLoading;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace="true" />;
};

export default PrivateRoute;
