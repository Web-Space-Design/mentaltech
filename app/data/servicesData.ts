export interface servicesData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  link: string;
  image: string;
}

export const offerData: servicesData[] = [
  {
    id: "offer-ux-ui",
    slug: "ux-ui-design",
    title: "UX/UI Design",
    subtitle: "Tworzymy intuicyjne, piękne i skuteczne interfejsy.",
    description:
      "Projektujemy doświadczenia, które angażują użytkowników i wspierają cele biznesowe.",
    points: [
      "Badania użytkowników i persony",
      "Analiza konkurencji",
      "Makiety i prototypy",
      "Animacje i motion design",
      "Projekt optymalny pod mobile",
    ],
    image: "/project/project1.png",
    link: "/oferta/ux-ui-design",
  },
  {
    id: "offer-1",
    slug: "strony-internetowe",
    title: "Strony internetowe",
    subtitle: "Nowoczesne witryny, które sprzedają i angażują.",
    description:
      "Projektujemy i wdrażamy szybkie, estetyczne strony dopasowane do marki i urządzeń.",
    points: [
      "Projekt UX/UI i prototypy",
      "Responsywny design",
      "Optymalizacja SEO i wydajności",
      "Integracja CMS (WordPress / Sanity)",
      "Animacje i mikrointerakcje",
    ],
    image: "/project/project3.png",
    link: "/oferta/strony-internetowe",
  },
  {
    id: "offer-2",
    slug: "aplikacje-webowe",
    title: "Aplikacje webowe",
    subtitle: "Dedykowane rozwiązania, które rozwijają Twój biznes.",
    description:
      "Tworzymy skalowalne aplikacje dopasowane do Twoich procesów i użytkowników.",
    points: [
      "Frontend i backend w Next.js / Node.js",
      "Integracje API i automatyzacje",
      "Systemy logowania i paneli",
      "Hosting w chmurze (Vercel / AWS)",
      "Optymalizacja wydajności",
    ],
    image: "/project/project2.png",
    link: "/oferta/aplikacje-webowe",
  },
  {
    id: "offer-3",
    slug: "edycja-wideo",
    title: "Edycja wideo",
    subtitle: "Tworzymy materiały, które przyciągają uwagę i emocje.",
    description:
      "Zajmujemy się pełnym montażem – od surowego materiału po gotowy film promocyjny.",
    points: [
      "Montaż i korekcja barw",
      "Motion design i napisy ekranowe",
      "Optymalizacja pod social media",
      "Eksport w różnych formatach (9:16, 16:9)",
      "Automatyzacja montażu AI",
    ],
    image: "/project/project3.png",
    link: "/oferta/edycja-wideo",
  },
  {
    id: "offer-4",
    slug: "optymalizacja-ai",
    title: "Optymalizacja AI",
    subtitle: "Wdrażamy sztuczną inteligencję do realnych procesów.",
    description:
      "Pomagamy firmom automatyzować zadania, tworzyć chatboty i przyspieszać pracę dzięki AI.",
    points: [
      "Integracje z OpenAI / Anthropic",
      "Chatboty i asystenci firmowi",
      "Generatory treści i opisów",
      "Analiza danych z AI",
      "Optymalizacja procesów wewnętrznych",
    ],
    image: "/project/project3.png",
    link: "/oferta/optymalizacja-ai",
  },
];
