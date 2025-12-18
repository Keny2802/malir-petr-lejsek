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
import Image from "next/image";

import Wrapper from "../../../../components/Wrapper";
import ContactHeader from "../../../../components/ContactHeader";
import Header from "../../../../components/Header";
import PageLabel from "../../../../components/pageLabel";
import NoProofLink from "../../../../components/NoProofLink";
import setLinkWithoutHash from "../../../../functions/setLinkWithoutHash";
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

const App = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

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
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#e7e6e6] shadow-md"
            id="malirske-prace">
                <PageLabel pageLabelText="Malířské práce" />
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
                        </Wrapper>
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex items-center gap-2 md:gap-4 lg:gap-6 w-full md:w-1/2">
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
                        <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-between items-center gap-4 md:gap-6 lg:gap-8">
                            <button
                            className="p-2 md:p-3 lg:p-4 bg-[#1e1e1e] text-white rounded-full cursor-pointer"
                            onClick={(e) => {
                            previousCarouselImage();
                            }}>
                                <ChevronDoubleLeftIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer" />           
                            </button>
                            <button
                            className="p-2 md:p-3 lg:p-4 bg-[#1e1e1e] text-white rounded-full"
                            onClick={(e) => {
                                nextCarouselImage();
                            }}>
                                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer" />           
                            </button>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
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
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default App;