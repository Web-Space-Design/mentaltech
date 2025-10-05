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
        // bgcolor: "black",
        px: 2,
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
            gap: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            Od pomysłu do{" "}
            <Box component="span">
              <Typography
                variant="h3"
                sx={{
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

          <Link href="/projects">
            <AnimatedButton text="Zobacz wszystkie prace ↗" />
          </Link>
        </Box>

        {/* Grid projektów */}
        <Container maxWidth={false} disableGutters>
          <Grid container spacing={4}>
            {featuredProjects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, md: 6 }}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
