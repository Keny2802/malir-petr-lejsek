import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface FlexColType {
    className?: string;
    children?: ReactNode;
};

const FlexCol = ({ ...props }: FlexColType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} flex flex-col gap-2 md:gap-3 lg:gap-4`)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default FlexCol;