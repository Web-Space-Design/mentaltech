import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
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
    </>
  );
};

export default Hero;
