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
import NoProofLink from "../../../../components/NoProofLink";
import Flex from "../../../../components/Flex";
import References from "../../../../sections/References";
import WhyUs from "../../../../sections/WhyUs";
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

const carouselSet = [
    {
        imageSrc: "/Fotky/malovani-detskeho-pokoje/malovani-detskeho-pokoje-1.avif",
        imageAlt: "Ukázka malování dětského pokoje Brno foto 1. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-detskeho-pokoje/malovani-detskeho-pokoje-2.avif",
        imageAlt: "Ukázka malování dětského pokoje Brno foto 2. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-detskeho-pokoje/malovani-detskeho-pokoje-3.avif",
        imageAlt: "Ukázka malování dětského pokoje Brno foto 3. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-detskeho-pokoje/malovani-detskeho-pokoje-4.avif",
        imageAlt: "Ukázka malování dětského pokoje Brno foto 4. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-detskeho-pokoje/malovani-detskeho-pokoje-5.avif",
        imageAlt: "Ukázka malování dětského pokoje Brno foto 5. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-detskeho-pokoje/malovani-detskeho-pokoje-6.avif",
        imageAlt: "Ukázka malování dětského pokoje Brno foto 6. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-detskeho-pokoje/malovani-detskeho-pokoje-7.avif",
        imageAlt: "Ukázka malování dětského pokoje Brno foto 7. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-detskeho-pokoje/malovani-detskeho-pokoje-8.avif",
        imageAlt: "Ukázka malování dětského pokoje Brno foto 8. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
];

const Content = () => {
    const pathName = usePathname();
    const [currentIndex, setCurrentIndex] = useState<number>(0);

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
            id="malovani-detskeho-pokoje">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                siteHref={pathName}
                siteLink="Malování dětského pokoje Brno"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Malování dětského pokoje Brno" />
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
                            Malování dětského pokoje
                        </h2>
                        {
                            [
                                "Malování dětského pokoje je kapitola sama pro sebe, která si žádá pořádnou dávku nápaditosti a fantazie. Tradiční bílá může působit chladně a smutně - děti milují pestré barvy.",
                                "Barvy výrazně ovlivňují atmosféru místnosti. Osvědčují se především teplé pastelové barvy, které působí lehce a vesele. Postarají se také o optické rozšíření a oživení místnosti."
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
                                        href: "/vice/malovani-obyvaciho-pokoje",
                                        link: "Malování obývacího pokoje"
                                    },
                                    // {
                                    //     href: "/vice/malovani-detskeho-pokoje",
                                    //     link: "Malování dětského pokoje"
                                    // },
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
                <Flex className="mt-2 md:mt-4 lg:mt-6 justify-center">
                    <FlexCol>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
                            Moderní výmalba dětského pokoje
                        </h3>
                        {
                            [
                                "Určujícím impulzem pro správný výběr odstínu je pohlaví a také věk dítěte. Pokud je vaše dítě větší, určitě výběr barvy pro vymalování dětského pokoje zkonzultujte s ním. Holčičky se budou dobře cítit v pokoji laděném do růžové, červené či fialové. Chlapci naopak ocení odstíny modré, zelené a apod. Můžeme samozřejmě mezi sebou jednotlivé barvy kombinovat. Zvláště pak když pokoj obývají děvče i chlapec. Mají-li děti společný pokoj, velmi pěkně vypadá například kombinace zeleno-žluté. Barevně lze také odlišit různé zóny v dětském pokoji (na spaní, k odpočinku, ke studiu). Do dětského pokoje se hodí také různé samolepící tapety s dětskými motivy. Jako originální oživení malby dětského pokoje můžeme nabídnout ruční nástěnné malby.",
                                "Je pravda, že nic neovlivňuje atmosféru místnosti tolik jako jeho výmalba. Důležitá součást při malování dětského pokoje je správný výběr použitého materiálu.",
                                "Vhodná barva by měla být zdravotně nezávadná, odolná a stálobarevná. Zatím co do obývacího pokoje či ložnice většinou stačí barva otěruvzdorná. Našim zákazníkům doporučujeme pro vymalování dětského pokoje barvy omyvatelné, které dokážou zajistit vysoký hygienický standard stěn. Tyto akrylátové barvy jsou praktické v tom, že se dají, je-li potřeba vlhkým hadříkem omýt a snadno tak odstranit špinavé otisky prstíků nebo případné malůvky vašich ratolestí. Omyvatelné barvy jsou velice vhodné i pro malování kuchyně.",
                                "Zdarma Vám rádi poskytneme odborné a technické poradenství, navrhneme optimální řešení vedoucí k Vaší spokojenosti."
                            ].map((textBlock, textBlockIndex) => {
                                return (
                                    <Fragment key={textBlockIndex}>
                                        <p className="text-[15px] md:text-base lg:text-lg">
                                            {textBlock}
                                        </p>
                                    </Fragment>
                                );
                            })
                        }
                    </FlexCol>
                </Flex>
            </Wrapper>
            <References />
            <WhyUs />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;