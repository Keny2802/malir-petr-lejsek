import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface iconType {
    className?: string;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Icon = ({ ...props }: iconType) => {
    const {
        className,
        children,
        onClick
    } = props;

    return (
        <Fragment>
            <Wrapper
            className={clsx(`${className || ""} w-6 h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7`)}
            onClick={onClick}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Icon;