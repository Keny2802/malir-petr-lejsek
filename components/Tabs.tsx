import {
    useState,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

interface tabsType {
    className?: string;
    tabs: string[];
    activeIndex: number | null;
    setActiveIndex: (index: number) => void;
    setActiveTabString: (activeTab: string) => void;
};

const Tabs = ({ ...props }: tabsType) => {

    const {
        className,
        tabs,
        activeIndex,
        setActiveIndex,
        setActiveTabString
    } = props;
    
    return (
        <Fragment>
            <Wrapper className={clsx(`${className} flex items-center gap-2 md:gap-3 lg:gap-4`)}>
                {
                    tabs.map((tab, tabIndex) => (
                        <Wrapper
                        className={clsx(`
                        ${activeIndex === tabIndex ? "bg-[#1e1e1e] text-white" : "bg-[#e7e6e6]"}
                        p-3 md:p-4 lg:p-5 rounded-md cursor-pointer transition-colors duration-100 ease-in-out
                        `)}
                        onClick={(e) => {
                            setActiveIndex(tabIndex);
                            setActiveTabString(tab);
                        }}
                        key={tabIndex}>
                            <p className="text-sm md:text-[15px] lg:text-base">
                                {tab}
                            </p>
                        </Wrapper>
                    ))
                }
            </Wrapper>
        </Fragment>
    );
};

export default Tabs;