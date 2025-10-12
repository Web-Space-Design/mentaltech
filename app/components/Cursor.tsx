"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const outlineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outline = outlineRef.current;
    const dot = dotRef.current;
    if (!outline || !dot) return;

    // 👉 Ustawienia początkowe (większe i bardziej widoczne)
    gsap.set(dot, { scale: 0.2 }); // było 0.04 — zwiększamy
    gsap.set(outline, { scale: 0.6 }); // lekko większy kontur

    const xCTo = gsap.quickTo(outline, "left", { duration: 0.3 });
    const yCTo = gsap.quickTo(outline, "top", { duration: 0.3 });
    const xDTo = gsap.quickTo(dot, "left", { duration: 0.6 });
    const yDTo = gsap.quickTo(dot, "top", { duration: 0.6 });

    let mouseInTarget = false;
    let isVisible = false;

    // 👉 Animacja powiększania przy najechaniu na .target
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

      const cursorPosition = { left: e.clientX, top: e.clientY };

      let hovered = false;

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const triggerDistance = rect.width;
        const targetPosition = {
          left: rect.left + rect.width / 2,
          top: rect.top + rect.height / 2,
        };
        const distance = {
          adj: targetPosition.left - cursorPosition.left,
          opp: targetPosition.top - cursorPosition.top,
        };
        const hypotenuse = Math.sqrt(distance.adj ** 2 + distance.opp ** 2);
        const angle = Math.atan2(distance.adj, distance.opp);

        if (hypotenuse * 2 < triggerDistance && mouseInTarget) {
          xCTo(targetPosition.left - (Math.sin(angle) * hypotenuse) / 4);
          yCTo(targetPosition.top - (Math.cos(angle) * hypotenuse) / 4);
          xDTo(targetPosition.left - (Math.sin(angle) * hypotenuse) / 4);
          yDTo(targetPosition.top - (Math.cos(angle) * hypotenuse) / 4);

          gsap.to(target.querySelector(".text"), {
            x: -((Math.sin(angle) * hypotenuse) / 8),
            y: -((Math.cos(angle) * hypotenuse) / 8),
            duration: 0.6,
            ease: "power2.out",
          });

          hovered = true;
        } else {
          gsap.to(target.querySelector(".text"), {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      });

      if (!hovered) {
        xCTo(cursorPosition.left);
        yCTo(cursorPosition.top);
        xDTo(cursorPosition.left);
        yDTo(cursorPosition.top);
      }
    };

    document.addEventListener("mousemove", mouseMove);
    return () => document.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <>
      {/* obrys */}
      <div
        ref={outlineRef}
        className="cursor-outline"
        style={{
          position: "fixed",
          width: 90, // było 80 — troszkę większy
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
      {/* kropka w środku */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: 32, // było 20 — powiększamy
          height: 32,
          borderRadius: "50%",
          background: "linear-gradient(90deg, #f60a41 0%, #d86b13 100%)", // 🔥 gradient
          boxShadow: "0 0 20px rgba(246,10,65,0.5)",
          pointerEvents: "none",
          opacity: 0,
          top: 0,
          left: 0,
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference", // efekt świetnego kontrastu na ciemnym tle
        }}
      />
    </>
  );
}
