import {
    Fragment
} from "react";
import Link from "next/link";

import Wrapper from "../../components/Wrapper";
import Logo from "../../components/Logo";

const NotFound = () => {
    return (
        <Fragment>
            <Wrapper className="px-5 py-8 md:px-8 md:py-12 lg:px-10 lg:py-14 z-1100 fixed inset-0 flex justify-center items-center flex-col gap-2.5 md:gap-3 lg:gap-3.5 w-full h-screen bg-[#f8c73c] shadow-md">
                <Logo />
                <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-extrabold max-w-7xl">
                    Bohužel, tady nic není
                </h2>
                <p className="text-[15px] md:text-base lg:text-lg font-medium md:max-w-3xl">
                    Tato stránka neexistuje, doporučujeme se vrátit na domovskou stránku.
                </p>
                <Link
                href="/"
                className="p-3 md:p-4 lg:p-4.5 bg-[#1e1e1e] text-white text-center w-full md:w-75 rounded-md">
                    Vrátit se na úvod
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default NotFound;