// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface NavBarProps {
  mode?: "light" | "dark";
  toggleTheme?: () => void;
}

export default function NavBar({ mode }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "About", to: "hero" },
    { name: "Portfolio", to: "recent-works" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          top: 0,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          backgroundColor: scrolled
            ? mode === "dark"
              ? "rgba(4, 6, 19, 0.8)"
              : "rgba(255, 255, 255, 0.8)"
            : "transparent",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
          padding: "10px 0",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {/* Left Section: Logo */}
          <Box
            sx={{ display: "flex", flexGrow: 1, alignItems: "center", gap: 2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h1" fontWeight={700} color="#37fffb">
                EA
              </Typography>
            </motion.div>
            <Typography
              variant="body1"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              erickanero@gmail.com
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  spy={true}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {item.name}
                </ScrollLink>
              </motion.div>
            ))}
          </Box>

          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" }, color: "inherit" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            background: mode === "dark" ? "#040613" : "#fff",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <ListItem
              key={index}
              onClick={handleDrawerToggle}
              sx={{ textAlign: "center" }}
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={800}
                offset={-70}
                spy={true}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                  display: "block",
                  padding: "10px 0",
                }}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemText primary={item.name} />
              </ScrollLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
