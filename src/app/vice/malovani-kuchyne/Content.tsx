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
import FixedCta from "../../../../components/FixedCta";

const carouselSet = [
    {
        imageSrc: "/Fotky/malovani-kuchyne/malovani-kuchyne-7.avif",
        imageAlt: "Ukázka malování kuchyně Brno foto 7. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-kuchyne/malovani-kuchyne-1.avif",
        imageAlt: "Ukázka malování kuchyně Brno foto 1. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-kuchyne/malovani-kuchyne-2.avif",
        imageAlt: "Ukázka malování kuchyně Brno foto 2. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-kuchyne/malovani-kuchyne-3.avif",
        imageAlt: "Ukázka malování kuchyně Brno foto 3. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-kuchyne/malovani-kuchyne-4.avif",
        imageAlt: "Ukázka malování kuchyně Brno foto 4. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-kuchyne/malovani-kuchyne-5.avif",
        imageAlt: "Ukázka malování kuchyně Brno foto 5. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-kuchyne/malovani-kuchyne-6.avif",
        imageAlt: "Ukázka malování kuchyně Brno foto 6. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-kuchyne/malovani-kuchyne-8.avif",
        imageAlt: "Ukázka malování kuchyně Brno foto 8. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    }
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
                className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/80 shadow-md"
                id="malovani-kuchyne">
                <PathLink
                    rootHref="/"
                    rootLink="Domov"
                    siteHref={pathName}
                    siteLink="Malování kuchyně Brno"
                    className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Malování kuchyně Brno" />
                <FlexRow>
                    <FlexCol>
                        <Wrapper className="relative">
                            <Image
                            height={1000}
                            width={1000}
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
                            Malování kuchyně
                        </h2>
                        {
                            [
                                "Kuchyně je důležitá místnost kde obvykle začíná náš den. Patří k pokojům v bytě, kde strávíme hodně času. Ať už při vaření pokrmů nebo při vychutnávání si ranní kávy.",
                                "Pro všechny členy rodiny je vkusně zařízená a útulná kuchyně velice důležitá. To jak vymalovat kuchyň je v první řadě otázka osobního vkusu.",
                                "Nemusíme při malování kuchyně podléhat nejnovějším módním trendům, podstatné je, abychom se v Kuchyni my sami cítili dobře..."
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
                                    {
                                        href: "/vice/malovani-detskeho-pokoje",
                                        link: "Malování dětského pokoje"
                                    },
                                    // {
                                    //     href: "/vice/malovani-kuchyne",
                                    //     link: "Malování kuchyně"
                                    // },
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
                            Kuchyně v nových barvách
                        </h3>
                        {
                            [
                                "Kuchyně je opravdovým srdcem našeho domova, důležitá místnost kde obvykle začíná náš den. Patří k pokojům v bytě, kde strávíme hodně času. Ať už při vaření pokrmů nebo při vychutnávání si ranní kávy. Pro všechny členy rodiny je vkusně zařízená a útulná kuchyně velice důležitá.Na rozdíl od malování ložnice můžeme být v kuchyni s odstíny mnohem smělejší. Nemusíme se bát barev, jako je oranžová či červená, protože právě v kuchyni je energie žádaná. Je důležité, aby kuchyň dokázala nabudit a pozitivně naladit.",
                                "Při výběru vhodné barvy do kuchyně, musíme také však myslet na její velikost a proporce. Nezapomínejte při malování kuchyně na důležitou zásadu, že se sytými a výraznými odstíny v případě malých kuchyní nakládejte opatrně. Protože hrozí, že by už tak malí prostor působil ještě více stísněně. Třeba panelákové kuchyně mají málo volných ploch k vymalování, zde je lepší zvolit spíše světlejší odstíny. Při malování panelákové kuchyně určitě také nic nezkazíte neutrální bílou barvou, prostor se pak dá oživit barevnými doplňky.",
                                "Tendence propojování interiérů pozvednul kuchyň z místnosti pracovní na společenskou. Kuchyně spojená s obývacím pokojem či jídelnou bývá zpravidla větších rozměrů, proto se určitě nemusíte obávat ani výraznějších tmavších odstínů. Pro všechny velikostí kuchyní však platí, že konkrétní odstín vybrané barvy volte s ohledem na vybavení. Je-li kuchyňská linka výrazné barvy,nesmí ji malba přebíjet svou sytostí, máte-li spíše nenápadný a světlý nábytek, můžete volit sytější tóny. Čím větší, otevřený a světlý máte prostor, tím výraznější barvy si můžete dovolit.",
                                "A jaké barvy jsou pro vymalování kuchyně doporučovány? Za velice pěknou kuchyňskou barvu se považuje žlutá, která je pozitivní a prakticky se hodí téměř ke všemu. V kuchyni ale můžeme být mnohem odvážnější, nebojte se výraznějších barev jako je svěží zelená, oranžová, fialová nebo červená - všechny tyhle barvy, pokud je nanesete s rozumem třeba jen na jednu stěnu, vám v kombinaci s bílou vytvoří útulnou kuchyň, ve které je potěšení snídat i večeřet. Malování Kuchyně je třeba podstoupit častěji než u ostatních místností v bytě, protože extrémně zatěžované tím, že se zde pravidelně vaří. Stejně jako při malování dětského pokojese z praktického hlediska doporučujeme použít omyvatelné barvy.",
                                "To jak vymalovat kuchyň je v první řadě otázka osobního vkusu. Nemusíme při malování kuchyně podléhat nejnovějším módním trendům, podstatné je, abychom se v Kuchyni my sami cítili dobře."
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
            <FixedCta />
        </Fragment>
    );
};

export default Content;