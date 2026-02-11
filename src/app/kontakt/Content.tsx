import {
    Fragment
} from "react";

import Wrapper from "../../../components/Wrapper";
import ContactHeader from "../../../components/ContactHeader";
import Header from "../../../components/Header";
import PathLink from "../../../components/PathLink";
import Flex from "../../../components/Flex";
import ContactInfo from "../../../components/ContactInfo";
import Facebook from "../../../components/Facebook";
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
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/80 shadow-md"
            id="kontakt">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                siteHref="/kontakt"
                siteLink="Kontakt"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                {/* <PageLabel pageLabelText="Kontakt" /> */}
                <Flex>
                    <ContactInfo />
                    <Facebook />
                </Flex>
            </Wrapper>
            <References />
            <WhyUs />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;