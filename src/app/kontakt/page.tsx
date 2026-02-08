import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

export const metadata: Metadata = {
  title: "Kontakt | PROFIMALBY - Petr Lejska",
  description: "Petr Lejska. Kroupova 180/56, Brno - Starý Lískovec, 625 00. IČO: 68013663. +420 603 243 852 · +420 547 211 709 · info@profimalby.cz",
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
    title: "Kontakt | PROFIMALBY - Petr Lejska",
    description: "Petr Lejska. Kroupova 180/56, Brno - Starý Lískovec, 625 00. IČO: 68013663. +420 603 243 852 · +420 547 211 709 · info@profimalby.cz",
    url: "https://www.profimaby.cz/vice/nater-oken",
    siteName: "profimalby.cz",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/Fotky/hero/hero-1.avif",
        alt: "Kontakt - Profi Malby Petr Lejska",
        type: "image/avif",
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Kontakt | PROFIMALBY - Petr Lejska",
    description: "Petr Lejska. Kroupova 180/56, Brno - Starý Lískovec, 625 00. IČO: 68013663. +420 603 243 852 · +420 547 211 709 · info@profimalby.cz",
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