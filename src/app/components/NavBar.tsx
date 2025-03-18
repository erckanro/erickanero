import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface NavBarProps {
  mode?: "light" | "dark";
  toggleTheme?: () => void;
}

export default function NavBar({ mode, toggleTheme }: NavBarProps) {
  const theme = useTheme();

  return (
    <AppBar
      // position="sticky"
      sx={{
        top: 0,
        backgroundColor: mode === "dark" ? "#040613" : "#ffffff",
        padding: "10px 0",
      }}
    >
      <Toolbar>
        <Box
          sx={{ display: "flex", flexGrow: 1, alignItems: "center", gap: 2 }}
        >
          <Typography variant="h3" fontWeight={700} color="#37fffb">
            EA
          </Typography>
          <Typography variant="body1">erickanero@gmail.com</Typography>
        </Box>

        {/* <IconButton onClick={toggleTheme} color="inherit">
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton> */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <a href="#">About</a>
          <a href="#recent-works">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
