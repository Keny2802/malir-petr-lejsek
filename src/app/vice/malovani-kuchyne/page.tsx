import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import Content from "./Content";

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
    title: "Malování kuchyně | Profi Malby Petr Lejska",
    description: "Hledáte spolehlivého malíře bytů v Brně? Zajistíme profesionální výmalbu bez starostí.",
    url: "https://www.profimaby.cz/vice/malovani-kuchyne",
    siteName: "Profi Malby Petr Lejska",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/Fotky/Clean Logo.png",
        alt: "Malování kuchyně - Profi Malby Petr Lejska",
        type: "image/png",
        width: 1200,
        height: 630,
      }
    ]
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