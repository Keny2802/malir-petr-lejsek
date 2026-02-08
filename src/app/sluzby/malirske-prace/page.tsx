import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  title: "Malířství, malby, malíř Brno a okolí | PROFIMALBY - Petr Lejska",
  description: "Malířské a natěračské práce Brno a okolí. Malíři zajišťují malování bytových interiérů, malování bytu na klíč, malování pokojů, malování obývacího pokoje, malování dětského pokoje, malování kuchyně, malování ložnice, úklid po malování.",
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
    title: "Malířství, malby, malíř Brno a okolí",
    description: "Malířské a natěračské práce Brno a okolí. Malíři zajišťují malování bytových interiérů, malování bytu na klíč, malování pokojů, malování obývacího pokoje, malování dětského pokoje, malování kuchyně, malování ložnice, úklid po malování.",
    url: "https://www.profimaby.cz/sluzby/malirske-prace",
    siteName: "profimalby.cz",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/Fotky/hero/hero-1.avif",
        alt: "Malířství, malby, malíř Brno a okolí",
        type: "image/avif",
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Malířství, malby, malíř Brno a okolí",
    description: "Malířské a natěračské práce Brno a okolí. Malíři zajišťují malování bytových interiérů, malování bytu na klíč, malování pokojů, malování obývacího pokoje, malování dětského pokoje, malování kuchyně, malování ložnice, úklid po malování.",
    images: ["/Fotky/hero/hero-1.avif"],
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