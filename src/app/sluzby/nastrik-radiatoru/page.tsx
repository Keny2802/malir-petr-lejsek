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
    serviceSet3
} from "../../../../sets/serviceSet3";
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

const App = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const previousCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === 0 ? serviceSet3.length - 1 : prev - 1
        ));
    };

    const nextCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === serviceSet3.length - 1 ? 0 : prev + 1
        ));
    };

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#e7e6e6] shadow-md"
            id="nastrik-radiatoru">
                <PageLabel pageLabelText="Nástřik rádiátorů" />
                <Wrapper className="flex justify-evenly flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
                    <Wrapper>
                        <Wrapper className="relative">
                            <Image
                            height={500}
                            width={500}
                            src={serviceSet3[currentIndex].imageSrc}
                            alt={serviceSet3[currentIndex].imageAlt}
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
                                serviceSet3.map((service, serviceIndex) => (
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
                            Nástřik rádiátorů
                        </h2>
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Provádíme 1-2 nástřiky základní syntetickou bílou barvou podle typu radiátoru (plechový nebo litinový).
                            </p>
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Po vytvrzení základního nátěru aplikujeme vrchní emailový nátěr tepelně odolnou barvou, která zabraňuje žloutnutí a zajišťuje dlouhodobý vzhled radiátorů.
                            </p>
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                V případě nástřiku radiátorů přímo v místnostech pečlivě zakryjeme veškeré plochy, které je nutné chránit před znečištěním - podlahy, nábytek, okna i dveře.
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
                            Provádíme odborné nátěry pozinkovaného plechu na střechách, okapech, parapetech a dalších klempířských prvcích. K obnovovacím nátěrům přistupujeme zejména v případech, kdy je původní vrstva barvy již stará, nesourodá, poškozená korozí nebo přestává plnit svou ochrannou funkci.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Před každou aplikací nátěru věnujeme maximální pozornost důkladné přípravě podkladu, která je zásadní pro kvalitu a dlouhou životnost nátěru. Povrch nejprve zbavíme všech nečistot, které by mohly negativně ovlivnit přilnavost barvy, zejména mastnot, rzi a zbytků starých nátěrů.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Nejprve provádíme hrubé očištění odstraněním prachu a volných částic ometením, vysátím nebo setřením. Pevně přilnuté nečistoty a poškozené vrstvy odstraňujeme mechanicky pomocí škrabek, smirkového papíru nebo ocelových kartáčů. Staré, soudržné nátěry bez známek podkladní koroze postačí pouze přebrousit.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Následuje důkladné odmaštění povrchu pomocí vhodných technických rozpouštědel. Po kompletní přípravě podkladu aplikujeme nátěrový systém ve dvou vrstvách, který zajistí dlouhodobou ochranu pozinkovaného plechu proti korozi i povětrnostním vlivům.
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

export default App;