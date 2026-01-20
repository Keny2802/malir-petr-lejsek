"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    GalleryItems
} from "./GalleryItems";
import Image from "next/image";

import Wrapper from "../../../components/Wrapper";
import ContactHeader from "../../../components/ContactHeader";
import Header from "../../../components/Header";
import PathLink from "../../../components/PathLink";
import PageLabel from "../../../components/pageLabel";
import CarouselOverlayWrapper from "../../../components/CarouselOverlayWrapper";
import References from "../../../sections/References";
import Contact from "../../../sections/Contact";
import Footer from "../../../components/Footer";

const Content = () => {
    const pathName = usePathname();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
        
    useEffect(() => {
        const body = document.body;
        
        if (activeIndex !== null) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        };
    }, [activeIndex]);

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#f8c73c]/92 shadow-md"
            id="galerie">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                // folderHref="/sluzby"
                // folderLink="Služby"
                siteHref={pathName}
                siteLink="Galerie"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Galerie" />
                <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                        Podívejte se do galerie naší práce
                    </h2>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                        Galerie naší dosavadní práce, co již máme za sebou vymalované.
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-center md:items-center flex-wrap gap-6 md:gap-8 lg:gap-10">
                    {
                        GalleryItems.map((image, index) => {
                            return (
                                <Fragment key={index}>
                                    <Image
                                    width={250}
                                    height={250}
                                    src={image.image}
                                    alt={`${index}. Ukázka práce v sekci galerii Malířství Profi Malby Brno | Petr Lejska`}
                                    loading="lazy"
                                    decoding="async"
                                    draggable={false}
                                    onClick={(e) => {
                                        setActiveIndex(index);
                                    }}
                                    className="w-full md:w-62.5 md:h-62.5 object-cover rounded-2xl cursor-pointer"
                                    />
                                </Fragment>
                            );
                        })
                    }
                </Wrapper>
            </Wrapper>
            <References />
            <Contact />
            <Footer />
            {activeIndex !== null && (
                <CarouselOverlayWrapper
                items={GalleryItems}
                startIndex={activeIndex}
                onClose={() => {
                    setActiveIndex(null);
                }}
                />
            )}
        </Fragment>
    );
};

export default Content;