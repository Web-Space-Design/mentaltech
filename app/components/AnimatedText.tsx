import React, { useEffect, useRef } from "react";
import { Typography, TypographyProps } from "@mui/material";
import gsap from "gsap";
import SplitType from "split-type";

type Mode = "chars" | "words" | "lines";

interface AnimatedTextProps {
  text: string;
  mode?: Mode; // domyślnie "chars"
  variant?: TypographyProps["variant"]; // np. h1, h2, body1
  sx?: TypographyProps["sx"]; // dodatkowe style z MUI
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  mode = "chars",
  variant = "h2",
  sx = {},
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: mode });

    let elements: HTMLElement[] = [];
    if (mode === "chars" && split.chars) elements = split.chars;
    if (mode === "words" && split.words) elements = split.words;
    if (mode === "lines" && split.lines) elements = split.lines;

    elements.forEach((el) => {
      el.style.display = mode === "lines" ? "block" : "inline-block";
    });

    gsap.killTweensOf(elements);

    if (mode === "chars") {
      gsap.from(elements, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.04,
      });
    }

    if (mode === "words") {
      gsap.from(elements, {
        y: -100,
        opacity: 0,
        rotation: "random(-80,80)",
        duration: 0.7,
        ease: "back.out(1.7)",
        stagger: 0.15,
      });
    }

    if (mode === "lines") {
      gsap.from(elements, {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25,
      });
    }

    return () => {
      split.revert();
    };
  }, [text, mode]);

  return (
    <Typography
      ref={textRef}
      variant={variant}
      sx={{
        fontWeight: 400,
        textAlign: "center",
        lineHeight: 1.5,
        whiteSpace: "pre-wrap",
        ...sx, // można nadpisywać style
      }}
    >
      {text}
    </Typography>
  );
};

export default AnimatedText;
