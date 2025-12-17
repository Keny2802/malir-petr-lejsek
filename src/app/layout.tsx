import type {
  Metadata
} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profi Malby Petr Lejska | Malíř a natěrač",
  description: "Profi Malby Petr Lejska nabízí profesionální malířské a natěračské práce. Precizní provedení, cistá práce a férové ceny.",
  icons: {
    icon: [
      {
        url: "/Fotky/Clean Logo.png",
        type: "image/png"
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
    title: "Profi Malby Petr Lejska | Malíř Brno",
    description: "Profesionální malířské a natěračské práce v Brně. Kvalita, čistota a spolehlivost.",
    url: "https://www.profimaby.cz",
    siteName: "Profi Malby Petr Lejska",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/Fotky/Clean Logo.png",
        alt: "Profi Malby Petr Lejska - malířské práce",
        type: "image/png",
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
        {children}
      </body>
    </html>
  );
}
