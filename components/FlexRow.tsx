import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface FlexRowType {
    className?: string;
    children?: ReactNode;
};

const FlexRow = ({ ...props }: FlexRowType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} mt-4 md:mt-5 lg:mt-6 flex justify-center flex-col md:flex-row gap-4 md:gap-5 lg:gap-6`)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default FlexRow;