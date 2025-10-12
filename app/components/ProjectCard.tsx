"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";
import { Project } from "../data/projectsData";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
      <Card
        className="target" // 👈 ważne! teraz kursor reaguje
        sx={{
          position: "relative",
          borderRadius: "28px",
          overflow: "hidden",
          bgcolor: "#111",
          height: "100%",
          width: "100%",
          boxShadow: "0 0 40px rgba(0,0,0,0.45)",
          cursor: "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            overflow: "hidden",
          }}
        >
          <motion.img
            src={project.thumbnail || "/placeholder.jpg"}
            alt={project.title}
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          <motion.video
            ref={videoRef}
            src={project.video}
            muted
            playsInline
            preload="metadata"
            loop
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </Box>

        <CardContent sx={{ bgcolor: "black", minHeight: 120 }}>
          <Typography
            className="text"
            variant="h6"
            fontWeight="bold"
            color="white"
          >
            {project.title}
          </Typography>
          <Typography variant="body2" color="gray">
            {project.subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
