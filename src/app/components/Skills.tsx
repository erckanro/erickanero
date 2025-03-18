"use client";

import { Box, Typography } from "@mui/material";

const skills = [
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Next.js",
    icon: "nextjs",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "HTML",
    icon: "html5",
  },
  {
    name: "CSS",
    icon: "css3",
  },
  {
    name: "MUI",
    icon: "materialui",
  },
  {
    name: "Ant Design",
    icon: "antdesign",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
  },
  {
    name: "Node.js",
    icon: "nodejs",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap",
  },
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "Photoshop",
    icon: "photoshop",
  },
];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        px: 2,
        background: "#0C182E",
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
        Technical Skills
      </Typography>
      <Typography mb={5} maxWidth={600} mx="auto">
        Equipped with expertise in modern development tools and frameworks to
        bring innovative ideas to life with precision and performance.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          maxWidth: 900,
          padding: 2,
          mx: "auto",
        }}
      >
        {skills.map((skill) => (
          <Box
            key={skill.name}
            sx={{
              width: { xs: "90px", sm: "100px", md: "130px" }, // xs=2 per row, sm=3 per row, md=4 per row
              textAlign: "center",
            }}
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
              width={90}
              height={90}
            />

            <Typography>{skill.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
