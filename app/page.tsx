"use client";
import Hero from "./components/Hero";
import VideoBackground from "./components/VideoBackground";

export default function Home() {
  return (
    <div>
      {/* <Hero />
      <VideoBackground src="/video/background-hero.mp4" /> */}
      <VideoBackground src="/video/background-hero.mp4" height="100vh">
        <Hero />
      </VideoBackground>
    </div>
  );
}
