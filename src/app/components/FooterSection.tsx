import styles from "../styles/page.module.css";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Box
        id="footer"
        sx={{
          pb: 10,
          pt: 5,

          // background: "#0C182E",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={700} color="#37fffb">
          EA
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            my: 2,
            justifyContent: "center",
          }}
        >
          <a href="#">About</a>
          <a href="#recent-works">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </Box>
        <Typography variant="body2">
          {"\u00A9"} {new Date().getFullYear()} All rights reserved{" "}
          <a href="https://github.com/erckanro">@erckanro</a>
        </Typography>
      </Box>
    </footer>
  );
}
