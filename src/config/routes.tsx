import { Home, Dashboard, Settings } from "@mui/icons-material";
import HomePage from "@pages/Home";
import DashboardPage from "@pages/Dashboard";
import SettingsPage from "@pages/Settings";
import { ReactNode } from "react";

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  text: string;
  icon: ReactNode;
  isAdmin?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: "Home",
    element: HomePage,
    text: "Ana Sayfa",
    icon: <Home />,
  },
  {
    path: "Dashboard",
    element: DashboardPage,
    text: "Dashboard",
    icon: <Dashboard />,
  },
  {
    path: "Settings",
    element: SettingsPage,
    text: "Ayarlar",
    icon: <Settings />,
  },
];

export const adminRoutes: RouteConfig[] = [
  {
    path: "Home",
    element: HomePage,
    text: "Admin Ana Sayfa",
    icon: <Home />,
    isAdmin: true,
  },
];
