import { ReactNode, useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Roboto, Quicksand, Moirai_One } from "next/font/google";
import NavBar from "./components/NavBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const quicksand = Quicksand({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const moiraiOne = Moirai_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export default function ThemeProviderWrapper({
  children,
}: ThemeProviderWrapperProps) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: {
                  default: "#000000", // Pure black background
                  paper:
                    "radial-gradient(ellipse at bottom, #192E47 0%, #030617 100%)", // Slightly lighter black for paper elements
                },
                text: {
                  primary: "#ffffff", // White text for contrast
                  secondary: "#b3b3b3", // Soft gray for secondary text
                },
                primary: {
                  main: "#bb86fc", // Custom primary color in dark mode
                },
                borderColor: {
                  primary: "#37fffb",
                },
                hero: {
                  primary:
                    "radial-gradient(ellipse at bottom, #192E47 0%, #030617 100%)",
                },
                imageGradient: {
                  primary:
                    "radial-gradient(at center bottom, transparent 0%, transparent 50%, #00618a 100%)",
                },
              }
            : {
                background: {
                  default: "#f5f5f5", // Light background
                  paper: "#ffffff", // White paper elements
                },
                text: {
                  primary: "#000000", // Black text for contrast
                  secondary: "#555555", // Dark gray for secondary text
                },
                primary: {
                  main: "#6200ea", // Custom primary color in light mode
                },
                borderColor: {
                  primary: "blue",
                },
                hero: {
                  primary: "radial-gradient(at right top, #15452D, #000000)",
                },
                imageGradient: {
                  primary:
                    "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(21,69,45,1) 100%)",
                },
              }),
        },
        typography: {
          fontFamily: roboto.style.fontFamily,
          h1: {
            fontFamily: moiraiOne.style.fontFamily,
            fontSize: "clamp(40px, 5vw, 48px)",
          },
          h2: {
            fontFamily: quicksand.style.fontFamily,
            fontSize: "clamp(38px, 4.5vw, 40px)",
          },
          h3: {
            fontFamily: quicksand.style.fontFamily,
            fontSize: "clamp(22px, 4vw, 32px)",
          },
          h4: {
            fontFamily: quicksand.style.fontFamily,
            fontSize: "clamp(20px, 3.5vw, 28px)",
          },
          h5: {
            fontSize: "clamp(18px, 3vw, 24px)",
          },
          h6: {
            fontSize: "lamp(17px, 2.5vw, 20px)",
          },
        },
        components: {
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                fontFamily: "inherit",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        mode={mode}
        toggleTheme={() => setMode(mode === "light" ? "dark" : "light")}
      />
      {children}
    </ThemeProvider>
  );
}
