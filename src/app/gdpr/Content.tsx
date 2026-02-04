"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";

import Wrapper from "../../../components/Wrapper";
import Header from "../../../components/Header";
import PathLink from "../../../components/PathLink";
import PageLabel from "../../../components/pageLabel";
import FlexRow from "../../../components/FlexRow";
import FlexCol from "../../../components/FlexCol";
import References from "../../../sections/References";
import WhyUs from "../../../sections/WhyUs";
import Contact from "../../../sections/Contact";
import Footer from "../../../components/Footer";

const Content = () => {
    const pathName = usePathname();

    return (
        <Fragment>
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/92 shadow-md"
            id="uklid-po-malovani">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                siteHref={pathName}
                siteLink="GDPR"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="GDPR - ochrana osobních údajů" />
                <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                    {
                        [
                            {
                                title: "Správce osobních údajů",
                                content: "Správcem osobních údajů je PROFI MALBY Lejska Petr, IČ: 68 01 36 63, se sídlem Kroupova 180/56 625 00 Brno-Starý Lískovec."
                            },
                            {
                                title: "Jaké osobní údaje zpracováváme",
                                content: "Zpracováváme osobní údaje, které nám sami poskytnete, zejména jméno, e-mail, telefon, případně další údaje uvedené ve formuláři."
                            },
                            {
                                title: "Za jakým účelem údaje zpracováváme",
                                content: "Osobní údaje zpracováváme za účelem vyřízení vašeho dotazu nebo poptávky."
                            },
                            {
                                title: "Doba zpracování",
                                content: "Osobní údaje uchováváme po dobu nezbytně nutnou k vyřízení dotazu, maximálně však 1 rok."
                            },
                            {
                                title: "Příjemci osobních údajů",
                                content: "Osobní údaje mohou být zpracovávány třetími stranami, např. poskytovateli webhostingu nebo analytických nástrojů."
                            },
                            {
                                title: "Vaše práva",
                                content: "Máte právo na přístup ke svým osobním údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost údajů a podat stížnost u Úřadu pro ochranu osobních údajů."
                            },
                            {
                                title: "Kontakt",
                                content: "V případě dotazů nás můžete kontaktovat na e-mailu: info@profimalby.cz."
                            }
                        ].map((card, index) => {
                            return (
                                <Fragment>
                                    <Wrapper
                                    key={index}>
                                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                                            {index + 1}) {card.title}
                                        </h3>
                                        <p className="text-[15px] md:text-base lg:text-[16.5px]">
                                            {card.content}
                                        </p>
                                    </Wrapper>
                                </Fragment>
                            );
                        })
                    }
                </Wrapper>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    
                </h3>
            </Wrapper>    
            <References />
            <WhyUs />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;