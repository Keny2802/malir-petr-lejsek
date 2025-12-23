"use client";

import {
    useEffect,
    useState,
    Fragment
} from "react";
import {
    CalculatorIcon,
    ChevronDoubleUpIcon,
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import NoProofLink from "../components/NoProofLink";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

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
                className="w-full object-cover"
                />
                <Wrapper className="p-2 md:p-3 lg:p-4 absolute inset-0 flex justify-center items-center flex-col gap-4 md:gap-6 lg:gap-8 text-white text-center">
                    <h1 className="text-3xl md:text-[60px] lg:text-7xl font-extrabold md:max-w-7xl">
                        Profesionální malování interiérů, které změní váš domov k nepoznání
                    </h1>
                    <p className="text-xl md:text-[22px] lg:text-[26px] font-medium md:max-w-3xl">
                        Precizní práce, kvalitní materiály a čistý výsledek bez starostí. Postaráme se o vše - od přípravy až po finální úklid.
                    </p>
                    <Wrapper className="flex justify-center items-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
                        <NoProofLink
                        href="kalkulace"
                        className="p-4 md:p-5 lg:p-6 flex justify-center items-center gap-2 md:gap-3 lg:gap-4 bg-white text-black text-center w-full md:w-75 rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kalkulace");
                        }}>
                            <CalculatorIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer" />
                            Nezávazná kalkulace
                        </NoProofLink>
                        <NoProofLink
                        href="realizace"
                        className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] text-white text-center w-full md:w-75 rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "realizace");
                        }}>
                            Prohlédnout realizace
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
                                <ChevronDoubleUpIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                            </NoProofLink>
                        </Fragment>
                    )
                }
                <Link
                href="tel:+420603243852"
                className="p-2 md:p-3 lg:p-4 bg-white text-black rounded-full">
                    <DevicePhoneMobileIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;