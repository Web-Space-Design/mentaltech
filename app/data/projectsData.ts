export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  video: string;
  technologies: string[];
  details: string;
  thumbnail: string;
}

export const projectsData: Project[] = [
  {
    id: "video-1",
    slug: "zlamac-noge",
    title: "Złamać nogę",
    subtitle: "Dynamiczna witryna łącząca widzów z teatrami na żywo",
    video: "/video/project/video-1.mp4",
    thumbnail: "/thumbnail/project1.png",
    technologies: ["Next.js", "React", "MUI", "GSAP"],
    details:
      "Stworzenie dynamicznej witryny internetowej, która łączy widzów z przedstawieniami teatralnymi na żywo, czyniąc kulturę bardziej dostępną i angażującą.",
  },
  {
    id: "video-2",
    slug: "czarny-piatek-intellect",
    title: "Czarny piątek według Intellect",
    subtitle: "Kampania zwiększająca sprzedaż z okazji Black Friday",
    video: "/video/project/video-2.mp4",
    thumbnail: "/thumbnail/project4.png",
    technologies: ["Next.js", "React", "Framer Motion"],
    details:
      "Uruchomienie odważnej kampanii, która zwiększa zaangażowanie i sprzedaż, rzucając światło na ekskluzywne oferty z okazji Czarnego Piątku.",
  },
  {
    id: "video-3",
    slug: "wirtualne-muzeum",
    title: "Wirtualne Muzeum",
    subtitle: "Eksploracja sztuki w immersyjnym środowisku online",
    video: "/video/project/video-3.mp4",
    thumbnail: "/thumbnail/project3.png",
    technologies: ["Next.js", "Three.js", "React"],
    details:
      "Projekt, który pozwala zwiedzającym doświadczać sztuki w zupełnie nowy sposób poprzez wirtualne galerie.",
  },
  {
    id: "video-4",
    slug: "konferencja-live",
    title: "Konferencja Live",
    subtitle: "Platforma do transmisji wydarzeń na żywo",
    video: "/video/project/video-4.mp4",
    thumbnail: "/thumbnail/project4.png",
    technologies: ["Next.js", "WebRTC", "MUI"],
    details:
      "Stworzenie platformy, która umożliwia prowadzenie interaktywnych transmisji na żywo z dużą ilością widzów.",
  },
];
