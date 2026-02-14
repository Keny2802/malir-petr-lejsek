import {
    Fragment
} from "react";
import {
    Metadata
} from "next";

import ContactHeader from "../../../components/ContactHeader";
import Header from "../../../components/Header";
import Services from "../../../sections/Services";
import References from "../../../sections/References";
import WhyUs from "../../../sections/WhyUs";
import Contact from "../../../sections/Contact";
import Footer from "../../../components/Footer";
import FixedCta from "../../../components/FixedCta";

export const metadata: Metadata = {
  title: "Služby - Malování bytů Brno | Profi Malby Petr Lejska",
  description: "Profesionální malířské a natěračské služby v Brně a okolí. Malování bytů, malování domů, nátěry fasád, dveří a radiátorů - vše precizně a kvalitně.",
  icons: {
    icon: [
      {
        url: "/Fotky/Ikonky/favicon.ico",
        type: "image/vnd.microsoft.icon"
      }
    ]
  },
  keywords: [
    "malování bytů Brno",
    "malíř bytu Brno",
    "malířské práce Brno",
    "výmalba bytu Brno",
    "malování interiérů Brno",
    "profesionální malíř Brno",
    "malíř Brno",
    "malování bytu cena Brno",
    "malíř pokojů Brno",
    "malířské služby Brno"
  ],
  openGraph: {
    title: "Služby - Malování bytů Brno | Profi Malby Petr Lejska",
    description: "Profesionální malířské a natěračské služby v Brně a okolí. Malování bytů, malování domů, nátěry fasád, dveří a radiátorů - vše precizně a kvalitně.",
    url: "https://www.profimaby.cz/sluzby",
    siteName: "profimalby.cz",
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
    title: "Služby - Malířské a natěračské služby Brno | Profi Malby Petr Lejska",
    description:
      "Profesionální malířské a natěračské služby v Brně a okolí. Malování bytů, malování domů, nátěry fasád, dveří a radiátorů - vše precizně a kvalitně.",
    images: ["/Fotky/hero/hero-1.avif"],
  },
};

const App = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Services />
            <References />
            <WhyUs />
            <Contact />
            <Footer />
            <FixedCta />
        </Fragment>
    );
};

export default App;