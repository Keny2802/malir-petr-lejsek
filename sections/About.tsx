"use client";

import {
    Fragment
} from "react";
import {
    CheckCircleIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import NoProofLink from "../components/NoProofLink";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

const About = () => {
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#e7e6e6] shadow-md"
            id="o-nas">
                <h3 className="">
                    O nás
                </h3>
                <Wrapper className="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                    <Wrapper className="flex justify-center items-center flex-col gap-4 md:gap-6 lg:gap-8">
                        <Image
                        width={700}
                        height={700}
                        src="/Fotky/About.jpg"
                        alt="Fotka sekce o nás, malíři jak pracují"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="rounded-md"
                        />
                        <Wrapper className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Zadáte poptávku
                                </p>
                            </Wrapper>
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Přijedeme včas
                                </p>
                            </Wrapper>
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Precizní provedení
                                </p>
                            </Wrapper>
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Čistota po práci
                                </p>
                            </Wrapper>
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Dodržujeme termíny
                                </p>
                            </Wrapper>
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Kvalitní termíny
                                </p>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper className="flex justify-center items-center flex-col gap-4 md:gap-6 lg:gap-8">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                            Jsme profesionální malíři a natěrači s více než 25letou zkušeností.
                        </h2>
                        <Wrapper className="flex justify-center items-center flex-col gap-4 md:gap-6 lg:gap-8 text-center max-w-3xl">
                            <p className="text-sm md:text-[15px] lg:text-base">
                                Specializujeme se na malířské a natěračské práce všech typů - od bytů a domů až po firmy a komerční prostory. Působíme především v Brně a celém Jihomoravském kraji.
                            </p>
                            <p className="text-sm md:text-[15px] lg:text-base">
                                Dbáme na čistotu, kvalitní materiály a precizní výsledek. Ke každému projektu přistupujeme individuálně, s důrazem na detail a dlouhou životnost nátěru.
                            </p>
                            <p className="text-sm md:text-[15px] lg:text-base">
                                Rádi vám zdarma poradíme s výběrem vhodného řešení a připravíme nezávaznou cenovou nabídku. Stačí nás kontaktovat - na všechny práce poskytujeme záruku.
                            </p>
                        </Wrapper>
                        <NoProofLink
                        href="realizace"
                        className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] text-white text-center w-full rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "realizace");
                        }}>
                            Prohlédnout realizace
                        </NoProofLink>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    )
};

export default About;