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
    usePathname
} from "next/navigation";
import setLinkWithoutHash from "../../../../functions/setLinkWithoutHash";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../../../../components/Wrapper";
import ContactHeader from "../../../../components/ContactHeader";
import Header from "../../../../components/Header";
import PathLink from "../../../../components/PathLink";
import PageLabel from "../../../../components/pageLabel";
import FlexRow from "../../../../components/FlexRow";
import FlexCol from "../../../../components/FlexCol";
import Flex from "../../../../components/Flex";
import NoProofLink from "../../../../components/NoProofLink";
import References from "../../../../sections/References";
import WhyUs from "../../../../sections/WhyUs";
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

const carouselSet = [
    {
        imageSrc: "/Fotky/sluzby/malovani-obyvaciho-pokoje/malovani-obyvaciho-pokoje-1.avif",
        imageAlt: "Ukázka malování obývacího pokoje Brno foto 1. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/malovani-obyvaciho-pokoje/malovani-obyvaciho-pokoje-2.avif",
        imageAlt: "Ukázka malování obývacího pokoje Brno foto 2. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/malovani-obyvaciho-pokoje/malovani-obyvaciho-pokoje-3.avif",
        imageAlt: "Ukázka malování obývacího pokoje Brno foto 3. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/malovani-obyvaciho-pokoje/malovani-obyvaciho-pokoje-4.avif",
        imageAlt: "Ukázka malování obývacího pokoje Brno foto 4. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/malovani-obyvaciho-pokoje/malovani-obyvaciho-pokoje-5.avif",
        imageAlt: "Ukázka malování obývacího pokoje Brno foto 5. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/malovani-obyvaciho-pokoje/malovani-obyvaciho-pokoje-6.avif",
        imageAlt: "Ukázka malování obývacího pokoje Brno foto 6. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/malovani-obyvaciho-pokoje/malovani-obyvaciho-pokoje-7.avif",
        imageAlt: "Ukázka malování obývacího pokoje Brno foto 7. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/malovani-obyvaciho-pokoje/malovani-obyvaciho-pokoje-8.avif",
        imageAlt: "Ukázka malování obývacího pokoje Brno foto 8. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
];

const Content = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const pathName = usePathname();

    const previousCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === 0 ? carouselSet.length - 1 : prev - 1
        ));
    };

    const nextCarouselImage = () => {
        setCurrentIndex((prev) => (
            prev === carouselSet.length - 1 ? 0 : prev + 1
        ));
    };

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/92 shadow-md"
            id="malovani-obyvaciho-pokoje">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                siteHref={pathName}
                siteLink="Malování obývacího pokoje Brno"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Malování obývacího pokoje Brno" />
                <FlexRow>
                    <FlexCol>
                        <Wrapper className="relative">
                            <Image
                            height={800}
                            width={800}
                            src={carouselSet[currentIndex].imageSrc}
                            alt={carouselSet[currentIndex].imageAlt}
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
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex items-center gap-2 md:gap-4 lg:gap-6 overflow-x-auto whitespace-nowrap mobile-scrollbar">
                            {
                                carouselSet.map((image, imageIndex) => (
                                    <Fragment key={imageIndex}>
                                        <Image
                                        height={80}
                                        width={80}
                                        src={image.imageSrc}
                                        alt={image.imageAlt}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        className="w-20 h-20 object-cover rounded-md cursor-pointer"
                                        onClick={(e) => {
                                            setCurrentIndex(imageIndex);
                                        }}
                                        />
                                    </Fragment>
                                ))
                            }
                        </Wrapper>
                    </FlexCol>
                    <FlexCol>
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold max-w-7xl">
                            Malování obývacího pokoje
                        </h2>
                        {
                            [
                                "Obývací pokoj je jedno z nejdůležitějších místností v našem domově, kde trávíme většinu svého volného času, přijímáme návštěvy, relaxujeme, a proto chceme, aby vypadal elegantní a atraktivní.",
                                "Především z tohoto důvodu se z výběru barvy pro malování obývacího pokoje stává zásadním rozhodnutím. Základní otázka často zní, jestli malovat na bílo nebo barevně.",
                                "Bílá barva je sice praktická a hodí se k ní prakticky jakákoliv barva nábytku a je-li potřeba, je nejsnáze opravitelná. Na druhou stranu, doba pouze vybíleného bytu už dávno pominula."
                            ].map((textBlock, textBlockIndex) => {
                                return (
                                    <Fragment key={textBlockIndex}>
                                        <p className="text-[15px] md:text-base lg:text-lg md:max-w-3xl">
                                            {textBlock}
                                        </p>
                                    </Fragment>
                                );
                            })
                        }
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
                                    className="p-4 md:p-4 lg:p-8 w-full md:w-max bg-[#a11106] text-white flex justify-center items-center rounded-2xl">
                                        {link.link}
                                    </Link>
                                );
                            })
                        }
                    </Flex>
                    </FlexCol>
                </FlexRow>
            </Wrapper>
            <References />
            <WhyUs />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;