"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    XMarkIcon,
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
            <Wrapper className="min-h-screen fixed inset-0 z-[9000] bg-black/50">
                <Subheading className="absolute top-4 md:top-6 left-4 md:left-6 z-[9001] text-white">
                    {currentPhoto + 1} / {carouselSet.length}
                </Subheading>
                <button className="p-2 md:p-2.5 lg:p-3 absolute top-4 md:top-6 right-4 md:right-6 bg-black/50 text-white z-[9001] rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-300">
                    <Icon>
                        <XMarkIcon onClick={onClose} />
                    </Icon>
                </button>

                <Wrapper className="relative overflow-hidden w-full md:max-w-[800px] h-full mx-auto ">
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
                                            <Image
                                            width={800}
                                            height={800}
                                            src={cardItem.image}
                                            alt={cardItem.heading || `Ukázka malířské a natěračské práce ${index + 1}. fotka ukázky zakázky | Profi Malby Brno Petr Lejska`}
                                            loading="lazy"
                                            decoding="async"
                                            draggable={false}
                                            quality={90}
                                            className="cursor-pointer"
                                            />
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