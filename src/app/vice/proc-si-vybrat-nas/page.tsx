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
        url: "/Fotky/Clean Logo.png",
        type: "image/png"
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
    title: "Proč si vybrat nás | Profi Malby Petr Lejska",
    description: "Hledáte spolehlivého malíře bytů v Brně? Zajistíme profesionální výmalbu bez starostí.",
    url: "https://www.profimaby.cz/vice/proc-si-vybrat-nas",
    siteName: "Profi Malby Petr Lejska",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/Fotky/Clean Logo.png",
        alt: "Proč si vybrat nás - Profi Malby Petr Lejska",
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