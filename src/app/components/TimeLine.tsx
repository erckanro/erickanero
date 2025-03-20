import * as React from "react";
import { motion } from "framer-motion";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

type TimelineEntry = {
  company: string;
  period: string;
  role: string;
  description: string;
  icon: React.ReactElement;
  skills: Array<string>;
  dotColor?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit"
    | "grey";
  variant?: "filled" | "outlined";
};

// Motion-wrapped TimelineDot
const MotionTimelineDot = motion(TimelineDot);
const MotionTimelineItem = motion(TimelineItem);

const timelineData: TimelineEntry[] = [
  {
    company: "LandConnex (HGS OSS)",
    period: "June 2024 - March 2025",
    role: "Frontend Developer",
    description:
      "Developed and maintained scalable front-end applications using ReactJS, TypeScript, and MUI. Built reusable components and a modular architecture for improved maintainability. Optimized performance and responsiveness across devices. Enhanced UI/UX with intuitive designs, accessibility improvements, and performance optimizations.",
    skills: ["react", "materialui", "typescript", "javascript"],
    icon: <CheckIcon />,
    dotColor: "success",
    variant: "outlined",
  },
  {
    company: "Waybr",
    period: "Feb 2022 - Nov 2023",
    role: "Frontend Developer",
    description:
      "Enhanced product features to meet market demands and improve user engagement. Collaborated with cross-functional teams, including SCRUM, Release Management, and Quality Assurance. Wrote efficient, well-structured code and maintained software documentation. Demonstrated strong front-end development skills with proficiency in TypeScript.",
    skills: ["nextjs", "antdesign", "typescript", "react"],
    icon: <CheckIcon />,
    dotColor: "success",
    variant: "outlined",
  },
  {
    company: "StunnerYPP Corporation",
    period: "Jun 2018 - Feb 2022",
    role: "Web Developer",
    description:
      "Enhanced and extended functionality for websites and internal apps. Collaborated with senior team members on software design and development. Built responsive pages using HTML, CSS, JavaScript, and jQuery while maintaining graphic standards and branding.",
    skills: ["laravel", "php", "bootstrap", "react", "mysql"],
    icon: <CheckIcon />,
    dotColor: "success",
    variant: "outlined",
  },
];

export default function CustomizedTimeline() {
  return (
    <Box
      id="recent-works"
      sx={{
        py: 10,
        textAlign: "center",
        background: "radial-gradient(at center, #0C182E, #000000)",
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
        Professional Journey
      </Typography>
      <Typography mb={5} px={1} maxWidth={600} mx="auto">
        A journey of growth and innovation
      </Typography>
      <Timeline position="alternate" sx={{ p: 0, maxWidth: 900, mx: "auto" }}>
        {timelineData.map(
          (
            {
              company,
              period,
              role,
              description,
              skills,
              icon,
              dotColor,
              variant,
            },
            index
          ) => (
            <MotionTimelineItem
              key={index}
              transition={{ type: "spring", stiffness: 100 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                textAlign: "left",
                "&:nth-of-type(even)": {
                  flexDirection: { xs: "column", sm: "row-reverse" },
                  "& .MuiTimelineContent-root": {
                    textAlign: { xs: "left", sm: "right" },
                  },
                },
              }}
            >
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  textAlign: { xs: "left", sm: "right" },
                  alignSelf: { xs: "start", sm: "inherit" },
                  justifyItems: { xs: "left", sm: "inherit" },
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {company}
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {skills.map((skill) => (
                    <Box key={skill}>
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}/${skill}-original.svg`}
                        width={30}
                        height={30}
                      />
                    </Box>
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {period}
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator
                sx={{
                  display: { xs: "none", sm: "flex" },
                }}
              >
                {index > 0 && <TimelineConnector />}
                <MotionTimelineDot
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  color={dotColor}
                  variant={variant}
                >
                  {icon}
                </MotionTimelineDot>
                {index < timelineData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent
                sx={{
                  py: "12px",
                  px: 2,
                  textAlign: { xs: "left", sm: "inherit" },
                }}
              >
                <Typography variant="h6" component="span">
                  {role}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {description}
                </Typography>
              </TimelineContent>
              {index < 2 && (
                <Box
                  sx={{
                    borderBottom: `1px solid gray`,
                    margin: "20px 0",
                    display: { xs: "block", sm: "none" },
                  }}
                />
              )}
            </MotionTimelineItem>
          )
        )}
      </Timeline>
    </Box>
  );
}
