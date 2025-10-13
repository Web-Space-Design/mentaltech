"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../data/projectsData";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 🔍 Wykrywanie urządzenia mobilnego
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 👁️ Lazy loading — wideo ładuje się dopiero gdy widoczne
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 📱 Auto-play tylko na mobile
  useEffect(() => {
    if (isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setTimeout(() => {
        setHovered(true);
        videoRef.current?.play();
      }, 200);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHovered(false);
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  return (
    <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
      <Card
        className="target"
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
          ref={containerRef}
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            overflow: "hidden",
          }}
        >
          {/* 🖼️ Miniatura */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered || isMobile ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={project.thumbnail || "/placeholder.jpg"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL="/tiny-placeholder.jpg"
              priority={false}
            />
          </motion.div>

          {/* 🎬 Wideo ładowane dopiero gdy widoczne */}
          {isVisible && (
            <motion.video
              ref={videoRef}
              src={project.video}
              poster={project.thumbnail || "/placeholder.jpg"}
              muted
              playsInline
              preload="none" // ✅ nie pobiera wideo zanim nie jest potrzebne
              loop
              autoPlay={isMobile} // autoplay tylko na mobile
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered || isMobile ? 1 : 0 }}
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
          )}
        </Box>

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
