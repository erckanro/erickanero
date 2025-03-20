import {
  AppBar,
  Toolbar,
  Typography,
  // IconButton,
  Box,
} from "@mui/material";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useState, useEffect } from "react";

interface NavBarProps {
  mode?: "light" | "dark";
  toggleTheme?: () => void;
}

export default function NavBar({ mode }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change state when scrolled past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
        <Box
          sx={{ display: "flex", flexGrow: 1, alignItems: "center", gap: 2 }}
        >
          <Typography variant="h1" fontWeight={700} color="#37fffb">
            EA
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            erickanero@gmail.com
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <a href="#">About</a>
          <a href="#recent-works">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
