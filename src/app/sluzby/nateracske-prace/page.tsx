import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  title: "Natěračství, natěrač Brno a okolí | PROFIMALBY - Petr Lejska",
  description: "Natěračství Brno a okolí. Nátěry fasád, nátěry radiátorů, nátěr dveří, nátěry střech, nátěr podlah, nátěry železných konstrukcí.",
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
    title: "Natěračství, natěrač Brno a okolí",
    description: "Natěračství, natěrač Brno a okolí",
    url: "https://www.profimaby.cz/sluzby/nateracske-prace",
    siteName: "Profi Malby Petr Lejska",
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
    ]
  },
  twitter: {
    card: "summary",
    title: "Natěračství, natěrač Brno a okolí",
    description: "Natěračství Brno a okolí. Nátěry fasád, nátěry radiátorů, nátěr dveří, nátěry střech, nátěr podlah, nátěry železných konstrukcí.",
    images: ["/Fotky/hero/hero-1.avif"],
  },
};

const App = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default App;