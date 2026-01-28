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
    paintingServicesSet
} from "../../../../sets/paintingServicesSet";
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
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

const Content = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const pathName = usePathname();

    const previousCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === 0 ? paintingServicesSet.length - 1 : prev - 1
        ));
    };

    const nextCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === paintingServicesSet.length - 1 ? 0 : prev + 1
        ));
    };

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/92 shadow-md"
            id="malirske-prace">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                folderHref="/sluzby"
                folderLink="Služby"
                siteHref={pathName}
                siteLink="Malířské práce Brno"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Malířské práce Brno" />
                <Wrapper className="flex justify-evenly flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
                    <Wrapper>
                        <Wrapper className="relative">
                            <Image
                            height={500}
                            width={500}
                            src={paintingServicesSet[currentIndex].imageSrc}
                            alt={paintingServicesSet[currentIndex].imageAlt}
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
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex items-center gap-2 md:gap-4 lg:gap-6 flex-wrap w-full md:max-w-125">
                            {
                                paintingServicesSet.map((service, serviceIndex) => (
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
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold border-b-5 border-black w-max">
                            Malířské práce
                        </h2>
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Provádíme malířské práce všech typů a rozsahů - malování bytových i nebytových prostor.
                            </p>
                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                Naší prioritou je čistá a bezvadně odvedená práce. Pečlivě zakryjeme podlahy, zajistíme přesun a zakrytí nábytku a po dokončení provedeme hrubý úklid. Na přání zákazníka nabízíme také kompletní úklid po malování, který je stále častěji vyhledávanou službou.
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
                                            href: "/vice/malovani-obyvaciho-pokoje",
                                            link: "Malování obývacího pokoje"
                                        },
                                        {
                                            href: "/vice/malovani-detskeho-pokoje",
                                            link: "Malování dětského pokoje"
                                        },
                                        {
                                            href: "/vice/malovani-kuchyne",
                                            link: "Malování kuchyně"
                                        },
                                        {
                                            href: "/vice/malovani-loznice",
                                            link: "Malování ložnice"
                                        },
                                        {
                                            href: "/sluzby/malovani-na-klic",
                                            link: "Malování na klíč"
                                        },
                                        {
                                            href: "/vice/uklid-po-malovani",
                                            link: "Úklid po malování"
                                        }
                                    ].map((link, linkIndex) => {
                                        return (
                                            <Link
                                            key={linkIndex}
                                            href={link.href}
                                            className="p-8 bg-[#a11106] text-white flex justify-center items-center rounded-2xl">
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
                        Kompletní servis malování
                    </h3>
                    <Wrapper className="flex flex-col gap-2 w-full md:max-w-3xl">
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Každá místnost potřebuje čas od času nový nátěr. Ať už se na zdech objevila zašedlá místa po obrazech, skříních či zrcadlech, nebo si jednoduše přejete dodat interiéru svěží a moderní vzhled.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Právě zde začíná práce našeho profesionálního malířského týmu. Poskytujeme komplexní malířské služby - od vymalování jednoho pokoje, bytu či rodinného domu až po malování obchodních prostor, firem, škol, nemocnic a dalších institucí.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Ke každé zakázce přistupujeme individuálně. Po osobní návštěvě přímo na místě Vám zdarma a nezávazně připravíme cenovou nabídku. Seznámíme se s Vašimi představami, vše společně prokonzultujeme a navrhneme optimální řešení vedoucí k maximální spokojenosti.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-[17px]">
                            Přesnou a konečnou cenovou nabídku obvykle obdržíte do 24 hodin - e-mailem nebo telefonicky.
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