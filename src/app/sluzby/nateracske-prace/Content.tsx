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
    serviceSet4
} from "../../../../sets/serviceSet4";
import {
    usePathname
} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../../../../components/Wrapper";
import ContactHeader from "../../../../components/ContactHeader";
import Header from "../../../../components/Header";
import PathLink from "../../../../components/PathLink";
import PageLabel from "../../../../components/pageLabel";
import NoProofLink from "../../../../components/NoProofLink";
import Flex from "../../../../components/Flex";
import setLinkWithoutHash from "../../../../functions/setLinkWithoutHash";
import References from "../../../../sections/References";
import WhyUs from "../../../../sections/WhyUs";
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

const Content = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const pathName = usePathname();

    const previousCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === 0 ? serviceSet4.length - 1 : prev - 1
        ));
    };

    const nextCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === serviceSet4.length - 1 ? 0 : prev + 1
        ));
    };

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/92 shadow-md"
            id="nateracske-prace">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                folderHref="/sluzby"
                folderLink="Služby"
                siteHref={pathName}
                siteLink="Natěračské práce Brno"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Natěračské práce Brno" />
                <Wrapper className="flex justify-evenly flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
                    <Wrapper>
                        <Wrapper className="relative">
                            <Image
                            height={800}
                            width={800}
                            src={serviceSet4[currentIndex].imageSrc}
                            alt={serviceSet4[currentIndex].imageAlt}
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
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex items-center gap-2 md:gap-4 lg:gap-6 overflow-x-auto whitespace-nowrap">
                            {
                                serviceSet4.map((service, serviceIndex) => (
                                    <Fragment key={serviceIndex}>
                                        <Image
                                        height={80}
                                        width={80}
                                        src={service.imageSrc}
                                        alt={service.imageAlt}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        className="w-20 h-20 object-cover rounded-md cursor-pointer"
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
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold border-b-5 border-black w-max">
                            Natěračské práce
                        </h2>
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Úkolem povrchových úprav není pouze dekorace, ale především ochrana natíraných materiálů, zejména v exteriéru, kde jsou vystaveny nepříznivým povětrnostním vlivům.
                            </p>
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Krycí nátěr se aplikuje v případě, kdy je potřeba obnovit a oživit staré nátěry nebo když je povrch dřeva po delší době již nevzhledný. Nový nátěr dřevo spolehlivě chrání, zlepšuje jeho vzhled a výrazně prodlužuje jeho životnost.
                            </p>
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Nátěr lze provést v libovolném barevném odstínu dle vzorníků RAL nebo v míchacích kolorovacích centrech, a to v lesklé, polomatné či matné úpravě. Nejčastěji používáme kvalitní krycí nátěry na bázi syntetických, olejových, nitrocelulózových nebo vodou ředitelných barev.
                            </p>
                            <NoProofLink
                            href="kontakt"
                            onClick={(e) => {
                                setLinkWithoutHash(e, "kontakt");
                            }}
                            className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] text-white text-center w-full md:w-75 rounded-md">
                                Nezávazně poptat
                            </NoProofLink>
                            <Flex className="mt-4 md:mt-5 lg:mt-6 flex-wrap">
                                {
                                    [
                                        {
                                            href: "/sluzby/natery-fasad",
                                            link: "Nátěry fasád"
                                        },
                                        {
                                            href: "/sluzby/natery-strech",
                                            link: "Nátěr střech"
                                        },
                                        {
                                            href: "/sluzby/nastrik-radiatoru",
                                            link: "Nástřik radiátorů"
                                        },
                                        {
                                            href: "/vice/nater-oken",
                                            link: "Nátěr oken"
                                        },
                                        {
                                            href: "/vice/nater-dveri",
                                            link: "Nátěr dveří"
                                        }
                                    ].map((link, linkIndex) => {
                                        return (
                                            <Link
                                            key={linkIndex}
                                            href={link.href}
                                            className="p-4 md:p-4 lg:p-8 w-full md:w-max bg-[#a11106] text-white flex justify-center items-center rounded-2xl">
                                                {link.link}
                                            </Link>
                                        );
                                    })
                                }
                            </Flex>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Wrapper className="p-2 md:p-3 lg:p-4 mt-2 md:mt-4 lg:mt-6 flex justify-center items-center flex-col gap-2 md:gap-4 lg:gap-6">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Ochranné nátěry
                    </h3>
                    <Wrapper className="flex flex-col gap-2 w-full md:max-w-3xl">
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Důležitou součástí našich služeb jsou profesionální natěračské práce. Náš zkušený tým natěračů je připraven provádět kvalitní nátěry i nástřiky na všechny typy povrchů. Při každé zakázce klademe maximální důraz na pečlivé dodržování technologických postupů a použití vhodných materiálů.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Zajišťujeme nátěry oken, dveří, konstrukcí, dřevěných i betonových podlah, klempířských prvků, fasád i střech. Natěračské práce plní nejen estetickou funkci, ale především zajišťují dlouhodobou ochranu povrchů, zejména v exteriéru, kde jsou materiály vystaveny povětrnostním vlivům.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Naši malíři a natěrači jsou pravidelně školeni v oblasti stávajících i moderních nátěrových systémů. Na Vaše přání k Vám rádi přijedeme, představíme vhodné nátěrové systémy a po odborné konzultaci navrhneme optimální řešení přesně podle Vašich představ a požadavků.
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
            <WhyUs />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;