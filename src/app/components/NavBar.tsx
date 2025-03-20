// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

interface NavBarProps {
  mode?: "light" | "dark";
  toggleTheme?: () => void;
}

export default function NavBar({ mode }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

        {/* Navigation Links with Smooth Scrolling */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {[
            { name: "About", to: "hero" },
            { name: "Portfolio", to: "recent-works" },
            { name: "Skills", to: "skills" },
            { name: "Contact", to: "contact" },
          ].map((item, index) => (
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
                offset={-70} // Adjust for sticky headers
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
      </Toolbar>
    </AppBar>
  );
}
