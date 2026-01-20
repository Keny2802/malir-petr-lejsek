import type {
  Metadata
} from "next";
import "./globals.css";

import LoadingScreen from "../../components/LoadingScreen";

export const metadata: Metadata = {
  title: "Malování bytů Brno | Profi Malby Petr Lejska",
  description: "Profesionální malování bytů v Brně a okolí. Precizní práce, čisté provedení, kvalitní barvy a férové ceny. Nezávazná kalkulace zdarma.",
  icons: {
    icon: [
      {
        url: "/Fotky/Ikonky/favicon.ico",
        type: "image/vnd.microsoft.icon"
      }
    ]
  },
  keywords: [
    "malíř Brno",
    "malířské práce Brno",
    "natěrač Brno",
    "natěračské práce Brno",
    "malování bytů Brno",
    "malování domů Brno",
    "nátěry fasád Brno",
    "nátěry střech Brno",
    "nátěry radiátorů Brno",
    "profesionální malíř Brno"
  ],
  openGraph: {
    title: "Malování bytů Brno | Profi Malby Petr Lejska",
    description: "Hledáte spolehlivého malíře bytů v Brně? Zajistíme profesionální výmalbu bez starostí.",
    url: "https://www.profimaby.cz",
    siteName: "Profi Malby Petr Lejska",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/Fotky/Hero (1).jpg",
        alt: "Malování bytů Brno - Profi Malby Petr Lejska",
        type: "image/jpg",
        width: 1200,
        height: 630,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
