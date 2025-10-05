"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import AnimatedButton from "./AnimatedButton";

const ContentText = () => {
  return (
    <Box
      sx={{
        width: "100%", // 🔥 pełna szerokość
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // 🔥 przycisk i tekst po lewej
        justifyContent: "center",
        gap: 6,
        py: 12,
        px: { xs: 3, sm: 6, md: 10 }, // lekki padding tylko dla marginesu wizualnego
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          color: "white",
          fontSize: { xs: "1.8rem", sm: "2.6rem", md: "3.2rem" },
          textShadow: "0 0 20px rgba(0,0,0,0.4)",
          width: "100%", // 🔥 tekst rozciąga się na całą szerokość
        }}
      >
        Pomagamy markom rosnąć w świecie cyfrowym, w którym każdy piksel ma
        znaczenie. Od strategii po wdrożenie — łączymy kreatywność, technologię
        i dane, by tworzyć doświadczenia, które naprawdę działają.
      </Typography>

      {/* 🔘 Przycisk po LEWEJ */}
      <AnimatedButton text="Rozpocznij projekt ↗" />
    </Box>
  );
};

export default ContentText;
