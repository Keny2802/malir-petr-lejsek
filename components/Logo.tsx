"use client";

import {
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface LogoProps {
    className?: string;
    linkClassName?: string;
    imageClassName?: string;
};

const Logo = ({ ...props }: LogoProps) => {
    const pathname = usePathname();
    const isHome = pathname === "/";

    const {
        className,
        linkClassName,
        imageClassName
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className} logo-wrapper`)}>
                <Link
                href={isHome ? "" : "/"}
                className={clsx(`text-lg md:text-xl lg:text-2xl font-medium ${linkClassName}`)}>
                    <Image
                    height={180}
                    width={180}
                    src="/Fotky/Clean Logo.png"
                    alt="Malby Petr Lejska | Malíř Petr Lejska Logo"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className={clsx(`${imageClassName}`)}
                    />
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default Logo;