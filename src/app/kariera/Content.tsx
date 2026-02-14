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
import FixedCta from "../../../components/FixedCta";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Wrapper
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#ffd24d]/80 shadow-md"
            id="cenik">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                siteHref="/kariera"
                siteLink="Kariéra"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Kariéra" />
                <Wrapper>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        Hledáme vyučeného malíře - natěrače s praxí, krátký životopis zasílejte na e-mail info@profimalby.cz.
                    </h2>
                </Wrapper>
            </Wrapper>
            <References />
            <WhyUs />
            <Contact />
            <Footer />
            <FixedCta />
        </Fragment>
    );
};

export default Content;