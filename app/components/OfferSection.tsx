"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface Offer {
  title: string;
  desc: string;
  video: string;
  slug: string;
}

const offers: Offer[] = [
  {
    title: "Strony internetowe",
    desc: "Nowoczesne witryny, które sprzedają.",
    video: "/video/project/video-1.mp4",
    slug: "/services/web",
  },
  {
    title: "Aplikacje webowe",
    desc: "Dynamiczne aplikacje dopasowane do Twoich potrzeb.",
    video: "/video/project/video-2.mp4",
    slug: "/services/apps",
  },
  {
    title: "UX/UI Design",
    desc: "Intuicyjne interfejsy i przemyślane doświadczenia.",
    video: "/video/project/video-3.mp4",
    slug: "/services/design",
  },
  {
    title: "Edycje video",
    desc: "Kreujemy wizualne historie, które angażują.",
    video: "/video/project/video-4.mp4",
    slug: "/services/video",
  },
];

export default function OfferSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Box
      sx={{
        bgcolor: "#000",
        // py: { xs: 10, md: 14 },
        px: 2,
      }}
    >
      <Container maxWidth={false} sx={{ mx: "auto" }}>
        {/* Nagłówek */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 8,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "white" }}>
            Co{" "}
            <Box component="span">
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  display: "inline-block",
                  background: "linear-gradient(90deg, #f60a41, #d86b13)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                }}
              >
                robimy
              </Typography>
              ?
            </Box>
          </Typography>

          <Link href="/services">
            <AnimatedButton text="Poznaj nasze usługi ↗" />
          </Link>
        </Box>

        {/* Layout */}
        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gridAutoRows: "minmax(280px, auto)",
            gridTemplateAreas: {
              xs: `"a" "b" "c" "d"`,
              md: `"a b" "c b" "c d"`,
            },
          }}
        >
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              style={{
                gridArea: ["a", "b", "c", "d"][i],
                position: "relative",
              }}
            >
              <Link href={offer.slug} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    overflow: "hidden",
                    boxShadow:
                      hovered === i
                        ? "0 0 40px rgba(246,10,65,0.25)"
                        : "0 0 10px rgba(0,0,0,0.5)",
                    transition: "all 0.3s ease",
                    backgroundColor: "#0c0c0c",
                  }}
                >
                  {/* 🎥 VIDEO W TLE */}
                  <motion.video
                    key={offer.video}
                    src={offer.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: hovered === i ? 0.45 : 0,
                      transition: "opacity 0.4s ease",
                    }}
                  />

                  {/* 🔹 Gradient overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.8) 100%)",
                      zIndex: 1,
                    }}
                  />

                  {/* 📄 Tekst */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 24,
                      left: 28,
                      zIndex: 2,
                    }}
                  >
                    {/* Tytuł - zawsze widoczny */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "white",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {offer.title}
                    </Typography>

                    {/* Opis - wchodzi od dołu po hoverze */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        hovered === i
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          maxWidth: "80%",
                          lineHeight: 1.6,
                        }}
                      >
                        {offer.desc}
                      </Typography>
                    </motion.div>
                  </Box>

                  {/* ↗ Ikona */}
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      style={{
                        position: "absolute",
                        bottom: 24,
                        right: 24,
                        zIndex: 2,
                      }}
                    >
                      <FiArrowUpRight color="#f60a41" size={24} />
                    </motion.div>
                  )}
                </Box>
              </Link>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
