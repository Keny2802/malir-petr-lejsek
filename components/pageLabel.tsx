import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type pageLabelProps = {
    className?: string;
    pageLabelAdditContent?: ReactNode | null;
    pageLabelText: string;
    pageLabelTextClassName?: string;
    children?: ReactNode | null;
};

const PageLabel = ({ ...props }: pageLabelProps) => {
    const {
        className,
        pageLabelAdditContent,
        pageLabelText,
        pageLabelTextClassName,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`
            ${className || ""}
            ${String(className).includes("text-") || String(className).includes("text-[") ? className : "text-[#a11106]"}
            ${String(className).includes("text-") || String(className).includes("text-[") ? className : "text-xl md:text-[22px] lg:text-[25px]"}
            ${String(className).includes("font-") ? className : "font-bold"}
            ${String(className).includes("mb-") ? className : "mb-6"}
            ${String(className).includes("p-") || String(className).includes("px-") || String(className).includes("py-") ? className : "px-4 py-3"}
                rounded-full`)}>
                <p className={clsx(`${pageLabelTextClassName || ""} ${pageLabelAdditContent ? "flex items-center gap-2" : null} page-label-text`)}>
                    {pageLabelAdditContent}
                    {pageLabelText}
                </p>
            </Wrapper>
        </Fragment>
    );
};

export default PageLabel;