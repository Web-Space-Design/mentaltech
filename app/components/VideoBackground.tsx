// import React from "react";

// interface VideoProps {
//   src: string;
//   className?: string;
//   height?: string | number; // pozwala kontrolować wysokość
// }

// const VideoBackground: React.FC<VideoProps> = ({
//   src,
//   className,
//   height = "60vh",
// }) => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: height,
//         overflow: "hidden",
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
//           top: "50%",
//           left: "50%",
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           transform: "translate(-50%, -50%)",
//           zIndex: 0,
//           opacity: 0.5, // przezroczystość, żeby było subtelne
//         }}
//       />

//       <div
//         style={{
//           position: "relative",
//           zIndex: 1,
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         {/* Tu można wrzucić Hero lub buttony */}
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;
import React from "react";

interface VideoProps {
  src: string;
  className?: string;
  height?: string | number;
  children?: React.ReactNode; // <- dodajemy
}

const VideoBackground: React.FC<VideoProps> = ({
  src,
  className,
  height = "100vh", // fullscreen domyślnie
  children,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
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
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          opacity: 0.5,
        }}
      />

      {/* Overlay na wierzchu */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex", // wyśrodkowanie
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
