"use client";

import { Box, Button, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100dvh",
  textAlign: "left",
  overflow: "hidden",
  background: theme.palette.hero.primary,
  color: theme.palette.mode === "dark" ? "#fff" : "#333",
  padding: "64px 16px 0 16px",
}));

const FirefliesContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  pointerEvents: "none",
});

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        maxWidth: 100,
        gap: { xs: 1, sm: 2 },
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" fontWeight={700}>
        {value}
      </Typography>
      <Typography variant="body2">{label}</Typography>
    </Box>
  </motion.div>
);

const Fireflies = () => {
  const firefliesRef = useRef<HTMLDivElement>(null);
  const numFireflies = 15;

  useEffect(() => {
    const container = firefliesRef.current;
    if (!container) return;

    for (let i = 0; i < numFireflies; i++) {
      const firefly = document.createElement("div");
      firefly.className = "firefly";

      firefly.style.setProperty("--size", `${Math.random() * 2 + 1}px`);
      firefly.style.setProperty("--speed", `${Math.random() * 10 + 8}s`);
      firefly.style.setProperty("--x", `${Math.random() * 100}vw`);
      firefly.style.setProperty("--y", `${Math.random() * 100}vh`);

      container.appendChild(firefly);
    }
  }, []);

  return <FirefliesContainer ref={firefliesRef} />;
};

export default function Hero() {
  const theme = useTheme();
  return (
    <HeroContainer>
      <Fireflies />
      <Grid
        id="hero"
        container
        maxWidth="lg"
        spacing={3}
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        sx={{ flexGrow: 1 }}
      >
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                // width: { xs: 250, sm: 300, md: 400 },
                maxWidth: { xs: 250, sm: 300, md: 400, lg: 700 },
                borderRadius: "50px",
                padding: "30px 30px 0 30px",
                border: `1px solid ${theme.palette.borderColor.primary}`,
                background: `${theme.palette.imageGradient.primary}`,
                boxShadow: "0 0 15px cyan",
                overflow: "hidden",
                "& img": {
                  filter: "brightness(0.9) drop-shadow(0 0 100px cyan)",
                  transform: { xs: "scale(1.5)", md: "scale(1)" },
                  transformOrigin: "top center",
                },
              }}
            >
              <Image
                alt="Erick Anero"
                src="/assets/EA.png"
                width={700}
                height={500}
                priority
                quality={80}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Box sx={{ display: "flex", alignItems: "end", gap: 2 }}>
              <Box>
                <Typography variant="h4" fontWeight={500}>
                  Erick Anero
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight={700}
                  sx={{
                    background:
                      "linear-gradient(to right, #0d7fb4, #37fffb, #ffffff)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  Frontend Developer
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" color="text.secondary">
              Bridging creativity and technology to craft seamless, user-centric
              web experiences.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <motion.a
                href="https://www.linkedin.com/in/erickanero/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: `1px solid ${theme.palette.borderColor.primary}`,
                  }}
                >
                  <LinkedInIcon
                    sx={{ color: theme.palette.borderColor.primary }}
                  />
                </Button>
              </motion.a>
              <motion.a
                href="https://github.com/erckanro"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: `1px solid ${theme.palette.borderColor.primary}`,
                  }}
                >
                  <GitHubIcon
                    sx={{ color: theme.palette.borderColor.primary }}
                  />
                </Button>
              </motion.a>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", sm: "space-around" },
          width: "100%",
          marginTop: "auto",
          paddingX: { xs: 0, sm: 3 },
          paddingY: { xs: 1, sm: 3 },
        }}
      >
        <StatCard value="6+" label="Years of Experience" />
        <StatCard value="9+" label="Projects Completed" />
        <StatCard value="3" label="Awards Received" />
      </Box>
    </HeroContainer>
  );
}
