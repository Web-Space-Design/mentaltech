export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  video: string;
  thumbnail: string;
  technologies: string[];

  // 🔽 szczegóły projektu
  year: number;
  client: string;
  industry: string;
  scope: string[];
  challenges: string[];
  solution: string;
  features: string[];
  results: string[];
  gallery: string[];
  link?: string;
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
    year: 2024,
    client: "Teatr Miejski",
    industry: "Kultura i rozrywka",
    scope: ["UX/UI Design", "Frontend", "Animacje", "Integracje API"],
    challenges: [
      "Połączenie funkcjonalności informacyjnej i sprzedażowej",
      "Utrzymanie płynnych animacji przy dużej ilości treści",
      "Zachowanie spójnego UX na mobile i desktop",
    ],
    solution: `
Stworzyliśmy nowoczesną platformę z dynamicznymi animacjami GSAP i elastyczną strukturą komponentów React. 
Zaimplementowano system repertuaru i rezerwacji biletów w czasie rzeczywistym. 
Projekt wdrożony w Next.js dla szybkości i SEO.`,
    features: [
      "System rezerwacji miejsc i biletów",
      "Moduł repertuaru i aktualności",
      "Integracja z social mediami",
      "Animacje GSAP dla efektu teatralnego",
      "Tryb ciemny / jasny",
    ],
    results: [
      "Zwiększenie liczby rezerwacji o 37%",
      "Średni czas sesji +28%",
      "Ocena UX: 9.2/10 wg użytkowników",
    ],
    gallery: [
      "/project/project1.png",
      "/project/project2.png",
      "/project/project3.png",
    ],
    link: "https://zlamacnoge.pl",
  },
  {
    id: "video-2",
    slug: "czarny-piatek-intellect",
    title: "Czarny Piątek według Intellect",
    subtitle: "Strona promocyjna dla szkoły językowej Intellect",
    video: "/video/project/video-2.mp4",
    thumbnail: "/thumbnail/project4.png",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    year: 2024,
    client: "Intellect Language Center",
    industry: "Edukacja",
    scope: ["UX/UI Design", "Frontend", "Kampania marketingowa"],
    challenges: [
      "Utrzymanie wysokiej wydajności przy dużej ilości animacji",
      "Zwiększenie konwersji zapisów na kursy",
      "Zachowanie prostego i przejrzystego UI",
    ],
    solution: `
Landing page zbudowany w Next.js z wykorzystaniem Framer Motion dla płynnych przejść i mikroanimacji. 
Zaprojektowano prosty lej sprzedażowy z czytelnym CTA i licznikami czasu promocji.`,
    features: [
      "Licznik czasu trwania promocji",
      "Formularz zapisu z walidacją",
      "Sekcja ofert z dynamicznym filtrem",
      "Responsywny layout i animacje wejścia",
    ],
    results: [
      "Wzrost konwersji zapisów o 42%",
      "Średni czas ładowania 0.8s",
      "SEO wynik Lighthouse: 98/100",
    ],
    gallery: [
      "/project/project1.png",
      "/project/project2.png",
      "/project/project3.png",
    ],
    link: "https://intellect.pl/black-friday",
  },
  {
    id: "video-3",
    slug: "wirtualne-muzeum",
    title: "Wirtualne Muzeum",
    subtitle: "Eksploracja sztuki w immersyjnym środowisku online",
    video: "/video/project/video-3.mp4",
    thumbnail: "/thumbnail/project3.png",
    technologies: ["Next.js", "Three.js", "React"],
    year: 2023,
    client: "Muzeum Narodowe",
    industry: "Kultura / sztuka",
    scope: ["UX/UI Design", "Frontend 3D", "Integracja API"],
    challenges: [
      "Optymalizacja wydajności renderowania 3D",
      "Stworzenie immersyjnego doświadczenia użytkownika",
      "Wydajna nawigacja po galerii 3D",
    ],
    solution: `
Zastosowaliśmy Three.js do tworzenia wirtualnej galerii oraz Next.js dla dynamicznego ładowania treści. 
Projekt umożliwia użytkownikowi swobodne poruszanie się po ekspozycjach i poznawanie opisów dzieł sztuki.`,
    features: [
      "Interaktywna galeria 3D",
      "Opisy eksponatów w formie tooltipów",
      "Tryb pełnoekranowy",
      "Dynamiczne oświetlenie i kamera",
    ],
    results: [
      "Średni czas spędzony na stronie: 4:35 min",
      "Wyróżnienie w plebiscycie WebStar 2023",
      "Wydajność 92/100 w Google Lighthouse",
    ],
    gallery: [
      "/project/project1.png",
      "/project/project2.png",
      "/project/project3.png",
    ],
    link: "https://virtualmuseum.pl",
  },
  {
    id: "video-4",
    slug: "konferencja-live",
    title: "Konferencja Live",
    subtitle: "Platforma do transmisji wydarzeń na żywo",
    video: "/video/project/video-4.mp4",
    thumbnail: "/thumbnail/project4.png",
    technologies: ["Next.js", "WebRTC", "MUI", "Node.js"],
    year: 2023,
    client: "EventTech Group",
    industry: "Event / tech",
    scope: ["Frontend", "Backend", "Streaming video", "UI design"],
    challenges: [
      "Utrzymanie jakości transmisji dla 1000+ użytkowników jednocześnie",
      "Synchronizacja czatu i streamu",
      "Zabezpieczenie treści i dostępów",
    ],
    solution: `
Opracowaliśmy kompletną platformę opartą na WebRTC i Next.js z backendem w Node.js. 
Zintegrowano czat w czasie rzeczywistym i system zarządzania wydarzeniami. 
Projekt w pełni skalowalny i zoptymalizowany pod duże obciążenia.`,
    features: [
      "Transmisje live z czatem",
      "Panel administratora wydarzeń",
      "System ról użytkowników",
      "Integracja z kalendarzem Google",
    ],
    results: [
      "Ponad 10 000 uczestników wydarzeń online",
      "Stabilność 99.9% uptime",
      "Dostępność na desktop i mobile",
    ],
    gallery: [
      "/project/project1.png",
      "/project/project2.png",
      "/project/project3.png",
    ],
    link: "https://konferencjalive.com",
  },
];
