"use client";

import {
    useState,
    Fragment
} from "react";
import {
    headerSet
} from "../sets/headerSet";
import {
    usePathname
} from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import PageLabel from "./pageLabel";
import ContactInfo from "./ContactInfo";
import Facebook from "./Facebook";

const DYNAMIC_YEAR = new Date().getFullYear();

const Footer = () => {
    const [isActiveLink, setActiveLink] = useState<string>("");
    const pathName = usePathname();

    return (
        <Fragment>
            <Wrapper
            className="border-t border-gray-300 bg-[#ffd24d]/92 shadow-m"
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
                                            <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                                                {
                                                    headerItem.href && (
                                                        pathName === "/" ? (
                                                            <Link
                                                            href={headerItem.href!}
                                                            className={clsx(`${isActiveLink === headerItem.href && "relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0.5_1] text-[#a11106]"} text-base md:text-[17px] lg:text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#a11106]`)}
                                                            onClick={(e) => {
                                                                setLinkWithoutHash(e, headerItem.href!);
                                                            }}>
                                                                {headerItem.link}
                                                            </Link>
                                                        ) : (
                                                            <Link
                                                            href={`/#${headerItem.href}`}
                                                            className={clsx(`${isActiveLink === headerItem.href && "relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0.5_1] text-[#a11106]"} text-base md:text-[17px] lg:text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#a11106]`)}>
                                                                {headerItem.link}
                                                            </Link>
                                                        )
                                                    )
                                                }
                                            </li>
                                        </Fragment>
                                    ))
                                }
                            </ul>
                        </Wrapper>
                        <Wrapper id="kontaktni-informace">
                            <p className="mb-2 md:mb-2.5 lg:mb-3 text-xl md:text-[22px] lg:text-[25px] text-[#a11106] font-bold uppercase">
                                Kontakt
                            </p>
                            <ContactInfo />
                        </Wrapper>
                        <Facebook />
                    </Wrapper>
                </Wrapper>
                <Wrapper className="p-4 md:p-6 lg:p-8 mt-4 md:mt-6 lg:mt-8 flex justify-center items-center flex-col gap-2 text-center font-medium">
                    <p className="text-[15px] md:text-base lg:text-lg">
                        PROFI MALBY Petr Lejska, {DYNAMIC_YEAR}, Všechna Práva vyhrazena.
                    </p>
                    <Wrapper className="flex items-center gap-2">
                        <p className="text-[15px] md:text-base lg:text-lg">
                            Web vytvořil
                        </p>
                        <Link
                        href="https://vojtaoliva.cz"
                        target="_blank"
                        className="transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                            Vojta Oliva,
                        </Link>
                        <Link
                        href="mailto:info@vojtaoliva.cz"
                        target="_blank"
                        className="transition-colors duration-300 ease-in-out hover:text-[#a11106]">
                            info@vojtaoliva.cz
                        </Link>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;