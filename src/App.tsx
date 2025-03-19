import { BrowserRouter as Router, Route, Navigate, Routes, Outlet } from "react-router-dom";
import Layout from "@components/layout/Layout";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getMuiTheme } from "@styles/theme";
import { ThemeProvider, useTheme } from "@context/ThemeContext";
import { routes, adminRoutes, RouteConfig } from "@config/routes";
import { useAuth } from "@services/authService";

// Genel sayfalar
import Home from "@pages/Home";

function AppContent() {
  const { theme } = useTheme();

  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/tr-TR/Login" replace />;
    }

    return <>{children}</>;
  };

  const AdminRoute: React.FC<{ redirectTo?: string }> = ({ redirectTo = "/tr-TR/Login" }) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated || user.role !== "admin") {
      return <Navigate to={redirectTo} replace />;
    }

    return <Outlet />;
  };

  const renderRoute = (route: RouteConfig, isAdmin = false) => {
    const RouteComponent = isAdmin ? AdminRoute : ProtectedRoute;
    const Element = route.element;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <RouteComponent>
            <Layout>
              <Element />
            </Layout>
          </RouteComponent>
        }
      />
    );
  };

  return (
    <MuiThemeProvider theme={getMuiTheme(theme)}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Varsayılan dil yönlendirmesi */}
          <Route path="/" element={<Navigate to="/tr-TR/Login" replace />} />

          {/* Dil bazlı yollar */}
          <Route path="tr-TR">
            {/* Genel sayfalar */}
            <Route path="Login" element={<Home />} />

            {/* Normal Kullanıcı Sayfaları */}
            {routes.map((route) => renderRoute(route))}

            {/* Admin Sayfaları */}
            <Route path="Admin">{adminRoutes.map((route) => renderRoute(route, true))}</Route>
          </Route>
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
