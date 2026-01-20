import {
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

interface pathLinkType {
    rootHref: string;
    rootLink: string;
    folderHref?: string;
    folderLink?: string;
    siteHref?: string;
    siteLink?: string;
    className?: string | "";
};

const PathLink = ({ ...props }: pathLinkType) => {
    const {
        rootHref,
        rootLink,
        folderHref,
        folderLink,
        siteHref,
        siteLink,
        className
    } = props;

    return (
        <Fragment>
            <ul className={clsx(`${className} flex items-center gap-2 md:gap-4 lg:gap-6 path-links-list`)}>
                <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] path-item">
                    <Link
                    href={rootHref}
                    className="transition-colors duration-300 ease-in-out hover:text-[#a11106] path-link">
                        {rootLink}
                    </Link>
                </li>
                {
                    folderHref && folderLink && (
                        <Fragment>
                            <span>
                                /
                            </span>
                            <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] path-item">
                                <Link
                                href={folderHref}
                                className="transition-colors duration-300 ease-in-out hover:text-[#a11106] path-link">
                                    {folderLink}
                                </Link>
                            </li>
                            <span>
                                /
                            </span>
                        </Fragment>
                    )
                }
                {
                siteHref && siteLink && (
                    <Fragment>
                        <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-full after:bg-[#a11106] after:scale-[0_1] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-[1_1] path-item">
                            <Link
                            href={siteHref}
                            className="transition-colors duration-300 ease-in-out hover:text-[#a11106] path-link">
                                {siteLink}
                            </Link>
                        </li>
                    </Fragment>
                )
                }
            </ul>
        </Fragment>
    );
};

export default PathLink;