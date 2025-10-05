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

        pt: 8,
        pb: 4,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* cienka biała kreska z gradientem */}
      <Box />

      <Container maxWidth={false} sx={{ mx: "auto" }}>
        <Grid
          container
          spacing={0}
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            "& > *": {
              borderRight: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            },
          }}
        >
          {/* 🧭 Contact */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "white", mb: 2 }}
            >
              Contact
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <MuiLink
                href="mailto:hello@twojafirma.pl"
                underline="none"
                sx={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}
              >
                hello@twojafirma.pl
              </MuiLink>
              <MuiLink
                href="tel:+48123456789"
                underline="none"
                sx={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}
              >
                +48 123 456 789
              </MuiLink>
              <Typography
                sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}
              >
                ul. Przykładowa 10, Warszawa
              </Typography>
            </Box>
          </Grid>

          {/* 🔗 Links */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "white", mb: 2 }}
            >
              Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "Culture", href: "/culture" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
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
