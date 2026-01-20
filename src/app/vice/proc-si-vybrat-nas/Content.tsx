"use client";

import {
    Fragment
} from "react";
import {
    CheckCircleIcon
} from "@heroicons/react/24/solid";
import {
    usePathname
} from "next/navigation";
import Image from "next/image";

import Wrapper from "../../../../components/Wrapper";
import ContactHeader from "../../../../components/ContactHeader";
import Header from "../../../../components/Header";
import PathLink from "../../../../components/PathLink";
import PageLabel from "../../../../components/pageLabel";
import FlexRow from "../../../../components/FlexRow";
import FlexCol from "../../../../components/FlexCol";
import Flex from "../../../../components/Flex";
import References from "../../../../sections/References";
import Contact from "../../../../sections/Contact";
import Footer from "../../../../components/Footer";

const Content = () => {
    const pathName = usePathname();

    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffc117]/92 shadow-md"
            id="proc-si-vybrat-nas">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                siteHref={pathName}
                siteLink="Proč si vybrat nás"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Proč si vybrat nás" />
                <FlexRow className="justify-start">
                    <FlexCol>
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-3xl">
                            Profesionální služby, Konzultace, zaměření a rozpočty zdarma
                        </h2>
                        <Wrapper className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {
                            [
                                {
                                    heading: "Velký počet poskytovaných služeb",
                                    desc: "provádíme veškeré malířské a natěračské práce."
                                },
                                {
                                    heading: "28 let odborné praxe",
                                    desc: "profesionální přístup, vysoká kvalita služeb."
                                },
                                {
                                    heading: "Velký počet spokojených zákazníků",
                                    desc: "Pevná cena, čistá práce, dodržíme termíny."
                                },
                                {
                                    heading: "Vždy spolehlivé a dostupné ceny",
                                    desc: "Do 24 hodin vypracovaná férová cenová nabídka."
                                }
                            ].map((cardItem, cardItemIndex) => {
                                return (
                                    <Fragment key={cardItemIndex}>
                                        <FlexCol>
                                            <Flex className="mt-4 md:mt-6 lg:mt-8">
                                                <CheckCircleIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#a11106]" />
                                                <h3 className="text-xl md:text-2xl lg:text-[26px] font-bold">
                                                    {cardItem.heading}
                                                </h3>
                                            </Flex>
                                            <p className="text-[15px] md:text-base lg:text-[17px]">
                                                {cardItem.desc}
                                            </p>
                                        </FlexCol>
                                    </Fragment>
                                );
                            })
                        }
                    </Wrapper>
                    </FlexCol>
                    <Wrapper className="relative w-full md:max-w-200">
                        <Wrapper className="w-40 max-w-50 h-40 max-h-50 absolute top-0 left-0 bg-[#a11106]">
                            <p className="mt-4 text-center text-xl md:text-xl lg:text-[28px] text-white font-extrabold">
                                28 let zkušeností
                            </p>
                        </Wrapper>
                        <Image
                        width={800}
                        height={800}
                        src="/Fotky/proc-si-vybrat-nas.jpg"
                        alt="Profi Malby Petr Lejska - Proč si vybrat nás fotka auta"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="w-full md:max-w-200"
                        />
                    </Wrapper>
                </FlexRow>
            </Wrapper>
            <References />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;