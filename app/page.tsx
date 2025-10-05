"use client";
import { Box } from "@mui/material";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import VideoBackground from "./components/VideoBackground";
import OfferSection from "./components/OfferSection";

export default function Home() {
  return (
    <div>
      {/* <Hero />
      <VideoBackground src="/video/background-hero.mp4" /> */}
      <VideoBackground src="/video/background-hero.mp4" height="85vh">
        <Hero />
      </VideoBackground>
      <Box sx={{}}>
        <ProjectsSection />
      </Box>
      <Box>
        <OfferSection />
      </Box>
    </div>
  );
}
