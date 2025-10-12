import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import ThemeRegistry from "./ThemeRegistry";
import CursorWrapper from "./components/CursorWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agencja Interaktywna – UX/UI & Development | MentalTech",
  description:
    "Zmieniamy pomysły w produkty cyfrowe, które sprzedają. Projektujemy strony, aplikacje i interfejsy – szybkie, intuicyjne i dopasowane do Twoich użytkowników.",
  keywords: [
    "agencja interaktywna",
    "UX/UI",
    "projektowanie stron",
    "aplikacje webowe",
    "aplikacje mobilne",
    "branding cyfrowy",
    "design interfejsów",
    "tworzenie produktów cyfrowych",
  ],
  authors: [{ name: "MentalTech", url: "https://mentaltech.pl" }],
  openGraph: {
    title: "Agencja Interaktywna – UX/UI & Development | MentalTech",
    description:
      "Tworzymy nowoczesne produkty cyfrowe, które przyciągają użytkowników i generują sprzedaż.",
    url: "https://mentaltech.pl",
    siteName: "MentalTech",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Agencja Interaktywna – UX/UI & Development",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeRegistry>
          <CursorWrapper />
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
