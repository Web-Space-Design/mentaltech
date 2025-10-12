"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Cursor() {
  const outlineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const outline = outlineRef.current;
    const dot = dotRef.current;
    if (!outline || !dot) return;

    // Początkowy stan kursora
    gsap.set(dot, { scale: 0.2, opacity: 0 });
    gsap.set(outline, { scale: 0.6, opacity: 0 });

    const xCTo = gsap.quickTo(outline, "left", { duration: 0.3 });
    const yCTo = gsap.quickTo(outline, "top", { duration: 0.3 });
    const xDTo = gsap.quickTo(dot, "left", { duration: 0.6 });
    const yDTo = gsap.quickTo(dot, "top", { duration: 0.6 });

    let mouseInTarget = false;
    let isVisible = false;

    const scaleAnim = gsap.timeline({ paused: true });
    scaleAnim
      .to(outline, { scale: 1.1, duration: 0.3, ease: "power2.out" })
      .to(dot, { scale: 0.8, duration: 0.35, ease: "power2.out" }, 0);

    const targets = gsap.utils.toArray<HTMLElement>(".target");

    targets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        mouseInTarget = true;
        scaleAnim.play();
      });
      target.addEventListener("mouseleave", () => {
        mouseInTarget = false;
        scaleAnim.reverse();
      });
    });

    const mouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.set([outline, dot], { opacity: 1 });
        isVisible = true;
      }

      const cursorPos = { left: e.clientX, top: e.clientY };
      let hovered = false;

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const triggerDistance = rect.width;
        const targetPos = {
          left: rect.left + rect.width / 2,
          top: rect.top + rect.height / 2,
        };
        const dx = targetPos.left - cursorPos.left;
        const dy = targetPos.top - cursorPos.top;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dx, dy);

        if (distance * 2 < triggerDistance && mouseInTarget) {
          xCTo(targetPos.left - (Math.sin(angle) * distance) / 4);
          yCTo(targetPos.top - (Math.cos(angle) * distance) / 4);
          xDTo(targetPos.left - (Math.sin(angle) * distance) / 4);
          yDTo(targetPos.top - (Math.cos(angle) * distance) / 4);

          const text = target.querySelector<HTMLElement>(".text");
          if (text) {
            gsap.to(text, {
              x: -((Math.sin(angle) * distance) / 8),
              y: -((Math.cos(angle) * distance) / 8),
              duration: 0.6,
              ease: "power2.out",
            });
          }

          hovered = true;
        } else {
          const text = target.querySelector<HTMLElement>(".text");
          if (text)
            gsap.to(text, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
        }
      });

      if (!hovered) {
        xCTo(cursorPos.left);
        yCTo(cursorPos.top);
        xDTo(cursorPos.left);
        yDTo(cursorPos.top);
      }
    };

    document.addEventListener("mousemove", mouseMove);

    // Reset kursora przy zmianie strony
    return () => {
      gsap.set(dot, { scale: 0.2, opacity: 0 });
      gsap.set(outline, { scale: 0.6, opacity: 0 });
    };
  }, [pathname]); // <- efekt zależny od ścieżki

  return (
    <>
      <div
        ref={outlineRef}
        className="cursor-outline"
        style={{
          position: "fixed",
          width: 90,
          height: 90,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.5)",
          pointerEvents: "none",
          opacity: 0,
          top: 0,
          left: 0,
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "linear-gradient(90deg, #f60a41 0%, #d86b13 100%)",
          boxShadow: "0 0 20px rgba(246,10,65,0.5)",
          pointerEvents: "none",
          opacity: 0,
          top: 0,
          left: 0,
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
