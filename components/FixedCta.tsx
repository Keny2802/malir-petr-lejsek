"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    ChevronDoubleUpIcon,
    DevicePhoneMobileIcon
} from "@heroicons/react/24/solid";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Link from "next/link";

import Wrapper from "./Wrapper";
import NoProofLink from "./NoProofLink";

const FixedCta = () => {
    const [isWindowScrolled, setWindowScrolled] = useState<boolean>(false);
    
    useEffect(() => {
        const setWindowToScrolled = () => {
            if (window.scrollY > 10) {
                setWindowScrolled(true);
            } else {
                setWindowScrolled(false);
            };
        };

        window.addEventListener("scroll", setWindowToScrolled);

        return () => {
            window.removeEventListener("scroll", setWindowToScrolled);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper className="z-100 fixed right-5 bottom-6 flex items-center flex-col gap-2 md:gap-3 lg:gap-4">
                {
                    isWindowScrolled && (
                        <Fragment>
                            <NoProofLink
                                href="contact-header"
                                className="p-2 md:p-3 lg:p-4 bg-[#1e1e1e] text-white rounded-full"
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "contact-header");
                                }}>
                                <ChevronDoubleUpIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            </NoProofLink>
                        </Fragment>
                    )
                }
                <Link
                    href="tel:+420603243852"
                    className="p-2 md:p-3 lg:p-4 bg-white text-black rounded-full">
                    <DevicePhoneMobileIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default FixedCta;