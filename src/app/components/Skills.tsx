"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
  { name: "MUI", icon: "materialui" },
  { name: "Ant Design", icon: "antdesign" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Git", icon: "git" },
  { name: "Photoshop", icon: "photoshop" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 5,
        background: "#0C182E",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
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
      <Typography mb={5} px={1} maxWidth={600} mx="auto">
        Equipped with expertise in modern development tools and frameworks to
        bring innovative ideas to life with precision and performance.
      </Typography>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the component is visible
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
          maxWidth: 900,
          padding: 16,
          margin: "0 auto",
        }}
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <Box
              sx={{
                width: { xs: 70, sm: 100, md: 130 },
                textAlign: "center",
                "& img": {
                  width: { xs: 60, sm: 90 },
                  height: { xs: 60, sm: 90 },
                },
              }}
            >
              <Image
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={`${skill.icon} icon`}
                width={90}
                height={90}
              />
              <Typography>{skill.name}</Typography>
            </Box>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
}
