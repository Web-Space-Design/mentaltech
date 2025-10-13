// import React from "react";

// interface VideoProps {
//   src: string;
//   className?: string;
//   height?: string | number;
//   children?: React.ReactNode;
// }

// const VideoBackground: React.FC<VideoProps> = ({
//   src,
//   className,
//   height,
//   children,
// }) => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: height || "100%", // ✅ jeżeli nic nie podasz — dopasowuje się do treści
//         overflow: "hidden",
//         background:
//           "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,1) 100%)",
//       }}
//       className={className}
//     >
//       <video
//         src={src}
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           position: "absolute",
//           top: "30%",
//           left: "50%",
//           width: "100%",
//           height: "125%",
//           objectFit: "cover",
//           transform: "translate(-50%, -50%)",
//           zIndex: -1,
//           opacity: 0.5,
//         }}
//       />

//       <div
//         style={{
//           position: "relative",
//           zIndex: 1,
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;
"use client";
import React, { useRef, useState, useEffect } from "react";

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
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // 🔍 wykrywanie mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 👁️ lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 🎬 ładujemy źródło tylko gdy widoczne
  useEffect(() => {
    if (isVisible && !videoSrc) {
      setVideoSrc(src);
    }
  }, [isVisible, src, videoSrc]);

  // ▶️ sterowanie odtwarzaniem
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
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
      {/* 🎥 video ładuje się tylko gdy widoczne */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay={isMobile}
          loop
          muted
          playsInline
          preload="metadata"
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
            transition: "opacity 0.5s ease-in-out",
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
