"use client";

import { Container, Typography, Box, Grid } from "@mui/material";
import { projectsData } from "../data/projectsData";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import AnimatedButton from "./AnimatedButton";

export default function ProjectsSection() {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <Box
      sx={{
        px: { xs: 1, sm: 2, md: 4 }, //
        position: "relative",
        width: "100vw",
        zIndex: 0,
      }}
    >
      <Container maxWidth={false}>
        {/* Nagłówek + przycisk obok */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 6,
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "42px", sm: "56px", md: "60px" },
              fontWeight: 700,
              color: "white",
              ml: { xs: 0, sm: 4, md: 4 },
            }}
          >
            Od pomysłu do{" "}
            <Box component="span">
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "42px", sm: "56px", md: "60px" },
                  fontWeight: 700,
                  display: "inline-block",
                  background: "linear-gradient(90deg, #f60a41, #d86b13)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent !important",
                  backgroundClip: "text",
                  color: "transparent",
                  lineHeight: 1.1,
                }}
              >
                cyfrowej rzeczywistości
              </Typography>
            </Box>
          </Typography>

          {/* Przycisk widoczny tylko na większych ekranach */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href="/projects">
              <AnimatedButton text="Zobacz wszystkie prace ↗" />
            </Link>
          </Box>
        </Box>

        {/* Grid projektów */}
        <Container maxWidth={false} disableGutters>
          <Grid container spacing={4}>
            {featuredProjects.map((project) => (
              <Grid
                key={project.id}
                size={{ xs: 12, md: 6 }}
                sx={{
                  p: { xs: 1.5, sm: 2, md: 4 }, // 🔥 mniejsze odstępy w gridzie na mobile
                }}
              >
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            mt: 4,
            width: "100%",
            "& button": {
              // nadpisanie stylu AnimatedButton
              display: "inline-flex !important",
              opacity: 1,
              position: "relative !important",
            },
          }}
        >
          <Link href="/projects" style={{ textAlign: "center" }}>
            <AnimatedButton text="Zobacz wszystkie prace ↗" />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
