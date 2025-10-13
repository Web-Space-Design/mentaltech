import React from "react";

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
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: height || "100%", // ✅ jeżeli nic nie podasz — dopasowuje się do treści
        overflow: "hidden",
        background:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,1) 100%)",
      }}
      className={className}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
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
