import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface FlexType {
    className?: string;
    children?: ReactNode;
};

const Flex = ({ ...props }: FlexType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx("flex items-center gap-2 md:gap-3 lg:gap-4", className)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Flex;