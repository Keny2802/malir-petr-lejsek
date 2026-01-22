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
import Image from "next/image";

import Wrapper from "../../../../components/Wrapper";
import ContactHeader from "../../../../components/ContactHeader";
import Header from "../../../../components/Header";
import PathLink from "../../../../components/PathLink";
import PageLabel from "../../../../components/pageLabel";
import FlexRow from "../../../../components/FlexRow";
import FlexCol from "../../../../components/FlexCol";
import References from "../../../../sections/References";
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

const carouselSet = [
    {
        imageSrc: "/Fotky/malovani-loznice/Fotka-1.jpg",
        imageAlt: "Ukázka malování ložnice Brno foto 1. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-loznice/Fotka-2.jpg",
        imageAlt: "Ukázka malování ložnice Brno foto 2. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-loznice/Fotka-3.jpg",
        imageAlt: "Ukázka malování ložnice Brno foto 3. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-loznice/Fotka-4.jpg",
        imageAlt: "Ukázka malování ložnice Brno foto 4. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-loznice/Fotka-5.jpg",
        imageAlt: "Ukázka malování kuchyně Brno foto 5. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/malovani-loznice/Fotka-6.jpg",
        imageAlt: "Ukázka malování ložnice Brno foto 6. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
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
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/92 shadow-md"
            id="malovani-loznice">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                folderHref="/vice"
                folderLink="Více"
                siteHref={pathName}
                siteLink="Malování ložnice"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Malování ložnice" />
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
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex items-center gap-2 md:gap-4 lg:gap-6 flex-wrap w-full md:max-w-125">
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
                                        className="rounded-md cursor-pointer"
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
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                            Malba ložnice
                        </h2>
                        {
                            [
                                "Ložnice je místo určené k odpočinku a hlavně tomuto účelu je nutné ji přizpůsobit i výběr barev. Jak vymalovat ložnici, abychom vytvořili dokonalé zázemí pro odpočinek?",
                                "Pro malování ložnice platí více než pro kteroukoliv místnost v bytě, že zvolené barvy by nás měly uklidňovat, působit relaxačně a tím nás připravit na poklidný a ničím nerušený spánek.",
                                "Malba ložnice by především měla působit klidně, protože pouze sladěná ložnice vyvolává pocit jistoty a pohodlí."
                            ].map((textBlock, textBlockIndex) => {
                                return (
                                    <Fragment key={textBlockIndex}>
                                        <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                                            {textBlock}
                                        </p>
                                    </Fragment>
                                );
                            })
                        }
                    </FlexCol>
                </FlexRow>
            </Wrapper>
            <References />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;