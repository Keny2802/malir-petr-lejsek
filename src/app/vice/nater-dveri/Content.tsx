"use client";

import {
    useState,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";

import Wrapper from "../../../../components/Wrapper";
import ContactHeader from "../../../../components/ContactHeader";
import Header from "../../../../components/Header";
import PathLink from "../../../../components/PathLink";
import PageLabel from "../../../../components/pageLabel";
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
            className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 bg-[#f8c73c]/92 shadow-md"
            id="nater-dveri">
                <PathLink
                rootHref="/"
                rootLink="Domov"
                folderHref="/vice"
                folderLink="Více"
                siteHref={pathName}
                siteLink="Nátěr dveří"
                className="mb-2 md:mb-4 lg:mb-6"
                />
                <PageLabel pageLabelText="Nátěr dveří" />
            </Wrapper>
            <References />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;