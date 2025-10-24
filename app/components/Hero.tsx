import { Box, Typography } from "@mui/material";
import React from "react";
import AnimatedButton from "./AnimatedButton";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  const textTitle = `Zmieniamy pomysły w produkty cyfrowe, które sprzedają.\nProjektujemy i rozwijamy strony, aplikacje i interfejsy – szybkie, intuicyjne i dopasowane do Twoich użytkowników.\nDzięki temu Twoja marka nie tylko wygląda nowocześnie, ale realnie zdobywa nowych klientów.`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        paddingTop: { xs: "80px", md: "120px" }, // mniejszy odstęp na mobile
        minHeight: "100vh",
        px: { xs: 2, md: 6 }, // padding poziomy dla lepszej czytelności
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontSize: { xs: "16px", md: "20px", color: "#fff" }, // dopasowanie rozmiaru
        }}
      >
        UX/UI & DEV
      </Typography>

      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "42px", sm: "64px", md: "110px" }, // responsywne fonty
          fontWeight: 700,
          display: "inline-block",
          background: "linear-gradient(90deg, #f60a41, #d86b13)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent !important",
          backgroundClip: "text",
          color: "transparent",
          lineHeight: 1.1,
        }}
      >
        Agencja Interaktywna
      </Typography>

      <AnimatedText
        text={textTitle}
        mode="lines"
        variant="h5"
        sx={{
          mt: 4,
          maxWidth: "900px",
          fontSize: { xs: "16px", sm: "18px", md: "22px" },
          color: "#fff",
        }}
      />

      <Box sx={{ mt: 4 }}>
        <AnimatedButton text=" Zacznij Projekt ↗" />
      </Box>
    </Box>
  );
};

export default Hero;
