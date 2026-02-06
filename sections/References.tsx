"use client";

import {
    useState,
    useRef,
    useEffect,
    Fragment
} from "react";
import {
    UserGroupIcon,
    CheckCircleIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon
} from "@heroicons/react/24/solid";
import {
    referencesCarouselSet
} from "../sets/referencesCarouselSet";
import {
    gsap
} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/pageLabel";

gsap.registerPlugin(ScrollTrigger);

const References = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const previousCarouselItem = () => {
        setCurrentIndex((prev) => (
            prev === 0 ? referencesCarouselSet.length - 1 : prev - 1
        ));
    };

    const nextCarouselItem = () => {
        setCurrentIndex((prev) => (
            prev === referencesCarouselSet.length - 1 ? 0 : prev + 1
        ));
    };

    useEffect(() => {
        let interval = 10000;

        const referencesIntverval = setInterval(() => {
            setCurrentIndex(
                prev => prev === referencesCarouselSet.length - 1 ? 0 : prev + 1
            );
        }, interval);

        return () => {
            clearInterval(referencesIntverval);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 border-t border-gray-300 bg-[#ffd24d]/92 shadow-md section"
            id="reference"
            // ref={animationRef}
            >
                <PageLabel pageLabelText="Reference" />
                <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                        Reference
                    </h2>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                        Přečtěte si, co o nás říkají naši zákazníci.
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-evenly md:items-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                    <Wrapper className="flex flex-col gap-4 md:gap-6 lg:gap-6 max-w-2xl">
                        <Wrapper className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
                            <Wrapper className="flex items-center gap-2 md:gap-3 lg:gap-4">
                                <UserGroupIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                                <p className="text-xl md:text-2xl lg:text-3xl font-black">
                                    1000+
                                </p>
                            </Wrapper>
                            <p className="text-xl md:text-2xl lg:text-3xl font-black">
                                Spokojených klientů
                            </p>
                        </Wrapper>
                        <Wrapper className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
                            <Wrapper className="flex items-center gap-2 md:gap-3 lg:gap-4">
                                <CheckCircleIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#4caf50]" />
                                <p className="text-xl md:text-2xl lg:text-3xl font-black">
                                    1000+
                                </p>
                            </Wrapper>
                            <p className="text-xl md:text-2xl lg:text-3xl font-black">
                                Hotových zakázek
                            </p>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper className="flex flex-col gap-4 md:gap-6 lg:gap-6 max-w-2xl">
                        <Wrapper className="min-h-30 max-h-130 md:min-h-40 md:max-h-140 lg:min-h-50 lg:max-h-150">
                            <p className="text-[15px] md:text-base lg:text-lg">
                                „{referencesCarouselSet[currentIndex].reference}“
                            </p>
                            {/* <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold">
                                {referencesCarouselSet[currentIndex].referenceName}
                            </h3> */}
                            <h3 className="mt-2 md:mt-3 lg:mt-4 text-xl md:text-2xl lg:text-[28px] font-semibold">
                                {currentIndex + 1} / {referencesCarouselSet.length}
                            </h3>
                        </Wrapper>
                        <Wrapper className="flex justify-between items-center gap-4 md:gap-6 lg:gap-8">
                            <button
                            className="p-2 md:p-3 lg:p-4 bg-[#1e1e1e] text-white rounded-full cursor-pointer"
                            onClick={(e) => {
                                previousCarouselItem();
                            }}>
                                <ChevronDoubleLeftIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer" />           
                            </button>
                            <button
                            className="p-2 md:p-3 lg:p-4 bg-[#1e1e1e] text-white rounded-full"
                            onClick={(e) => {
                                nextCarouselItem();
                            }}>
                                <ChevronDoubleRightIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer" />           
                            </button>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default References;