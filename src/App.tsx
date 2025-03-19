import { BrowserRouter as Router, Route, Navigate, Routes, Outlet } from "react-router-dom";
import Layout from "@components/layout/Layout";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getMuiTheme } from "@styles/theme";
import { ThemeProvider, useTheme } from "@context/ThemeContext";

// Genel sayfalar
import Home from "@pages/Home";

// Özel sayfalar (Yetki gerektiren)
import ApplicationSearch from "@pages/Home";
import { useAuth } from "@services/authService";

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

  return (
    <MuiThemeProvider theme={getMuiTheme(theme)}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Varsayılan dil yönlendirmesi */}
          <Route path="/" element={<Navigate to={`tr-TR/Login`} replace />} />

          {/* Dil bazlı yollar */}
          <Route path="tr-TR/*">
            {/* Genel sayfalar */}
            <Route path="Login" element={<Home />} />

            {/* Giriş yapmış kullanıcılar için korunan sayfalar */}
            <Route
              path="Home"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Home />
                  </Layout>
                </ProtectedRoute>
              }
            />

            <Route
              path="ApplicationSearch"
              element={
                <ProtectedRoute>
                  <Layout>
                    <ApplicationSearch />
                  </Layout>
                </ProtectedRoute>
              }
            />

            {/* Admin sayfaları */}
            <Route path="Admin/*" element={<AdminRoute redirectTo={`/Login`} />}>
              <Route path="Home" element={<Home />} />
            </Route>
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
