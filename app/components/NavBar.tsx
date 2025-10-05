"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const menuItems = [
  { label: "Projekty", href: "/work" }, // pokazujecie portfolio / realizacje
  { label: "Oferta", href: "/services" }, // to, co oferujecie klientom
  { label: "O nas", href: "/culture" }, // Wasza kultura pracy, wartości
  // { label: "Blog", href: "/blog" }, // można zostawić Blog, albo np. "Wpisy"
  { label: "Kontakt", href: "/contact" }, // klasyk, najprostsza forma
];
const logo = "/assets/logo/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
          px: { xs: 1, md: 2 },
          top: 20,
          paddingBottom: "10px",
          // height: 56,
        }}
      >
        <Toolbar sx={{ minHeight: 52 }}>
          {/* Logo po lewej (NIE fixed – przewija się) */}
          <Link href="/" passHref>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={logo}
                alt="Logo"
                width={160}
                height={80}
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </Link>

          {/* Środkowe menu – ZAWSZE widoczne (fixed) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
              px: 6, // poziomy padding
              height: 58, // dokładnie ta sama wysokość co przycisk
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.18)",
              position: "fixed",
              // top: 38,
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(10,10,10,0.6)",
              backdropFilter: "blur(10px)",
              "&:hover .gradientBorder": { opacity: 1 },
              zIndex: 1200,
            }}
          >
            <Box
              className="gradientBorder"
              sx={{
                pointerEvents: "none",
                position: "absolute",
                inset: 0,
                borderRadius: 9999,
                p: "1px",
                opacity: 0,
                background: "linear-gradient(90deg, #f60a41, #d86b13)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <Box
                  component="span"
                  sx={{
                    position: "relative",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: pathname === item.href ? "#fff" : "#cfcfcf",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {item.label}
                  {pathname === item.href && (
                    <Box
                      component="span"
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "linear-gradient(90deg, #f60a41, #d86b13)",
                      }}
                    />
                  )}
                </Box>
              </Link>
            ))}
          </Box>

          {/* Prawy element (NIE fixed – przewija się) */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: "auto" }}
          >
            <AnimatedButton text="Zacznij Projekt ↗" />
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
              aria-label="open navigation"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer mobilny */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { background: "#0a0a0a", color: "#fff", width: "78%" },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ fontWeight: 700, mb: 1.5 }}>Menu</Box>
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setOpen(false)}
                selected={pathname === item.href}
                sx={{
                  borderRadius: 2,
                  "&.Mui-selected": { background: "rgba(255,255,255,0.06)" },
                  "&:hover": { background: "rgba(255,255,255,0.04)" },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
