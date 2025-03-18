"use client";

import { Box, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        padding: 4,
        // background: "#0C182E",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          background: "linear-gradient(to right, #37fffb, #ffffff)",
          backgroundClip: "text",
          textFillColor: "transparent",
          fontWeight: 700,
        }}
      >
        Milestones of Excellence
      </Typography>
      <Typography mb={5} maxWidth={600} mx="auto">
        Recognizing excellence, innovation, and dedication in my journey.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // Ensures wrapping on smaller screens
          justifyContent: "center", // Centers items horizontally
          gap: 2,
          maxWidth: 900,
          padding: 2,
          mx: "auto",
        }}
      ></Box>
    </Box>
  );
}
