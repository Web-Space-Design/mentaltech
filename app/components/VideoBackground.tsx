import React, { useRef, useEffect, useState } from "react";

interface VideoProps {
  src: string;
  className?: string;
  height?: string | number;
  children?: React.ReactNode;
}

const VideoBackground: React.FC<VideoProps> = ({
  src,
  className,
  height,
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // 👁️ Lazy loading wideo
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 } // uruchomienie gdy choć trochę widoczne
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ▶️ Auto-play, gdy element widoczny
  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: height || "100%",
        overflow: "hidden",
        background:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,1) 100%)",
      }}
      className={className}
    >
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="none" // ✅ brak pobierania zanim wideo się nie wyświetli
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            width: "100%",
            height: "125%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
            opacity: 0.5,
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
