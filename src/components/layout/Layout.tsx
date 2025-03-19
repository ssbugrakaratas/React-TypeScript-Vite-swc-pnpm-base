import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Menu, Home, Dashboard, Settings, Logout } from "@mui/icons-material";
import ThemeToggle from "./ThemeToggle"; // Theme Toggle bileşeni eklendi

const drawerWidth = 240;
const miniDrawerWidth = 65;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true); // Sidebar varsayılan olarak açık

  const handleLogout = () => {
    console.log("Logout clicked!"); // Buraya çıkış işlemini ekleyebilirsin
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {/* Menü Butonu */}
          <IconButton edge="start" color="inherit" onClick={() => setOpen(!open)}>
            <Menu />
          </IconButton>

          {/* Başlık */}
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, ml: 2 }}>
            My App
          </Typography>

          {/* Tema Değiştirici */}
          <ThemeToggle />

          {/* Çıkış Butonu */}
          <Button color="inherit" startIcon={<Logout />} onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : miniDrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : miniDrawerWidth,
            boxSizing: "border-box",
            transition: "all 0.3s ease-in-out",
            overflowX: "hidden",
            borderRight: "none",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            transform: open ? "translateX(0)" : "translateX(0)",
          },
        }}
      >
        <Toolbar />
        <List>
          {[
            { text: "Home", icon: <Home /> },
            { text: "Dashboard", icon: <Dashboard /> },
            { text: "Settings", icon: <Settings /> },
          ].map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    minWidth: open ? 36 : 0,
                    justifyContent: "center",
                    transition: "all 0.3s ease-in-out",
                    opacity: open ? 1 : 0.7,
                    transform: open ? "scale(1)" : "scale(0.9)",
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                    whiteSpace: "nowrap",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* İçerik Alanı */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          transition: "all 0.3s ease-in-out",
          backgroundColor: "background.default",
          minHeight: "100vh",
          width: `calc(100% - ${open ? drawerWidth : miniDrawerWidth}px)`,
          transform: open ? "translateX(0)" : `translateX(0)`,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "background.default",
            transition: "all 0.3s ease-in-out",
            zIndex: -1,
          },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
