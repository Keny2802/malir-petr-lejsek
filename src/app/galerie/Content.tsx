"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import Image from "next/image";

import Wrapper from "../../../components/Wrapper";
import ContactHeader from "../../../components/ContactHeader";
import Header from "../../../components/Header";
import PathLink from "../../../components/PathLink";
import PageLabel from "../../../components/pageLabel";
import References from "../../../sections/References";
import Contact from "../../../sections/Contact";
import Footer from "../../../components/Footer";

const Content = () => {
    const pathName = usePathname();

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
                        [
                            "/Fotky/Hero (1).jpg",
                            "/Fotky/Malovani (1).jpg",
                            "/Fotky/Malovani (2).jpg",
                            "/Fotky/Malovani (3).jpg",
                            "/Fotky/Malovani (4).jpg",
                            "/Fotky/Malovani na klic (1).jpg",
                            "/Fotky/Malovani na klic (2).jpg",
                            "/Fotky/Malovani na klic (3).jpg",
                            "/Fotky/Malovani na klic (4).jpg",
                            "/Fotky/Malovani na klic (5).jpg",
                            "/Fotky/Nater dveri (1).jpg",
                            "/Fotky/Nater oken (1).jpg",
                            "/Fotky/Natery fasad (5).jpg",
                            "/Fotky/Natery fasad (7).jpg",
                            "/Fotky/Natery fasad (6).jpg",
                            "/Fotky/Realizace (4).jpg",
                            "/Fotky/Natery strech (6).jpg",
                            "/Fotky/Realizace (1).jpg",
                            "/Fotky/Realizace (2).jpg",
                            "/Fotky/Realizace (3).jpg",
                            "/Fotky/Realizace (5).jpg",
                            "/Fotky/Realizace (6).jpg",
                            "/Fotky/Nastrik radiatoru (7).jpg",
                            "/Fotky/Natery fasad (1).jpg",
                        ].map((image, imageIndex) => {
                            return (
                                <Fragment key={imageIndex}>
                                    <Image
                                    width={500}
                                    height={500}
                                    src={image}
                                    alt={`${imageIndex}. Ukázka práce v sekci galerii Malířství Profi Malby Brno | Petr Lejska`}
                                    loading="lazy"
                                    decoding="async"
                                    draggable={false}
                                    className="rounded-2xl"
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
        </Fragment>
    );
};

export default Content;