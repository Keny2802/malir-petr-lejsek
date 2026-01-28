"use client";

import {
    useEffect,
    useState,
    Fragment
} from "react";
import {
    ChevronDoubleUpIcon,
    DevicePhoneMobileIcon,
    CheckCircleIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import NoProofLink from "../components/NoProofLink";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import FlexCol from "../components/FlexCol";
import Flex from "../components/Flex";
import Icon from "../components/Icon";

const Hero = () => {
    const [isWindowScrolled, setWindowScrolled] = useState<boolean>(false);

    useEffect(() => {
        const setWindowToScrolled = () => {
            if (window.scrollY > 10) {
                setWindowScrolled(true);
            } else {
                setWindowScrolled(false);
            };
        };

        window.addEventListener("scroll", setWindowToScrolled);

        return () => {
            window.removeEventListener("scroll", setWindowToScrolled);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper
            className="relative section"
            id="domu">
                <Image
                width={1000}
                height={1000}
                src="/Fotky/Hero (1).jpg"
                alt="Malby Petr Lejska Fotka Hero Sekce"
                loading="lazy"
                decoding="async"
                draggable={false}
                className="w-full min-h-[800px] object-cover"
                />
                <Wrapper className="p-2 md:p-3 lg:p-4 absolute inset-0 flex justify-center items-center flex-col gap-4 md:gap-6 lg:gap-8 text-white text-center rounded-md">
                    <Wrapper className="p-2 md:p-3 lg:p-4 bg-black/50 flex justify-center items-center flex-col gap-4 md:gap-6 lg:gap-8 rounded-md">
                        <h1 className="text-3xl md:text-[60px] lg:text-7xl font-extrabold md:max-w-7xl">
                            Profesionální malování interiérů, které změní váš domov k nepoznání
                        </h1>
                        <p className="text-xl md:text-[22px] lg:text-[26px] font-medium md:max-w-3xl">
                            Precizní práce, kvalitní materiály a čistý výsledek bez starostí. Postaráme se o vše - od přípravy až po finální úklid.
                        </p>
                    </Wrapper>
                    <Wrapper className="p-1 md:p-3 lg:p-4 flex justify-center items-center gap-2 md:gap-2.5 md:flex-row flex-col flex-wrap text-center w-full">
                        {
                            [
                            {
                                heading: "Zadejte poptávku",
                                desc: "Odpovíme do 24 hodin."
                            },
                            {
                                heading: "Schůzka na místě prací",
                                desc: "Konzultace, zaměření."
                            },
                            {
                                heading: "Nezávazná cenová nabídka",
                                desc: "Pevná cena, bez navýšení."
                            },
                            {
                                heading: "Domluvíme termín realizace",
                                desc: "Profesionální služby, dodržíme termíny."
                            }
                        ].map((cardItem, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Wrapper className="flex items-center gap-2 md:gap-2.5 p-1 md:p-3 lg:p-4 bg-black/50 w-full md:w-max rounded-md">
                                            <Wrapper>
                                                <Icon>
                                                    <CheckCircleIcon className="text-[#a11106]" />
                                                </Icon>
                                            </Wrapper>
                                            <Wrapper className="flex items-start gap-2 flex-col text-start">
                                                <h3 className="text-lg md:text-xl font-bold">
                                                    {cardItem.heading}
                                                </h3>
                                                <p className="text-[15px] md:text-base lg:text-[17px]">
                                                    {cardItem.desc}
                                                </p>
                                            </Wrapper>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                    <Wrapper className="p-4 md:p-5 lg:p-6 flex justify-center items-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
                        <NoProofLink
                        href="proc-si-vybrat-nas"
                        className="p-4 md:p-5 lg:p-6 flex justify-center items-center gap-2 md:gap-3 lg:gap-4 bg-white text-black text-base md:text-[17px] lg:text-lg font-medium text-center w-full md:w-75 rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "proc-si-vybrat-nas");
                        }}>
                            Proč si vybrat nás
                        </NoProofLink>
                        <NoProofLink
                        href="kontakt"
                        className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] text-white text-base md:text-[17px] lg:text-lg font-medium text-center w-full md:w-75 rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kontakt");
                        }}>
                            Nezávazná poptávka
                        </NoProofLink>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Wrapper className="z-100 fixed right-5 bottom-6 flex items-center flex-col gap-2 md:gap-3 lg:gap-4">
                {
                    isWindowScrolled && (
                        <Fragment>
                            <NoProofLink
                            href="contact-header"
                            className="p-2 md:p-3 lg:p-4 bg-[#1e1e1e] text-white rounded-full"
                            onClick={(e) => {
                                setLinkWithoutHash(e, "contact-header");
                            }}>
                                <ChevronDoubleUpIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            </NoProofLink>
                        </Fragment>
                    )
                }
                <Link
                href="tel:+420603243852"
                className="p-2 md:p-3 lg:p-4 bg-white text-black rounded-full">
                    <DevicePhoneMobileIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;