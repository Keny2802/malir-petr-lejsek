import {
    Fragment
} from "react";
import {
    CheckCircleIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/pageLabel";
import FlexRow from "../components/FlexRow";
import FlexCol from "../components/FlexCol";
import Flex from "../components/Flex";
import Icon from "../components/Icon";

const WhyUs = () => {
    return (
        <Fragment>
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/80 shadow-md"
            id="proc-si-vybrat-nas">
                <PageLabel pageLabelText="Proč si vybrat nás" />
                <FlexRow className="justify-start">
                    <FlexCol>
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold max-w-3xl">
                            Profesionální služby, Konzultace, zaměření a rozpočty zdarma
                        </h2>
                        <Wrapper className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {
                            [
                                {
                                    heading: "Velký počet poskytovaných služeb",
                                    desc: "Provádíme veškeré malířské a natěračské práce."
                                },
                                {
                                    heading: "28 let odborné praxe",
                                    desc: "Profesionální přístup, vysoká kvalita služeb."
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
                                                <Wrapper>
                                                    <Icon>
                                                        <CheckCircleIcon className="text-[#a11106]" />
                                                    </Icon>
                                                </Wrapper>
                                                <h3 className="text-lg md:text-xl lg:text-[22px] font-bold text-center">
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
                        <Wrapper className="min-h-20 p-2.5 md:p-3 lg:p-4 absolute top-0 left-0 bg-[#a11106] flex justify-center items-center">
                            <p className="mt-4 text-center text-xl md:text-xl lg:text-[28px] text-white font-extrabold">
                                28 let zkušeností
                            </p>
                        </Wrapper>
                        <Image
                        width={800}
                        height={800}
                        src="/Fotky/proc-si-vybrat-nas/proc-si-vybrat-nas.avif"
                        alt="Profi Malby Petr Lejska - Proč si vybrat nás"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="w-full md:max-w-200"
                        />
                    </Wrapper>
                </FlexRow>
            </Wrapper>
        </Fragment>
    );
};

export default WhyUs;