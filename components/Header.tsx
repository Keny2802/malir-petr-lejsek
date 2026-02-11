"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    DevicePhoneMobileIcon,
    Bars3Icon,
    MinusIcon
} from "@heroicons/react/24/solid";
import {
    headerSet
} from "../sets/headerSet";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
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
                    setActiveLink(`#${targetID}`);
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

    useEffect(() => {
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
            className={clsx(`p-4 md:p-5 lg:p-6 ${isHeaderScrolled && "fixed top-0 left-0"} bg-[#f8c73c] shadow-md w-full z-40 border-b-3 border-black transition-all duration-500 ease-in-out header`)}
            id="header">
                <Wrapper className="flex justify-between items-center gap-2 md:gap-4 lg:gap-6">
                    <Logo />
                    <ul className="hidden lg:flex justify-center items-center xl:flex-wrap gap-2 md:gap-4 lg:gap-6 header-list">
                        {
                            headerSet.map((headerItem, headerItemIndex) => (
                                <Fragment key={headerItemIndex}>
                                    <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                                        {
                                            headerItem.href && (
                                                pathName === "/" ? (
                                                    <Link
                                                    href={headerItem.href!}
                                                    className={clsx(`${isActiveLink === headerItem.href && "relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0.5_1] text-[#a11106]"} text-[15px] font-medium transition-colors duration-300 ease-in-out hover:text-[#a11106]`)}
                                                    onClick={(e) => {
                                                        setLinkWithoutHash(e, headerItem.href!);
                                                        setMobileMenuClicked(false);
                                                    }}>
                                                        {headerItem.link}
                                                    </Link>
                                                ) : (
                                                    <Link
                                                    href={`/#${headerItem.href}`}
                                                    className={clsx(`${isActiveLink === headerItem.href && "relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0.5_1] text-[#a11106]"} text-[15px] font-medium transition-colors duration-300 ease-in-out hover:text-[#a11106]`)}>
                                                        {headerItem.link}
                                                    </Link>
                                                )
                                            )
                                        }
                                        {
                                        headerItem.pageLink && (
                                            // <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                                                <Link
                                                href={headerItem.pageHref!}
                                                className="text-[15px] font-medium transition-colors duration-300 ease-in-out hover:text-[#a11106]"
                                                onClick={(e) => {
                                                    setMobileMenuClicked(false);
                                                }}
                                                >
                                                    {headerItem.pageLink !== "Kariéra" &&
                                                    headerItem.pageLink !== "GDPR" && headerItem.pageLink !== "Nastavení cookies"
                                                    && headerItem.pageLink}
                                                </Link>
                                            // </li>
                                        )
                                    }
                                    </li>
                                </Fragment>
                            ))
                        }
                        <Wrapper className="group relative right-[20px] text-[15px] font-medium cursor-pointer">
                            Více
                            <ul className="z-100 w-60 max-w-100 absolute top-full right-0 p-2 md:p-2.5 lg:p-3 mt-1 md:mt-1.5 lg:mt-2 bg-white shadow-md rounded-md scale-y-0 group-hover:scale-y-100 origin-top duration-200">
                                {
                                    [
                                        {
                                            href: "/vice/malovani-obyvaciho-pokoje",
                                            link: "Malování obývacího pokoje"
                                        },
                                        {
                                            href: "/vice/malovani-detskeho-pokoje",
                                            link: "Malování dětského pokoje"
                                        },
                                        {
                                            href: "/vice/malovani-kuchyne",
                                            link: "Malování kuchyně"
                                        },
                                        {
                                            href: "/vice/malovani-loznice",
                                            link: "Malování ložnice"
                                        },
                                        {
                                            href: "/sluzby/malovani-na-klic",
                                            link: "Malování na klíč"
                                        },
                                        {
                                            href: "/vice/uklid-po-malovani",
                                            link: "Úklid po malování"
                                        },
                                        {
                                            href: "/sluzby/natery-fasad",
                                            link: "Nátěry Fasád"
                                        },
                                        {
                                            href: "/sluzby/natery-strech",
                                            link: "Nátěry střech"
                                        },
                                        {
                                            href: "/vice/nater-dveri",
                                            link: "Nátěr dvěří"
                                        },
                                        {
                                            href: "/vice/nater-oken",
                                            link: "Nátěr oken"
                                        },
                                        {
                                            href: "/sluzby/nastrik-radiatoru",
                                            link: "Nástřik radiátorů"
                                        },
                                        {
                                            href: "/kariera",
                                            link: "Kariéra"
                                        }
                                    ].map((link, linkIndex) => {
                                        return (
                                            <Fragment key={linkIndex}>
                                                <li className="mt-1 md:mt-1.5 lg:mt-2 border-b border-gray-200 last:border-none last:uppercase last:text-[#a11106] drop-down-menu-item">
                                                    <Link
                                                    href={link.href}
                                                    className="transition-colors duration-300 ease-in-out hover:text-[#a11106] drop-down-menu-link">
                                                        {link.link}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        );
                                    })
                                }
                            </ul>
                        </Wrapper>
                    </ul>
                    {/* <Link
                    href="/kariera"
                    className="hidden md:inline-block text-[15px] font-medium transition-colors duration-300 ease-in-out hover:text-[#a11106]"
                    >
                        Kariéra
                    </Link> */}
                    <Link
                    href="tel:+420603243852"
                    className="p-2 md:p-3 lg:p-4 hidden lg:flex justify-between items-center flex-wrap gap-2 md:gap-3 lg:gap-4 bg-[#a11106] text-white font-medium rounded-md">
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
                                <Bars3Icon
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