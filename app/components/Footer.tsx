"use client";

import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const logo = "/assets/logo/logo.png";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        // pt: 8,
        // pb: 4,
        px: { xs: 2, sm: 2, md: 2 },
      }}
    >
      {/* cienka biała kreska z gradientem */}
      <Box />

      <Container maxWidth={false}>
        <Grid
          container
          spacing={0}
          sx={{
            borderRadius: "20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            "& > *": {
              borderRight: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
            },
          }}
        >
          {/* 🧭 Contact */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "white", mb: 2 }}
            >
              Kontakt
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <MuiLink
                href="mailto:biuro@mentaltech.pl"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}
              >
                biuro@mentaltech.pl
              </MuiLink>

              <MuiLink
                href="tel:+48881912998"
                underline="none"
                sx={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}
              >
                +48 881912998
              </MuiLink>
              <Typography
                sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}
              >
                ul. Pogoria 6, Dąbrowa Górnicza
              </Typography>
            </Box>
          </Grid>

          {/* 🔗 Links */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "white", mb: 2 }}
            >
              Linki
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                { label: "Projekty", href: "/work" }, // pokazujecie portfolio / realizacje
                { label: "Oferta", href: "/services" }, // to, co oferujecie klientom
                { label: "O nas", href: "/culture" }, // Wasza kultura pracy, wartości
                // { label: "Blog", href: "/blog" }, // można zostawić Blog, albo np. "Wpisy"
                { label: "Kontakt", href: "/contact" },
              ].map((item) => (
                <MuiLink
                  key={item.href}
                  component={Link}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.95rem",
                    transition: "opacity 0.2s ease",
                    "&:hover": { opacity: 0.7 },
                  }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* ⚙️ Dolna sekcja z LOGO po LEWEJ */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            flexWrap: "wrap",
            gap: 2,
            pb: 2,
          }}
        >
          {/* 🔥 Logo po LEWEJ */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={logo}
              alt="TwojaFirma logo"
              width={110}
              height={30}
              style={{ opacity: 0.9 }}
            />
          </Box>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.85rem",
              textAlign: "right",
            }}
          >
            © {new Date().getFullYear()} MentalTech
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
