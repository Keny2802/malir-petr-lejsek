"use client";

import {
    useState,
    Fragment
} from "react";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon
} from "@heroicons/react/24/solid";
import {
    serviceSet6
} from "../../../../sets/serviceSet6";
import {
    Metadata
} from "next";
import Image from "next/image";

import Wrapper from "../../../../components/Wrapper";
import ContactHeader from "../../../../components/ContactHeader";
import Header from "../../../../components/Header";
import PageLabel from "../../../../components/pageLabel";
import NoProofLink from "../../../../components/NoProofLink";
import setLinkWithoutHash from "../../../../functions/setLinkWithoutHash";
import References from "../../../../sections/References";
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

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
    title: "Malování bytů Brno | Profi Malby Petr Lejska",
    description: "Hledáte spolehlivého malíře bytů v Brně? Zajistíme profesionální výmalbu bez starostí.",
    url: "https://www.profimaby.cz/sluzby/malirske-prace",
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

const Content = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const previousCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === 0 ? serviceSet6.length - 1 : prev - 1
        ));
    };

    const nextCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === serviceSet6.length - 1 ? 0 : prev + 1
        ));
    };

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#e7e6e6] shadow-md"
            id="natery-strech">
                <PageLabel pageLabelText="Služba nátěry střech" />
                <Wrapper className="flex justify-evenly flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
                    <Wrapper>
                        <Wrapper className="relative">
                            <Image
                            height={500}
                            width={500}
                            src={serviceSet6[currentIndex].imageSrc}
                            alt={serviceSet6[currentIndex].imageAlt}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            className="rounded-md cursor-pointer"
                            />
                            <p className="absolute top-3 right-5 text-xl md:text-2l lg:text-3xl text-white font-black">
                                {currentIndex + 1}
                            </p>
                            <button
                            className="p-2 md:p-3 lg:p-4 absolute top-1/2 left-3 -translate-y-1/2 bg-[#1e1e1e] text-white rounded-full cursor-pointer"
                            onClick={(e) => {
                            previousCarouselImage();
                            }}>
                                <ChevronDoubleLeftIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer" />           
                            </button>
                            <button
                            className="p-2 md:p-3 lg:p-4 absolute top-1/2 right-3 -translate-y-1/2 bg-[#1e1e1e] text-white rounded-full"
                            onClick={(e) => {
                                nextCarouselImage();
                            }}>
                                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer" />           
                            </button>
                        </Wrapper>
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex items-center gap-2 md:gap-4 lg:gap-6 w-full md:w-1/2">
                            {
                                serviceSet6.map((service, serviceIndex) => (
                                    <Fragment key={serviceIndex}>
                                        <Image
                                        height={80}
                                        width={80}
                                        src={service.imageSrc}
                                        alt={service.imageAlt}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        className="rounded-md cursor-pointer"
                                        onClick={(e) => {
                                            setCurrentIndex(serviceIndex);
                                        }}
                                        />
                                    </Fragment>
                                ))
                            }
                        </Wrapper>
                    </Wrapper>
                    <Wrapper className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            Nátěry střech
                        </h2>
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Obnovovací nátěr pozinkovaného plechu provádíme v případě, že předchozí vrstva barvy je stará, prorezivělá nebo nesourodá a již neposkytuje dostatečnou ochranu materiálu. Správně aplikovaný nátěr prodlužuje životnost plechu, chrání jej před korozí a zároveň zlepšuje vzhled střechy či kovových konstrukcí.
                            </p>
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Před samotným nátěrem plech důkladně očistíme od prachu, nečistot a případné rezové vrstvy, aby nový nátěr dobře přilnul a zajistil dlouhodobou ochranu. Používáme kvalitní nátěrové hmoty odolné povětrnostním vlivům a UV záření, které zabraňují žloutnutí a blednutí barev.
                            </p>
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Nátěry provádíme pečlivě a s ohledem na okolní plochy - zakryjeme vše, co nemá být natřeno, a po dokončení zajistíme úklid. Díky tomu získáte nejen ochranu, ale i esteticky čistý a rovnoměrný vzhled.
                            </p>
                            <NoProofLink
                            href="kontakt"
                            onClick={(e) => {
                                setLinkWithoutHash(e, "kontakt");
                            }}
                            className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] text-white text-center w-full md:w-75 rounded-md">
                                Nezávazně poptat
                            </NoProofLink>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Wrapper className="p-2 md:p-3 lg:p-4 mt-2 md:mt-4 lg:mt-6 flex justify-center items-center flex-col gap-2 md:gap-4 lg:gap-6 border-t border-gray-400">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Nátěry střech
                    </h3>
                    <Wrapper className="flex flex-col gap-2 w-full md:max-w-3xl">
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Provádíme odborné nátěry pozinkovaného plechu na střechách, okapech, parapetech a dalších klempířských prvcích. K obnovovacímu nátěru přistupujeme zejména v případě, kdy je původní vrstva barvy již stará, nesourodá, poškozená korozí nebo neplní svou ochrannou funkci.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Při každé aplikaci nátěru klademe maximální důraz na důkladnou přípravu podkladu, která je základem kvalitního a dlouhodobě funkčního nátěru. Povrch nejprve zbavíme veškerých nečistot, které by mohly snížit přilnavost barvy - zejména mastnot, rzi a zbytků starých nátěrů.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Nejprve provádíme hrubé očištění povrchu odstraněním prachu a volných částic ometením, vysátím nebo setřením. Pevně přilnuté nečistoty a poškozené vrstvy nátěru odstraňujeme mechanicky pomocí škrabek, smirkového papíru nebo ocelových kartáčů. Staré, soudržné nátěry bez známek koroze pouze přebrousíme.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Následuje důkladné odmaštění povrchu, k němuž používáme vhodná technická rozpouštědla. Po přípravě podkladu aplikujeme nátěrový systém ve dvou vrstvách, který zajistí dlouhodobou ochranu plechu proti korozi i povětrnostním vlivům.
                        </p>
                        <NoProofLink
                        href="kontakt"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kontakt");
                        }}
                        className="p-4 md:p-5 lg:p-6 mt-2 md:mt-4 lg:mt-6 bg-[#1e1e1e] text-white text-center w-full md:w-75 rounded-md">
                            Kontaktujte nás
                        </NoProofLink>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <References />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;