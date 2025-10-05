// "use client";

// import { Box, Container, Typography, Fade } from "@mui/material";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import AnimatedButton from "./AnimatedButton";
// import { useState } from "react";
// import { FiArrowUpRight } from "react-icons/fi";

// interface Offer {
//   title: string;
//   desc: string;
// }

// const offers: Offer[] = [
//   { title: "Strony internetowe", desc: "Nowoczesne witryny, które sprzedają." },
//   {
//     title: "Aplikacje webowe",
//     desc: "Dynamiczne aplikacje dopasowane do Twoich potrzeb.",
//   },
//   {
//     title: "UX/UI Design",
//     desc: "Intuicyjne interfejsy i przemyślane doświadczenia.",
//   },
//   {
//     title: "Edycje video",
//     desc: "Kreujemy wizualne historie, które angażują.",
//   },
// ];

// export default function OfferSection() {
//   const [hovered, setHovered] = useState<number | null>(null);

//   return (
//     <Box sx={{ bgcolor: "#000", py: { xs: 10, md: 14 } }}>
//       <Container maxWidth={false}>
//         {/* Nagłówek */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             mb: 8,
//             flexWrap: "wrap",
//             gap: 4,
//             px: 2,
//           }}
//         >
//           <Typography variant="h3" sx={{ fontWeight: "bold", color: "white" }}>
//             Co{" "}
//             <Box component="span">
//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontWeight: 700,
//                   display: "inline-block",
//                   background: "linear-gradient(90deg, #f60a41, #d86b13)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   lineHeight: 1.1,
//                 }}
//               >
//                 robimy
//               </Typography>
//               ?
//             </Box>
//           </Typography>

//           <Link href="/services">
//             <AnimatedButton text="Poznaj nasze usługi ↗" />
//           </Link>
//         </Box>

//         {/* 🔥 Custom nieregularny layout */}
//         <Box
//           sx={{
//             display: "grid",
//             gap: 4,
//             px: 2,
//             gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
//             gridAutoRows: "minmax(200px, auto)",
//             gridTemplateAreas: {
//               xs: `"a" "b" "c" "d"`,
//               md: `"a b" "c b" "c d"`,
//             },
//           }}
//         >
//           {offers.map((offer, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 200, damping: 20 }}
//               onHoverStart={() => setHovered(i)}
//               onHoverEnd={() => setHovered(null)}
//               style={{
//                 gridArea: ["a", "b", "c", "d"][i],
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "relative",
//                   height: "100%",
//                   bgcolor: "#0c0c0c",
//                   borderRadius: "24px",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   p: 4,
//                   boxShadow:
//                     hovered === i
//                       ? "0 0 35px rgba(246,10,65,0.3)"
//                       : "0 0 15px rgba(0,0,0,0.4)",
//                   transition: "all 0.3s ease",
//                   overflow: "hidden",
//                 }}
//               >
//                 {hovered === i && (
//                   <motion.div
//                     style={{
//                       position: "absolute",
//                       inset: 0,
//                       borderRadius: "24px",
//                       border: "1px solid transparent",
//                       background:
//                         "linear-gradient(90deg, #f60a41, #d86b13) border-box",
//                       WebkitMask:
//                         "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
//                       WebkitMaskComposite: "xor",
//                       maskComposite: "exclude",
//                       opacity: 0.8,
//                     }}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}

//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: 700,
//                     mb: 1,
//                     background:
//                       hovered === i
//                         ? "linear-gradient(90deg, #f60a41, #d86b13)"
//                         : "linear-gradient(90deg, #999, #aaa)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   {offer.title}
//                 </Typography>

//                 <Fade in={hovered === i} timeout={400}>
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: "rgba(255,255,255,0.7)",
//                       maxWidth: "80%",
//                       mx: "auto",
//                       mt: 1,
//                       lineHeight: 1.6,
//                     }}
//                   >
//                     {offer.desc}
//                   </Typography>
//                 </Fade>

//                 {hovered === i && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 }}
//                     style={{
//                       position: "absolute",
//                       bottom: 18,
//                       right: 22,
//                     }}
//                   >
//                     <FiArrowUpRight color="#f60a41" size={22} />
//                   </motion.div>
//                 )}
//               </Box>
//             </motion.div>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }
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
        py: { xs: 10, md: 14 },
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{ maxWidth: "1600px", mx: "auto" }}
      >
        {/* Nagłówek */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 8,
            flexWrap: "wrap",
            gap: 4,
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
