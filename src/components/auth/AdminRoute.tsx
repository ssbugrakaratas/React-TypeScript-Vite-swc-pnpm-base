import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@services/authService";

interface AdminRouteProps {
  children: React.ReactNode;
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user || user.role !== "admin") {
    return <Navigate to="/tr-TR/Home" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
