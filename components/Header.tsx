"use client";

import {
    useState,
    useEffect,
    useLayoutEffect,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    DevicePhoneMobileIcon,
    Bars2Icon,
    MinusIcon
} from "@heroicons/react/24/solid";
import {
    headerSet
} from "../sets/headerSet";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import NoProofLink from "./NoProofLink";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const [isHeaderScrolled, setHeaderScrolled] = useState<boolean>(false);
    const [isMobileMenuClicked, setMobileMenuClicked] = useState<boolean>(false);
    const [isActiveLink, setActiveLink] = useState<string>("");
    const pathName = usePathname();

    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target;
                const targetID = target.id;

                if (entry.isIntersecting) {
                    setActiveLink(targetID);
                };
            });
        }, {
            threshold: 0.5
        });

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useLayoutEffect(() => {
        const setHeaderToScrolled = () => {
            if (window.scrollY > 0) {
                setHeaderScrolled(true);
            } else {
                setHeaderScrolled(false);
            };
        };

        window.addEventListener("scroll", setHeaderToScrolled);

        return () => {
            window.removeEventListener("scroll", setHeaderToScrolled);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper
            className={clsx(`p-4 md:p-5 lg:p-6 ${isHeaderScrolled && "fixed top-0 left-0"} bg-white shadow-md border-t border-gray-200 w-full z-40 transition-all duration-500 ease-in-out header`)}
            id="header">
                <Wrapper className="flex justify-between items-center gap-2 md:gap-4 lg:gap-6">
                    <Logo />
                    <ul className="hidden lg:flex justify-center items-center gap-2 md:gap-4 lg:gap-6 header-list">
                        {
                            headerSet.map((headerItem, headerItemIndex) => (
                                <Fragment key={headerItemIndex}>
                                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                                        <NoProofLink
                                        href={headerItem.href}
                                        className={clsx(`${isActiveLink === headerItem.href && "relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0.5_1] text-[#a11106]"} text-base md:text-[17px] lg:text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#a11106]`)}
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, headerItem.href!);
                                            setMobileMenuClicked(false);
                                        }}
                                        >
                                            {
                                            pathName === "/" ? headerItem.link : 
                                            headerItem.link !== "Domů" &&
                                            headerItem.link !== "O nás" &&
                                            headerItem.link !== "Realizace" &&
                                            headerItem.link !== "Ceník" && headerItem.link
                                            }
                                        </NoProofLink>
                                    </li>
                                    {
                                        headerItem.pageLink && (
                                            <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                                        <Link
                                            href={headerItem.pageHref!}
                                            className="text-base md:text-[17px] lg:text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#a11106]"
                                            onClick={(e) => {
                                                setMobileMenuClicked(false);
                                            }}
                                            >
                                                {headerItem.pageLink}
                                            </Link>
                                        </li>
                                        )
                                    }
                                </Fragment>
                            ))
                        }
                    </ul>
                    <Link
                    href="tel:+420603243852"
                    className="p-2 md:p-3 lg:p-4 hidden lg:flex justify-between items-center gap-2 md:gap-3 lg:gap-4 bg-[#1e1e1e] text-white font-semibold rounded-md">
                        <DevicePhoneMobileIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                        +420 603 243 852
                    </Link>
                    {
                        isMobileMenuClicked ? (
                            <Fragment>
                                <MinusIcon
                                className="lg:hidden w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer"
                                onClick={(e) => {
                                    setMobileMenuClicked(false);
                                }}
                                />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Bars2Icon
                                className="lg:hidden w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer"
                                onClick={(e) => {
                                    setMobileMenuClicked(true);
                                }}
                                />
                            </Fragment>
                        )
                    }
                </Wrapper>
            </Wrapper>
            <MobileMenu
            isMobileMenuClicked={isMobileMenuClicked}
            setMobileMenuClicked={setMobileMenuClicked}
            />
        </Fragment>
    );
};

export default Header;