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
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
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
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* İçerik Alanı */}
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
