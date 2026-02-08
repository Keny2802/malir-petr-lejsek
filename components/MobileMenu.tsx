import {
    useState,
    useEffect,
    Fragment,
    Activity
} from "react";
import {
    usePathname
} from "next/navigation";
import {
    DevicePhoneMobileIcon,
    PhoneIcon
} from "@heroicons/react/24/solid";
import {
    headerSet
} from "../sets/headerSet";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

interface componentProps {
    className?: string;
    isMobileMenuClicked: boolean;
    setMobileMenuClicked: (bool: boolean) => void;
};

const MobileMenu = ({ ...props }: componentProps) => {
    const [isActiveLink, setActiveLink] = useState<string>("");
    const dynamicYear = new Date().getFullYear();
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

    const {
        className,
        isMobileMenuClicked,
        setMobileMenuClicked,
    } = props;

    return (
        <Fragment>
            <Activity mode={isMobileMenuClicked ? "visible" : "hidden"}>
                <Fragment>
                    <Wrapper
                    className="fixed lg:hidden inset-0 z-50 bg-black/40"
                    onClick={(e) => {
                        setMobileMenuClicked(false);
                    }}></Wrapper>
                </Fragment>
            </Activity>
            <Wrapper className={clsx(`
            ${className || ""}
            ${isMobileMenuClicked ? "translate-x-0 lg:-translate-x-full" : "-translate-x-full"}
            p-4 fixed top-0 left-0 z-50 h-screen flex flex-col justify-between gap-2 md:gap-3 lg:gap-4 bg-[#f8c73c] max-w-75 transition-transform duration-500 ease-linear
            `)}>
                <Wrapper className="flex flex-col gap-4">
                    <Wrapper className="flex justify-between items-center gap-2">
                        <Logo className="text-white" />
                        <Link
                        href="https://www.facebook.com/profimalby"
                        rel="nofollow"
                        target="_blank">
                            <Image
                            height={20}
                            width={20}
                            src="/Fotky/Ikonky/Facebook.svg"
                            alt="Facebook ikonka"
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                            />
                        </Link>
                    </Wrapper>
                    <ul className="flex flex-col gap-3 text-black mobile-header-list">
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
                                                    {headerItem.pageLink}
                                                </Link>
                                            // </li>
                                            )
                                        }
                                    </li>
                                </Fragment>
                            ))
                        }
                        <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                            <Link
                            href="/kariera"
                            className="text-[15px] font-medium transition-colors duration-300 ease-in-out hover:text-[#a11106]"
                            >
                                Kariéra
                            </Link>
                        </li>
                        <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] header-item">
                            <Link
                            href="/cenik"
                            className="text-[15px] font-medium transition-colors duration-300 ease-in-out hover:text-[#a11106]"
                            >
                                Ceny / rozpočty
                            </Link>
                        </li>
                    </ul>
                    <Link
                    href="tel:+420603243852"
                    className="p-2 md:p-3 lg:p-4 flex justify-between items-center gap-2 md:gap-3 lg:gap-4 bg-[#1e1e1e] text-white font-semibold rounded-md">
                        <DevicePhoneMobileIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        +420 603 243 852
                    </Link>
                    <Link
                    href="tel:+420547211709"
                    className="p-2 md:p-3 lg:p-4 flex justify-between items-center gap-2 md:gap-3 lg:gap-4 bg-[#1e1e1e] text-white font-semibold rounded-md">
                        <PhoneIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        +420 547 211 709
                    </Link>
                </Wrapper>
                <p className="text-black text-center">
                    &copy;
                    {" "}
                    {dynamicYear}
                    {" "}
                    Malby Petr Lejsek.
                    Všechna práva vyhrazena.
                </p>
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;