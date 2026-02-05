"use client";

import {
    useRef,
    useEffect,
    Fragment
} from "react";
import {
    CheckCircleIcon
} from "@heroicons/react/24/solid";
import {
    gsap
} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/pageLabel";
import NoProofLink from "../components/NoProofLink";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
                start: "top 45%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d] shadow-md section"
            id="o-nas"
            // ref={animationRef}
            >
                <PageLabel pageLabelText="O nás" />
                <Wrapper className="flex justify-between items-center flex-col md:flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 w-full">
                    <Wrapper className="flex justify-center md:items-center flex-col gap-4 md:gap-6 lg:gap-8 w-full">
                        <Image
                        width={700}
                        height={700}
                        src="/Fotky/o-nas/o-nas.avif"
                        alt="Fotka sekce o nás, malíři jak pracují"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="rounded-md"
                        />
                        {/* <Wrapper className="py-4 md:py-6 lg:py-8 grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Zadáte poptávku
                                </p>
                            </Wrapper>
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Dorazíme v domluvený termín
                                </p>
                            </Wrapper>
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Profesionální služby
                                </p>
                            </Wrapper>
                            <Wrapper className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#4caf50]" />
                                <p className="text-base md:text-[17px] lg:text-lg font-medium">
                                    Čistota po práci
                                </p>
                            </Wrapper>
                        </Wrapper> */}
                    </Wrapper>
                    <Wrapper className="flex justify-center items-center flex-col gap-4 md:gap-6 lg:gap-8 w-full">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                            Jsme profesionální malíři a natěrači s více než 25letou zkušeností.
                        </h2>
                        <Wrapper className="flex justify-center items-center flex-col gap-4 md:gap-6 lg:gap-8 text-center max-w-3xl">
                            <p className="text-sm md:text-[15px] lg:text-base">
                                Specializujeme se na malířské a natěračské práce všech typů - od bytů a domů až po firmy a komerční prostory. Působíme především v Brně a celém Jihomoravském kraji.
                            </p>
                            <p className="text-sm md:text-[15px] lg:text-base">
                                Dbáme na čistotu, kvalitní materiály a dokonalý výsledek. Ke každému projektu přistupujeme individuálně, s důrazem na detail a dlouhou životností nátěru.
                            </p>
                            <p className="text-sm md:text-[15px] lg:text-base">
                                Rádi vám zdarma poradíme s výběrem vhodného řešení a připravíme nezávaznou cenovou nabídku. Stačí nás kontaktovat - na všechny práce poskytujeme záruku.
                            </p>
                        </Wrapper>
                        <NoProofLink
                        href="zakazky"
                        className="p-4 md:p-5 lg:p-6 bg-[#1e1e1e] text-white text-center w-full rounded-md"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "zakazky");
                        }}>
                            Prohlédnout zakázky
                        </NoProofLink>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    )
};

export default About;