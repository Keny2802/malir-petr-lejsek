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
    title: "Malování bytů Brno | Profi Malby Petr Lejska",
    description: "Hledáte spolehlivého malíře bytů v Brně? Zajistíme profesionální výmalbu bez starostí.",
    url: "https://www.profimaby.cz/sluzby",
    siteName: "Profi Malby Petr Lejska",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/Fotky/Clean Logo.png",
        alt: "Malování bytů Brno - Profi Malby Petr Lejska",
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
            <ContactHeader />
            <Header />
            <Services />
            <References />
            <WhyUs />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default App;