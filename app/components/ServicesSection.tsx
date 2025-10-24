"use client";

import { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  List,
  ListItem,
  Fab,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { offerData } from "../data/servicesData";

export default function ServicesSection() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeId, setActiveId] = useState(offerData[0].id);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Scroll do sekcji
  const handleScrollTo = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  // Scroll listener do aktywnego przycisku i przycisku "top"
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset dla nagłówka
      let found = offerData[0].id;

      for (const item of offerData) {
        const section = sectionRefs.current[item.id];
        if (section && section.offsetTop <= scrollPosition) {
          found = item.id;
        }
      }
      setActiveId(found);
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ bgcolor: "#000", py: { xs: 10, md: 14 }, px: { xs: 2, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Nagłówek */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "42px", sm: "56px", md: "64px" },
            color: "white",
            mb: 6,
            textAlign: "center",
          }}
        >
          Czym się{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #f60a41, #d86b13)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            zajmujemy
          </Box>
          ?
        </Typography>

        {/* Przyciski sekcji */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mb: 10,
          }}
        >
          {offerData.map((item) => (
            <Button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              variant="outlined"
              sx={{
                borderRadius: 9999,
                textTransform: "none",
                px: 3,
                py: 1,
                fontSize: { xs: "14px", md: "16px" },
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                background:
                  activeId === item.id
                    ? "linear-gradient(90deg, #f60a41, #d86b13)"
                    : "transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, rgba(246,10,65,0.8), rgba(216,107,19,0.8))",
                  borderColor: "transparent",
                },
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>

        {/* Wszystkie sekcje */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, pt: 4 }}>
          {offerData.map((item, i) => (
            <motion.div
              key={item.id}
              ref={(el) => {
                sectionRefs.current[item.id] = el; // przypisanie
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 6,
                  alignItems: "center",
                }}
              >
                {/* Tekst */}
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "white",
                      mb: 2,
                      fontSize: { xs: "28px", md: "36px" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>

                  <List sx={{ pl: 2 }}>
                    {item.points.map((point, i) => (
                      <ListItem
                        key={i}
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          display: "list-item",
                          listStyleType: "disc",
                          mb: 0.5,
                          pl: 1,
                        }}
                      >
                        {point}
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Obraz */}
                <Box
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 0 40px rgba(0,0,0,0.4)",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>
              </Box>
              <Divider
                sx={{
                  borderColor: "rgba(255,255,255,0.2)",
                  my: 10, // margines w pionie
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Przyciski powrotu na górę */}
      {showTopBtn && (
        <Fab
          color="primary"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            position: "fixed",
            bottom: 40,
            right: 40,
            background: "linear-gradient(90deg, #f60a41, #d86b13)",
            "&:hover": {
              background: "linear-gradient(90deg, #f60a41, #d86b13)",
            },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </Box>
  );
}
