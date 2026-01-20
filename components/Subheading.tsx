import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

interface SubheadingType {
    className?: string;
    children?: ReactNode;
};

const Subheading = ({ ...props }: SubheadingType) => {
    const {
        className,
        children
    } = props;
    return (
        <Fragment>
            <p className={clsx(`${className || ""} text-base md:text-[17px] lg:text-lg text-center max-w-3xl`)}>
                {children}
            </p>
        </Fragment>
    );
};

export default Subheading;