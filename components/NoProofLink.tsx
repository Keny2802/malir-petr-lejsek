"use client";

import React, {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";
import Link from "next/link";

interface NoProofLinkProps {
    attributes?: React.HTMLAttributes<HTMLAnchorElement>;
    className?: string;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    children?: ReactNode;
};

const NoProofLink = ({ ...props }: NoProofLinkProps) => {
    const {
        attributes,
        className,
        href,
        onClick,
        children
    } = props;

    return (
        <Fragment>
            <Link
            {...attributes}
            href={`#${href}`}
            className={clsx(`${className || ""} no-proof-link`)}
            onClick={onClick}
            >
                {children}
            </Link>
        </Fragment>
    );
};

export default NoProofLink;