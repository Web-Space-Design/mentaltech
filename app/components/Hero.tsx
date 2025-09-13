import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // dodajemy, żeby elementy były w kolumnie
        justifyContent: "flex-start", // od góry
        alignItems: "center", // wyśrodkowanie poziome
        textAlign: "center",
        paddingTop: "120px", // odległość od góry ekranu / menu
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2, // odstęp między napisami
        }}
      >
        UX/UI & DEV
      </Typography>

      <Typography
        variant="h1"
        sx={{
          fontSize: "110px",
          fontWeight: 700,
          display: "inline-block",
          background: "linear-gradient(90deg, #f60a41, #d86b13)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent !important",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Agencja Kreatywna
      </Typography>
    </Box>
  );
};

export default Hero;
