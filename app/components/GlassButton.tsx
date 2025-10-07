"use client";
import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";

const GlassTickerButton = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 🔁 płynny ruch tekstu
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: "0%" },
        { x: "-50%", repeat: -1, duration: 45, ease: "linear" }
      );
    }

    // ✨ animowany refleks gradientu
    if (gradientRef.current) {
      gsap.to(gradientRef.current, {
        backgroundPosition: "200% center",
        duration: 8,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "85%",
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "90px",
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "linear-gradient(120deg, rgba(30,30,30,0.85), rgba(10,10,10,0.5))",
        backdropFilter: "blur(22px) saturate(180%)",
        WebkitBackdropFilter: "blur(22px) saturate(180%)",
        boxShadow:
          "inset 0 0 35px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.6)",
        height: { xs: "150px", md: "180px" },
        mt: 10,
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 🔥 Gradientowy tekst z Twoimi kolorami */}
      <Box
        ref={textRef}
        sx={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          fontWeight: 700,
          fontSize: { xs: "42px", sm: "64px", md: "110px" },
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          position: "relative",
          zIndex: 5,
        }}
      >
        <Box
          ref={gradientRef}
          sx={{
            background: "linear-gradient(90deg, #f60a41, #d86b13, #f60a41)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            textShadow:
              "0 2px 5px rgba(0,0,0,0.25), 0 0 15px rgba(255,100,30,0.3)",
          }}
        >
          <Typography component="span" sx={{ px: 10, fontSize: "inherit" }}>
            WSPÓŁPRACUJ Z NAMI • WSPÓŁPRACUJ Z NAMI • WSPÓŁPRACUJ Z NAMI •
          </Typography>
          <Typography component="span" sx={{ px: 10, fontSize: "inherit" }}>
            WSPÓŁPRACUJ Z NAMI • WSPÓŁPRACUJ Z NAMI • WSPÓŁPRACUJ Z NAMI •
          </Typography>
        </Box>
      </Box>

      {/* ✨ Refleks szkła */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "-25%",
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)",
          transform: "skewX(-25deg)",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.15,
        }}
      />
    </Box>
  );
};

export default GlassTickerButton;
