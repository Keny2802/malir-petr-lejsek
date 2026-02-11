"use client";

import {
    useEffect,
    useState,
    Fragment,
} from "react";
import {
    XMarkIcon
} from "@heroicons/react/24/solid";
import {
    workSet
} from "../sets/workSet";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/pageLabel";
import Icon from "../components/Icon";
import FlexCol from "../components/FlexCol";
import Flex from "../components/Flex";
import Carousel from "../components/Carousel";

type CardItem = {
    imageSrc: string[];
    imageAlt: string;
    heading: string;
    desc: string[];
};

const Work = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [activeCard, setActiveCard] = useState<CardItem | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

    useEffect(() => {
        const body = document.body;

        if (activeCard !== null) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        };
    }, [activeCard]);

    const openModal = (card: CardItem) => {
        setActiveCard(card);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setActiveCard(null);
        setActiveIndex(null);
    };

    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/80 shadow-md section"
            id="zakazky">
                <PageLabel pageLabelText="Zakázky" />
                <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                        Naše práce mluví za nás
                    </h2>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                        Podívejte se na zakázky prací, které máme již za sebou.
                    </p>
                </Wrapper>
                <Wrapper>
                    <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-center items-center flex-col md:flex-row flex-wrap gap-2.5 md:gap-4 lg:gap-6">
                        {
                            workSet.map((workItem, workItemIndex) => {
                                return (
                                    <Fragment key={workItemIndex}>
                                        <Wrapper className="md:h-[720px] md:max-h-[1200px] p-4 md:p-5 lg:p-6 bg-white shadow-lg rounded-2xl flex justify-between flex-col gap-2.5 md:gap-3 lg:gap-4 w-full md:max-w-112.5">
                                            <Wrapper className="flex justify-center items-center gap-4 md:gap-5 lg:gap-6 flex-1">
                                                <h3 className="text-2xl md:text-[25px] lg:text-[28px] text-center font-bold uppercase">
                                                    {workItem.heading}
                                                </h3>
                                            </Wrapper>
                                            <Image
                                            width={500}
                                            height={500}
                                            src={workItem.imageSrc[0]}
                                            alt={`${workItemIndex + 1}. Ukázka zakázky malířské a natěračské práce | Profi Malby Brno a okolí Petr Lejska`}
                                            fetchPriority="low"
                                            decoding="async"
                                            draggable={false}
                                            onClick={() => {
                                                openModal(workItem);
                                            }}
                                            className="mt-4 md:mt-6 lg:mt-8 w-full md:max-w-125 rounded-2xl cursor-pointer"
                                            />
                                            <p className="text-[15px] md:text-base lg:text-lg md:max-w-125">
                                                {workItem.desc[0]}
                                            </p>
                                            <button
                                            className="p-4 md:p-5 lg:p-6 mt-4 md:mt-5 lg:mt-6 bg-[#1e1e1e] text-white text-center rounded-md cursor-pointer"
                                            onClick={() => {
                                                openModal(workItem);
                                                
                                            }}>
                                                Detail zakázky
                                            </button>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                    <Link
                    href="/zakazky"
                    className="mx-auto block p-4 md:p-5 lg:p-6 mt-4 md:mt-5 lg:mt-6 bg-white text-black text-center w-full md:w-max rounded-md">
                        Prohlédnout všechny zakázky
                    </Link>
                </Wrapper>
            </Wrapper>
            {
                isModalOpen && activeCard && activeIndex === null && (
                    <Fragment>
                        <Wrapper
                        className="p-4 md:p-5 lg:p-6 fixed inset-0 z-[8000] bg-black/50 flex justify-center items-center"
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
                                    <h3 className="text-2xl md:text-[25px] lg:text-[28px] text-center font-bold uppercase">
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
                                                    width={300}
                                                    height={300}
                                                    key={index}
                                                    src={imageSrc}
                                                    alt={`${index + 1}. Ukázka zakázky malířské a natěračské práce | Profi Malby Brno a okolí Petr Lejska`}
                                                    loading="lazy"
                                                    decoding="async"
                                                    draggable={false}
                                                    onClick={() => {
                                                        setActiveIndex(index);
                                                    }}
                                                    className="rounded-2xl cursor-pointer"
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
            {
                activeIndex !== null && activeCard && (
                    <Fragment>
                        <Carousel
                        startIndex={activeIndex}
                        carouselSet={activeCard.imageSrc.map((img) => ({
                            image: img,
                            heading: activeCard.heading
                        }))}
                        onClose={() => {
                            setActiveIndex(null);
                        }}
                        />
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Work;