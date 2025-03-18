"use client";

import { Box, Button, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useRef } from "react";

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "left",
  overflow: "visible",
  background: `${theme.palette.hero.primary}`,
  color: theme.palette.mode === "dark" ? "#fff" : "#333",
  padding: "0 16px",
}));

const FirefliesContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  pointerEvents: "none",
});

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => (
  <Box sx={{ display: "flex", maxWidth: 100, gap: 2, alignItems: "center" }}>
    <Typography variant="h2" fontWeight={700}>
      {value}
    </Typography>
    <Typography>{label}</Typography>
  </Box>
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
      container.appendChild(firefly);
      animateFirefly(firefly);
    }
  }, []);

  const animateFirefly = (firefly: HTMLDivElement) => {
    const size = Math.random() * 4 + 2;
    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;

    firefly.style.left = `${Math.random() * 100}vw`;
    firefly.style.top = `${Math.random() * 100}vh`;
    firefly.style.animation = `move${Math.floor(Math.random() * 5) + 1} ${
      Math.random() * 10 + 5
    }s linear infinite, flash 3s ease-in-out infinite`;
  };

  return <FirefliesContainer ref={firefliesRef} />;
};

export default function Hero() {
  const theme = useTheme();
  return (
    <HeroContainer>
      <Fireflies />
      <Grid
        container
        maxWidth="lg"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {/* <Box>
          <img
            alt="Erick Anero"
            src="/assets/EA.png"
            style={{
              // width: "100%",
              height: "100%",
              filter: "brightness(0.8)",
            }}
          />
        </Box> */}

        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              height: { xs: 250, sm: 350, md: 400 },
              borderRadius: "50px",
              padding: "30px 30px 0 30px",
              border: `1px solid ${theme.palette.borderColor.primary}`,
              background: `${theme.palette.imageGradient.primary}`,
            }}
          >
            <img
              alt="Erick Anero"
              src="/assets/EA.png"
              style={{
                // width: "100%",
                height: "100%",
                filter: "brightness(0.8)",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
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

          <Typography>
            I am a frontend developer who thrives on turning imaginative
            concepts into reality. Combining a meticulous approach to design
            with my technical expertise, I create responsive websites and
            applications that engage and inspire users.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <a href="https://www.linkedin.com/in/erickanero/">
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
            </a>
            <a href="https://github.com/erckanro">
              <Button
                variant="outlined"
                sx={{
                  border: `1px solid ${theme.palette.borderColor.primary}`,
                }}
              >
                <GitHubIcon sx={{ color: theme.palette.borderColor.primary }} />
              </Button>
            </a>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          justifyContent: "space-around",
          padding: 3,
        }}
      >
        <StatCard value="6+" label="Years of Experience" />
        <StatCard value="9+" label="Projects Completed" />
        <StatCard value="3" label="Awards Received" />
      </Grid>
    </HeroContainer>
  );
}
