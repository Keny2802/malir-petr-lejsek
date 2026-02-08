import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  title: "Malování ložnice v Brně a okolí | PROFIMALBY - Petr Lejska",
  description: "Malířské a natěračské práce Brno a okolí. Malíři zajišťují malování bytových interiérů, malování pokojů. Natěrači zase nátěry fasád domu, nátěry radiátorů, dveří, nátěry střech, nátěry železných konstrukcí. Naši zedníci pak dělají štukové omítky, sádrové omítky a probarvené omítky (fasády domů).",
  icons: {
    icon: [
      {
        url: "/Fotky/Ikonky/favicon.ico",
        type: "image/vnd.microsoft.icon"
      }
    ]
  },
  keywords: [
    "malířské práce Brno",
    "malíř Brno",
    "malířské služby Brno",
    "profesionální malíř Brno",
    "malování interiérů Brno",
    "malování bytů Brno",
    "malování domů Brno",
    "výmalba Brno",
    "malíř pokojů Brno",
    "malířské práce cena Brno",
  ],
  openGraph: {
    title: "Malování ložnice v Brně a okolí | PROFIMALBY - Petr Lejska",
    description: "Malířské a natěračské práce Brno a okolí. Malíři zajišťují malování bytových interiérů, malování pokojů. Natěrači zase nátěry fasád domu, nátěry radiátorů, dveří, nátěry střech, nátěry železných konstrukcí. Naši zedníci pak dělají štukové omítky, sádrové omítky a probarvené omítky (fasády domů).",
    url: "https://www.profimaby.cz/vice/malovani-loznice",
    siteName: "profimalby.cz",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/Fotky/hero/hero-1.avif",
        alt: "Malování ložnice - Profi Malby Petr Lejska",
        type: "image/avif",
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Malování ložnice Brno a okolí | PROFIMALBY - Petr Lejska",
    description: "Malířské a natěračské práce Brno a okolí. Malíři zajišťují malování bytových interiérů, malování pokojů. Natěrači zase nátěry fasád domu, nátěry radiátorů, dveří, nátěry střech, nátěry železných konstrukcí. Naši zedníci pak dělají štukové omítky, sádrové omítky a probarvené omítky (fasády domů).",
    images: ["/Fotky/hero/hero-1.avif"]
  }
};

const App = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default App;