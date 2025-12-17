"use client";

import {
    Fragment
} from "react";
import {
    headerSet
} from "../sets/headerSet";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import NoProofLink from "./NoProofLink";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import ContactInfo from "./ContactInfo";

const DYNAMIC_YEAR = new Date().getFullYear();

const Footer = () => {
    return (
        <Fragment>
            <Wrapper
            className="border-t border-gray-300 bg-[#e7e6e6] shadow-m"
            id="footer">
                <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14">
                    <Logo />
                    <Wrapper className="flex justify-evenly md:items-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                        <Wrapper className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                            <h3 className="text-xl md:text-[22px] lg:text-2xl font-semibold">
                                Nabídka
                            </h3>
                            <ul className="flex flex-col gap-2 header-list">
                                {
                                    headerSet.map((headerItem, headerItemIndex) => (
                                        <Fragment key={headerItemIndex}>
                                            <li className="header-item">
                                                <NoProofLink
                                                href={headerItem.href}
                                                className="text-base md:text-[17px] lg:text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#1e1e1e]"
                                                onClick={(e) => {
                                                    setLinkWithoutHash(e, headerItem.href!);
                                                }}
                                                >
                                                    {headerItem.link}
                                                </NoProofLink>
                                            </li>
                                        </Fragment>
                                    ))
                                }
                            </ul>
                        </Wrapper>
                        <ContactInfo />
                    </Wrapper>
                </Wrapper>
                <Wrapper className="pb-2 md:pb-3 lg:pb-4 mt-4 md:mt-6 lg:mt-8 flex justify-center items-center flex-col gap-2 font-medium">
                    <p className="text-[15px] md:text-base lg:text-lg">
                        PROFI MALBY Petr Lejska, {DYNAMIC_YEAR}, Všechna Práva vyhrazena.
                    </p>
                    <Wrapper className="flex items-center gap-2">
                        <p className="text-[15px] md:text-base lg:text-lg">
                            Web vytvořil
                        </p>
                        <Link
                        href="https://vojtaoliva.cz"
                        target="_blank">
                            Vojta Oliva,
                        </Link>
                        <Link
                        href="mailto:info@vojtaoliva.cz"
                        target="_blank">
                            info@vojtaoliva.cz
                        </Link>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;