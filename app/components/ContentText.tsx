"use client";

import React, { useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

const ContentText: React.FC = () => {
  // 🔹 Typujemy ref jako HTMLHeadingElement | null
  const textRef = useRef<HTMLHeadingElement | null>(null);

  const text =
    "Pomagamy markom rosnąć w świecie cyfrowym, w którym każdy piksel ma znaczenie. Od strategii po wdrożenie — łączymy kreatywność, technologię i dane, by tworzyć doświadczenia, które naprawdę działają.";

  useEffect(() => {
    if (!textRef.current) return;

    // 🔹 Teraz TS wie, że textRef.current to HTMLHeadingElement
    const spans = textRef.current.querySelectorAll("span");

    gsap.from(spans, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "top 35%",
        scrub: true,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.03,
    });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 6,
        py: 12,
        px: { xs: 3, sm: 6, md: 10 },
      }}
    >
      <Typography
        ref={textRef}
        variant="h3"
        component="h1" // 🔹 żeby mieć pewność, że ref wskazuje na element DOM
        sx={{
          fontWeight: 600,
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          color: "white",
          fontSize: { xs: "1.8rem", sm: "2.6rem", md: "3.2rem" },
          textShadow: "0 0 20px rgba(0,0,0,0.4)",
          width: "100%",
        }}
      >
        {text.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </Typography>

      <AnimatedButton text="Rozpocznij projekt ↗" />
    </Box>
  );
};

export default ContentText;
