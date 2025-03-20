import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@services/authService";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/tr-TR/Login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
