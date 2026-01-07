import {
    Fragment
} from "react";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/pageLabel";

const Gallery = () => {
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 border-t border-gray-300 bg-[#f8c73c]/92 shadow-md section"
            id="galerie">
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
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-center">
                    <Link
                    href="/galerie"
                    className="p-4 md:p-5 lg:p-6 flex justify-center items-center gap-2 md:gap-3 lg:gap-4 bg-white text-black text-center w-full md:w-75 rounded-md">
                        Celé album galerie
                    </Link>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Gallery;