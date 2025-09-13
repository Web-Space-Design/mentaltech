import React, { useRef, useEffect } from "react";
import { Button } from "@mui/material";
import { gsap } from "gsap";

const AnimatedButton: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!btnRef.current) return;

    const hoverAnimation = gsap.to(btnRef.current, {
      background: "linear-gradient(90deg, #ff6a00, #ee0979)",
      duration: 0.5,
      paused: true,
      ease: "power1.inOut",
    });

    const handleMouseEnter = () => hoverAnimation.play();
    const handleMouseLeave = () => hoverAnimation.reverse();

    const btn = btnRef.current;
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Button
      ref={btnRef}
      component="button" // <- wymusza HTMLButtonElement
      variant="outlined"
      sx={{
        display: { xs: "none", md: "inline-flex" },
        borderRadius: 9999,
        textTransform: "none",
        px: 3,
        height: 58,
        border: "2px solid rgba(255,255,255,0.22)",
        color: "#fff",
        alignItems: "center",
        transition: "color 0.5s ease, background 0.5s ease",
      }}
    >
      Zacznij Projekt ↗
    </Button>
  );
};

export default AnimatedButton;
