"use client";

import {
    Fragment
} from "react";
import {
    XMarkIcon
} from "@heroicons/react/24/solid";

import Carousel from "./Carousel";
import Wrapper from "./Wrapper";
import Icon from "./Icon";

type Props = {
    items: any[];
    startIndex: number;
    onClose: () => void;
};

const CarouselOverlayWrapper = ({ ...props }: Props) => {
    const {
        items,
        startIndex,
        onClose
    } = props;

    return (
        <Fragment>
            <Wrapper
            className="fixed inset-0 z-[9000] bg-black/60 flex justify-center items-center"
            onClick={onClose}>
                <button className="p-2 md:p-2.5 lg:p-3 absolute top-4 md:top-6 right-4 md:right-6 z-[10000] bg-black/50 text-white rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-300">
                    <Icon>
                        <XMarkIcon onClick={onClose} />
                    </Icon>
                </button>
                <Wrapper
                className="p-2 md:p-3 lg:p-4 w-full max-w-5xl"
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <Carousel
                    carouselSet={items}
                    startIndex={startIndex}
                    onClose={onClose}
                    />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default CarouselOverlayWrapper;