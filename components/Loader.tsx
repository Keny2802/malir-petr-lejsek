import {
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface loaderType {
    className?: string;
    width: string;
    height: string;
    mediumWidth: string;
    mediumHeight: string;
    largeWidth: string;
    largeHeight: string;
};

const Loader = ({ ...props }: loaderType) => {
    const {
        className,
        width,
        height,
        mediumWidth,
        mediumHeight,
        largeWidth,
        largeHeight
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`
            ${className || ""}
            ${width}
            ${height}
            md:${mediumWidth}
            md:${mediumHeight}
            lg:${largeWidth}
            lg:${largeHeight}
            border-4 border-t-transparent border-[#a11106] rounded-full animate-spin`)}></Wrapper>
        </Fragment>
    );
};

export default Loader;