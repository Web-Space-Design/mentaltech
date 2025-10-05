"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";
import { Project } from "../data/projectsData";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
        onMouseMove={handleMouseMove}
      >
        {/* Obrazek jako miniatura */}
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

          {/* 🎥 VIDEO pojawia się po hoverze */}
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

          {/* Szklany kursor */}
          {hovered && (
            <Box
              sx={{
                position: "absolute",
                top: cursorPos.y - 60,
                left: cursorPos.x - 60,
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#fff",
                pointerEvents: "none",
                zIndex: 5,
                transition: "all 0.15s ease",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  p: "2px",
                  background: "linear-gradient(90deg, #f60a41, #d86b13)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              Zobacz
            </Box>
          )}
        </Box>

        {/* Tekst pod spodem */}
        <CardContent sx={{ bgcolor: "black", minHeight: 120 }}>
          <Typography variant="h6" fontWeight="bold" color="white">
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
