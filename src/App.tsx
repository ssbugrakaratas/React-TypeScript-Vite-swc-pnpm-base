import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Layout from "@components/layout/Layout";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getMuiTheme } from "@styles/theme";
import { ThemeProvider, useTheme } from "@context/ThemeContext";
import { routes, adminRoutes } from "@config/routes";
import ProtectedRoute from "@components/auth/ProtectedRoute";
import AdminRoute from "@components/auth/AdminRoute";

// Genel sayfalar
import Login from "@pages/Login";

function AppContent() {
  const { theme } = useTheme();

  const renderRoute = (route: (typeof routes)[0], isAdmin = false) => {
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
            <Route path="Login" element={<Login />} />

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
