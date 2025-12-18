"use client";

import {
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
    gsap
} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/pageLabel";

gsap.registerPlugin(ScrollTrigger);

const References = () => {
    const animationRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!animationRef.current) return;

        gsap.from(animationRef.current, {
            opacity: 0,
            y: 40,
            ease: "power2.out",
            duration: 0.3,
            scrollTrigger: {
                trigger: animationRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 border-t border-gray-300 bg-[#e7e6e6] shadow-md"
            id="reference"
            ref={animationRef}>
                <PageLabel pageLabelText="Reference" />
                <Wrapper className="flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                        Reference
                    </h2>
                    <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                        Přečtěte si, co o nás říkají naši spokojení zákazníci. Sdílejí své zkušenosti s kvalitou, precizním provedením a profesionálním přístupem, který zaručuje perfektní výsledek každého projektu.
                    </p>
                </Wrapper>
                <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-evenly md:items-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                    <Wrapper className="flex flex-col gap-4 md:gap-6 lg:gap-6 max-w-2xl">
                        <Wrapper className="flex flex-col gap-2 md:gap-2.5 lg:gap-3">
                            <Wrapper className="flex items-center gap-2 md:gap-3 lg:gap-4">
                                <UserGroupIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
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
                                <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#4caf50]" />
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
                        <p className="text-[15px] md:text-base lg:text-lg">
                            „S Profi Malbami jsme naprosto spokojeni. Celý byt nám vymalovali rychle, precizně a bez jakýchkoli starostí. Oceňujeme hlavně jejich profesionální přístup, čistotu během práce a ochotu poradit s výběrem barev. Výsledek předčil naše očekávání a určitě je doporučíme všem, kdo chtějí kvalitní malířské služby.“
                        </p>
                        <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold">
                            Jan Novák
                        </h3>
                        <Wrapper className="flex justify-between items-center gap-4 md:gap-6 lg:gap-8">
                            <button className="p-2 md:p-3 lg:p-4 bg-[#1e1e1e] text-white rounded-full cursor-pointer">
                                <ChevronDoubleLeftIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer" />           
                            </button>
                            <button className="p-2 md:p-3 lg:p-4 bg-[#1e1e1e] text-white rounded-full">
                                <ChevronDoubleRightIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer" />           
                            </button>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default References;