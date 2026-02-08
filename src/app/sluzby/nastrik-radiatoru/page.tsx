import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  title: "Nástřik radiátorů Brno a okolí | PROFIMALBY - Petr Lejska",
  description: "Natěračství Brno. Nátěry fasád, nástřik radiátorů, nátěr dveří, nátěry střech, nátěry železných konstrukcí.",
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
    "nástřik radiátorů",
    "malování domů Brno",
    "výmalba Brno",
    "malíř pokojů Brno",
    "malířské práce cena Brno",
  ],
  openGraph: {
    title: "Nástřik radiátorů Brno a okolí",
    description: "Natěračství Brno. Nátěry fasád, nástřik radiátorů, nátěr dveří, nátěry střech, nátěry železných konstrukcí.",
    url: "https://www.profimaby.cz/sluzby/nastrik-radiatoru",
    siteName: "profimalby.cz",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/Fotky/hero/hero-1.avif",
        alt: "Nátěry střech - Profi Malby Petr Lejska",
        type: "image/avif",
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Nátěr střechy Brno a okolí",
    description: "Natěračství Brno. Nátěry fasád, nátěry radiátorů, nátěr dveří, nátěry střech, nátěry železných konstrukcí.",
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