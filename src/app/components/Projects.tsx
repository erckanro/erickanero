"use client";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const projects = [
  {
    title: "Pickawall",
    description:
      "Pickawall.com.au is a custom wall mural site built with WordPress, PHP, and ReactJS. I contributed to UI/UX design, assisted with functionality, and played a role in design decision-making.",
    image: "/assets/pickawall.png",
    url: "https://pickawall.com.au/",
  },
  {
    title: "LandConnex",
    description:
      "I work as a frontend developer at LandConnex, where I designed and built the UI from scratch using ReactJS, TypeScript, and MUI. I focus on creating a seamless, responsive, and user-friendly experience while ensuring performance and maintainability.",
    image: "/assets/landconnex.png",
    url: "https://landconnex.com.au/",
  },
  {
    title: "Sortify",
    description:
      "This project is a lightweight application designed to collect basic user details. Once entered, it offers a straightforward sorting functionality to organize the names alphabetically. Built using ReactJS and Typescript",
    image: "/assets/sortify.png",
    url: "https://sortify-three.vercel.app/",
  },
  {
    title: "Weather Wise",
    description:
      "Discover real-time weather updates with this React-based Weather App using Vite. Get current temperature, humidity, and wind speed details. Search for forecasts in any location worldwide. Stay informed effortlessly with this lightweight, intuitive application.",
    image: "/assets/weather-wise.png",
    url: "https://weather-wise-zeta-two.vercel.app/",
  },
];

export default function Projects() {
  return (
    <Box
      id="recent-works"
      sx={{
        py: 10,
        textAlign: "center",
        background: "radial-gradient(at center, #0C182E, #000000)",
        px: 2,
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
        Recent Projects
      </Typography>
      <Typography mb={5} maxWidth={600} mx="auto">
        I craft unique, high-performing web experiences that bring your vision
        to life and leave a lasting impact on your audience.
      </Typography>
      <Grid container justifyContent="center" maxWidth="lg" mx="auto">
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={index}
            padding={1}
            sx={{
              maxWidth: { xs: 500 },
            }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "20px",
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    borderRadius: "10px",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
