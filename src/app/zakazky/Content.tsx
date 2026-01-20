"use client";

import {
    useState,
    Fragment
} from "react";
import {
    XMarkIcon
} from "@heroicons/react/24/solid";
import {
    wholeWorkSet
} from "../../../sets/wholeWorkSet";
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
import Icon from "../../../components/Icon";
import FlexCol from "../../../components/FlexCol";
import Flex from "../../../components/Flex";

type cardItem = {
    imageSrc: string[];
    imageAlt: string;
    heading: string;
    desc: string[];
};

const Content = () => {
    const pathName = usePathname();

    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [activeCard, setActiveCard] = useState<cardItem | null>(null);

    const openModal = (card: cardItem) => {
        setActiveCard(card);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setActiveCard(null);
    };

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffc117]/92 shadow-md"
            id="zakazky">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                siteHref={pathName}
                siteLink="Zakázky"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Zakázky" />
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-center items-center flex-col md:flex-row flex-wrap gap-2.5 md:gap-4 lg:gap-6">
                    {
                        wholeWorkSet.map((cardItem, index) => {
                            return (
                                <Fragment key={index}>
                                    <Wrapper className="p-4 md:p-5 lg:p-6 bg-white shadow-lg rounded-2xl flex flex-col gap-2.5 md:gap-3 lg:gap-4 w-full md:max-w-112.5">
                                        <Wrapper className="flex justify-between items-center gap-4 md:gap-5 lg:gap-6">
                                            <h3 className="text-2xl md:text-[25px] lg:text-[28px] font-bold uppercase">
                                                {cardItem.heading}
                                            </h3>
                                        </Wrapper>
                                        <Image
                                        height={450}
                                        width={450}
                                        src={cardItem.imageSrc[0] ?? ""}
                                        alt={cardItem.imageAlt || "Fotka Realizace"}
                                        loading="lazy"
                                        decoding="async"
                                        draggable={false}
                                        className="mt-4 md:mt-6 lg:mt-8 w-full md:max-w-112.5 rounded-2xl"
                                        />
                                        <p
                                        className="text-[15px] md:text-base lg:text-lg md:max-w-112.5 line-clamp-6">
                                            {cardItem.desc}
                                        </p>
                                        <button
                                        className="p-4 md:p-5 lg:p-6 mt-4 md:mt-5 lg:mt-6 bg-[#1e1e1e] text-white text-center rounded-md cursor-pointer"
                                        onClick={() => {
                                            openModal(cardItem);
                                        }}>
                                            Detail zakázky
                                        </button>
                                    </Wrapper>
                                </Fragment>
                            );
                        })
                    }
                </Wrapper>
            </Wrapper>
            <References />
            <Contact />
            <Footer />
            {
                isModalOpen && activeCard && (
                    <Fragment>
                        <Wrapper
                        className="p-4 md:p-5 lg:p-6 fixed inset-0 z-9999 bg-black/50 flex justify-center items-center"
                        onClick={closeModal}>
                            <Wrapper
                            className="relative p-4 md:p-6 lg:p-8 bg-white text-black w-full max-w-3xl h-200 max-h-10/12 overflow-y-auto rounded-2xl"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}>
                                <Icon
                                className="absolute top-4 right-4 text-[#a11106] cursor-pointer transition-colors duration-300 ease-in-out hover:text-black"
                                onClick={closeModal}>
                                    <XMarkIcon/>
                                </Icon>
                                <FlexCol>
                                    <h3 className="text-2xl md:text-[25px] lg:text-[28px] font-bold uppercase">
                                        {activeCard.heading}
                                    </h3>
                                    <FlexCol className="flex flex-col gap-2">
                                        {
                                            activeCard.desc.map((desc, descIndex) => {
                                                return (
                                                    <p
                                                    key={descIndex}
                                                    className="text-sm md:text-[14.5px] lg:text-base">
                                                        {desc}
                                                    </p>
                                                );
                                            })
                                        }
                                    </FlexCol>
                                    <Flex className="mt-2 md:mt-3 lg:mt-4 justify-evenly flex-wrap">
                                        {
                                            activeCard.imageSrc.map((imageSrc, index) => {
                                                return (
                                                    <Image
                                                    key={index}
                                                    height={180}
                                                    width={180}
                                                    src={imageSrc}
                                                    alt={activeCard.imageAlt || "Fotka Realizace"}
                                                    loading="lazy"
                                                    decoding="async"
                                                    draggable={false}
                                                    className="rounded-2xl"
                                                    />
                                                );
                                            })
                                        }
                                    </Flex>
                                </FlexCol>
                            </Wrapper>
                        </Wrapper>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Content;