import {
    Fragment
} from "react";

import Wrapper from "../../../components/Wrapper";
import ContactHeader from "../../../components/ContactHeader";
import Header from "../../../components/Header";
import PathLink from "../../../components/PathLink";
import PageLabel from "../../../components/pageLabel";
import References from "../../../sections/References";
import WhyUs from "../../../sections/WhyUs";
import Contact from "../../../sections/Contact";
import Footer from "../../../components/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/92 shadow-md"
            id="cenik">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                siteHref="/cenik"
                siteLink="Ceny / rozpočty"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Ceny / rozpočty" />
                <Wrapper>
                    <Wrapper className="mt-4 md:mt-6 lg:mt-8 flex justify-center items-center flex-col gap-2.5 md:gap-4">
                        <p className="text-[15px] md:text-base lg:text-lg font-medium">
                            Ke každé zakázce přistupuji individuálně. Nabízím nezávaznou osobní schůzku přímo na místě prací. Seznámím se s Vašimi představami, vše společně prokonzultujeme a navrhneme optimální řešení vedoucí k maximální spokojenosti. Cenovou nabídku za malířské práce či natěračské práce pro vás vypracuji zdarma a obdržíte ji obvykle do 48 hodin e-mailem nebo telefonicky.
                        </p>
                        <p className="text-[15px] md:text-base lg:text-lg font-medium">
                            {/* Konečná cena na se vypočítá dle, charakteru, rozsahu, použitého materiálu a konkrétního stavu ploch a prostor. */}
                            Konečná cena se vypočítá dle, konkrétního stavu ploch a malovaných prostor použitého materiálu, rozsahu a charakteru prací.
                        </p>
                        <p className="text-sm italic">
                            Petr Lejska
                        </p>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <References />
            <WhyUs />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;