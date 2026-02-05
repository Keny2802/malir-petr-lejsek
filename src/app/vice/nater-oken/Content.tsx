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
import WhyUs from "../../../../sections/WhyUs";
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

const carouselSet = [
    {
        imageSrc: "/Fotky/sluzby/nater-oken/nater-oken-1.avif",
        imageAlt: "Ukázka nátěru oken Brno foto 1. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/nater-oken/nater-oken-2.avif",
        imageAlt: "Ukázka nátěru oken Brno foto 2. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/nater-oken/nater-oken-3.avif",
        imageAlt: "Ukázka nátěru oken Brno foto 3. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/nater-oken/nater-oken-4.avif",
        imageAlt: "Ukázka nátěru oken Brno foto 4. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/nater-oken/nater-oken-5.avif",
        imageAlt: "Ukázka nátěru oken Brno foto 5. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/nater-oken/nater-oken-6.avif",
        imageAlt: "Ukázka nátěru oken Brno foto 6. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/nater-oken/nater-oken-7.avif",
        imageAlt: "Ukázka nátěru oken Brno foto 6. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
    },
    {
        imageSrc: "/Fotky/sluzby/nater-oken/nater-oken-8.avif",
        imageAlt: "Ukázka nátěru oken Brno foto 6. Malířské a natěračské práce Brno a okolí - Profimalby - Petr Lejska"
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
            id="nater-oken">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                siteHref={pathName}
                siteLink="Nátěr oken"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Nátěr oken" />
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
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex items-center gap-2 md:gap-4 lg:gap-6 overflow-x-auto whitespace-nowrap">
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
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                            Nátěr oken
                        </h2>
                        {
                            [
                                "Krycí nátěr okna chrání, zlepšuje jejich vzhled a prodlužuje životnost.",
                                "Tento nátěr je možno provést v jakémkoli barevném odstínu.např. vzorníku RAL a to v lesklé, polo matné či matné úpravě."
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
            <WhyUs />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;