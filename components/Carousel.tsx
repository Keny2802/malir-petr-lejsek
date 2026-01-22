"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "./Wrapper";
import Subheading from "./Subheading";
import Icon from "./Icon";

type CarouselItem = {
    image: string;
    heading?: string;
    desc?: string;
};

type CarouselType = {
    carouselSet: CarouselItem[];
    startIndex?: number;
    onClose?: () => void;
};

const Carousel = ({ ...props }: CarouselType) => {
    const {
        carouselSet,
        startIndex = 0,
        onClose
    } = props;

    // const [currentPhoto, setCurrentPhoto] = useState<number>(0);
    const [currentPhoto, setCurrentPhoto] = useState<number>(startIndex ?? 0);
    const [isMobile, setMobile] = useState<boolean>(false);
    
    useEffect(() => {
        const handleKeyDown = (evt: KeyboardEvent) => {
            if (evt.key === "Escape" && onClose) {
                onClose();
            };

            if (evt.key === "ArrowRight") {
                nextSlide();
            };

            if (evt.key === "ArrowLeft") {
                prevSlide();
            };
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const checkScreen = () => {
            setMobile(window.innerWidth < 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    const nextSlide = () => {
        setCurrentPhoto(prev => (prev + 1) % carouselSet.length);
    };

    const prevSlide = () => {
        setCurrentPhoto(prev => prev === 0 ? carouselSet.length - 1 : prev - 1);
    };

    return (
        <Fragment>
            <Wrapper>
                <Subheading className="absolute top-4 md:top-6 left-4 md:left-6 text-white">
                    {currentPhoto + 1} / {carouselSet.length}
                </Subheading>
                <Wrapper className="relative overflow-hidden w-full max-w-5xl mx-auto">
                    <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 lg:p-4 bg-black/50 text-white rounded-full">
                        <Icon className="cursor-pointer">
                            <ChevronLeftIcon />
                        </Icon>
                    </button>
                    <button
                    onClick={(nextSlide)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 lg:p-4 bg-black/50 text-white rounded-full">
                        <Icon className="cursor-pointer">
                            <ChevronRightIcon />
                        </Icon>
                    </button>
                    <Wrapper
                    className="flex transition-transform duration ease-in-out"
                    style={{
                        transform: `translateX(-${currentPhoto * 100}%)`
                    }}>
                        {
                            carouselSet.map((cardItem, index) => {
                                return (
                                    <Fragment
                                    key={index}>
                                        <Wrapper className="w-full shrink-0 p-2 md:p-3 lg:p-4">
                                            <Wrapper className="relative top-1/2 -translate-y-1/2 group overflow-hidden cursor-pointer">
                                                <Image
                                                width={950}
                                                height={950}
                                                src={cardItem.image}
                                                alt={cardItem.heading || `Ukázka malířské a natěračské práce ${index + 1}. fotka ukázky | Profi Malby Brno Petr Lejska`}
                                                loading="lazy"
                                                decoding="async"
                                                draggable={false}
                                                quality={90}
                                                className="object-contain"
                                                />
                                                {/* {(cardItem.heading || cardItem.desc) && (
                                                    <FlexCol
                                                    className="justify-center items-center opacity-100 md:opacity-0 p-2 md:p-3 lg:p-4 absolute inset-0 bg-black/50 text-white md:transition-opacity md:duration-300 md:ease-in-out md:group-hover:opacity-100">
                                                    {cardItem.heading && (
                                                        <h3 className="text-lg md:text-xl lg:text-[22px] text-center font-bold">
                                                            {cardItem.heading}
                                                        </h3>
                                                    )}
                                                    {cardItem.desc && (
                                                        <p className="text-sm md:text-[15px] lg:text-base text-center max-w-3xl">
                                                            {cardItem.desc}
                                                        </p>
                                                    )}
                                                </FlexCol>
                                                )} */}
                                            </Wrapper>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Carousel;