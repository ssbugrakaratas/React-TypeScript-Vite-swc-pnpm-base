import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Button,
} from "@mui/material";
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Logout } from "@mui/icons-material";
import { routes, adminRoutes, RouteConfig } from "@config/routes";
import { useAuth } from "@services/authService";
import ThemeToggle from "./ThemeToggle";

const drawerWidth = 240;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleDrawer = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const renderMenuItem = (route: RouteConfig) => {
    const isSelected = location.pathname === `/tr-TR/${route.path}`;
    return (
      <ListItem key={route.path} disablePadding>
        <ListItemButton
          selected={isSelected}
          onClick={() => navigate(`/tr-TR/${route.path}`)}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            "&.Mui-selected": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
              color: isSelected ? theme.palette.primary.contrastText : "inherit",
            }}
          >
            {route.icon}
          </ListItemIcon>
          <ListItemText
            primary={route.text}
            sx={{
              opacity: open ? 1 : 0,
              color: isSelected ? theme.palette.primary.contrastText : "inherit",
            }}
          />
        </ListItemButton>
      </ListItem>
    );
  };

  const currentRoute = routes.find((route: RouteConfig) => location.pathname === `/tr-TR/${route.path}`);
  const currentAdminRoute = adminRoutes.find(
    (route: RouteConfig) => location.pathname === `/tr-TR/Admin/${route.path}`,
  );
  const pageTitle = currentRoute?.text || currentAdminRoute?.text || "Ana Sayfa";

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {pageTitle}
          </Typography>
          <ThemeToggle />
          <Button color="inherit" startIcon={<Logout />} onClick={() => console.log("Logout clicked!")}>
            Çıkış Yap
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            ...(!open && {
              width: theme.spacing(7),
              overflowX: "hidden",
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            }),
          },
        }}
        variant="permanent"
        open={open}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {routes.map(renderMenuItem)}
            {user.role === "admin" && (
              <>
                <Divider />
                {adminRoutes.map(renderMenuItem)}
              </>
            )}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${open ? drawerWidth : theme.spacing(7)}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: open ? 0 : `-${drawerWidth - parseInt(theme.spacing(7))}px`,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
