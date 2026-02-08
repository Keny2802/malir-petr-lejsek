import type {
  Metadata
} from "next";
import "./globals.css";

import LoadingScreen from "../../components/LoadingScreen";

export const metadata: Metadata = {
  title: "Malířství Natěračství Brno | PROFIMALBY - Petr Lejska",
  // description: "Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska. Malíři Brno - malování bytových interiérů, malování pokojů, malby pokojů. Natěrači Brno - nátěry fasád domu, nátěry radiátorů, dveří, nátěry střech, nátěry železných konstrukcí. Štukové omítky, sádrové omítky, probarvené omítky.",
  description: "Jsme profesionální malíři pokojů a natěrači již od roku 1998. Provádíme veškeré malířské a natěračské práce všech typů a rozsahů. Působíme převážně v Brně.",
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
    title: "Malířství Natěračství Brno",
    description: "Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska. Malíři Brno - malování bytových interiérů, malování pokojů, malby pokojů. Natěrači Brno - nátěry fasád domu, nátěry radiátorů, dveří, nátěry střech, nátěry železných konstrukcí. Štukové omítky, sádrové omítky, probarvené omítky.",
    url: "https://www.profimaby.cz",
    siteName: "profimaby.cz",
    locale: "cs_CZ",
    type: "website",
    
    images: [
      {
        url: "/Fotky/hero/hero-1.avif",
        alt: "Malování bytů Brno - Profi Malby Petr Lejska",
        type: "image/avif",
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "Malířství Natěračství Brno | PROFIMALBY",
    description: "Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska.",
    images: ["/Fotky/hero/hero-1.avif"]
  },
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
