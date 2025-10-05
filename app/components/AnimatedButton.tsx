import React, { useRef } from "react";
import { Button } from "@mui/material";
import { gsap } from "gsap";

interface AnimatedButtonProps {
  text: string;
}

const AnimatedButton = ({ text }: AnimatedButtonProps) => {
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      background: "linear-gradient(90deg, #ff6a00, #ee0979)",
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      background: "initial",
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  return (
    <Button
      ref={btnRef}
      component="button"
      variant="outlined"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      {text}
    </Button>
  );
};

export default AnimatedButton;
